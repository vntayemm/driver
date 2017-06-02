
namespace DriverLicense.Api.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("AnswerTemplate")]
    public class AnswerTemplate
    {
        [Key]
        [Column(Order = 0)]
        public int AnswerId { get; set; }
        [Key]
        [Column(Order = 1)]
        public int QuestionTemplateId { get; set; }
        public string Content { get; set; }
        public bool IsRight { get; set; }
        public bool AnswerAt { get; set; }
    }
}
