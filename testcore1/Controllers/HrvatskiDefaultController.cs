using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace testcore1.Controllers
{
    public class HrvatskiDefaultController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}