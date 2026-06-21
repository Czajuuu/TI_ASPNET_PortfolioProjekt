using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Backend.Data;
using Portfolio.Backend.Models;
using Portfolio.Backend.Services;

namespace Portfolio.Backend.Controllers
{
    [Authorize] // Zabezpieczenie całego kontrolera przed niezalogowanymi
    public class AdminController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IFileService _fileService;

        public AdminController(ApplicationDbContext context, IFileService fileService)
        {
            _context = context;
            _fileService = fileService;
        }

        // GET: /Admin
        public async Task<IActionResult> Index()
        {
            // Pobieramy wszystkie projekty z bazy
            var projects = await _context.Projects.ToListAsync();
            return View(projects);
        }

        // GET: /Admin/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: /Admin/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Project project, IFormFile? uploadedVideoSrc, IFormFile? uploadedVideoSrcEn, IFormFile? uploadedVideoSrcDe, IFormFile? uploadedThumb)
        {
            if (ModelState.IsValid)
            {
                if (uploadedVideoSrc != null) project.VideoSrc = await _fileService.UploadFileAsync(uploadedVideoSrc);
                if (uploadedVideoSrcEn != null) project.VideoSrcEn = await _fileService.UploadFileAsync(uploadedVideoSrcEn);
                if (uploadedVideoSrcDe != null) project.VideoSrcDe = await _fileService.UploadFileAsync(uploadedVideoSrcDe);
                if (uploadedThumb != null) project.Thumb = await _fileService.UploadFileAsync(uploadedThumb);

                _context.Add(project);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(project);
        }

        // GET: /Admin/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var project = await _context.Projects.FindAsync(id);
            if (project == null) return NotFound();

            return View(project);
        }

        // POST: /Admin/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, Project project, IFormFile? uploadedVideoSrc, IFormFile? uploadedVideoSrcEn, IFormFile? uploadedVideoSrcDe, IFormFile? uploadedThumb)
        {
            if (id != project.Id) return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    if (uploadedVideoSrc != null) project.VideoSrc = await _fileService.UploadFileAsync(uploadedVideoSrc);
                    if (uploadedVideoSrcEn != null) project.VideoSrcEn = await _fileService.UploadFileAsync(uploadedVideoSrcEn);
                    if (uploadedVideoSrcDe != null) project.VideoSrcDe = await _fileService.UploadFileAsync(uploadedVideoSrcDe);
                    if (uploadedThumb != null) project.Thumb = await _fileService.UploadFileAsync(uploadedThumb);

                    _context.Update(project);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProjectExists(project.Id)) return NotFound();
                    else throw;
                }
                return RedirectToAction(nameof(Index));
            }
            return View(project);
        }

        // POST: /Admin/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var project = await _context.Projects.FindAsync(id);
            if (project != null)
            {
                _context.Projects.Remove(project);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }

        private bool ProjectExists(int id)
        {
            return _context.Projects.Any(e => e.Id == id);
        }
    }
}
