using System.Data.Entity;

namespace Driver.Api.Models
{
    public partial class DriverContext : DbContext
    {
        public DriverContext() : base("name=DefaultConnection")
        {
            if (!Database.Exists())
            {
            }
        }

        //The subject
        public DbSet<Subject> Subjects { get; set; }

        //Question and answer
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        //Subject relationship with question
        public DbSet<SubjectQuestion> SubjectQuestions { get; set; }

        //Exam template
        public DbSet<QuestionTemplate> QuestionTemplates { get; set; }
        public DbSet<AnswerTemplate> AnswerTemplates { get; set; }
        public DbSet<ExamTemplate> ExamTemplates { get; set; }

        //Exam generator code for session
        public DbSet<ExamQuestionCode> ExamQuestionCodes { get; set; }
        public DbSet<ExamAnswerCode> ExamAnswerCodes { get; set; }

        //User exam
        public DbSet<ExamSession> ExamSessions { get; set; }
        public DbSet<DriverExam> DriverExams { get; set; }
        public DbSet<ExamQuestion> ExamQuestions { get; set; }
        public DbSet<ExamAnswer> ExamAnswers { get; set; }
    }
}
