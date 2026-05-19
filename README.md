# ALTTPR Door Tracker

[Open the live tracker](https://mawisadi.github.io/ALTTPR_Door_Tracker/)

A modern browser-based prototype for tracking **A Link to the Past Randomizer Door Shuffle** routes.

The goal is to make door tracking more visual and flexible than a fixed grid tracker:

- add dungeon tiles dynamically
- connect doors by clicking two door hotspots
- move tiles freely on the canvas
- remove tiles again when needed
- save the current run state in browser local storage
- support dungeon-specific and cross-dungeon tracking modes

## Current Features

- React + TypeScript + Vite
- Interactive graph powered by React Flow
- Generated dungeon/tile data based on KrisDavie DoorTracker data
- Real tile preview images generated from the source map
- Door hotspots positioned directly on the tile images
- Color-coded door connections
- Configurable tile size:
  - Small
  - Medium
  - Large
- Dungeon tabs
- Global run settings:
  - Basic Doors
  - Own Dungeon
  - Cross Dungeon
  - Vanilla / Shuffled entrances
- LocalStorage persistence
- Reset layout, reset dungeon, reset run
- Add Tile picker with grouped dungeon accordion and hover preview

## Usage

- Select a dungeon tab.
- Use the Add Tile panel to add rooms to the current graph.
- Hover a tile in the picker to preview it.
- Click a tile in the picker to add it.
- Click one door hotspot, then another door hotspot, to create a connection.
- Click an existing connection line to remove it.
- Drag tiles around the canvas to organize the current route.
- Use the Run Settings panel to change door shuffle mode, entrance mode, and tile size.

The tracker state is saved in browser LocalStorage.

## Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the app:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Generated Data

Dungeon data and tile assets are generated from a local copy of the KrisDavie DoorTracker repository.

The generator script is located at:

```text
scripts/generate_krisdavie_dungeons.py
```

Example generator command:

```bash
python scripts/generate_krisdavie_dungeons.py --source ../KrisDavie-DoorTracker --crop-tiles --tile-source-image data/maps/egmap.png --tile-size 512
```

Generated TypeScript files are written to:

```text
src/data/dungeons/generated/
```

Generated tile images are written to:

```text
public/assets/krisdavie/rooms/
```

The generated files are committed so users and deployment builds do **not** need Python or the original KrisDavie repository.

## Deployment

This project can be deployed as a static site.

For GitHub Pages, the Vite base path must match the repository name:

```ts
base: "/ALTTPR_Door_Tracker/"
```

Deployment is handled through GitHub Actions.

## Attribution

This project uses generated data and visual assets derived from:

- KrisDavie/DoorTracker

This project is an independent fan/tooling project for ALTTPR Door Shuffle tracking.