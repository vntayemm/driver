namespace Driver.Api.Models
{
    public class AnswerTemplate
    {
        public int AnswerId { get; set; }
        public int QuestionTemplateId { get; set; }
        public string Content { get; set; }
        public bool IsRight { get; set; }
        public bool AnswerAt { get; set; }
    }
}
