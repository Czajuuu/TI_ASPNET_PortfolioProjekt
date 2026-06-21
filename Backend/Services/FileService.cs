using Microsoft.AspNetCore.Http;
using System.IO;

namespace Portfolio.Backend.Services
{
    public interface IFileService
    {
        Task<string?> UploadFileAsync(IFormFile file);
    }

    public class FileService : IFileService
    {
        private readonly IWebHostEnvironment _env;

        public FileService(IWebHostEnvironment env)
        {
            _env = env;
        }

        public async Task<string?> UploadFileAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return null;

            // Tworzymy unikalną, bezpieczną nazwę pliku, podmieniając spacje
            var fileName = Path.GetFileNameWithoutExtension(file.FileName).Replace(" ", "_");
            var extension = Path.GetExtension(file.FileName);
            var safeFileName = $"{fileName}_{Guid.NewGuid().ToString().Substring(0,8)}{extension}";

            // Ścieżka do folderu media we Frontendzie
            // _env.ContentRootPath wskazuje na /Backend/
            var frontendMediaFolder = Path.Combine(_env.ContentRootPath, "..", "Frontend", "public", "media");

            if (!Directory.Exists(frontendMediaFolder))
            {
                Directory.CreateDirectory(frontendMediaFolder);
            }

            var filePath = Path.Combine(frontendMediaFolder, safeFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Zwracamy relatywną ścieżkę tak jak tego oczekuje React (od roota aplikacji)
            return $"/media/{safeFileName}";
        }
    }
}
