namespace Driver.Api.Models
{
    using System;

    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTimeOffset SubjectAt { get; set; }
    }
}
