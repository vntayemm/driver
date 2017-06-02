namespace DriverLicense.Api.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ExamAnswer")]
    public class ExamAnswer
    {
        [Key]
        [Column(Order = 0)]
        public int ExamSessionId { get; set; }
        [Key]
        [Column(Order = 1)]
        public int QuestionId { get; set; }
        [Key]
        [Column(Order = 2)]
        public int AnswerId { get; set; }
        public string Content { get; set; }
        public bool IsRight { get; set; }
    }
}
