import logo from "./logo.svg";
import "./App.css";
import Kitten from "./Kitten";

import captain from "./images/captain.jpeg";
import chatpotte from "./images/chatpotte.jpeg";
import cutties from "./images/cutties.jpg";
import dragon from "./images/dragon.webp";
import flying from "./images/flying.jpg";
import hidden from "./images/hidden.jpeg";
import hiddent from "./images/hiddent.jpg";
import hierarchy from "./images/hierarchy.jpg";
import hum from "./images/hum.jpg";
import pizza from "./images/pizza.png";
import scared from "./images/scared.jpeg";
import surpise from "./images/surpise.jpg";
import team from "./images/team.jpg";
import vacation from "./images/vacation.jpg";
import chouse from "./images/chouse.webp";
import fluffy from "./images/fluffy.jpeg";
import please from "./images/please.jpg";
import lechat from "./images/lechat.jpg";

function App() {
  const kittens = [
    captain,
    chatpotte,
    cutties,
    dragon,
    flying,
    hidden,
    hiddent,
    hierarchy,
    hum,
    pizza,
    scared,
    surpise,
    team,
    vacation,
    chouse,
    fluffy,
    please,
    lechat,
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ color: "white", paddingTop: "10px" }}>
          TNT RETRO - 31/03/2023
        </h2>
        {/* <img src={chatpotte} className="App-logo" alt="logo" /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <section style={{ textAlign: "left", color: "white" }}>
        <ul>
          <li>
            Each team member picks a Cat he/she feels reflect his moods/what
            reflect the sprint
          </li>
          <li>
            A 3 min break will allow coming up with 2 keywords and a short
            sentence using these
          </li>
        </ul>
      </section>
      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr  1fr",
            gridTemplateRows: "1fr",
          }}
        >
          {Object.values(kittens).map((k, i) => (
            <Kitten key={i} kitten={k} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
