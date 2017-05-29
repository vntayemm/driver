using System.Collections;

namespace Driver.Api.Services
{
    public interface IQuestionService
    {
        IEnumerable Questions { get; set; }
    }
}
