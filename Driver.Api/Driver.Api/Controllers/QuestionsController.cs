using Driver.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Driver.Api.Controllers
{
    [Route("api/[controller]")]
    [EnableQuery]
    public class QuestionsController : Controller
    {
        private static List<Question> _questions = new List<Question> {
            new Question{ Id = 1, Content = "Code 1", QuestionAt = DateTime.Now },
            new Question{ Id = 2, Content = "Code 2", QuestionAt = DateTime.Now },
            new Question{ Id = 3, Content = "Code 3", QuestionAt = DateTime.Now },
            new Question{ Id = 4, Content = "Code 4", QuestionAt = DateTime.Now }
        };

        [HttpGet]
        public IEnumerable Get()
        {
            return _questions;
        }
    }
}
