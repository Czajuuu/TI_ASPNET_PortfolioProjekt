using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Portfolio.Backend.Models;

namespace Portfolio.Backend.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; } = null!;
        public DbSet<Photo> Photos { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed initial data based on portfolioData.js
            modelBuilder.Entity<Project>().HasData(
                new Project
                {
                    Id = 1,
                    Title = "Monitoring Automatyczny Konstrukcji",
                    Subtitle = "Web Development",
                    Description = "Projekt i wdrożenie wizytówki dla firmy zajmującej się monitoringiem konstrukcji przemysłowych.",
                    Tags = "WordPress,HTML,CSS,PHP",
                    Type = "web",
                    VideoType = "placeholder",
                    VideoSrc = null,
                    Thumb = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
                    Link = "https://m-a-k.pl"
                },
                new Project
                {
                    Id = 2,
                    Title = "Promocyjny Film – Piecyki Gazowe",
                    Subtitle = "Produkcja Wideo",
                    Description = "Realizacja filmu promocyjnego. Wersja polska, angielska i niemiecka, przygotowana pod kampanie na stronie internetowej piecykigazowe.com.pl | Nagrania nie były częścią pracy mojego kamerzysty w tym projekcie.",
                    Tags = "Davinci Resolve Studio,Color Grading,Audio Mastering,Marketing,Dubbing AI w Wielu Językach,Tylko Postprodukcja",
                    Type = "video",
                    VideoType = "local",
                    VideoSrc = "/media/piecyki-pl.mp4",
                    VideoSrcEn = "/media/piecyki-en.mp4",
                    VideoSrcDe = "/media/piecyki-de.mp4",
                    Thumb = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
                    Link = null
                },
                new Project
                {
                    Id = 3,
                    Title = "Ujęcia z Drona",
                    Subtitle = "Ujęcia z Drona",
                    Description = "Wysokiej jakości inspekcje oraz materiały promocyjne z powietrza dla obiektów przemysłowych.",
                    Tags = "Dron,Nagranie i Montaż",
                    Type = "video",
                    VideoType = "local",
                    VideoSrc = "/media/drone.mp4",
                    Thumb = "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
                    Link = null
                },
                new Project
                {
                    Id = 4,
                    Title = "Kryptowaluty – Film Informacyjny",
                    Subtitle = "Produkcja Wideo",
                    Description = "Edukacyjny materiał wideo dotyczący technologii blockchain oraz kryptowalut.",
                    Tags = "Davinci Resolve Studio,Animacje",
                    Type = "video",
                    VideoType = "youtube",
                    VideoSrc = "https://www.youtube.com/embed/mUA6R7Ym_UQ?",
                    Thumb = "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
                    Link = null
                },
                new Project
                {
                    Id = 5,
                    Title = "Awizacja Faktur ERP – Infover",
                    Subtitle = "Produkcja Wideo",
                    Description = "Prezentacja nowego modułu awizacji faktur w systemie ERP dla firmy Infover.",
                    Tags = "Screencast,Animacje,Davinci Resolve Studio",
                    Type = "video",
                    VideoType = "local",
                    VideoSrc = "/media/infover-erp.mp4",
                    Thumb = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                    Link = null
                },
                new Project
                {
                    Id = 6,
                    Title = "Projekt VR – Unreal Engine 5",
                    Subtitle = "Dokumentacja Wideo",
                    Description = "Umieszczenie koparki regolitu księżycowego w środowisku Wirtualnej Rzeczywistości w oparciu o silnik Unreal Engine 5.",
                    Tags = "Przedstawienie Projektu,Nagrania z Produkcji,Nagranie i Montaż",
                    Type = "video",
                    VideoType = "local",
                    VideoSrc = "/media/SpejsyVR_v1.mp4",
                    Thumb = "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
                    Link = null
                },
                new Project
                {
                    Id = 7,
                    Title = "Distobee – Prezentacja (EN)",
                    Subtitle = "Produkcja Wideo",
                    Description = "Międzynarodowa prezentacja projektu Distobee – zaawansowanej koparki regolitu księżycowego. Materiał w języku angielskim.",
                    Tags = "Nagrania z Produkcji,Engineering,English,Nagrania i Montaż",
                    Type = "video",
                    VideoType = "local",
                    VideoSrc = "/media/distobee-en.mp4",
                    Thumb = "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&q=80",
                    Link = null
                },
                new Project
                {
                    Id = 8,
                    Title = "Distobee – Projekt (PL)",
                    Subtitle = "Produkcja Wideo",
                    Description = "Szczegółowy film ukazujący kulisy konstrukcji oraz działanie koparki regolitu księżycowego Distobee.",
                    Tags = "Nagrania z Produkcji,Engineering,Nagrania i Montaż",
                    Type = "video",
                    VideoType = "local",
                    VideoSrc = "/media/distobee-pl.mp4",
                    Thumb = "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
                    Link = null
                }
            );

            modelBuilder.Entity<Photo>().HasData(
                new Photo { Id = 1, Src = "/media/IMG_9783.jpg", Alt = "Fotografia techniczna 1", Caption = "Labolatorium SpaceTeam AGH, Kraków" },
                new Photo { Id = 2, Src = "/media/IMG_2868 (1).JPG", Alt = "Fotografia techniczna 2", Caption = "Ale Kosmos!, PGE Narodowy, Warszawa" },
                new Photo { Id = 3, Src = "/media/IMG_9812.jpg", Alt = "Fotografia techniczna 3", Caption = "Labolatorium SpaceTeam AGH, Kraków" },
                new Photo { Id = 4, Src = "/media/img1.jpg", Alt = "Fotografia techniczna 4", Caption = "Kuchnia, Kielce" },
                new Photo { Id = 5, Src = "/media/20251109_132753 (1).jpg", Alt = "Fotografia techniczna 5", Caption = "Jesień" },
                new Photo { Id = 6, Src = "/media/IMG_9722.JPG", Alt = "Fotografia techniczna 6", Caption = "Sypialnia, Kielce" }
            );
        }
    }
}
