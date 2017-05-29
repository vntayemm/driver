using System.Data.Entity;

namespace Driver.Api.Models
{
    public class ExamAnswerCode
    {
        public int AnswerNumber { get; set; }
        public int ExamCode { get; set; }
        public int ExamQuestionId { get; set; }
        public int QuestionId { get; set; }
        public int AnswerId { get; set; }
    }
}
