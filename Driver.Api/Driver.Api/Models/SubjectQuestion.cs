﻿using System.Data.Entity;

namespace Driver.Api.Models
{
    public partial class DriverContext : DbContext
    {
        public class SubjectQuestion
        {
            public int SubjectId { get; set; }
            public int QuestionId { get; set; }
        }
    }
}
