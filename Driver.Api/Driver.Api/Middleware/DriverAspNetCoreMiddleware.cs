using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Driver.Api.Middleware
{
    public class DriverAspNetCoreMiddleware
    {
        private readonly RequestDelegate _next;

        public DriverAspNetCoreMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            // do what ever you want using context.Request & context.Response
            await _next.Invoke(context);
        }
    }
}
