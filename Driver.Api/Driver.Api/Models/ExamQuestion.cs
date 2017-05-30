namespace Driver.Api.Models
{
    public class ExamQuestion
    {
        public int ExamSessionId { get; set; }
        public int QuestionId { get; set; }
        public string Content { get; set; }
    }
}
