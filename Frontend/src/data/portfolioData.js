export const portfolioData = {
  // ── My Work ─────────────────────────────────────────────────────────────────
  // type:      "web" | "video"
  // videoType: "local" | "youtube" | "placeholder"
  // videoSrc:  relative path for local, full embed URL for youtube, null for placeholder
  // thumb:     shown before video plays, and as card cover for web projects
  myWork: [
    {
      id: "mw-01",
      title: "Monitoring Automatyczny Konstrukcji",
      subtitle: "Web Development",
      description:
        "Projekt i wdrożenie wizytówki dla firmy zajmującej się monitoringiem konstrukcji przemysłowych.",
      tags: ["WordPress", "HTML", "CSS", "PHP"],
      type: "web",
      videoType: "placeholder",
      videoSrc: null,
      thumb: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      link: "https://m-a-k.pl",
    },
    {
      id: "mw-02",
      title: "Promocyjny Film – Piecyki Gazowe",
      subtitle: "Produkcja Wideo",
      description:
        "Realizacja filmu promocyjnego. Wersja polska, angielska i niemiecka, przygotowana pod kampanie na stronie internetowej piecykigazowe.com.pl | Nagrania nie były częścią pracy mojego kamerzysty w tym projekcie.",
      tags: ["Davinci Resolve Studio", "Color Grading", "Audio Mastering", "Marketing", "Dubbing AI w Wielu Językach", "Tylko Postprodukcja"],
      type: "video",
      videoType: "local",
      videoSrc: "/media/piecyki-pl.mp4",
      videoSrcEn: "/media/piecyki-en.mp4",
      videoSrcDe: "/media/piecyki-de.mp4",
      thumb: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      link: null,
    },
    {
      id: "mw-drone",
      title: "Ujęcia z Drona",
      subtitle: "Ujęcia z Drona",
      description:
        "Wysokiej jakości inspekcje oraz materiały promocyjne z powietrza dla obiektów przemysłowych.",
      tags: ["Dron", "Nagranie i Montaż"],
      type: "video",
      videoType: "local",
      videoSrc: "/media/drone.mp4",
      thumb: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
      link: null,
    },
    {
      id: "mw-03",
      title: "Kryptowaluty – Film Informacyjny",
      subtitle: "Produkcja Wideo",
      description:
        "Edukacyjny materiał wideo dotyczący technologii blockchain oraz kryptowalut.",
      tags: ["Davinci Resolve Studio", "Animacje"],
      type: "video",
      videoType: "youtube",
      videoSrc: "https://www.youtube.com/embed/mUA6R7Ym_UQ?", // Placeholder link
      thumb: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
      link: null,
    },
    {
      id: "mw-04",
      title: "Awizacja Faktur ERP – Infover",
      subtitle: "Produkcja Wideo",
      description:
        "Prezentacja nowego modułu awizacji faktur w systemie ERP dla firmy Infover.",
      tags: ["Screencast", "Animacje", "Davinci Resolve Studio"],
      type: "video",
      videoType: "local",
      videoSrc: "/media/infover-erp.mp4",
      thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: null,
    },
    {
      id: "mw-05",
      title: "Projekt VR – Unreal Engine 5",
      subtitle: "Dokumentacja Wideo",
      description:
        "Umieszczenie koparki regolitu księżycowego w środowisku Wirtualnej Rzeczywistości w oparciu o silnik Unreal Engine 5.",
      tags: ["Przedstawienie Projektu", "Nagrania z Produkcji", "Nagranie i Montaż"],
      type: "video",
      videoType: "local",
      videoSrc: "/media/SpejsyVR_v1.mp4",
      thumb: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
      link: null,
    },
    {
      id: "mw-06",
      title: "Distobee – Prezentacja (EN)",
      subtitle: "Produkcja Wideo",
      description:
        "Międzynarodowa prezentacja projektu Distobee – zaawansowanej koparki regolitu księżycowego. Materiał w języku angielskim.",
      tags: ["Nagrania z Produkcji", "Engineering", "English", "Nagrania i Montaż"],
      type: "video",
      videoType: "local",
      videoSrc: "/media/distobee-en.mp4",
      thumb: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&q=80",
      link: null,
    },
    {
      id: "mw-07",
      title: "Distobee – Projekt (PL)",
      subtitle: "Produkcja Wideo",
      description:
        "Szczegółowy film ukazujący kulisy konstrukcji oraz działanie koparki regolitu księżycowego Distobee.",
      tags: ["Nagrania z Produkcji", "Engineering", "Nagrania i Montaż"],
      type: "video",
      videoType: "local",
      videoSrc: "/media/distobee-pl.mp4",
      thumb: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
      link: null,
    },
  ],

  // ── Cameraman Photos ────────────────────────────────────────────────────────
  cameramanPhotos: [
    {
      id: "ph-01",
      src: "/media/IMG_9783.jpg",
      alt: "Fotografia techniczna 1",
      caption: "Labolatorium SpaceTeam AGH, Kraków",
    },
    {
      id: "ph-02",
      src: "/media/IMG_2868 (1).JPG",
      alt: "Fotografia techniczna 2",
      caption: "Ale Kosmos!, PGE Narodowy, Warszawa",
    },
    {
      id: "ph-03",
      src: "/media/IMG_9812.jpg",
      alt: "Fotografia techniczna 3",
      caption: "Labolatorium SpaceTeam AGH, Kraków",
    },
    {
      id: "ph-04",
      src: "/media/img1.jpg",
      alt: "Fotografia techniczna 4",
      caption: "Kuchnia, Kielce",
    },
    {
      id: "ph-05",
      src: "/media/20251109_132753 (1).jpg",
      alt: "Fotografia techniczna 5",
      caption: "Jesień",
    },
    {
      id: "ph-06",
      src: "/media/IMG_9722.JPG",
      alt: "Fotografia techniczna 6",
      caption: "Sypialnia, Kielce",
    },
  ],


};
