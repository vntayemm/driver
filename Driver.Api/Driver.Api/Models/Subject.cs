using System.Data.Entity;

namespace Driver.Api.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool SubjectAt { get; set; }
    }
}
