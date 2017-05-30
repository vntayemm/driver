namespace Driver.Api.Models
{
    public class DriverExam
    {
        public int DriverId { get; set; }
        public int ExamCode { get; set; }
        public int ExamSessionId { get; set; }
        public int ExamQuestionId { get; set; }
        public int ExamAnswerId { get; set; }
        public bool IsChoosed { get; set; }
    }
}
