export interface Resource {
  title: string;
  url: string;
  badge?: string;
}
export interface Category {
  id: string;
  label: string;
  items: Resource[];
}

// ADD A LINK: paste { title, url, badge? } into the right array
export const CATEGORIES: Category[] = [
  {
    id: "games",
    label: "Games",
    items: [
      { title: "CrazyGames",        url: "https://www.crazygames.com",                                                  badge: "HOT"   },
      { title: "Poki",              url: "https://poki.com"                                                                            },
      { title: "itch.io",           url: "https://itch.io/games/free",                                                  badge: "INDIE" },
      { title: "Vimm's Lair",       url: "https://vimm.net",                                                            badge: "RETRO" },
      { title: "Archive.org Games", url: "https://archive.org/details/software?and[]=mediatype%3A%22software%22"                     },
      { title: "GameJolt",          url: "https://gamejolt.com/games/best"                                                           },
    ],
  },
  {
    id: "movies",
    label: "Movies",
    items: [
      { title: "Tubi",              url: "https://tubitv.com",        badge: "LEGAL" },
      { title: "Pluto TV",          url: "https://pluto.tv"                          },
      { title: "Crackle",           url: "https://www.crackle.com"                   },
      { title: "Kanopy",            url: "https://www.kanopy.com",    badge: "FREE"  },
      { title: "Plex",              url: "https://watch.plex.tv"                     },
      { title: "Archive.org Films", url: "https://archive.org/details/movies"        },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { title: "RetroArch",        url: "https://www.retroarch.com", badge: "★"     },
      { title: "Dolphin Emulator", url: "https://dolphin-emu.org"                   },
      { title: "RPCS3",            url: "https://rpcs3.net"                         },
      { title: "Ryujinx",          url: "https://github.com/Ryujinx/Ryujinx"        },
      { title: "JDownloader 2",    url: "https://jdownloader.org"                   },
      { title: "qBittorrent",      url: "https://www.qbittorrent.org"               },
    ],
  },
];
