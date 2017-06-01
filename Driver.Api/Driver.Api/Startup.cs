using Driver.Api.Models;
using Driver.Api.Modules;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Restier.Providers.EntityFramework;
using Microsoft.Restier.Publishers.OData;
using Microsoft.Restier.Publishers.OData.Batch;
using Nancy.Owin;
using System.Web.Http;
using System.Web.OData.Extensions;

namespace Driver.Api
{
    public class Startup
    {
        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<HttpConfiguration>(config => {
                var server = new HttpServer(config);
                config.Filter().Expand().Select().OrderBy().MaxTop(null).Count();
                config.MapRestierRoute<EntityFrameworkApi<DriverContext>>("odata", null, new RestierBatchHandler(server));
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseOwin(x => x.UseNancy(op => op.Bootstrapper = new Bootstrapper()));

            
        }
    }
}
