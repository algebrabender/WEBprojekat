using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Models;
using Microsoft.EntityFrameworkCore;

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

        [Route("PreuzimanjeKataloga")]
        [HttpGet]
        public async Task<List<Katalog>> PreuzmanjeKataloga()
        {
            return await Context.Katalozi.Include(p => p.VideoIgre).ToListAsync();
        }

        [Route("UpisivanjeKataloga")]
        [HttpPost]
        public async Task UpisivanjeKataloga([FromBody] Katalog katalog)
        {
            Context.Katalozi.Add(katalog);
            await Context.SaveChangesAsync();
        }

        [Route("DodavanjeVideoIgre/{idKataloga}")]
        [HttpPost]
        public async Task UpisivanjeVideoIgre(int idKataloga, [FromBody] VideoIgra igra)
        {
            var katalog = await Context.Katalozi.FindAsync(idKataloga);
            igra.Katalog = katalog;
            Context.VideoIgre.Add(igra);
            await Context.SaveChangesAsync();
        }

        [Route("UpdateKolicine/{idKataloga}")]
        [HttpPost]
        public async Task AzuriranjeKolicine(int idKataloga, [FromBody] VideoIgra igra)
        {
            var katalog = await Context.Katalozi.FindAsync(idKataloga);
        }

        [Route("BrisanjeVideoIgre/{idKataloga}")]
        [HttpPost]
        public async Task BrisanjeVideoIgre(int idKataloga, [FromBody] VideoIgra igra)
        {
            var katalog = await Context.Katalozi.FindAsync(idKataloga);
        }

        [Route("PreuzimanjeStudia")]
        [HttpGet]
        public async Task<List<Studio>> PreuzimanjeStudia()
        {
            return await Context.Studios.ToListAsync();
        }

        [Route("UpdateStudio/{idStudia")]
        [HttpPost]
        public async Task UpdateStudio(int idStudia)
        {
            var katalog = await Context.Studios.FindAsync(idStudia);
        }
    }
}
