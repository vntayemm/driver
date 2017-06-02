using System.Web.Http;
using System.Web.OData.Extensions;
using DriverLicense.Api.Models;
using Microsoft.Restier.Providers.EntityFramework;
using Microsoft.Restier.Publishers.OData.Batch;
using Microsoft.Restier.Publishers.OData;


namespace DriverLicense.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            RegisterOdata(config, GlobalConfiguration.DefaultServer);
        }

        public static async void RegisterOdata(HttpConfiguration config, HttpServer server)
        {
            // enable query options for all properties
            config.Filter().Expand().Select().OrderBy().MaxTop(null).Count();
            await config.MapRestierRoute<EntityFrameworkApi<DriverLicenseContext>>(
                "DirverLicense",
                "odata",
                new RestierBatchHandler(server));
        }
    }
}
