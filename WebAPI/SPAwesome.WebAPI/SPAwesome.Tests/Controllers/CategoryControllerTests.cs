using Microsoft.VisualStudio.TestTools.UnitTesting;
using SPAwesome.Tests.DataBaseMocks;
using SPAwesome.WebAPI.Controllers;
using SPAwesome.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPAwesome.Tests.Controllers
{
    [TestClass]
    public class CategoryControllerTests : AbstractInMemoryDataFixture
    {
        CategoryController categoryController = null;

        [TestInitialize]
        public void Setup()
        {

            categoryController = new CategoryController(base.Session);
        }

        [TestMethod]
        public void Add()
        {
            Category category = new Category
            {
                Name = "teste",
                Order = 1,
                Slug = "teste"
            };

            var newcategory = categoryController.Post(category);

            Assert.AreNotEqual(0, newcategory.Id);
        }
    }
}
