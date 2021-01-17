using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameShopController : ControllerBase
    {
        public GameShopContext Context { get; set; }
        public GameShopController(GameShopContext context)
        {
            Context = context;
        }

        
    }
}
