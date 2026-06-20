using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Portfolio.Backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Src = table.Column<string>(type: "TEXT", nullable: false),
                    Alt = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Caption = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Subtitle = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Tags = table.Column<string>(type: "TEXT", nullable: false),
                    Type = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    VideoType = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    VideoSrc = table.Column<string>(type: "TEXT", nullable: true),
                    VideoSrcEn = table.Column<string>(type: "TEXT", nullable: true),
                    VideoSrcDe = table.Column<string>(type: "TEXT", nullable: true),
                    Thumb = table.Column<string>(type: "TEXT", nullable: true),
                    Link = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Photos",
                columns: new[] { "Id", "Alt", "Caption", "Src" },
                values: new object[,]
                {
                    { 1, "Fotografia techniczna 1", "Labolatorium SpaceTeam AGH, Kraków", "/media/IMG_9783.jpg" },
                    { 2, "Fotografia techniczna 2", "Ale Kosmos!, PGE Narodowy, Warszawa", "/media/IMG_2868 (1).JPG" },
                    { 3, "Fotografia techniczna 3", "Labolatorium SpaceTeam AGH, Kraków", "/media/IMG_9812.jpg" },
                    { 4, "Fotografia techniczna 4", "Kuchnia, Kielce", "/media/img1.jpg" },
                    { 5, "Fotografia techniczna 5", "Jesień", "/media/20251109_132753 (1).jpg" },
                    { 6, "Fotografia techniczna 6", "Sypialnia, Kielce", "/media/IMG_9722.JPG" }
                });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "Description", "Link", "Subtitle", "Tags", "Thumb", "Title", "Type", "VideoSrc", "VideoSrcDe", "VideoSrcEn", "VideoType" },
                values: new object[,]
                {
                    { 1, "Projekt i wdrożenie wizytówki dla firmy zajmującej się monitoringiem konstrukcji przemysłowych.", "https://m-a-k.pl", "Web Development", "WordPress,HTML,CSS,PHP", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", "Monitoring Automatyczny Konstrukcji", "web", null, null, null, "placeholder" },
                    { 2, "Realizacja filmu promocyjnego. Wersja polska, angielska i niemiecka, przygotowana pod kampanie na stronie internetowej piecykigazowe.com.pl | Nagrania nie były częścią pracy mojego kamerzysty w tym projekcie.", null, "Produkcja Wideo", "Davinci Resolve Studio,Color Grading,Audio Mastering,Marketing,Dubbing AI w Wielu Językach,Tylko Postprodukcja", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", "Promocyjny Film – Piecyki Gazowe", "video", "/media/piecyki-pl.mp4", "/media/piecyki-de.mp4", "/media/piecyki-en.mp4", "local" },
                    { 3, "Wysokiej jakości inspekcje oraz materiały promocyjne z powietrza dla obiektów przemysłowych.", null, "Ujęcia z Drona", "Dron,Nagranie i Montaż", "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80", "Ujęcia z Drona", "video", "/media/drone.mp4", null, null, "local" },
                    { 4, "Edukacyjny materiał wideo dotyczący technologii blockchain oraz kryptowalut.", null, "Produkcja Wideo", "Davinci Resolve Studio,Animacje", "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80", "Kryptowaluty – Film Informacyjny", "video", "https://www.youtube.com/embed/mUA6R7Ym_UQ?", null, null, "youtube" },
                    { 5, "Prezentacja nowego modułu awizacji faktur w systemie ERP dla firmy Infover.", null, "Produkcja Wideo", "Screencast,Animacje,Davinci Resolve Studio", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Awizacja Faktur ERP – Infover", "video", "/media/infover-erp.mp4", null, null, "local" },
                    { 6, "Umieszczenie koparki regolitu księżycowego w środowisku Wirtualnej Rzeczywistości w oparciu o silnik Unreal Engine 5.", null, "Dokumentacja Wideo", "Przedstawienie Projektu,Nagrania z Produkcji,Nagranie i Montaż", "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80", "Projekt VR – Unreal Engine 5", "video", "/media/SpejsyVR_v1.mp4", null, null, "local" },
                    { 7, "Międzynarodowa prezentacja projektu Distobee – zaawansowanej koparki regolitu księżycowego. Materiał w języku angielskim.", null, "Produkcja Wideo", "Nagrania z Produkcji,Engineering,English,Nagrania i Montaż", "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&q=80", "Distobee – Prezentacja (EN)", "video", "/media/distobee-en.mp4", null, null, "local" },
                    { 8, "Szczegółowy film ukazujący kulisy konstrukcji oraz działanie koparki regolitu księżycowego Distobee.", null, "Produkcja Wideo", "Nagrania z Produkcji,Engineering,Nagrania i Montaż", "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80", "Distobee – Projekt (PL)", "video", "/media/distobee-pl.mp4", null, null, "local" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}
