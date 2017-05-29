using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Owin.Builder;
using Microsoft.Owin.BuilderProperties;
using Owin;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Driver.Api.Extensions
{
    public static class OwinExtensions
    {
        /// <summary>
        /// Extension method added Owin to IApplicationBuilder
        /// </summary>
        /// <param name="aspNetCoreApp"></param>
        /// <param name="configuration"></param>
        /// <returns></returns>
        public static IApplicationBuilder UseOwinApp(this IApplicationBuilder aspNetCoreApp, Action<IAppBuilder> configuration)
        {
            return aspNetCoreApp.UseOwin(setup => setup(next =>
            {
                var owinAppBuilder = new AppBuilder();
                var aspNetCoreLifetime = (IApplicationLifetime)aspNetCoreApp.ApplicationServices.GetService(typeof(IApplicationLifetime));
                var owinAppProperties = new AppProperties(owinAppBuilder.Properties);

                owinAppProperties.OnAppDisposing = aspNetCoreLifetime?.ApplicationStopping ?? CancellationToken.None;
                owinAppProperties.DefaultApp = next;
                configuration(owinAppBuilder);

                return owinAppBuilder.Build<Func<IDictionary<string, object>, Task>>();
            }));
        }
    }
}
