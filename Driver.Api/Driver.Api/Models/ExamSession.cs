using System.Data.Entity;

namespace Driver.Api.Models
{
    public partial class DriverContext : DbContext
    {
        public class ExamSession
        {
            public int Id { get; set; }
            public int SubjectId { get; set; }
            public string SubjectName { get; set; }
            public string Name { get; set; }
            public bool IsLocked { get; set; }
        }
    }
}
