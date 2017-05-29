using System.Data.Entity;

namespace Driver.Api.Models
{
    public partial class DriverContext : DbContext
    {
        public class ExamAnswer
        {
            public int ExamSessionId { get; set; }
            public int QuestionId { get; set; }
            public int AnswerId { get; set; }
            public string Content { get; set; }
            public bool IsRight { get; set; }
        }
    }
}
