using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Backend.Data;
using Portfolio.Backend.Models;
using Portfolio.Backend.Services;

namespace Portfolio.Backend.Controllers
{
    [Authorize]
    public class PhotosController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IFileService _fileService;

        public PhotosController(ApplicationDbContext context, IFileService fileService)
        {
            _context = context;
            _fileService = fileService;
        }

        // GET: /Photos
        public async Task<IActionResult> Index()
        {
            var photos = await _context.Photos.ToListAsync();
            return View(photos);
        }

        // GET: /Photos/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: /Photos/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Photo photo, IFormFile? uploadedFile)
        {
            if (ModelState.IsValid)
            {
                if (uploadedFile != null)
                {
                    // Korzystamy z nowo utworzonego serwisu do zapisu pliku
                    var filePath = await _fileService.UploadFileAsync(uploadedFile);
                    if (filePath != null)
                    {
                        photo.Src = filePath;
                    }
                }

                _context.Add(photo);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(photo);
        }

        // GET: /Photos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var photo = await _context.Photos.FindAsync(id);
            if (photo == null) return NotFound();

            return View(photo);
        }

        // POST: /Photos/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, Photo photo, IFormFile? uploadedFile)
        {
            if (id != photo.Id) return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    if (uploadedFile != null)
                    {
                        // Jeśli wgrano nowy plik, aktualizujemy ścieżkę
                        var filePath = await _fileService.UploadFileAsync(uploadedFile);
                        if (filePath != null)
                        {
                            photo.Src = filePath;
                        }
                    }

                    _context.Update(photo);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PhotoExists(photo.Id)) return NotFound();
                    else throw;
                }
                return RedirectToAction(nameof(Index));
            }
            return View(photo);
        }

        // POST: /Photos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var photo = await _context.Photos.FindAsync(id);
            if (photo != null)
            {
                _context.Photos.Remove(photo);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }

        private bool PhotoExists(int id)
        {
            return _context.Photos.Any(e => e.Id == id);
        }
    }
}
