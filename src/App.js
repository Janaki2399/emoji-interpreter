import React, { useState } from "react";
import "./styles.css";

const dict = {
  "👼": "baby angel",
  "🕵️‍♂️": "man detective",
  "👨‍🌾": "man farmer",
  "👩‍🎓": "woman student",
  "👩‍🔧": "woman mechanic",
  "👨‍⚖️": "man judge",
  "💂‍♀️": "woman guard",
  "👨‍🎤": "man singer",
  "👩‍🚀": "woman astronaut",
  "👨‍🚒": "man firefighter",
  "🧙‍♂️": "man mage",
  "👩‍🎨": "woman artist",
  "👨‍💼": "man office worker",
  "👩‍💻": "woman technologist",
  "👨‍🔬": "man scientist",
  "🧒": "child",
  "👩‍✈️": "woman pilot",
  "🧜‍♀️": "mermaid",
  "🧟‍♀️": "woman zombie",
  "🤹‍♂️": "man juggling",
  "👷‍♀️": "woman construction worker",
  "🧓": "older adult",
  "🤴": "prince",
  "👩‍🏫": "woman teacher",
  "🤵": "man in tuxedo",
  "💃": "woman dancing ",
  "👨‍🎨": "man artist",
  "👰": "bride with veil",
  "👧": "girl",
  "🤰": "pregnant women",
  "🙇‍♀️": "woman bowing",
  "🧝‍♂️": "man elf",
  "💇‍♀️": "woman getting haircut"
};
const emojis = Object.keys(dict);
export default function App() {
  const [emoji, changeEmoji] = useState("");
  const [meaning, changeMeaning] = useState("Translated meaning comes here");

  function searchEmoji(event) {
    var newEmoji = event.target.value;
    changeEmoji(newEmoji);
    if (newEmoji in dict) {
      changeMeaning(dict[newEmoji]);
    } else {
      changeMeaning("Can't find this emoji.Please try another one");
    }
  }
  function getMeaning(emoji) {
    changeEmoji(emoji);
    changeMeaning(dict[emoji]);
  }
  return (
    <div className="App">
      <h1 class="main-header">Search and Know 🧐 </h1>
      <h3>
        We are often confused with what these people emojis mean.Try this out
        and use it appropriately next time
      </h3>
      <input
        className="input"
        onChange={searchEmoji}
        placeholder="insert the emoji"
      ></input>
      <h2>
        {emoji} {meaning}
      </h2>
      <h3 className="click-emoji">
        Click the below emojis to know what it is{" "}
      </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => getMeaning(emoji)}
          style={{
            padding: "1rem 0.5rem",
            cursor: "pointer",
            fontSize: "2rem"
          }}
          key={emoji}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
