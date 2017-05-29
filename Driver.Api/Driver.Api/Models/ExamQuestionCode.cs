using System.Data.Entity;

namespace Driver.Api.Models
{
    public partial class DriverContext : DbContext
    {
        public class ExamQuestionCode
        {
            public int QuestionNumber { get; set; }
            public int ExamCode { get; set; }
            public int ExamSessionId { get; set; }
            public int QuestionId { get; set; }
            public bool IsLocked { get; set; }
        }
    }
}
