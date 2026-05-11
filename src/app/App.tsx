import { DungeonGraph } from "../components/graph/DungeonGraph";
import { easternPalaceSample } from "../data/dungeons/eastern-palace.sample.ts";
import "./App.css";

export default function App() {
    return (
        <main className="app">
            <header className="app__header">
                <h1>ALTTPR Door Shuffle Tracker</h1>
                <p>
                    Click one door, then another door, to create a connection.
                </p>
            </header>

            <DungeonGraph dungeon={easternPalaceSample} />
        </main>
    );
}