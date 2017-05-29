using System.Data.Entity;

namespace Driver.Api.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public bool QuestionAt { get; set; }
    }
}
