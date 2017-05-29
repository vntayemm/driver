using System.Data.Entity;

namespace Driver.Api.Models
{
    public partial class DriverContext : DbContext
    {
        public class ExamTemplate
        {
            public int Id { get; set; }
            public int SubjectId { get; set; }
            public string SubjectName { get; set; }
            public bool SubjectAt { get; set; }
        }
    }
}
