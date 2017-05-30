namespace Driver.Api.Models
{
    public class QuestionTemplate
    {
        public int Id { get; set; }
        public int ExamTemplateId { get; set; }
        public int SubjectId { get; set; }
        public int QuestionId { get; set; }
        public bool QuestionAt { get; set; }
        public string Content { get; set; }
    }
}
