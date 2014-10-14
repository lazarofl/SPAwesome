using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using Microsoft.Web.Infrastructure.DynamicModuleHelper;
using NHibernate;
using NHibernate.Tool.hbm2ddl;
using Ninject;
using Ninject.Web.Common;
using SPAwesome.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(SPAwesome.WebAPI.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(SPAwesome.WebAPI.App_Start.NinjectWebCommon), "Stop")]

namespace SPAwesome.WebAPI.App_Start
{
    public class NinjectWebCommon
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start()
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }

        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }

        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
            kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

            RegisterServices(kernel);
            return kernel;
        }

        private static ISessionFactory CreateSessionFactory()
        {
            return Fluently.Configure()
              .Database(
                SQLiteConfiguration.Standard
                  .ConnectionString(x => x.FromConnectionStringWithKey("SQLDataBase"))
              )
              .Mappings(m =>
                m.FluentMappings.AddFromAssemblyOf<Category>())
                .ExposeConfiguration(cfg => new SchemaUpdate(cfg).Execute(false, true))
              .BuildSessionFactory();
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {

            kernel.Bind<ISessionFactory>().ToMethod(
                x => CreateSessionFactory()).InSingletonScope();

            kernel.Bind<ISession>().ToMethod(ctx => ctx.Kernel.Get<ISessionFactory>().OpenSession()).InRequestScope();
        }
    }
}



