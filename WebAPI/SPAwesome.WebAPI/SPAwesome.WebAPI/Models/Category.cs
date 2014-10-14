using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPAwesome.WebAPI.Models
{
    public class Category : Entity
    {
        public Category() {
            this.SubCategories = new List<SubCategory>();
        }

        public virtual string Name { get; set; }
        public virtual string Slug { get; set; }
        public virtual int Order { get; set; }
        public virtual IList<SubCategory> SubCategories { get; set; }
    }
}