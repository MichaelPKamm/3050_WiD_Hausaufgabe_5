import data from "./data/tableData.json";
import "./App.css";
import { Header } from "./Header";
import { Tabelle } from "./Tabelle";
import { useState } from "react";

//App

function App() {
  //Datenaufbereitung Tabelle und Droppdown
  const kantone = data.map((element) => element.anbieter).sort();
  const kantone_Liste = [];
  for (let i = 0; i < kantone.length; ++i) {
    if (kantone[i] !== kantone[i - 1]) {
      kantone_Liste.push(kantone[i]);
    }
  }

  const service = data.map((element) => element.service).sort();
  const service_Liste = [];
  for (let i = 0; i < service.length; ++i) {
    if (service[i] !== service[i - 1]) {
      service_Liste.push(service[i]);
    }
  }

  const score = data.map((element) => element.score).sort();
  const score_Liste = [];
  for (let i = 0; i < score.length; ++i) {
    if (score[i] !== score[i - 1]) {
      score_Liste.push(score[i]);
    }
  }

  //aufrufen Ergebnisse aus Droppdown.js

  const [dp_L, setdp_L] = useState("");
  const [dp_R, setdp_R] = useState("");
  const [dp_score, setdp_score] = useState("");

  const handleChange_L = (event) => {
    setdp_L(event.target.value);
  };
  const handleChange_R = (event) => {
    setdp_R(event.target.value);
  };
  const handleChange_score = (event) => {
    setdp_score(event.target.value);
  };

  //Tabellenshit

  //const [selectedkanton, setSelectedkanton] = useState("");
  //const [selectedservice, setSelectedservice] = useState("");
  const [daten, setDaten] = useState(data);

  const filtered_data = data
    .filter((e) => (dp_R ? e["anbieter"] === dp_R : true))
    .filter((e) => (dp_L ? e["service"] === dp_L : true))
    .filter((e) => (dp_score ? e["score"] == dp_score : true));

  //return
  return (
    <div className="App">
      <Header
        kantone_Liste={kantone_Liste}
        service_Liste={service_Liste}
        score_Liste={score_Liste}
        data={data}
        handleChange_L={handleChange_L}
        handleChange_R={handleChange_R}
        handleChange_score={handleChange_score}
        dp_L={dp_L}
        dp_R={dp_R}
        dp_score={dp_score}
      />
      <Tabelle filtered_data={filtered_data} />

      {
        //<img src={"./mockup.png"} />
      }
    </div>
  );
}

export default App;
