using System.Data.Entity;

namespace Driver.Api.Models
{
    public partial class DriverContext : DbContext
    {
        public class ExamQuestion
        {
            public int ExamSessionId { get; set; }
            public int QuestionId { get; set; }
            public string Content { get; set; }
        }
    }
}
