import React from "react";
import { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSrcipt", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "100px" }}>Vote Your Language!</h1>

      {languages.map((language) => (
        <div
          key={language.name}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            width: "500px",
            backgroundColor: "#b3cbd3",
            color: "rgb(93, 96, 97)",
            fontStyle: "italic",
            fontWeight: "bold",
            padding: "10px",
            margin: "15px",
          }}
        >
          <p
            style={{
              textAlign: "left",
              marginLeft: "10px",
            }}
          >
            {language.name}
          </p>

          <p>{language.votes}</p>

          <button
            onClick={() => {
              setLanguages((currentLanguages) => {
                return currentLanguages.map((currentLanguage) => {
                  return currentLanguage.name === language.name
                    ? {
                        ...currentLanguage,
                        votes: currentLanguage.votes + 1,
                      }
                    : currentLanguage;
                });
              });
            }}
            style={{
              cursor: "pointer",
              backgroundColor: "#a4e0b9",
              color: "#111914",
              padding: "10px",
              margin: "15px",
            }}
          >
            Click Here
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;