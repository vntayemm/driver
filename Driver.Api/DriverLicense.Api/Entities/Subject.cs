namespace DriverLicense.Api.Entities
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System;
    using System.ComponentModel.DataAnnotations;

    [Table("Subject")]
    public class Subject
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTimeOffset SubjectAt { get; set; }
    }
}
