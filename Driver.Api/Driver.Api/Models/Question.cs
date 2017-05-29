using System.Data.Entity;

namespace Driver.Api.Models
{
    public partial class DriverContext : DbContext
    {
        public class Question
        {
            public int Id { get; set; }
            public string Content { get; set; }
            public bool QuestionAt { get; set; }
        }
    }
}
