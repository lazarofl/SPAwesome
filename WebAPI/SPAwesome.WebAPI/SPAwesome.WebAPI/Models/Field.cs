using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SPAwesome.WebAPI.Models
{
    public class Field : Entity
    {
        public virtual SubCategory SubCategory { get; set; }
        public virtual string Name { get; set; }
        public virtual string Type { get; set; }
        public virtual int Order { get; set; }
        public virtual string Itens { get; set; }

        public virtual string[] ToArray(string itens)
        {
            return string.IsNullOrEmpty(itens)
                ? new string[] { }
                : itens.Split(',').Select(x => x.Trim()).ToArray();
        }
    }
}
