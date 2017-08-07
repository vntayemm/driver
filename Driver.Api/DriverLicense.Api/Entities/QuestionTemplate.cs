namespace DriverLicense.Api.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("QuestionTemplate")]
    public class QuestionTemplate
    {
        public int Id { get; set; }
        [Key]
        [Column(Order = 0)]
        public int ExamTemplateId { get; set; }
        [Key]
        [Column(Order = 1)]
        public int SubjectId { get; set; }
        [Key]
        [Column(Order = 2)]
        public int QuestionId { get; set; }
        public bool QuestionAt { get; set; }
        public string Content { get; set; }
    }
}
