using Nancy;

namespace Driver.Api.Modules
{
    public class AnswerModule : NancyModule
    {
        public AnswerModule()
        {
            Get("/", args => "Hello from Nancy running on CoreCLR");
            Get("/test/{name}", args => new Person() { Name = args.name });
        }
    }
}
