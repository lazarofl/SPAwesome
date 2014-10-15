using NHibernate;
using NHibernate.Linq;
using SPAwesome.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SPAwesome.WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CategoryController : ApiController
    {
        private ISession _session;

        public CategoryController(ISession session)
        {
            _session = session;
        }

        // GET api/category
        public IEnumerable<Category> Get()
        {
            using (_session)
            {
                return _session.CreateCriteria<Category>().List<Category>();
            }
        }

        // GET api/category/5
        public Category Get(int id)
        {
            using (_session)
            {
                return _session.Get<Category>(id);
            }
        }

        // POST api/category
        public Category Post([FromBody]Category category)
        {
            var _category = new Category
            {
                Name = category.Name,
                Slug = category.Name.GenerateSlug()
            };

            using (_session.BeginTransaction())
            {
                var order = 0;

                //obtem dentro da transação o ultimo item
                var list = _session.CreateCriteria<Category>().List<Category>();

                if (list != null && list.Count > 0)
                    order = list.Max(x => x.Order);

                //a nova categoria vai para o final da lista
                _category.Order = ++order;

                _session.SaveOrUpdate(_category);
                _session.Transaction.Commit();
            }

            return _category;
        }

        // PUT api/category/5
        public Category Put(int id, [FromBody]Category category)
        {
            Category _category;
            using (_session.BeginTransaction())
            {
                _category = _session.Get<Category>(id);
                if (_category == null)
                    throw new KeyNotFoundException(string.Format("Categoria {0} não encontrada", id));

                _category.Name = category.Name;
                _category.Order = category.Order;
                _category.Slug = category.Name.GenerateSlug();

                _session.SaveOrUpdate(_category);

                _session.Transaction.Commit();
            }
            return _category;
        }

        // DELETE api/category/5
        public void Delete(int id)
        {
            using (_session.BeginTransaction())
            {
                var category = _session.Get<Category>(id);
                _session.Delete(category);

                _session.Transaction.Commit();
            }
        }

        [Route("category/{Id}/SubCategories")]
        public IEnumerable<SubCategory> GetSubCategories(int Id)
        {
            using (_session)
            {
                return _session.Get<Category>(Id).SubCategories;
            }

        }
    }
}
