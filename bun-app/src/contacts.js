import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export const contacts = [
  {
    id: "NightTimeWalk",
    title: "Night Time Walk",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/6934995?color=3b2230",
    pageSource: "https://sapph-ink.itch.io/night-time-walk"
  },
  {
    id: "OneBitEscape",
    title: "1-bit Escape",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/4560953?color=193d3f",
    pageSource: "https://sapph-ink.itch.io/1-bit-escape"
  },
  {
    id: "AfterWorldsEnd",
    title: "After Worlds End",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/6534168?color=222323",
    pageSource: "https://sapph-ink.itch.io/after-worlds-end"
  },
  {
    id: "AGSP",
    title: "Ashe's Generic Speedrun Platforme",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/5288188?color=222323",
    pageSource: "https://sapph-ink.itch.io/ashes-generic-speedrun-platformer"
  },
  {
    id: "BulletHell",
    title: "Batter Out Of Bullet Hell",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/5656532?color=0e0e16",
    pageSource: "https://sapph-ink.itch.io/batter-out-of-bullet-hell"
  },
  {
    id: "CaptainClown",
    title: "Captain Clown Nose's Lost Map",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/5272561?color=1f1f27",
    pageSource: "https://sapph-ink.itch.io/captain-clown-noses-lost-map"
  },
  {
    id: "LogisLair",
    title: "Escaping Logi's Lair",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/4650247?color=500000",
    pageSource: "https://sapph-ink.itch.io/escaping-logis-lair"
  },
  {
    id: "GhostBeach",
    title: "Ghost Beach",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/6773582?color=7bb5ff",
    pageSource: "https://sapph-ink.itch.io/ghost-beach"
  },
  {
    id: "HyperFleet",
    title: "Hyper Fleet",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/6470429?color=1e1e1e",
    pageSource: "https://sapph-ink.itch.io/hyper-fleet"
  },
  {
    id: "Artist",
    title: "The Artist",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/6586305?color=120d31",
    pageSource: "https://sapph-ink.itch.io/the-artist"
  },
  {
    id: "Toad",
    title: "Toad's Day Off",
    desc: "description",
    gameSource: "https://itch.io/embed-upload/4838807?color=4f6781",
    pageSource: "https://sapph-ink.itch.io/toads-day-off"
  },
  
]

export async function getContacts(query) {
  //if (!contacts) contacts = [];
  let newContacts = contacts;
  if (query) {
    newContacts = matchSorter(newContacts, query, { keys: ["title"] });
  }
  return newContacts.sort(sortBy("title"));
}

export async function getContact(id) {
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}