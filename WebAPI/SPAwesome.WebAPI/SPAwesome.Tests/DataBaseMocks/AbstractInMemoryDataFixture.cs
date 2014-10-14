using Microsoft.VisualStudio.TestTools.UnitTesting;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPAwesome.Tests.DataBaseMocks
{
    /// <summary>
    /// Classe abstrata que irá abstrair o processo de criar a ISession em todo novo teste
    /// </summary>
    public abstract class AbstractInMemoryDataFixture
    {
        private ISession session;

        [TestInitialize]
        public void BaseSetup()
        {
            session = InMemorySessionFactoryProvider.Instance.OpenSession();
        }

        [TestCleanup]
        public void BaseTearDown()
        {
            if (session != null)
                session.Dispose();
        }

        protected ISession Session
        {
            get { return session; }
        }
    }
}
