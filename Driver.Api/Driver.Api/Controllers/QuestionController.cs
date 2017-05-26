using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;

namespace Driver.Api.Controllers
{
    [Route("api/[controller]")]
    [EnableQuery]
    public class QuestionController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            return this.Ok(new string[] { "Question 1", "Question 2", "Question 3" });
        }
    }
}
