namespace DriverLicense.Api.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("DriverExam")]
    public class DriverExam
    {
        [Key]
        [Column(Order = 0)]
        public int DriverId { get; set; }
        [Key]
        [Column(Order = 1)]
        public int ExamCode { get; set; }
        [Key]
        [Column(Order = 2)]
        public int ExamSessionId { get; set; }
        [Key]
        [Column(Order = 3)]
        public int ExamQuestionId { get; set; }
        [Key]
        [Column(Order = 4)]
        public int ExamAnswerId { get; set; }
        public bool IsChoosed { get; set; }
    }
}
