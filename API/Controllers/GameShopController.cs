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

        [Route("DodavanjeVideoIgre/{idKataloga}/{idStudia}")]
        [HttpPost]
        public async Task<IActionResult> UpisivanjeVideoIgre(int idKataloga, int idStudia, [FromBody] VideoIgra igra)
        {
            var katalog = await Context.Katalozi.FindAsync(idKataloga);
            var studio = await Context.Studios.FindAsync(idStudia);
            igra.Katalog = katalog;
            igra.Studio = studio;

            if (Context.VideoIgre.Any(temp => temp.Naziv == igra.Naziv && temp.Tip == igra.Tip && (temp.X != igra.X || temp.Y != igra.Y)))
            {
                var xy = Context.VideoIgre.Where(p => p.Tip == igra.Tip).FirstOrDefault();
                return BadRequest(new { X = xy?.X, Y = xy?.Y });
            }

            var temp = Context.VideoIgre.Where(p => p.X == igra.X && p.Y == igra.Y).FirstOrDefault();

            if (temp != null)
            {
                if (temp.KolicinaNaStanju != igra.KolicinaNaStanju)
                    return StatusCode(409);
                else
                    return StatusCode(406);
            }
            else
            {
                studio.BrojIgaraNaStanju++;
                Context.VideoIgre.Add(igra);
                await Context.SaveChangesAsync();
                return Ok();
            }

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
    }
}
