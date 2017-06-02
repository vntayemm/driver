
namespace DriverLicense.Api.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Answer")]
    public class Answer
    {
        [Key]
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string Content { get; set; }
        public bool IsRight { get; set; }
        public bool AnswerAt { get; set; }
    }
}
