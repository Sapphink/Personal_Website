import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import duneImage from './assets/discovery/dune.png';
import bigBoiImage from './assets/discovery/BigBoiExplore.jfif';
import comicImage from './assets/discovery/comicStripTry.png';
import fieldImage from './assets/discovery/field.png';
import forestImage from './assets/discovery/forest.png';
import hillsImage from './assets/discovery/hills.png';
import snowyForestImage from './assets/discovery/snowyForest.png';
import statueImage from './assets/discovery/Statue.png';
import vofImage from './assets/discovery/Vof.png';

import ttrpg1Image from './assets/ttrpg/citadelOfThePrince.png';
import ttrpg2Image from './assets/ttrpg/veiledDungeon.png';
import ttrpg3Image from './assets/ttrpg/frozenChambers.png';
import ttrpgYear1Image from './assets/ttrpg/weekly1Entrance.png';
import ttrpgYear2Image from './assets/ttrpg/weekly2intoTheDepths.png';
import ttrpgYear3Image from './assets/ttrpg/weekly3RushingWater.png';
import ttrpgYear1NoOverlayImage from './assets/ttrpg/weekly1EntranceNoOverlay.png';
import ttrpgYear2NoOverlayImage from './assets/ttrpg/weekly2intoTheDepthsNoOverlay.png';
import ttrpgYear3NoOverlayImage from './assets/ttrpg/weekly3RushingWaterNoOverlay.png';

import astroRaygunImage from './assets/worldbuilding/astroRaygun.png';
import axiomSmgImage from './assets/worldbuilding/axiomSmg.png';
import fontaineLmgImage from './assets/worldbuilding/fontaineLmg.png';
import katanaImage from './assets/worldbuilding/katana.png';
import mcMusketImage from './assets/worldbuilding/mcMusket.png';
import novatechARImage from './assets/worldbuilding/novatechKM352.png';

import rage1 from './assets/rage/animation.gif';
import rage2 from './assets/rage/antiArt.png';
import rage3 from './assets/rage/fuckYouUp.png';
import rage4 from './assets/rage/idk.png';
import rage5 from './assets/rage/kill.png';
import rage6 from './assets/rage/neverEnd.gif';
import rage7 from './assets/rage/ragePainting.png';
import rage8 from './assets/rage/thinga.png';

export const paintings = [
  {
    id: "dune",
    title: "Dune",
    desc: "description",
    imgSource: duneImage,
    tags: "Discovery"
  },
  {
    id: "BigBoiExplore",
    title: "Big Boi",
    desc: "description",
    imgSource: bigBoiImage,
    tags: "Discovery"
  },
  {
    id: "field",
    title: "Field",
    desc: "description",
    imgSource: fieldImage,
    tags: "Discovery"
  },
  {
    id: "forest",
    title: "Forest",
    desc: "description",
    imgSource: forestImage,
    tags: "Discovery"
  },
  {
    id: "hills",
    title: "Hills",
    desc: "description",
    imgSource: hillsImage,
    tags: "Discovery"
  },
  {
    id: "snowyForest",
    title: "Snowy Forest",
    desc: "description",
    imgSource: snowyForestImage,
    tags: "Discovery"
  },
  {
    id: "Statue",
    title: "The Statue",
    desc: "description",
    imgSource: statueImage,
    tags: "Discovery"
  },
  {
    id: "vof",
    title: "Vof",
    desc: "description",
    imgSource: vofImage,
    tags: "Discovery",
  },
  {
    id: "ttrpg1",
    title: "Citadel of the Prince",
    desc: "description",
    imgSource: ttrpg1Image,
    tags: "Ttrpg",
    download: true
  },
  {
    id: "ttrpg2",
    title: "Veiled Dungeon",
    desc: "description",
    imgSource: ttrpg2Image,
    tags: "Ttrpg",
    download: true
  },
  {
    id: "ttrpg3",
    title: "Frozen Chambers",
    desc: "description",
    imgSource: ttrpg3Image,
    tags: "Ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek1",
    title: "ttrpg Weekly 1: The Entrance",
    desc: "description",
    imgSource: ttrpgYear1Image,
    imgSource2: ttrpgYear1NoOverlayImage,
    tags: "Ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek2",
    title: "ttrpg Weekly 2: Into the Depths",
    desc: "description",
    imgSource: ttrpgYear2Image,
    imgSource2: ttrpgYear2NoOverlayImage,
    tags: "Ttrpg",
    download: true
  },
  {
    id: "ttrpgWeek3",
    title: "ttrpg Weekly 3: Rushing Waters",
    desc: "description",
    imgSource: ttrpgYear3Image,
    imgSource2: ttrpgYear3NoOverlayImage,
    tags: "Ttrpg",
    download: true
  },
  {
    id: "astroRaygun",
    title: "Astro Sapr 3000",
    desc: "",
    imgSource: astroRaygunImage,
    tags: "Megacorp"
  },
  {
    id: "axiomSmg",
    title: "Axiom Razorhawk",
    desc: "",
    imgSource: axiomSmgImage,
    tags: "Megacorp"
  },
  {
    id: "fontaineLmg",
    title: "FA AIM Mk4",
    desc: "",
    imgSource: fontaineLmgImage,
    tags: "Megacorp"
  },
  {
    id: "mcMusket",
    title: "MC PR Musket",
    desc: "",
    imgSource: mcMusketImage,
    tags: "Megacorp"
  },
  {
    id: "katana",
    title: "Katana",
    desc: "",
    imgSource: katanaImage,
    tags: "Megacorp"
  },
  {
    id: "novatechKM352",
    title: "NVT KM-352",
    desc: "",
    imgSource: novatechARImage,
    tags: "Megacorp"
  },
  {
    id: "rage1",
    title: "This Painting Needs No Name",
    desc: "",
    imgSource: rage1,
    tags: "Rage"
  },
  {
    id: "rage2",
    title: "This Painting Needs No Name",
    desc: "",
    imgSource: rage2,
    tags: "Rage"
  },
  {
    id: "rage3",
    title: "This Painting Needs No Name",
    desc: "",
    imgSource: rage3,
    tags: "Rage"
  },
  {
    id: "rage4",
    title: "This Painting Needs No Name",
    desc: "",
    imgSource: rage4,
    tags: "Rage"
  },
  {
    id: "rage5",
    title: "This Painting Needs No Name",
    desc: "",
    imgSource: rage5,
    tags: "Rage"
  },
  {
    id: "rage6",
    title: "This Painting Needs No Name",
    desc: "",
    imgSource: rage6,
    tags: "Rage"
  },
  {
    id: "rage7",
    title: "This Painting Needs No Name",
    desc: "",
    imgSource: rage7,
    tags: "Rage"
  },
  {
    id: "rage8",
    title: "This Painting Needs No Name",
    desc: "",
    imgSource: rage8,
    tags: "Rage"
  }
  
]

export async function getPaintings(query) {
  //if (!paintings) paintings = [];
  let newPaintings = paintings;
  if (query) {
    newPaintings = matchSorter(newPaintings, query, { keys: ["title","tags"] });
  }
  return newPaintings.sort(sortBy("title"));
}

export async function getPainting(id) {
  let painting = paintings.find(painting => painting.id === id);
  return painting ?? null;
}