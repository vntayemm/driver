using Microsoft.AspNetCore.Http;
using Microsoft.Owin;
using System.Threading.Tasks;

namespace Driver.Api.Middleware
{
    public class DriverOwinMiddleware : OwinMiddleware
    {
        public DriverOwinMiddleware(OwinMiddleware next)
            : base(next)
        {

        }

        public async override Task Invoke(IOwinContext context)
        {
            // You've access to asp.net core http context in your owin middlewares, asp.net web api odata controllers, signalr hubs, etc.

            HttpContext aspNetCoreContext = (HttpContext)context.Environment["Microsoft.AspNetCore.Http.HttpContext"];

            // do what ever you want using context.Request & context.Response

            await Next.Invoke(context);
        }
    }
}
