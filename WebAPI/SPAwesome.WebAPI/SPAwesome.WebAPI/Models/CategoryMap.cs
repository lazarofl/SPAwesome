using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPAwesome.WebAPI.Models
{
    public class CategoryMap : ClassMap<Category>
    {
        public CategoryMap()
        {
            Id(x => x.Id);
            Map(x => x.Name);
            Map(x => x.Order).Column("categoryOrder");
            Map(x => x.Slug).Unique();
            HasMany(x => x.SubCategories).Inverse().Cascade.All();
        }
    }
}