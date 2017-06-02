namespace DriverLicense.Api.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ExamQuestionCode")]
    public class ExamQuestionCode
    {
        [Key]
        [Column(Order = 0)]
        public int QuestionNumber { get; set; }
        [Key]
        [Column(Order = 1)]
        public int ExamCode { get; set; }
        [Key]
        [Column(Order = 2)]
        public int ExamSessionId { get; set; }
        [Key]
        [Column(Order = 3)]
        public int QuestionId { get; set; }
        public bool IsLocked { get; set; }
    }
}
