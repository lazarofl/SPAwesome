using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPAwesome.WebAPI.Models
{
    public class SubCategoryMap : ClassMap<SubCategory>
    {
        public SubCategoryMap()
        {
            Id(x => x.Id);
            Map(x => x.Name);
            Map(x => x.Order);
            Map(x => x.Slug).Unique();
            HasMany(x => x.Fields).Inverse().Cascade.All();
            References(x => x.Category);
        }
    }
}