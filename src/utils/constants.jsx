import { PiFilmReelBold, PiFilmReelFill } from "react-icons/pi";
import { MdOutlineFavoriteBorder, MdOutlineSpaceDashboard, MdOutlineFavorite, MdSpaceDashboard } from "react-icons/md";
import { RiApps2AddFill,RiApps2AddLine } from "react-icons/ri";

export const sidebarRoutes = [
  {
    path: "/",
    label: "Home",
    icons: [
      {
        active: <MdSpaceDashboard />,
      },
      {
        passive: <MdOutlineSpaceDashboard />,
      },
    ],
  },
  {
    path: "/movies",
    label: "Movies",
    icons: [
      {
        active: <PiFilmReelFill />,
      },
      {
        passive: <PiFilmReelBold />,
      },
    ],
  },
  {
    path: "add-movie",
    label: "Add Movie",
    icons: [
      {
        active: <RiApps2AddFill />,
      },
      {
        passive: <RiApps2AddLine />,
      },
    ],
  },
  {
    path: "/favorite-movies",
    label: "Favorite Movies",
    icons: [
      {
        active: <MdOutlineFavorite />,
      },
      {
        passive: <MdOutlineFavoriteBorder />,
      },
    ],
  },
];