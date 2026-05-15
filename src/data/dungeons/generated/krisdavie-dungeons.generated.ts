import type { DungeonDefinition } from "../../../types/dungeon";

export const krisdavieDungeons = [
  {
    "id": "hyrule-castle",
    "name": "Hyrule Castle",
    "rooms": [
      {
        "id": "hyrule-castle-tile-1-0",
        "name": "Hyrule Castle Back Hall (1,0)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-castle-back-hall-w",
            "roomId": "hyrule-castle-tile-1-0",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-back-hall-e",
            "roomId": "hyrule-castle-tile-1-0",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-back-hall-down-stairs",
            "roomId": "hyrule-castle-tile-1-0",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-1-1",
        "name": "Sewers Secret Room (1,1)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "sewers-secret-room-key-door-s",
            "roomId": "hyrule-castle-tile-1-1",
            "label": "Key Door S",
            "direction": "south",
            "type": "key"
          },
          {
            "id": "sewers-rat-path-ws",
            "roomId": "hyrule-castle-tile-1-1",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "sewers-rat-path-wn",
            "roomId": "hyrule-castle-tile-1-1",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "sewer-drop",
            "roomId": "hyrule-castle-tile-1-1",
            "label": "Drop",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "sewers-secret-room-es",
            "roomId": "hyrule-castle-tile-1-1",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "sewers-secret-room-en",
            "roomId": "hyrule-castle-tile-1-1",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "sewers-secret-room-up-stairs",
            "roomId": "hyrule-castle-tile-1-1",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-2-1",
        "name": "Sanctuary (2,1)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "sanctuary-n",
            "roomId": "hyrule-castle-tile-2-1",
            "label": "N",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "sanctuary-mirror-route",
            "roomId": "hyrule-castle-tile-2-1",
            "label": "Sanctuary Mirror Route",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "sanctuary-s",
            "roomId": "hyrule-castle-tile-2-1",
            "label": "S",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-1-2",
        "name": "Sewers Key Rat (1,2)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "sewers-key-rat-s",
            "roomId": "hyrule-castle-tile-1-2",
            "label": "S",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "sewers-key-rat-ne",
            "roomId": "hyrule-castle-tile-1-2",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "sewers-dark-aquabats-n",
            "roomId": "hyrule-castle-tile-1-2",
            "label": "N",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "sewers-dark-aquabats-es",
            "roomId": "hyrule-castle-tile-1-2",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-2-3",
        "name": "Sewers Dark Cross (2,3)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "sewers-dark-cross-south-stairs",
            "roomId": "hyrule-castle-tile-2-3",
            "label": "South Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "sewers-dark-cross-key-door-n",
            "roomId": "hyrule-castle-tile-2-3",
            "label": "Key Door N",
            "direction": "north",
            "type": "key"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-1-5",
        "name": "Hyrule Castle Throne Room (1,5)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-castle-throne-room-n",
            "roomId": "hyrule-castle-tile-1-5",
            "label": "N",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-throne-room-south-stairs",
            "roomId": "hyrule-castle-tile-1-5",
            "label": "South Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-2-5",
        "name": "Hyrule Castle East Hall (2,5)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-castle-east-hall-w",
            "roomId": "hyrule-castle-tile-2-5",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-east-hall-s",
            "roomId": "hyrule-castle-tile-2-5",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-east-hall-sw",
            "roomId": "hyrule-castle-tile-2-5",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-0-6",
        "name": "Hyrule Castle West Lobby (0,6)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-castle-west-lobby-e",
            "roomId": "hyrule-castle-tile-0-6",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-west-lobby-n",
            "roomId": "hyrule-castle-tile-0-6",
            "label": "N",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-west-lobby-en",
            "roomId": "hyrule-castle-tile-0-6",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-west-lobby-s",
            "roomId": "hyrule-castle-tile-0-6",
            "label": "S",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-1-6",
        "name": "Hyrule Castle Lobby (1,6)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-castle-lobby-w",
            "roomId": "hyrule-castle-tile-1-6",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-lobby-e",
            "roomId": "hyrule-castle-tile-1-6",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-lobby-wn",
            "roomId": "hyrule-castle-tile-1-6",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-lobby-s",
            "roomId": "hyrule-castle-tile-1-6",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-lobby-north-stairs",
            "roomId": "hyrule-castle-tile-1-6",
            "label": "North Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-2-6",
        "name": "Hyrule Castle East Lobby (2,6)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-castle-east-lobby-w",
            "roomId": "hyrule-castle-tile-2-6",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-east-lobby-n",
            "roomId": "hyrule-castle-tile-2-6",
            "label": "N",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-east-lobby-nw",
            "roomId": "hyrule-castle-tile-2-6",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "hyrule-castle-east-lobby-s",
            "roomId": "hyrule-castle-tile-2-6",
            "label": "S",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-1-7",
        "name": "Hyrule Dungeon Armory (1,7)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-dungeon-armory-s",
            "roomId": "hyrule-castle-tile-1-7",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-armory-es",
            "roomId": "hyrule-castle-tile-1-7",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-armory-boomerang-ws",
            "roomId": "hyrule-castle-tile-1-7",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-armory-interior-key-door-n",
            "roomId": "hyrule-castle-tile-1-7",
            "label": "Key Door N",
            "direction": "west",
            "type": "key"
          },
          {
            "id": "hyrule-dungeon-armory-interior-key-door-s",
            "roomId": "hyrule-castle-tile-1-7",
            "label": "Key Door S",
            "direction": "west",
            "type": "key"
          },
          {
            "id": "hyrule-dungeon-armory-down-stairs",
            "roomId": "hyrule-castle-tile-1-7",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-2-7",
        "name": "Hyrule Dungeon Map Room (2,7)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-dungeon-map-room-up-stairs",
            "roomId": "hyrule-castle-tile-2-7",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "hyrule-dungeon-map-room-key-door-s",
            "roomId": "hyrule-castle-tile-2-7",
            "label": "Key Door S",
            "direction": "north",
            "type": "key"
          },
          {
            "id": "hyrule-dungeon-north-abyss-key-door-n",
            "roomId": "hyrule-castle-tile-2-7",
            "label": "Key Door N",
            "direction": "south",
            "type": "key"
          },
          {
            "id": "hyrule-dungeon-north-abyss-south-edge",
            "roomId": "hyrule-castle-tile-2-7",
            "label": "Hyrule Dungeon North Abyss South Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-north-abyss-catwalk-edge",
            "roomId": "hyrule-castle-tile-2-7",
            "label": "Hyrule Dungeon North Abyss Catwalk Edge",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-0-8",
        "name": "Hyrule Dungeon Cellblock (0,8)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-dungeon-cellblock-up-stairs",
            "roomId": "hyrule-castle-tile-0-8",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-1-8",
        "name": "Hyrule Dungeon Guardroom Catwalk Edge (1,8)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-dungeon-guardroom-catwalk-edge",
            "roomId": "hyrule-castle-tile-1-8",
            "label": "Hyrule Dungeon Guardroom Catwalk Edge",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-guardroom-abyss-edge",
            "roomId": "hyrule-castle-tile-1-8",
            "label": "Hyrule Dungeon Guardroom Abyss Edge",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-guardroom-n",
            "roomId": "hyrule-castle-tile-1-8",
            "label": "N",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "hyrule-castle-tile-2-8",
        "name": "Hyrule Dungeon South Abyss North Edge (2,8)",
        "dungeonId": "hyrule-castle",
        "originalDungeonId": "hyrule-castle",
        "doors": [
          {
            "id": "hyrule-dungeon-south-abyss-north-edge",
            "roomId": "hyrule-castle-tile-2-8",
            "label": "Hyrule Dungeon South Abyss North Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-south-abyss-west-edge",
            "roomId": "hyrule-castle-tile-2-8",
            "label": "Hyrule Dungeon South Abyss West Edge",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-south-abyss-catwalk-north-edge",
            "roomId": "hyrule-castle-tile-2-8",
            "label": "Hyrule Dungeon South Abyss Catwalk North Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "hyrule-dungeon-south-abyss-catwalk-west-edge",
            "roomId": "hyrule-castle-tile-2-8",
            "label": "Hyrule Dungeon South Abyss Catwalk West Edge",
            "direction": "west",
            "type": "normal"
          }
        ]
      }
    ]
  },
  {
    "id": "eastern-palace",
    "name": "Eastern Palace",
    "rooms": [
      {
        "id": "eastern-palace-tile-9-9",
        "name": "Eastern Darkness (9,9)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-darkness-s",
            "roomId": "eastern-palace-tile-9-9",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-darkness-ne",
            "roomId": "eastern-palace-tile-9-9",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-rupees-se",
            "roomId": "eastern-palace-tile-9-9",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-darkness-up-stairs",
            "roomId": "eastern-palace-tile-9-9",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "eastern-palace-tile-8-10",
        "name": "Eastern West Wing (8,10)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-west-wing-e",
            "roomId": "eastern-palace-tile-8-10",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-west-wing-ws",
            "roomId": "eastern-palace-tile-8-10",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-stalfos-spawn-es",
            "roomId": "eastern-palace-tile-8-10",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-stalfos-spawn-nw",
            "roomId": "eastern-palace-tile-8-10",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-compass-room-sw",
            "roomId": "eastern-palace-tile-8-10",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-compass-room-en",
            "roomId": "eastern-palace-tile-8-10",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "eastern-hint-tile-wn",
            "roomId": "eastern-palace-tile-8-10",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "eastern-hint-tile-en",
            "roomId": "eastern-palace-tile-8-10",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-hint-tile-blocked-path-se",
            "roomId": "eastern-palace-tile-8-10",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "eastern-palace-tile-9-10",
        "name": "Eastern Courtyard Ledge (9,10)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-courtyard-ledge-s",
            "roomId": "eastern-palace-tile-9-10",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-courtyard-ledge-w",
            "roomId": "eastern-palace-tile-9-10",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-courtyard-ledge-e",
            "roomId": "eastern-palace-tile-9-10",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-courtyard-wn",
            "roomId": "eastern-palace-tile-9-10",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-courtyard-en",
            "roomId": "eastern-palace-tile-9-10",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-courtyard-n",
            "roomId": "eastern-palace-tile-9-10",
            "label": "N",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "eastern-palace-tile-10-10",
        "name": "Eastern East Wing (10,10)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-east-wing-w",
            "roomId": "eastern-palace-tile-10-10",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-east-wing-en",
            "roomId": "eastern-palace-tile-10-10",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "eastern-pot-switch-wn",
            "roomId": "eastern-palace-tile-10-10",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "eastern-east-wing-es",
            "roomId": "eastern-palace-tile-10-10",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-map-balcony-ws",
            "roomId": "eastern-palace-tile-10-10",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-pot-switch-se",
            "roomId": "eastern-palace-tile-10-10",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-map-room-ne",
            "roomId": "eastern-palace-tile-10-10",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-map-valley-wn",
            "roomId": "eastern-palace-tile-10-10",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-map-valley-sw",
            "roomId": "eastern-palace-tile-10-10",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "eastern-palace-tile-8-11",
        "name": "Eastern Big Key (8,11)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-big-key-en",
            "roomId": "eastern-palace-tile-8-11",
            "label": "EN",
            "direction": "east",
            "type": "bigkey"
          },
          {
            "id": "eastern-big-key-ne",
            "roomId": "eastern-palace-tile-8-11",
            "label": "NE",
            "direction": "north",
            "type": "bigkey"
          }
        ]
      },
      {
        "id": "eastern-palace-tile-9-11",
        "name": "Eastern Cannonball (9,11)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-cannonball-s",
            "roomId": "eastern-palace-tile-9-11",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-cannonball-n",
            "roomId": "eastern-palace-tile-9-11",
            "label": "N",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "eastern-cannonball-ledge-wn",
            "roomId": "eastern-palace-tile-9-11",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-cannonball-ledge-key-door-en",
            "roomId": "eastern-palace-tile-9-11",
            "label": "Key Door EN",
            "direction": "east",
            "type": "key"
          }
        ]
      },
      {
        "id": "eastern-palace-tile-10-11",
        "name": "Eastern Dark Square (10,11)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-dark-square-nw",
            "roomId": "eastern-palace-tile-10-11",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "eastern-dark-square-key-door-wn",
            "roomId": "eastern-palace-tile-10-11",
            "label": "Key Door WN",
            "direction": "west",
            "type": "key"
          },
          {
            "id": "eastern-dark-square-en",
            "roomId": "eastern-palace-tile-10-11",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "eastern-dark-pots-wn",
            "roomId": "eastern-palace-tile-10-11",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "eastern-palace-tile-8-12",
        "name": "Eastern Boss (8,12)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-boss-se",
            "roomId": "eastern-palace-tile-8-12",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "eastern-palace-tile-9-12",
        "name": "Eastern Lobby (9,12)",
        "dungeonId": "eastern-palace",
        "originalDungeonId": "eastern-palace",
        "doors": [
          {
            "id": "eastern-lobby-s",
            "roomId": "eastern-palace-tile-9-12",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-lobby-n",
            "roomId": "eastern-palace-tile-9-12",
            "label": "N",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "eastern-lobby-bridge-s",
            "roomId": "eastern-palace-tile-9-12",
            "label": "S",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "eastern-lobby-nw",
            "roomId": "eastern-palace-tile-9-12",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-lobby-left-ledge-sw",
            "roomId": "eastern-palace-tile-9-12",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "eastern-lobby-ne",
            "roomId": "eastern-palace-tile-9-12",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-lobby-right-ledge-se",
            "roomId": "eastern-palace-tile-9-12",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "eastern-lobby-bridge-n",
            "roomId": "eastern-palace-tile-9-12",
            "label": "N",
            "direction": "north",
            "type": "normal"
          }
        ]
      }
    ]
  },
  {
    "id": "desert-palace",
    "name": "Desert Palace",
    "rooms": [
      {
        "id": "desert-palace-tile-3-3",
        "name": "Desert Boss (3,3)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-boss-sw",
            "roomId": "desert-palace-tile-3-3",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "desert-palace-tile-3-4",
        "name": "Desert Tiles 2 (3,4)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-tiles-2-se",
            "roomId": "desert-palace-tile-3-4",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-tiles-2-ne",
            "roomId": "desert-palace-tile-3-4",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "desert-wall-slide-se",
            "roomId": "desert-palace-tile-3-4",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "desert-wall-slide-nw",
            "roomId": "desert-palace-tile-3-4",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "desert-palace-tile-3-5",
        "name": "Desert Bridge (3,5)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-bridge-down-stairs",
            "roomId": "desert-palace-tile-3-5",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "desert-bridge-sw",
            "roomId": "desert-palace-tile-3-5",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-four-statues-nw",
            "roomId": "desert-palace-tile-3-5",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-four-statues-es",
            "roomId": "desert-palace-tile-3-5",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-beamos-hall-ws",
            "roomId": "desert-palace-tile-3-5",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-beamos-hall-ne",
            "roomId": "desert-palace-tile-3-5",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "desert-palace-tile-3-6",
        "name": "Desert Back Lobby (3,6)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-back-lobby-s",
            "roomId": "desert-palace-tile-3-6",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-back-lobby-nw",
            "roomId": "desert-palace-tile-3-6",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-tiles-1-sw",
            "roomId": "desert-palace-tile-3-6",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-tiles-1-up-stairs",
            "roomId": "desert-palace-tile-3-6",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "desert-palace-tile-3-7",
        "name": "Desert Sandworm Corner (3,7)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-sandworm-corner-s-edge",
            "roomId": "desert-palace-tile-3-7",
            "label": "S Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-sandworm-corner-e-edge",
            "roomId": "desert-palace-tile-3-7",
            "label": "E Edge",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "desert-sandworm-corner-ne",
            "roomId": "desert-palace-tile-3-7",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "desert-bonk-torch-se",
            "roomId": "desert-palace-tile-3-7",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "desert-sandworm-corner-ws",
            "roomId": "desert-palace-tile-3-7",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-circle-of-pots-es",
            "roomId": "desert-palace-tile-3-7",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-circle-of-pots-nw",
            "roomId": "desert-palace-tile-3-7",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-big-chest-sw",
            "roomId": "desert-palace-tile-3-7",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "desert-palace-tile-4-7",
        "name": "Desert Dead End Edge (4,7)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-dead-end-edge",
            "roomId": "desert-palace-tile-4-7",
            "label": "Desert Dead End Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-north-hall-se-edge",
            "roomId": "desert-palace-tile-4-7",
            "label": "SE Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-north-hall-sw-edge",
            "roomId": "desert-palace-tile-4-7",
            "label": "SW Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-north-hall-w-edge",
            "roomId": "desert-palace-tile-4-7",
            "label": "W Edge",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-north-hall-e-edge",
            "roomId": "desert-palace-tile-4-7",
            "label": "E Edge",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "desert-north-hall-nw",
            "roomId": "desert-palace-tile-4-7",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-map-sw",
            "roomId": "desert-palace-tile-4-7",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-north-hall-ne",
            "roomId": "desert-palace-tile-4-7",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "desert-map-se",
            "roomId": "desert-palace-tile-4-7",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "desert-palace-tile-5-7",
        "name": "Desert Cannonball (5,7)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-cannonball-s",
            "roomId": "desert-palace-tile-5-7",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-arrow-pot-corner-s-edge",
            "roomId": "desert-palace-tile-5-7",
            "label": "S Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-arrow-pot-corner-w-edge",
            "roomId": "desert-palace-tile-5-7",
            "label": "W Edge",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-arrow-pot-corner-nw",
            "roomId": "desert-palace-tile-5-7",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-trap-room-sw",
            "roomId": "desert-palace-tile-5-7",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "desert-palace-tile-3-8",
        "name": "Desert West Wing (3,8)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-west-wing-n-edge",
            "roomId": "desert-palace-tile-3-8",
            "label": "N Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "desert-west-wing-ws",
            "roomId": "desert-palace-tile-3-8",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-west-s",
            "roomId": "desert-palace-tile-3-8",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-west-lobby-es",
            "roomId": "desert-palace-tile-3-8",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-west-lobby-nw",
            "roomId": "desert-palace-tile-3-8",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-fairy-fountain-sw",
            "roomId": "desert-palace-tile-3-8",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "desert-palace-tile-4-8",
        "name": "Desert Main Lobby (4,8)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-main-lobby-s",
            "roomId": "desert-palace-tile-4-8",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-main-lobby-nw-edge",
            "roomId": "desert-palace-tile-4-8",
            "label": "NW Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "desert-main-lobby-n-edge",
            "roomId": "desert-palace-tile-4-8",
            "label": "N Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "desert-main-lobby-ne-edge",
            "roomId": "desert-palace-tile-4-8",
            "label": "NE Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "desert-main-lobby-e-edge",
            "roomId": "desert-palace-tile-4-8",
            "label": "E Edge",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "desert-palace-tile-5-8",
        "name": "Desert East Wing (5,8)",
        "dungeonId": "desert-palace",
        "originalDungeonId": "desert-palace",
        "doors": [
          {
            "id": "desert-east-wing-w-edge",
            "roomId": "desert-palace-tile-5-8",
            "label": "W Edge",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "desert-east-wing-n-edge",
            "roomId": "desert-palace-tile-5-8",
            "label": "N Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "desert-east-lobby-s",
            "roomId": "desert-palace-tile-5-8",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-east-lobby-ws",
            "roomId": "desert-palace-tile-5-8",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-east-wing-es",
            "roomId": "desert-palace-tile-5-8",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "desert-east-wing-key-door-en",
            "roomId": "desert-palace-tile-5-8",
            "label": "Key Door EN",
            "direction": "north",
            "type": "key"
          },
          {
            "id": "desert-compass-key-door-wn",
            "roomId": "desert-palace-tile-5-8",
            "label": "Key Door WN",
            "direction": "north",
            "type": "key"
          },
          {
            "id": "desert-compass-ne",
            "roomId": "desert-palace-tile-5-8",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          }
        ]
      }
    ]
  },
  {
    "id": "tower-of-hera",
    "name": "Tower of Hera",
    "rooms": [
      {
        "id": "tower-of-hera-tile-7-0",
        "name": "Hera Boss (7,0)",
        "dungeonId": "tower-of-hera",
        "originalDungeonId": "tower-of-hera",
        "doors": [
          {
            "id": "hera-boss-down-stairs",
            "roomId": "tower-of-hera-tile-7-0",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "tower-of-hera-tile-7-1",
        "name": "Hera 5F (7,1)",
        "dungeonId": "tower-of-hera",
        "originalDungeonId": "tower-of-hera",
        "doors": [
          {
            "id": "hera-5f-down-stairs",
            "roomId": "tower-of-hera-tile-7-1",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "hera-5f-up-stairs",
            "roomId": "tower-of-hera-tile-7-1",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "tower-of-hera-tile-7-2",
        "name": "Hera 4F (7,2)",
        "dungeonId": "tower-of-hera",
        "originalDungeonId": "tower-of-hera",
        "doors": [
          {
            "id": "hera-4f-down-stairs",
            "roomId": "tower-of-hera-tile-7-2",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "hera-4f-up-stairs",
            "roomId": "tower-of-hera-tile-7-2",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "tower-of-hera-tile-1-3",
        "name": "Hera Beetles (1,3)",
        "dungeonId": "tower-of-hera",
        "originalDungeonId": "tower-of-hera",
        "doors": [
          {
            "id": "hera-beetles-down-stairs",
            "roomId": "tower-of-hera-tile-1-3",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "hera-beetles-ws",
            "roomId": "tower-of-hera-tile-1-3",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hera-startile-corner-es",
            "roomId": "tower-of-hera-tile-1-3",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hera-startile-corner-nw",
            "roomId": "tower-of-hera-tile-1-3",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "hera-startile-wide-sw",
            "roomId": "tower-of-hera-tile-1-3",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "hera-startile-wide-up-stairs",
            "roomId": "tower-of-hera-tile-1-3",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "tower-of-hera-tile-7-7",
        "name": "Hera Lobby (7,7)",
        "dungeonId": "tower-of-hera",
        "originalDungeonId": "tower-of-hera",
        "doors": [
          {
            "id": "hera-lobby-s",
            "roomId": "tower-of-hera-tile-7-7",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "hera-lobby-down-stairs",
            "roomId": "tower-of-hera-tile-7-7",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "hera-lobby-key-stairs",
            "roomId": "tower-of-hera-tile-7-7",
            "label": "Hera Lobby Key Stairs",
            "direction": "north",
            "type": "key"
          },
          {
            "id": "hera-lobby-up-stairs",
            "roomId": "tower-of-hera-tile-7-7",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "tower-of-hera-tile-7-8",
        "name": "Hera Basement Cage (7,8)",
        "dungeonId": "tower-of-hera",
        "originalDungeonId": "tower-of-hera",
        "doors": [
          {
            "id": "hera-basement-cage-up-stairs",
            "roomId": "tower-of-hera-tile-7-8",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "hera-tile-room-up-stairs",
            "roomId": "tower-of-hera-tile-7-8",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "hera-tile-room-en",
            "roomId": "tower-of-hera-tile-7-8",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "hera-tridorm-wn",
            "roomId": "tower-of-hera-tile-7-8",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "hera-tridorm-se",
            "roomId": "tower-of-hera-tile-7-8",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "hera-torches-ne",
            "roomId": "tower-of-hera-tile-7-8",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          }
        ]
      }
    ]
  },
  {
    "id": "castle-tower",
    "name": "Castle Tower",
    "rooms": [
      {
        "id": "castle-tower-tile-0-2",
        "name": "Tower Agahnim 1 (0,2)",
        "dungeonId": "castle-tower",
        "originalDungeonId": "castle-tower",
        "doors": [
          {
            "id": "tower-agahnim-1-sw",
            "roomId": "castle-tower-tile-0-2",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "castle-tower-tile-0-11",
        "name": "Tower Red Spears (0,11)",
        "dungeonId": "castle-tower",
        "originalDungeonId": "castle-tower",
        "doors": [
          {
            "id": "tower-red-spears-down-stairs",
            "roomId": "castle-tower-tile-0-11",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "tower-red-spears-wn",
            "roomId": "castle-tower-tile-0-11",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tower-red-guards-en",
            "roomId": "castle-tower-tile-0-11",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tower-red-guards-sw",
            "roomId": "castle-tower-tile-0-11",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tower-circle-of-pots-nw",
            "roomId": "castle-tower-tile-0-11",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tower-circle-of-pots-es",
            "roomId": "castle-tower-tile-0-11",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tower-pacifist-run-ws",
            "roomId": "castle-tower-tile-0-11",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tower-pacifist-run-up-stairs",
            "roomId": "castle-tower-tile-0-11",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "castle-tower-tile-0-12",
        "name": "Tower Dual Statues (0,12)",
        "dungeonId": "castle-tower",
        "originalDungeonId": "castle-tower",
        "doors": [
          {
            "id": "tower-dual-statues-down-stairs",
            "roomId": "castle-tower-tile-0-12",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "tower-dual-statues-ws",
            "roomId": "castle-tower-tile-0-12",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tower-dark-pits-es",
            "roomId": "castle-tower-tile-0-12",
            "label": "ES",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "tower-dark-pits-en",
            "roomId": "castle-tower-tile-0-12",
            "label": "EN",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "tower-dark-archers-wn",
            "roomId": "castle-tower-tile-0-12",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tower-dark-archers-up-stairs",
            "roomId": "castle-tower-tile-0-12",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "castle-tower-tile-0-13",
        "name": "Tower Lone Statue (0,13)",
        "dungeonId": "castle-tower",
        "originalDungeonId": "castle-tower",
        "doors": [
          {
            "id": "tower-lone-statue-down-stairs",
            "roomId": "castle-tower-tile-0-13",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "tower-lone-statue-wn",
            "roomId": "castle-tower-tile-0-13",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tower-dark-maze-en",
            "roomId": "castle-tower-tile-0-13",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tower-dark-maze-es",
            "roomId": "castle-tower-tile-0-13",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tower-dark-chargers-ws",
            "roomId": "castle-tower-tile-0-13",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tower-dark-chargers-up-stairs",
            "roomId": "castle-tower-tile-0-13",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "castle-tower-tile-0-14",
        "name": "Tower Lobby (0,14)",
        "dungeonId": "castle-tower",
        "originalDungeonId": "castle-tower",
        "doors": [
          {
            "id": "tower-lobby-s",
            "roomId": "castle-tower-tile-0-14",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tower-lobby-nw",
            "roomId": "castle-tower-tile-0-14",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tower-gold-knights-sw",
            "roomId": "castle-tower-tile-0-14",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tower-gold-knights-en",
            "roomId": "castle-tower-tile-0-14",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tower-room-03-wn",
            "roomId": "castle-tower-tile-0-14",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tower-room-03-up-stairs",
            "roomId": "castle-tower-tile-0-14",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      }
    ]
  },
  {
    "id": "palace-of-darkness",
    "name": "Palace of Darkness",
    "rooms": [
      {
        "id": "palace-of-darkness-tile-9-0",
        "name": "PoD Shooter Room (9,0)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-shooter-room-up-stairs",
            "roomId": "palace-of-darkness-tile-9-0",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "pod-warp-room-up-stairs",
            "roomId": "palace-of-darkness-tile-9-0",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-10-0",
        "name": "PoD Basement Ledge (10,0)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-basement-ledge-up-stairs",
            "roomId": "palace-of-darkness-tile-10-0",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "pod-basement-ledge-drop-entrance",
            "roomId": "palace-of-darkness-tile-10-0",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "pod-stalfos-basement-drop-entrance",
            "roomId": "palace-of-darkness-tile-10-0",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-11-0",
        "name": "PoD Dark Pegs (11,0)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-dark-pegs-up-ladder",
            "roomId": "palace-of-darkness-tile-11-0",
            "label": "Up Ladder",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "pod-dark-pegs-wn",
            "roomId": "palace-of-darkness-tile-11-0",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "pod-lonely-turtle-sw",
            "roomId": "palace-of-darkness-tile-11-0",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "pod-lonely-turtle-en",
            "roomId": "palace-of-darkness-tile-11-0",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "pod-turtle-party-es",
            "roomId": "palace-of-darkness-tile-11-0",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "pod-turtle-party-nw",
            "roomId": "palace-of-darkness-tile-11-0",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "pod-callback-ws",
            "roomId": "palace-of-darkness-tile-11-0",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-9-1",
        "name": "PoD Dark Maze (9,1)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-dark-maze-en",
            "roomId": "palace-of-darkness-tile-9-1",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "pod-dark-maze-e",
            "roomId": "palace-of-darkness-tile-9-1",
            "label": "E",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-10-1",
        "name": "PoD Falling Bridge (10,1)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-falling-bridge-sw",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "pod-falling-bridge-wn",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "pod-falling-bridge-en",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "pod-big-chest-balcony-w",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "pod-compass-room-wn",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "pod-compass-room-se",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "pod-harmless-hellway-ne",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "pod-harmless-hellway-se",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "pod-compass-room-w-down-stairs",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "pod-compass-room-e-down-stairs",
            "roomId": "palace-of-darkness-tile-10-1",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-10-2",
        "name": "PoD Arena Main (10,2)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-arena-main-sw",
            "roomId": "palace-of-darkness-tile-10-2",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "pod-arena-bridge-se",
            "roomId": "palace-of-darkness-tile-10-2",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "pod-arena-main-nw",
            "roomId": "palace-of-darkness-tile-10-2",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "pod-arena-main-ne",
            "roomId": "palace-of-darkness-tile-10-2",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "pod-arena-crystals-e",
            "roomId": "palace-of-darkness-tile-10-2",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "pod-arena-ledge-es",
            "roomId": "palace-of-darkness-tile-10-2",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-11-2",
        "name": "PoD Sexy Statue (11,2)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-sexy-statue-w",
            "roomId": "palace-of-darkness-tile-11-2",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "pod-sexy-statue-nw",
            "roomId": "palace-of-darkness-tile-11-2",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "pod-map-balcony-ws",
            "roomId": "palace-of-darkness-tile-11-2",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "pod-map-balcony-south-stairs",
            "roomId": "palace-of-darkness-tile-11-2",
            "label": "South Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-10-3",
        "name": "PoD Pit Room (10,3)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-pit-room-s",
            "roomId": "palace-of-darkness-tile-10-3",
            "label": "S",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "pod-pit-room-nw",
            "roomId": "palace-of-darkness-tile-10-3",
            "label": "NW",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "pod-pit-room-ne",
            "roomId": "palace-of-darkness-tile-10-3",
            "label": "NE",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "pod-big-key-landing-down-stairs",
            "roomId": "palace-of-darkness-tile-10-3",
            "label": "Down Stairs",
            "direction": "north",
            "type": "bigkey"
          },
          {
            "id": "pod-pit-room-bomb-hole",
            "roomId": "palace-of-darkness-tile-10-3",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "pod-pit-room-freefall",
            "roomId": "palace-of-darkness-tile-10-3",
            "label": "PoD Pit Room Freefall",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-10-4",
        "name": "PoD Lobby (10,4)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-lobby-s",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "pod-lobby-n",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "N",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "pod-lobby-nw",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "pod-lobby-ne",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "pod-left-cage-sw",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "pod-middle-cage-s",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "S",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "pod-middle-cage-se",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "pod-left-cage-down-stairs",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "pod-middle-cage-down-stairs",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "pod-middle-cage-n",
            "roomId": "palace-of-darkness-tile-10-4",
            "label": "N",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-10-5",
        "name": "PoD Boss (10,5)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-boss-se",
            "roomId": "palace-of-darkness-tile-10-5",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "palace-of-darkness-tile-10-6",
        "name": "PoD Dark Basement (10,6)",
        "dungeonId": "palace-of-darkness",
        "originalDungeonId": "palace-of-darkness",
        "doors": [
          {
            "id": "pod-dark-basement-w-up-stairs",
            "roomId": "palace-of-darkness-tile-10-6",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "pod-dark-basement-e-up-stairs",
            "roomId": "palace-of-darkness-tile-10-6",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "pod-dark-alley-ne",
            "roomId": "palace-of-darkness-tile-10-6",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          }
        ]
      }
    ]
  },
  {
    "id": "swamp-palace",
    "name": "Swamp Palace",
    "rooms": [
      {
        "id": "swamp-palace-tile-6-0",
        "name": "Swamp Boss (6,0)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-boss-sw",
            "roomId": "swamp-palace-tile-6-0",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-6-1",
        "name": "Swamp (6,1)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-c-down-stairs",
            "roomId": "swamp-palace-tile-6-1",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-c-se",
            "roomId": "swamp-palace-tile-6-1",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-waterway-ne",
            "roomId": "swamp-palace-tile-6-1",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-waterway-n",
            "roomId": "swamp-palace-tile-6-1",
            "label": "N",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "swamp-waterway-nw",
            "roomId": "swamp-palace-tile-6-1",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-i-s",
            "roomId": "swamp-palace-tile-6-1",
            "label": "S",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-t-sw",
            "roomId": "swamp-palace-tile-6-1",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-t-nw",
            "roomId": "swamp-palace-tile-6-1",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-6-2",
        "name": "Swamp Push Statue (6,2)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-push-statue-s",
            "roomId": "swamp-palace-tile-6-2",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "swamp-push-statue-nw",
            "roomId": "swamp-palace-tile-6-2",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-push-statue-ne",
            "roomId": "swamp-palace-tile-6-2",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-push-statue-down-stairs",
            "roomId": "swamp-palace-tile-6-2",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-shooters-sw",
            "roomId": "swamp-palace-tile-6-2",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-shooters-en",
            "roomId": "swamp-palace-tile-6-2",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-left-elbow-wn",
            "roomId": "swamp-palace-tile-6-2",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-left-elbow-down-stairs",
            "roomId": "swamp-palace-tile-6-2",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-right-elbow-se",
            "roomId": "swamp-palace-tile-6-2",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-right-elbow-down-stairs",
            "roomId": "swamp-palace-tile-6-2",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-8-2",
        "name": "Swamp Lobby (8,2)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-lobby-s",
            "roomId": "swamp-palace-tile-8-2",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "swamp-entrance-down-stairs",
            "roomId": "swamp-palace-tile-8-2",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-4-3",
        "name": "Swamp West Shallows (4,3)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-west-shallows-es",
            "roomId": "swamp-palace-tile-4-3",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-west-block-path-up-stairs",
            "roomId": "swamp-palace-tile-4-3",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-barrier-en",
            "roomId": "swamp-palace-tile-4-3",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-west-ledge-drop-entrance",
            "roomId": "swamp-palace-tile-4-3",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "swamp-barrier-ledge-drop-entrance",
            "roomId": "swamp-palace-tile-4-3",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-5-3",
        "name": "Swamp Crystal Switch (5,3)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-crystal-switch-en",
            "roomId": "swamp-palace-tile-5-3",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-crystal-switch-se",
            "roomId": "swamp-palace-tile-5-3",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-shortcut-ne",
            "roomId": "swamp-palace-tile-5-3",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-trench-2-pots-es",
            "roomId": "swamp-palace-tile-5-3",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-trench-2-blocks-n",
            "roomId": "swamp-palace-tile-5-3",
            "label": "N",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "swamp-trench-2-alcove-s",
            "roomId": "swamp-palace-tile-5-3",
            "label": "S",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-trench-2-departure-ws",
            "roomId": "swamp-palace-tile-5-3",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-big-key-ledge-wn",
            "roomId": "swamp-palace-tile-5-3",
            "label": "WN",
            "direction": "west",
            "type": "bigkey"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-6-3",
        "name": "Swamp Hub (6,3)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-hub-es",
            "roomId": "swamp-palace-tile-6-3",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-hub-s",
            "roomId": "swamp-palace-tile-6-3",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "swamp-hub-ws",
            "roomId": "swamp-palace-tile-6-3",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-hub-wn",
            "roomId": "swamp-palace-tile-6-3",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-hub-dead-ledge-en",
            "roomId": "swamp-palace-tile-6-3",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-hub-north-ledge-n",
            "roomId": "swamp-palace-tile-6-3",
            "label": "N",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-7-3",
        "name": "Swamp Map Ledge (7,3)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-map-ledge-en",
            "roomId": "swamp-palace-tile-7-3",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-trench-1-approach-es",
            "roomId": "swamp-palace-tile-7-3",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-trench-1-nexus-n",
            "roomId": "swamp-palace-tile-7-3",
            "label": "N",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "swamp-trench-1-alcove-s",
            "roomId": "swamp-palace-tile-7-3",
            "label": "S",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-trench-1-key-ledge-nw",
            "roomId": "swamp-palace-tile-7-3",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-trench-1-departure-ws",
            "roomId": "swamp-palace-tile-7-3",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-hammer-switch-sw",
            "roomId": "swamp-palace-tile-7-3",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-hammer-switch-wn",
            "roomId": "swamp-palace-tile-7-3",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-8-3",
        "name": "Swamp Pot Row (8,3)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-pot-row-up-stairs",
            "roomId": "swamp-palace-tile-8-3",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-pot-row-wn",
            "roomId": "swamp-palace-tile-8-3",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-pot-row-ws",
            "roomId": "swamp-palace-tile-8-3",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-6-4",
        "name": "Swamp Donut Top (6,4)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-donut-top-n",
            "roomId": "swamp-palace-tile-6-4",
            "label": "N",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-donut-top-se",
            "roomId": "swamp-palace-tile-6-4",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-donut-bottom-ne",
            "roomId": "swamp-palace-tile-6-4",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-donut-bottom-nw",
            "roomId": "swamp-palace-tile-6-4",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-compass-donut-sw",
            "roomId": "swamp-palace-tile-6-4",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-4-5",
        "name": "Swamp Attic (4,5)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-attic-down-stairs",
            "roomId": "swamp-palace-tile-4-5",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-attic-left-pit",
            "roomId": "swamp-palace-tile-4-5",
            "label": "Swamp Attic Left Pit",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "swamp-attic-right-pit",
            "roomId": "swamp-palace-tile-4-5",
            "label": "Swamp Attic Right Pit",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-6-6",
        "name": "Swamp Waterfall Room (6,6)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-waterfall-room-sw",
            "roomId": "swamp-palace-tile-6-6",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "swamp-waterfall-room-nw",
            "roomId": "swamp-palace-tile-6-6",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-waterfall-room-ne",
            "roomId": "swamp-palace-tile-6-6",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-refill-sw",
            "roomId": "swamp-palace-tile-6-6",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "swamp-behind-waterfall-se",
            "roomId": "swamp-palace-tile-6-6",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "swamp-behind-waterfall-up-stairs",
            "roomId": "swamp-palace-tile-6-6",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "swamp-palace-tile-6-7",
        "name": "Swamp Drain Left (6,7)",
        "dungeonId": "swamp-palace",
        "originalDungeonId": "swamp-palace",
        "doors": [
          {
            "id": "swamp-drain-left-up-stairs",
            "roomId": "swamp-palace-tile-6-7",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-drain-wn",
            "roomId": "swamp-palace-tile-6-7",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-drain-right-up-stairs",
            "roomId": "swamp-palace-tile-6-7",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-flooded-room-up-stairs",
            "roomId": "swamp-palace-tile-6-7",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "swamp-flooded-room-ws",
            "roomId": "swamp-palace-tile-6-7",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "swamp-basement-shallows-nw",
            "roomId": "swamp-palace-tile-6-7",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-basement-shallows-en",
            "roomId": "swamp-palace-tile-6-7",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "swamp-basement-shallows-es",
            "roomId": "swamp-palace-tile-6-7",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          }
        ]
      }
    ]
  },
  {
    "id": "skull-woods",
    "name": "Skull Woods",
    "rooms": [
      {
        "id": "skull-woods-tile-9-2",
        "name": "Skull Boss (9,2)",
        "dungeonId": "skull-woods",
        "originalDungeonId": "skull-woods",
        "doors": [
          {
            "id": "skull-boss-drop-entrance",
            "roomId": "skull-woods-tile-9-2",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "skull-woods-tile-9-3",
        "name": "Skull Spike Corner (9,3)",
        "dungeonId": "skull-woods",
        "originalDungeonId": "skull-woods",
        "doors": [
          {
            "id": "skull-spike-corner-sw",
            "roomId": "skull-woods-tile-9-3",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-spike-corner-es",
            "roomId": "skull-woods-tile-9-3",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-final-drop-ws",
            "roomId": "skull-woods-tile-9-3",
            "label": "WS",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "skull-final-drop-hole",
            "roomId": "skull-woods-tile-9-3",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "skull-woods-tile-6-5",
        "name": "Skull Small Hall (6,5)",
        "dungeonId": "skull-woods",
        "originalDungeonId": "skull-woods",
        "doors": [
          {
            "id": "skull-small-hall-es",
            "roomId": "skull-woods-tile-6-5",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "skull-small-hall-ws",
            "roomId": "skull-woods-tile-6-5",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-drop-entrance-back",
            "roomId": "skull-woods-tile-6-5",
            "label": "Skull Drop Entrance Back",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "skull-2-west-lobby-s",
            "roomId": "skull-woods-tile-6-5",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-2-west-lobby-es",
            "roomId": "skull-woods-tile-6-5",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-2-west-lobby-nw",
            "roomId": "skull-woods-tile-6-5",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "skull-x-room-sw",
            "roomId": "skull-woods-tile-6-5",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "skull-woods-tile-7-5",
        "name": "Skull Pot Prison (7,5)",
        "dungeonId": "skull-woods",
        "originalDungeonId": "skull-woods",
        "doors": [
          {
            "id": "skull-pot-prison-es",
            "roomId": "skull-woods-tile-7-5",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "skull-pot-prison-se",
            "roomId": "skull-woods-tile-7-5",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-2-east-lobby-sw",
            "roomId": "skull-woods-tile-7-5",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-2-east-lobby-ws",
            "roomId": "skull-woods-tile-7-5",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "skull-2-east-lobby-nw",
            "roomId": "skull-woods-tile-7-5",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "skull-big-key-sw",
            "roomId": "skull-woods-tile-7-5",
            "label": "SW",
            "direction": "west",
            "type": "bigkey"
          },
          {
            "id": "skull-big-key-en",
            "roomId": "skull-woods-tile-7-5",
            "label": "EN",
            "direction": "north",
            "type": "bigkey"
          },
          {
            "id": "skull-lone-pot-wn",
            "roomId": "skull-woods-tile-7-5",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "skull-woods-tile-8-5",
        "name": "Skull 1 Lobby (8,5)",
        "dungeonId": "skull-woods",
        "originalDungeonId": "skull-woods",
        "doors": [
          {
            "id": "skull-1-lobby-s",
            "roomId": "skull-woods-tile-8-5",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-1-lobby-ws",
            "roomId": "skull-woods-tile-8-5",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "skull-1-lobby-es",
            "roomId": "skull-woods-tile-8-5",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-map-room-ws",
            "roomId": "skull-woods-tile-8-5",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-map-room-se",
            "roomId": "skull-woods-tile-8-5",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-pot-circle-wn",
            "roomId": "skull-woods-tile-8-5",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "skull-drop-entrance-top",
            "roomId": "skull-woods-tile-8-5",
            "label": "Skull Drop Entrance Top",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "skull-pull-switch-en",
            "roomId": "skull-woods-tile-8-5",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "skull-pull-switch-s",
            "roomId": "skull-woods-tile-8-5",
            "label": "S",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "skull-big-chest-n",
            "roomId": "skull-woods-tile-8-5",
            "label": "N",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "skull-woods-tile-9-5",
        "name": "Skull 3 Lobby (9,5)",
        "dungeonId": "skull-woods",
        "originalDungeonId": "skull-woods",
        "doors": [
          {
            "id": "skull-3-lobby-sw",
            "roomId": "skull-woods-tile-9-5",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-3-lobby-nw",
            "roomId": "skull-woods-tile-9-5",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "skull-3-lobby-en",
            "roomId": "skull-woods-tile-9-5",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "skull-east-bridge-wn",
            "roomId": "skull-woods-tile-9-5",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "skull-east-bridge-ws",
            "roomId": "skull-woods-tile-9-5",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "skull-west-bridge-nook-es",
            "roomId": "skull-woods-tile-9-5",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "skull-woods-tile-7-6",
        "name": "Skull Compass Room (7,6)",
        "dungeonId": "skull-woods",
        "originalDungeonId": "skull-woods",
        "doors": [
          {
            "id": "skull-compass-room-ne",
            "roomId": "skull-woods-tile-7-6",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "skull-compass-room-es",
            "roomId": "skull-woods-tile-7-6",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "skull-left-drop-es",
            "roomId": "skull-woods-tile-7-6",
            "label": "ES",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "skull-drop-entrance-left",
            "roomId": "skull-woods-tile-7-6",
            "label": "Skull Drop Entrance Left",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "skull-compass-room-ws",
            "roomId": "skull-woods-tile-7-6",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "skull-woods-tile-8-6",
        "name": "Skull Pinball (8,6)",
        "dungeonId": "skull-woods",
        "originalDungeonId": "skull-woods",
        "doors": [
          {
            "id": "skull-pinball-ne",
            "roomId": "skull-woods-tile-8-6",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "skull-pinball-ws",
            "roomId": "skull-woods-tile-8-6",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "skull-drop-entrance-right",
            "roomId": "skull-woods-tile-8-6",
            "label": "Skull Drop Entrance Right",
            "direction": "drop",
            "type": "drop"
          }
        ]
      }
    ]
  },
  {
    "id": "thieves-town",
    "name": "Thieves Town",
    "rooms": [
      {
        "id": "thieves-town-tile-4-4",
        "name": "Thieves Conveyor Bridge (4,4)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-conveyor-bridge-en",
            "roomId": "thieves-town-tile-4-4",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-conveyor-bridge-es",
            "roomId": "thieves-town-tile-4-4",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-conveyor-bridge-ws",
            "roomId": "thieves-town-tile-4-4",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-big-chest-room-es",
            "roomId": "thieves-town-tile-4-4",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-conveyor-block-wn",
            "roomId": "thieves-town-tile-4-4",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-trap-en",
            "roomId": "thieves-town-tile-4-4",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "thieves-town-tile-5-4",
        "name": "Thieves Basement Block (5,4)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-basement-block-up-stairs",
            "roomId": "thieves-town-tile-5-4",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "thieves-basement-block-wn",
            "roomId": "thieves-town-tile-5-4",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-lonely-zazak-ws",
            "roomId": "thieves-town-tile-5-4",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-blocked-entry-sw",
            "roomId": "thieves-town-tile-5-4",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-lonely-zazak-nw",
            "roomId": "thieves-town-tile-5-4",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-lonely-zazak-es",
            "roomId": "thieves-town-tile-5-4",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-blinds-cell-ws",
            "roomId": "thieves-town-tile-5-4",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "thieves-town-tile-5-6",
        "name": "Thieves Cricket Hall Right Edge (5,6)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-cricket-hall-right-edge",
            "roomId": "thieves-town-tile-5-6",
            "label": "Thieves Cricket Hall Right Edge",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-cricket-hall-right-es",
            "roomId": "thieves-town-tile-5-6",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-attic-window-ws",
            "roomId": "thieves-town-tile-5-6",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "thieves-town-tile-11-10",
        "name": "Thieves Spike Switch (11,10)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-spike-switch-sw",
            "roomId": "thieves-town-tile-11-10",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-spike-switch-up-stairs",
            "roomId": "thieves-town-tile-11-10",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "thieves-town-tile-12-10",
        "name": "Thieves Boss (12,10)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-boss-se",
            "roomId": "thieves-town-tile-12-10",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "thieves-town-tile-11-11",
        "name": "Thieves Spike Track (11,11)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-spike-track-es",
            "roomId": "thieves-town-tile-11-11",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-hellway-nw",
            "roomId": "thieves-town-tile-11-11",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-triple-bypass-en",
            "roomId": "thieves-town-tile-11-11",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-spike-track-ws",
            "roomId": "thieves-town-tile-11-11",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-hellway-crystal-es",
            "roomId": "thieves-town-tile-11-11",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-spike-track-ne",
            "roomId": "thieves-town-tile-11-11",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-triple-bypass-se",
            "roomId": "thieves-town-tile-11-11",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-hellway-crystal-en",
            "roomId": "thieves-town-tile-11-11",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-triple-bypass-wn",
            "roomId": "thieves-town-tile-11-11",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "thieves-town-tile-12-11",
        "name": "Thieves Hallway (12,11)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-hallway-se",
            "roomId": "thieves-town-tile-12-11",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-hallway-ne",
            "roomId": "thieves-town-tile-12-11",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-pot-alcove-mid-ws",
            "roomId": "thieves-town-tile-12-11",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-pot-alcove-bottom-sw",
            "roomId": "thieves-town-tile-12-11",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-conveyor-maze-wn",
            "roomId": "thieves-town-tile-12-11",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-hallway-ws",
            "roomId": "thieves-town-tile-12-11",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-pot-alcove-mid-es",
            "roomId": "thieves-town-tile-12-11",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-conveyor-maze-sw",
            "roomId": "thieves-town-tile-12-11",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-pot-alcove-top-nw",
            "roomId": "thieves-town-tile-12-11",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-conveyor-maze-en",
            "roomId": "thieves-town-tile-12-11",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-hallway-wn",
            "roomId": "thieves-town-tile-12-11",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-conveyor-maze-down-stairs",
            "roomId": "thieves-town-tile-12-11",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "thieves-town-tile-11-12",
        "name": "Thieves Ambush (11,12)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-ambush-s-edge",
            "roomId": "thieves-town-tile-11-12",
            "label": "S Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-ambush-se-edge",
            "roomId": "thieves-town-tile-11-12",
            "label": "SE Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-ambush-es-edge",
            "roomId": "thieves-town-tile-11-12",
            "label": "ES Edge",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-ambush-en-edge",
            "roomId": "thieves-town-tile-11-12",
            "label": "EN Edge",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-ambush-e",
            "roomId": "thieves-town-tile-11-12",
            "label": "E",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "thieves-town-tile-12-12",
        "name": "Thieves BK Corner (12,12)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-bk-corner-wn-edge",
            "roomId": "thieves-town-tile-12-12",
            "label": "WN Edge",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-bk-corner-ws-edge",
            "roomId": "thieves-town-tile-12-12",
            "label": "WS Edge",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-bk-corner-s-edge",
            "roomId": "thieves-town-tile-12-12",
            "label": "S Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-bk-corner-sw-edge",
            "roomId": "thieves-town-tile-12-12",
            "label": "SW Edge",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-rail-ledge-w",
            "roomId": "thieves-town-tile-12-12",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-rail-ledge-nw",
            "roomId": "thieves-town-tile-12-12",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-bk-corner-ne",
            "roomId": "thieves-town-tile-12-12",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "thieves-town-tile-11-13",
        "name": "Thieves Lobby (11,13)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-lobby-s",
            "roomId": "thieves-town-tile-11-13",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "thieves-lobby-n-edge",
            "roomId": "thieves-town-tile-11-13",
            "label": "N Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-lobby-ne-edge",
            "roomId": "thieves-town-tile-11-13",
            "label": "NE Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-lobby-e",
            "roomId": "thieves-town-tile-11-13",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "thieves-big-chest-nook-es-edge",
            "roomId": "thieves-town-tile-11-13",
            "label": "ES Edge",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "thieves-town-tile-12-13",
        "name": "Thieves Compass Room (12,13)",
        "dungeonId": "thieves-town",
        "originalDungeonId": "thieves-town",
        "doors": [
          {
            "id": "thieves-compass-room-nw-edge",
            "roomId": "thieves-town-tile-12-13",
            "label": "NW Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-compass-room-n-edge",
            "roomId": "thieves-town-tile-12-13",
            "label": "N Edge",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "thieves-compass-room-ws-edge",
            "roomId": "thieves-town-tile-12-13",
            "label": "WS Edge",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "thieves-compass-room-w",
            "roomId": "thieves-town-tile-12-13",
            "label": "W",
            "direction": "west",
            "type": "normal"
          }
        ]
      }
    ]
  },
  {
    "id": "ice-palace",
    "name": "Ice Palace",
    "rooms": [
      {
        "id": "ice-palace-tile-14-0",
        "name": "Ice Lobby (14,0)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-lobby-se",
            "roomId": "ice-palace-tile-14-0",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-lobby-ws",
            "roomId": "ice-palace-tile-14-0",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-jelly-key-es",
            "roomId": "ice-palace-tile-14-0",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-jelly-key-down-stairs",
            "roomId": "ice-palace-tile-14-0",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-1",
        "name": "Ice Floor Switch (14,1)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-floor-switch-up-stairs",
            "roomId": "ice-palace-tile-14-1",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "ice-floor-switch-es",
            "roomId": "ice-palace-tile-14-1",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-cross-left-ws",
            "roomId": "ice-palace-tile-14-1",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-cross-top-ne",
            "roomId": "ice-palace-tile-14-1",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-bomb-drop-se",
            "roomId": "ice-palace-tile-14-1",
            "label": "SE",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "ice-bomb-drop-hole",
            "roomId": "ice-palace-tile-14-1",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "ice-cross-bottom-se",
            "roomId": "ice-palace-tile-14-1",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-cross-right-es",
            "roomId": "ice-palace-tile-14-1",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ice-palace-tile-15-1",
        "name": "Ice Pengator Switch (15,1)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-pengator-switch-ws",
            "roomId": "ice-palace-tile-15-1",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "ice-pengator-switch-es",
            "roomId": "ice-palace-tile-15-1",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-dead-end-ws",
            "roomId": "ice-palace-tile-15-1",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-big-key-down-ladder",
            "roomId": "ice-palace-tile-15-1",
            "label": "Down Ladder",
            "direction": "east",
            "type": "bigkey"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-2",
        "name": "Ice Compass Room (14,2)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-compass-room-ne",
            "roomId": "ice-palace-tile-14-2",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-3",
        "name": "Ice Stalfos Hint (14,3)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-stalfos-hint-se",
            "roomId": "ice-palace-tile-14-3",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-stalfos-hint-drop-entrance",
            "roomId": "ice-palace-tile-14-3",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "ice-conveyor-ne",
            "roomId": "ice-palace-tile-14-3",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-conveyor-sw",
            "roomId": "ice-palace-tile-14-3",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ice-palace-tile-15-3",
        "name": "Ice Hammer Block (15,3)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-hammer-block-down-stairs",
            "roomId": "ice-palace-tile-15-3",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "ice-hammer-block-es",
            "roomId": "ice-palace-tile-15-3",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-tongue-pull-ws",
            "roomId": "ice-palace-tile-15-3",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-tongue-pull-up-ladder",
            "roomId": "ice-palace-tile-15-3",
            "label": "Up Ladder",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-5",
        "name": "Ice Spike Cross (14,5)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-spike-cross-se",
            "roomId": "ice-palace-tile-14-5",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-spike-cross-es",
            "roomId": "ice-palace-tile-14-5",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-spike-cross-ws",
            "roomId": "ice-palace-tile-14-5",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-firebar-es",
            "roomId": "ice-palace-tile-14-5",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-firebar-down-ladder",
            "roomId": "ice-palace-tile-14-5",
            "label": "Down Ladder",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "ice-spike-cross-ne",
            "roomId": "ice-palace-tile-14-5",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-falling-square-se",
            "roomId": "ice-palace-tile-14-5",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-falling-square-hole",
            "roomId": "ice-palace-tile-14-5",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "ice-palace-tile-15-5",
        "name": "Ice Spike Room (15,5)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-spike-room-ws",
            "roomId": "ice-palace-tile-15-5",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "ice-spike-room-down-stairs",
            "roomId": "ice-palace-tile-15-5",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "ice-spike-room-up-stairs",
            "roomId": "ice-palace-tile-15-5",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-7",
        "name": "Ice Freezors (14,7)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-freezors-up-ladder",
            "roomId": "ice-palace-tile-14-7",
            "label": "Up Ladder",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "ice-freezors-ledge-es",
            "roomId": "ice-palace-tile-14-7",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-tall-hint-ws",
            "roomId": "ice-palace-tile-14-7",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-tall-hint-en",
            "roomId": "ice-palace-tile-14-7",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-tall-hint-se",
            "roomId": "ice-palace-tile-14-7",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-freezors-hole",
            "roomId": "ice-palace-tile-14-7",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "ice-tall-hint-drop-entrance",
            "roomId": "ice-palace-tile-14-7",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-9",
        "name": "Ice Crystal Right (14,9)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-crystal-right-es",
            "roomId": "ice-palace-tile-14-9",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-crystal-left-ws",
            "roomId": "ice-palace-tile-14-9",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-big-chest-view-es",
            "roomId": "ice-palace-tile-14-9",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-crystal-right-ne",
            "roomId": "ice-palace-tile-14-9",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-backwards-room-se",
            "roomId": "ice-palace-tile-14-9",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-backwards-room-down-stairs",
            "roomId": "ice-palace-tile-14-9",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "ice-big-chest-view-drop-entrance",
            "roomId": "ice-palace-tile-14-9",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "ice-crystal-block-hole",
            "roomId": "ice-palace-tile-14-9",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "ice-palace-tile-15-9",
        "name": "Ice Many Pots (15,9)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-many-pots-sw",
            "roomId": "ice-palace-tile-15-9",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-many-pots-ws",
            "roomId": "ice-palace-tile-15-9",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-10",
        "name": "Iced (14,10)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "iced-t-en",
            "roomId": "ice-palace-tile-14-10",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "iced-t-up-stairs",
            "roomId": "ice-palace-tile-14-10",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-11",
        "name": "Ice Anti-Fairy (14,11)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-anti-fairy-up-stairs",
            "roomId": "ice-palace-tile-14-11",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "ice-anti-fairy-se",
            "roomId": "ice-palace-tile-14-11",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-switch-room-ne",
            "roomId": "ice-palace-tile-14-11",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-switch-room-es",
            "roomId": "ice-palace-tile-14-11",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "ice-switch-room-se",
            "roomId": "ice-palace-tile-14-11",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "ice-switch-room-drop-entrance",
            "roomId": "ice-palace-tile-14-11",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-12",
        "name": "Ice Antechamber (14,12)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-antechamber-ne",
            "roomId": "ice-palace-tile-14-12",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "ice-antechamber-hole",
            "roomId": "ice-palace-tile-14-12",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "ice-palace-tile-14-13",
        "name": "Ice Boss (14,13)",
        "dungeonId": "ice-palace",
        "originalDungeonId": "ice-palace",
        "doors": [
          {
            "id": "ice-boss-drop-entrance",
            "roomId": "ice-palace-tile-14-13",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      }
    ]
  },
  {
    "id": "misery-mire",
    "name": "Misery Mire",
    "rooms": [
      {
        "id": "misery-mire-tile-0-9",
        "name": "Mire Boss (0,9)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-boss-sw",
            "roomId": "misery-mire-tile-0-9",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-7-9",
        "name": "Mire Torches Top (7,9)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-torches-top-down-stairs",
            "roomId": "misery-mire-tile-7-9",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "mire-torches-top-sw",
            "roomId": "misery-mire-tile-7-9",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-torches-bottom-nw",
            "roomId": "misery-mire-tile-7-9",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-torches-bottom-ws",
            "roomId": "misery-mire-tile-7-9",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-torches-bottom-holes",
            "roomId": "misery-mire-tile-7-9",
            "label": "Mire Torches Bottom Holes",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "mire-torches-top-holes",
            "roomId": "misery-mire-tile-7-9",
            "label": "Mire Torches Top Holes",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "mire-attic-hint-hole",
            "roomId": "misery-mire-tile-7-9",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "mire-attic-hint-es",
            "roomId": "misery-mire-tile-7-9",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-8-9",
        "name": "Mire Lobby (8,9)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-lobby-s",
            "roomId": "misery-mire-tile-8-9",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-post-gap-down-stairs",
            "roomId": "misery-mire-tile-8-9",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "misery-mire-tile-1-10",
        "name": "Mire Fishbone (1,10)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-fishbone-e",
            "roomId": "misery-mire-tile-1-10",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-fishbone-se",
            "roomId": "misery-mire-tile-1-10",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-2-10",
        "name": "Mire Over Bridge (2,10)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-over-bridge-e",
            "roomId": "misery-mire-tile-2-10",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-over-bridge-w",
            "roomId": "misery-mire-tile-2-10",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-right-bridge-se",
            "roomId": "misery-mire-tile-2-10",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-left-bridge-s",
            "roomId": "misery-mire-tile-2-10",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-left-bridge-down-stairs",
            "roomId": "misery-mire-tile-2-10",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "misery-mire-tile-1-11",
        "name": "Mire Spike Barrier (1,11)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-spike-barrier-ne",
            "roomId": "misery-mire-tile-1-11",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-spike-barrier-se",
            "roomId": "misery-mire-tile-1-11",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-spike-barrier-es",
            "roomId": "misery-mire-tile-1-11",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-square-rail-ws",
            "roomId": "misery-mire-tile-1-11",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-square-rail-nw",
            "roomId": "misery-mire-tile-1-11",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-lone-warp-sw",
            "roomId": "misery-mire-tile-1-11",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-2-11",
        "name": "Mire Hidden Shooters (2,11)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-hidden-shooters-se",
            "roomId": "misery-mire-tile-2-11",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-hidden-shooters-es",
            "roomId": "misery-mire-tile-2-11",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-hidden-shooters-ws",
            "roomId": "misery-mire-tile-2-11",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-cross-es",
            "roomId": "misery-mire-tile-2-11",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-hidden-shooters-ne",
            "roomId": "misery-mire-tile-2-11",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-minibridge-se",
            "roomId": "misery-mire-tile-2-11",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-cross-sw",
            "roomId": "misery-mire-tile-2-11",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-minibridge-ne",
            "roomId": "misery-mire-tile-2-11",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-bk-door-room-en",
            "roomId": "misery-mire-tile-2-11",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-bk-door-room-n",
            "roomId": "misery-mire-tile-2-11",
            "label": "N",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-3-11",
        "name": "Mire Spikes (3,11)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-spikes-ws",
            "roomId": "misery-mire-tile-3-11",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-spikes-sw",
            "roomId": "misery-mire-tile-3-11",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-spikes-nw",
            "roomId": "misery-mire-tile-3-11",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-ledgehop-sw",
            "roomId": "misery-mire-tile-3-11",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-ledgehop-wn",
            "roomId": "misery-mire-tile-3-11",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-ledgehop-nw",
            "roomId": "misery-mire-tile-3-11",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-1-12",
        "name": "Mire Wizzrobe Bypass (1,12)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-wizzrobe-bypass-en",
            "roomId": "misery-mire-tile-1-12",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-wizzrobe-bypass-ne",
            "roomId": "misery-mire-tile-1-12",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-conveyor-crystal-es",
            "roomId": "misery-mire-tile-1-12",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-conveyor-crystal-se",
            "roomId": "misery-mire-tile-1-12",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-conveyor-crystal-ws",
            "roomId": "misery-mire-tile-1-12",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-tile-room-es",
            "roomId": "misery-mire-tile-1-12",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-tile-room-sw",
            "roomId": "misery-mire-tile-1-12",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-tile-room-nw",
            "roomId": "misery-mire-tile-1-12",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-compass-room-sw",
            "roomId": "misery-mire-tile-1-12",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-compass-room-en",
            "roomId": "misery-mire-tile-1-12",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-wizzrobe-bypass-wn",
            "roomId": "misery-mire-tile-1-12",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-2-12",
        "name": "Mire Hub (2,12)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-hub-se",
            "roomId": "misery-mire-tile-2-12",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-hub-es",
            "roomId": "misery-mire-tile-2-12",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-hub-e",
            "roomId": "misery-mire-tile-2-12",
            "label": "E",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-hub-ne",
            "roomId": "misery-mire-tile-2-12",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-hub-wn",
            "roomId": "misery-mire-tile-2-12",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-hub-ws",
            "roomId": "misery-mire-tile-2-12",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-hub-right-en",
            "roomId": "misery-mire-tile-2-12",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-hub-top-nw",
            "roomId": "misery-mire-tile-2-12",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-3-12",
        "name": "Mire Lone Shooter (3,12)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-lone-shooter-ws",
            "roomId": "misery-mire-tile-3-12",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-lone-shooter-es",
            "roomId": "misery-mire-tile-3-12",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-falling-bridge-ws",
            "roomId": "misery-mire-tile-3-12",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-falling-bridge-w",
            "roomId": "misery-mire-tile-3-12",
            "label": "W",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-failure-bridge-e",
            "roomId": "misery-mire-tile-3-12",
            "label": "E",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-failure-bridge-w",
            "roomId": "misery-mire-tile-3-12",
            "label": "W",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-falling-bridge-wn",
            "roomId": "misery-mire-tile-3-12",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-map-spike-side-en",
            "roomId": "misery-mire-tile-3-12",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-map-spot-wn",
            "roomId": "misery-mire-tile-3-12",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "mire-crystal-dead-end-nw",
            "roomId": "misery-mire-tile-3-12",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "misery-mire-tile-1-13",
        "name": "Mire Neglected Room (1,13)",
        "dungeonId": "misery-mire",
        "originalDungeonId": "misery-mire",
        "doors": [
          {
            "id": "mire-neglected-room-ne",
            "roomId": "misery-mire-tile-1-13",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-conveyor-barrier-nw",
            "roomId": "misery-mire-tile-1-13",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "mire-conveyor-barrier-up-stairs",
            "roomId": "misery-mire-tile-1-13",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "mire-neglected-room-se",
            "roomId": "misery-mire-tile-1-13",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-chest-view-ne",
            "roomId": "misery-mire-tile-1-13",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "mire-bk-chest-ledge-ws",
            "roomId": "misery-mire-tile-1-13",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-warping-pool-es",
            "roomId": "misery-mire-tile-1-13",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "mire-warping-pool-drop-entrance",
            "roomId": "misery-mire-tile-1-13",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "mire-conveyor-barrier-drop-entrance",
            "roomId": "misery-mire-tile-1-13",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "mire-bk-chest-ledge-drop-entrance",
            "roomId": "misery-mire-tile-1-13",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      }
    ]
  },
  {
    "id": "turtle-rock",
    "name": "Turtle Rock",
    "rooms": [
      {
        "id": "turtle-rock-tile-4-0",
        "name": "TR Dash Room (4,0)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-dash-room-sw",
            "roomId": "turtle-rock-tile-4-0",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-dash-room-es",
            "roomId": "turtle-rock-tile-4-0",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-tongue-pull-ws",
            "roomId": "turtle-rock-tile-4-0",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-tongue-pull-ne",
            "roomId": "turtle-rock-tile-4-0",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-rupees-se",
            "roomId": "turtle-rock-tile-4-0",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-dash-room-nw",
            "roomId": "turtle-rock-tile-4-0",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-crystaroller-sw",
            "roomId": "turtle-rock-tile-4-0",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-crystaroller-down-stairs",
            "roomId": "turtle-rock-tile-4-0",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-3-1",
        "name": "TR Pokey 2 (3,1)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-pokey-2-en",
            "roomId": "turtle-rock-tile-3-1",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-pokey-2-es",
            "roomId": "turtle-rock-tile-3-1",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-4-1",
        "name": "TR Lava Dual Pipes (4,1)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-lava-dual-pipes-en",
            "roomId": "turtle-rock-tile-4-1",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-lava-dual-pipes-wn",
            "roomId": "turtle-rock-tile-4-1",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-lava-dual-pipes-sw",
            "roomId": "turtle-rock-tile-4-1",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-lava-island-ws",
            "roomId": "turtle-rock-tile-4-1",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-lava-island-es",
            "roomId": "turtle-rock-tile-4-1",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-lava-escape-se",
            "roomId": "turtle-rock-tile-4-1",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-lava-escape-nw",
            "roomId": "turtle-rock-tile-4-1",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-5-1",
        "name": "TR Pipe Pit (5,1)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-pipe-pit-up-stairs",
            "roomId": "turtle-rock-tile-5-1",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "tr-pipe-pit-wn",
            "roomId": "turtle-rock-tile-5-1",
            "label": "WN",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "tr-pipe-ledge-ws",
            "roomId": "turtle-rock-tile-5-1",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-3-2",
        "name": "TR Lazy Eyes (3,2)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-lazy-eyes-se",
            "roomId": "turtle-rock-tile-3-2",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-lazy-eyes-es",
            "roomId": "turtle-rock-tile-3-2",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-4-2",
        "name": "TR Twin Pokeys (4,2)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-twin-pokeys-nw",
            "roomId": "turtle-rock-tile-4-2",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tr-twin-pokeys-sw",
            "roomId": "turtle-rock-tile-4-2",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-hallway-nw",
            "roomId": "turtle-rock-tile-4-2",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-hallway-ws",
            "roomId": "turtle-rock-tile-4-2",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-twin-pokeys-en",
            "roomId": "turtle-rock-tile-4-2",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tr-dodgers-wn",
            "roomId": "turtle-rock-tile-4-2",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tr-hallway-es",
            "roomId": "turtle-rock-tile-4-2",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-big-view-ws",
            "roomId": "turtle-rock-tile-4-2",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-big-chest-entrance-se",
            "roomId": "turtle-rock-tile-4-2",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-big-chest-ne",
            "roomId": "turtle-rock-tile-4-2",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-dodgers-se",
            "roomId": "turtle-rock-tile-4-2",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-dodgers-ne",
            "roomId": "turtle-rock-tile-4-2",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-4-10",
        "name": "TR Boss (4,10)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-boss-sw",
            "roomId": "turtle-rock-tile-4-10",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-6-11",
        "name": "TR Pokey 1 (6,11)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-pokey-1-sw",
            "roomId": "turtle-rock-tile-6-11",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-tile-room-se",
            "roomId": "turtle-rock-tile-6-11",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-tile-room-ne",
            "roomId": "turtle-rock-tile-6-11",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-refill-se",
            "roomId": "turtle-rock-tile-6-11",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-pokey-1-nw",
            "roomId": "turtle-rock-tile-6-11",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-chain-chomps-sw",
            "roomId": "turtle-rock-tile-6-11",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "tr-chain-chomps-down-stairs",
            "roomId": "turtle-rock-tile-6-11",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-7-11",
        "name": "TR Roller Room (7,11)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-roller-room-sw",
            "roomId": "turtle-rock-tile-7-11",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-5-12",
        "name": "TR Dash Bridge (5,12)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-dash-bridge-nw",
            "roomId": "turtle-rock-tile-5-12",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tr-dash-bridge-sw",
            "roomId": "turtle-rock-tile-5-12",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-dash-bridge-ws",
            "roomId": "turtle-rock-tile-5-12",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-6-12",
        "name": "TR Hub (6,12)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-hub-sw",
            "roomId": "turtle-rock-tile-6-12",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-hub-se",
            "roomId": "turtle-rock-tile-6-12",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-hub-es",
            "roomId": "turtle-rock-tile-6-12",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-hub-en",
            "roomId": "turtle-rock-tile-6-12",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "tr-hub-nw",
            "roomId": "turtle-rock-tile-6-12",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tr-hub-ne",
            "roomId": "turtle-rock-tile-6-12",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-5-13",
        "name": "TR Eye Bridge (5,13)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-eye-bridge-nw",
            "roomId": "turtle-rock-tile-5-13",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tr-eye-bridge-sw",
            "roomId": "turtle-rock-tile-5-13",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "turtle-rock-tile-6-13",
        "name": "TR Main Lobby (6,13)",
        "dungeonId": "turtle-rock",
        "originalDungeonId": "turtle-rock",
        "doors": [
          {
            "id": "tr-main-lobby-se",
            "roomId": "turtle-rock-tile-6-13",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "tr-lobby-ledge-ne",
            "roomId": "turtle-rock-tile-6-13",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "tr-compass-room-nw",
            "roomId": "turtle-rock-tile-6-13",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          }
        ]
      }
    ]
  },
  {
    "id": "ganons-tower",
    "name": "Ganons Tower",
    "rooms": [
      {
        "id": "ganons-tower-tile-12-0",
        "name": "GT Lobby (12,0)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-lobby-s",
            "roomId": "ganons-tower-tile-12-0",
            "label": "S",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-lobby-left-down-stairs",
            "roomId": "ganons-tower-tile-12-0",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "gt-lobby-up-stairs",
            "roomId": "ganons-tower-tile-12-0",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "gt-lobby-right-down-stairs",
            "roomId": "ganons-tower-tile-12-0",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-13-0",
        "name": "GT Agahnim 2 (13,0)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-agahnim-2-sw",
            "roomId": "ganons-tower-tile-13-0",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-12-1",
        "name": "GT Ice Armos (12,1)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-ice-armos-ne",
            "roomId": "ganons-tower-tile-12-1",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "gt-big-key-room-se",
            "roomId": "ganons-tower-tile-12-1",
            "label": "SE",
            "direction": "east",
            "type": "bigkey"
          },
          {
            "id": "gt-ice-armos-ws",
            "roomId": "ganons-tower-tile-12-1",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-ice-armos-drop-entrance",
            "roomId": "ganons-tower-tile-12-1",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "gt-four-torches-es",
            "roomId": "ganons-tower-tile-12-1",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-four-torches-nw",
            "roomId": "ganons-tower-tile-12-1",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-fairy-abyss-sw",
            "roomId": "ganons-tower-tile-12-1",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-four-torches-up-stairs",
            "roomId": "ganons-tower-tile-12-1",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-13-3",
        "name": "GT Falling Torches (13,3)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-falling-torches-down-ladder",
            "roomId": "ganons-tower-tile-13-3",
            "label": "Down Ladder",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "gt-falling-torches-hole",
            "roomId": "ganons-tower-tile-13-3",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "gt-falling-torches-ne",
            "roomId": "ganons-tower-tile-13-3",
            "label": "NE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "gt-mini-helmasaur-room-se",
            "roomId": "ganons-tower-tile-13-3",
            "label": "SE",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "gt-mini-helmasaur-room-wn",
            "roomId": "ganons-tower-tile-13-3",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-bomb-conveyor-en",
            "roomId": "ganons-tower-tile-13-3",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-bomb-conveyor-sw",
            "roomId": "ganons-tower-tile-13-3",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-crystal-circles-nw",
            "roomId": "ganons-tower-tile-13-3",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-crystal-circles-sw",
            "roomId": "ganons-tower-tile-13-3",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-13-4",
        "name": "GT Left Moldorm Ledge (13,4)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-left-moldorm-ledge-nw",
            "roomId": "ganons-tower-tile-13-4",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-moldorm-hole",
            "roomId": "ganons-tower-tile-13-4",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "gt-validation-ws",
            "roomId": "ganons-tower-tile-13-4",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-right-moldorm-ledge-down-stairs",
            "roomId": "ganons-tower-tile-13-4",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-11-7",
        "name": "GT Conveyor Star Pits (11,7)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-conveyor-star-pits-en",
            "roomId": "ganons-tower-tile-11-7",
            "label": "EN",
            "direction": "drop",
            "type": "drop"
          },
          {
            "id": "gt-hidden-star-es",
            "roomId": "ganons-tower-tile-11-7",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "gt-dms-room-sw",
            "roomId": "ganons-tower-tile-11-7",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-12-7",
        "name": "GT Falling Bridge (12,7)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-falling-bridge-wn",
            "roomId": "ganons-tower-tile-12-7",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-falling-bridge-ws",
            "roomId": "ganons-tower-tile-12-7",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-randomizer-room-es",
            "roomId": "ganons-tower-tile-12-7",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-13-7",
        "name": "GT Firesnake Room (13,7)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-firesnake-room-sw",
            "roomId": "ganons-tower-tile-13-7",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-warp-maze-rails-nw",
            "roomId": "ganons-tower-tile-13-7",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-warp-maze-rails-ws",
            "roomId": "ganons-tower-tile-13-7",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-petting-zoo-se",
            "roomId": "ganons-tower-tile-13-7",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-11-8",
        "name": "GT Conveyor Cross (11,8)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-conveyor-cross-en",
            "roomId": "ganons-tower-tile-11-8",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "gt-conveyor-cross-wn",
            "roomId": "ganons-tower-tile-11-8",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-hookshot-en",
            "roomId": "ganons-tower-tile-11-8",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-hookshot-nw",
            "roomId": "ganons-tower-tile-11-8",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-hookshot-es",
            "roomId": "ganons-tower-tile-11-8",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-map-room-ws",
            "roomId": "ganons-tower-tile-11-8",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-hookshot-sw",
            "roomId": "ganons-tower-tile-11-8",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-12-8",
        "name": "GT Torch (12,8)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-torch-up-stairs",
            "roomId": "ganons-tower-tile-12-8",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "gt-torch-wn",
            "roomId": "ganons-tower-tile-12-8",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-hope-room-up-stairs",
            "roomId": "ganons-tower-tile-12-8",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "gt-hope-room-en",
            "roomId": "ganons-tower-tile-12-8",
            "label": "EN",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "gt-torch-en",
            "roomId": "ganons-tower-tile-12-8",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-hope-room-wn",
            "roomId": "ganons-tower-tile-12-8",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-torch-sw",
            "roomId": "ganons-tower-tile-12-8",
            "label": "SW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-big-chest-nw",
            "roomId": "ganons-tower-tile-12-8",
            "label": "NW",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-blocked-stairs-down-stairs",
            "roomId": "ganons-tower-tile-12-8",
            "label": "Down Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "gt-big-chest-sw",
            "roomId": "ganons-tower-tile-12-8",
            "label": "SW",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-bobs-room-se",
            "roomId": "ganons-tower-tile-12-8",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-bobs-room-hole",
            "roomId": "ganons-tower-tile-12-8",
            "label": "Hole",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-13-8",
        "name": "GT Tile Room (13,8)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-tile-room-wn",
            "roomId": "ganons-tower-tile-13-8",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-tile-room-en",
            "roomId": "ganons-tower-tile-13-8",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-speed-torch-wn",
            "roomId": "ganons-tower-tile-13-8",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-speed-torch-ne",
            "roomId": "ganons-tower-tile-13-8",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-speed-torch-ws",
            "roomId": "ganons-tower-tile-13-8",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-pots-n-blocks-es",
            "roomId": "ganons-tower-tile-13-8",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-speed-torch-se",
            "roomId": "ganons-tower-tile-13-8",
            "label": "SE",
            "direction": "south",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-6-9",
        "name": "GT Torch Cross (6,9)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-torch-cross-wn",
            "roomId": "ganons-tower-tile-6-9",
            "label": "WN",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-torch-cross-es",
            "roomId": "ganons-tower-tile-6-9",
            "label": "ES",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-staredown-ws",
            "roomId": "ganons-tower-tile-6-9",
            "label": "WS",
            "direction": "south",
            "type": "normal"
          },
          {
            "id": "gt-staredown-up-ladder",
            "roomId": "ganons-tower-tile-6-9",
            "label": "Up Ladder",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "gt-staredown-drop-entrance",
            "roomId": "ganons-tower-tile-6-9",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-11-9",
        "name": "GT Double Switch (11,9)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-double-switch-nw",
            "roomId": "ganons-tower-tile-11-9",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-double-switch-en",
            "roomId": "ganons-tower-tile-11-9",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-spike-crystals-wn",
            "roomId": "ganons-tower-tile-11-9",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-warp-maze-pits-es",
            "roomId": "ganons-tower-tile-11-9",
            "label": "ES",
            "direction": "drop",
            "type": "drop"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-12-9",
        "name": "GT Invisible Catwalk (12,9)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-invisible-catwalk-es",
            "roomId": "ganons-tower-tile-12-9",
            "label": "ES",
            "direction": "east",
            "type": "normal"
          },
          {
            "id": "gt-invisible-catwalk-ws",
            "roomId": "ganons-tower-tile-12-9",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          },
          {
            "id": "gt-invisible-catwalk-nw",
            "roomId": "ganons-tower-tile-12-9",
            "label": "NW",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-invisible-catwalk-ne",
            "roomId": "ganons-tower-tile-12-9",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-13-9",
        "name": "GT Crystal Conveyor (13,9)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-crystal-conveyor-ne",
            "roomId": "ganons-tower-tile-13-9",
            "label": "NE",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-crystal-conveyor-wn",
            "roomId": "ganons-tower-tile-13-9",
            "label": "WN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-compass-room-en",
            "roomId": "ganons-tower-tile-13-9",
            "label": "EN",
            "direction": "north",
            "type": "normal"
          },
          {
            "id": "gt-invisible-bridges-ws",
            "roomId": "ganons-tower-tile-13-9",
            "label": "WS",
            "direction": "west",
            "type": "normal"
          }
        ]
      },
      {
        "id": "ganons-tower-tile-6-10",
        "name": "GT Moldorm Pit (6,10)",
        "dungeonId": "ganons-tower",
        "originalDungeonId": "ganons-tower",
        "doors": [
          {
            "id": "gt-moldorm-pit-up-stairs",
            "roomId": "ganons-tower-tile-6-10",
            "label": "Up Stairs",
            "direction": "stairs",
            "type": "stair"
          },
          {
            "id": "gt-moldorm-pit-drop-entrance",
            "roomId": "ganons-tower-tile-6-10",
            "label": "Drop Entrance",
            "direction": "drop",
            "type": "drop"
          }
        ]
      }
    ]
  }
] satisfies DungeonDefinition[];
