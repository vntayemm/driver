using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Driver.Api.Controllers
{
    [Route("api/[controller]")]
    [EnableQuery]
    public class AnswerController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            return this.Ok(new string[]{ "value1", "value2" });
        }
    }
}
