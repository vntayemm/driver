﻿namespace Driver.Api.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string Content { get; set; }
        public bool IsRight { get; set; }
        public bool AnswerAt { get; set; }
    }
}
