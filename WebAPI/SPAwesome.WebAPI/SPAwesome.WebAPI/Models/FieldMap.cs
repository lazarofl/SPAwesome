using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPAwesome.WebAPI.Models
{
    public class FieldMap : ClassMap<Field>
    {
        public FieldMap()
        {
            Id(x => x.Id);
            Map(x => x.Name);
            Map(x => x.Order).Column("fieldOrder");
            Map(x => x.Type).Column("fieldType");
            Map(x => x.Itens);
            References(x => x.SubCategory);
        }
    }
}