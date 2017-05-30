using Nancy;

namespace Driver.Api.Modules
{
    public class AnswersModule : NancyModule
    {
        public AnswersModule()
        {
            Get["/Answers"] = parameters =>
            {
                return new string[] { "value1", "value2", "value3" };
            };
        }
    }
}
