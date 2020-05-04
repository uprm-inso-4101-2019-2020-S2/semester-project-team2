import Home from "./Home";
import Beach from "./Beach";
import Favorites from "./Favorites";
import Settings from "./Settings";
import About from "./About";

//Need to use a selector to switch the name of the Beaches.

const PAGES = {
  HOME: {
    TITLE: "Home",
    COMPONENT: Home
  },
  BEACH: {
    TITLE: "Example Beach",
    COMPONENT: Beach
  },
  FAVORITES: {
    TITLE: "Favorites",
    COMPONENT: Favorites
  },
  SETTINGS: {
    TITLE: "Settings",
    COMPONENT: Settings
  },
  ABOUT: {
    TITLE: "About",
    COMPONENT: About
  }
};

export default PAGES;
