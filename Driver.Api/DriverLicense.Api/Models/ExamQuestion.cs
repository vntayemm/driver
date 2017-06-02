namespace DriverLicense.Api.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ExamQuestion")]
    public class ExamQuestion
    {
        [Key]
        [Column(Order = 0)]
        public int ExamSessionId { get; set; }
        [Key]
        [Column(Order = 1)]
        public int QuestionId { get; set; }
        public string Content { get; set; }
    }
}
