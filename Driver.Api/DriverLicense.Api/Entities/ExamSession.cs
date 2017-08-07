namespace DriverLicense.Api.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ExamSession")]
    public class ExamSession
    {
        [Key]
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public string SubjectName { get; set; }
        public string Name { get; set; }
        public bool IsLocked { get; set; }
    }
}
