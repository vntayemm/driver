using Nancy;

namespace Driver.Api.Modules
{
    public class AnswersModule : NancyModule
    {
        public AnswersModule() : base("Answers")
        {
            Get["/"] = parameters =>
            {
                return new string[] { "value1", "value2", "value3", "value4" };
            };
        }
    }
}
