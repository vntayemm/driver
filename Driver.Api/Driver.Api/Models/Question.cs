﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Driver.Api.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTimeOffset QuestionAt { get; set; }
    }
}
