namespace DriverLicense.Api.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("SubjectQuestion")]
    public class SubjectQuestion
    {
        [Key]
        [Column(Order = 0)]
        public int SubjectId { get; set; }
        [Key]
        [Column(Order = 1)]
        public int QuestionId { get; set; }
    }
}
