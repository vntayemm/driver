using System;

namespace Driver.Api.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTimeOffset QuestionAt { get; set; }
    }
}
