using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Driver.Api.Middleware
{
    public class DriverAspNetCoreMiddleware
    {
        private readonly RequestDelegate Next;

        public DriverAspNetCoreMiddleware(RequestDelegate next)
        {
            Next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            // do what ever you want using context.Request & context.Response
            await Next.Invoke(context);
        }
    }
}
