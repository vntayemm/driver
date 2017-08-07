namespace DriverLicense.Api.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ExamTemplate")]
    public class ExamTemplate
    {
        [Key]
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
        public bool SubjectAt { get; set; }
    }
}
