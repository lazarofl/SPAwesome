﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SPAwesome.WebAPI.Models
{
    public class SubCategory : Entity
    {
        public SubCategory()
        {
            this.Fields = new List<Field>();
        }

        [JsonIgnore]
        public virtual Category Category { get; set; }
        public virtual string Name { get; set; }
        public virtual string Slug { get; set; }
        public virtual int Order { get; set; }
        [JsonIgnore]
        public virtual IList<Field> Fields { get; set; }
    }
}
