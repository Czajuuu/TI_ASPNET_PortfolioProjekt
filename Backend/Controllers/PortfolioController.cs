using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Backend.Data;
using Portfolio.Backend.Models;

namespace Portfolio.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PortfolioController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/portfolio/projects
        [HttpGet("projects")]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            var projects = await _context.Projects.ToListAsync();
            return Ok(projects);
        }

        // GET: api/portfolio/photos
        [HttpGet("photos")]
        public async Task<ActionResult<IEnumerable<Photo>>> GetPhotos()
        {
            var photos = await _context.Photos.ToListAsync();
            return Ok(photos);
        }
    }
}
