using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using NHibernate;
using SPAwesome.Tests.DataBaseMocks;
using SPAwesome.WebAPI.Controllers;
using SPAwesome.WebAPI.Models;
using System;
using System.Collections;
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
        public void Get()
        {
            //ao inves de adicionar posts vou simular apenas o comportamento de GET para manter o SRP - Single Responsability Principle nesse exemplo
            // utilizando o Moq para alterar o comportamento da ISession

            var fakeCategories = new List<Category>();
            for (int i = 0; i < 10; i++)
            {
                fakeCategories.Add(new Category
                {
                    Name = string.Format("Teste {0}", i + 1),
                    Order = i + 1
                });
            }

            //setup
            Mock<ISession> sessionMock = new Mock<ISession>();
            sessionMock.Setup(x => x.CreateCriteria<Category>().List<Category>())
                .Returns(fakeCategories);

            //altera a session
            categoryController = new CategoryController(sessionMock.Object);


            //act
            var categories = categoryController.Get().ToList();

            Assert.AreEqual(fakeCategories.Count, categories.Count);
        }

        [TestMethod]
        public void Post()
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
