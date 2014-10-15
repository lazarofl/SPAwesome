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
    public class SubCategoryController : ApiController
    {
        private ISession _session;

        public SubCategoryController(ISession session)
        {
            _session = session;
        }

        // GET api/category
        public IEnumerable<SubCategory> Get(string categoryslug)
        {
            using (_session)
            {
                return _session.Query<SubCategory>()
                    .Where(x=>x.Category.Slug == categoryslug)
                    .ToList<SubCategory>();
            }
        }

        // GET api/category/5
        public SubCategory Get(string categoryslug, int id)
        {
            using (_session)
            {
                return _session.Get<SubCategory>(id);
            }
        }

        // POST api/category
        public SubCategory Post(string categoryslug, [FromBody]SubCategory subcategory)
        {
            var _category = _session.Query<Category>().Where(x => x.Slug == categoryslug).First();

            var _subcategory = new SubCategory
            {
                Category = _category,
                Name = subcategory.Name,
                Slug = subcategory.Name.GenerateSlug()
            };

            using (_session.BeginTransaction())
            {
                var order = 0;

                //obtem dentro da transação o ultimo item
                var list = _session.Query<SubCategory>()
                    .Where(x => x.Category.Slug == categoryslug)
                    .ToList<SubCategory>();

                if (list != null && list.Count > 0)
                    order = list.Max(x => x.Order);

                //a nova categoria vai para o final da lista
                _subcategory.Order = ++order;

                _session.SaveOrUpdate(_subcategory);
                _session.Transaction.Commit();
            }

            return _subcategory;
        }

        // PUT api/category/5
        public SubCategory Put(string categoryslug, int id, [FromBody]SubCategory subcategory)
        {
            SubCategory _subcategory;
            using (_session.BeginTransaction())
            {
                _subcategory = _session.Get<SubCategory>(id);
                if (_subcategory == null)
                    throw new KeyNotFoundException(string.Format("Sub-categoria {0} não encontrada", id));

                _subcategory.Name = subcategory.Name;
                _subcategory.Order = subcategory.Order;
                _subcategory.Slug = subcategory.Name.GenerateSlug();

                _session.SaveOrUpdate(_subcategory);

                _session.Transaction.Commit();
            }
            return _subcategory;
        }

        // DELETE api/category/5
        public void Delete(string categoryslug, int id)
        {
            using (_session.BeginTransaction())
            {
                var category = _session.Get<SubCategory>(id);
                _session.Delete(category);

                _session.Transaction.Commit();
            }
        }
    
    }
}
