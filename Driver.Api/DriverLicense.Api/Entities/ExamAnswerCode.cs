namespace DriverLicense.Api.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ExamAnswerCode")]
    public class ExamAnswerCode
    {
        [Key]
        [Column(Order = 0)]
        public int AnswerNumber { get; set; }
        [Key]
        [Column(Order = 1)]
        public int ExamCode { get; set; }
        [Key]
        [Column(Order = 2)]
        public int ExamQuestionId { get; set; }
        [Key]
        [Column(Order = 3)]
        public int QuestionId { get; set; }
        [Key]
        [Column(Order = 4)]
        public int AnswerId { get; set; }
    }
}
