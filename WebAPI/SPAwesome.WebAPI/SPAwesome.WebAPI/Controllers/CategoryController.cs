using NHibernate;
using SPAwesome.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SPAwesome.WebAPI.Controllers
{
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
        public void Post([FromBody]Category category)
        {
            var _category = new Category
            {
                Name = category.Name,
                Order = category.Order,
                Slug = category.Slug
            };

            using (_session.BeginTransaction())
            {
                _session.SaveOrUpdate(_category);

                _session.Transaction.Commit();
            }

        }

        // PUT api/category/5
        public void Put(int id, [FromBody]Category category)
        {
            using (_session.BeginTransaction())
            {
                var _category = _session.Get<Category>(id);
                if (_category == null)
                    throw new KeyNotFoundException(string.Format("Categoria {0} não encontrada", id));

                _category.Name = category.Name;
                _category.Order = category.Order;
                _category.Slug = category.Slug;

                _session.SaveOrUpdate(_category);

                _session.Transaction.Commit();
            }
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
