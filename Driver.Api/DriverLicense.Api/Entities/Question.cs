namespace DriverLicense.Api.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Question")]
    public class Question
    {
        [Key]
        public int Id { get; set; }
        public string Content { get; set; }
        public bool QuestionAt { get; set; }
    }
}
