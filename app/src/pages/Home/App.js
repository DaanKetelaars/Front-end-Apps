// import
import React from "react";
import Albums from "../../components/Albums/Albums";
import BgAnimation from "../../components/Animation/BackgroundAnimation";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Top 3 Albums</h1>
          <Albums />
        </div>
      </header>
      <BgAnimation />
    </>
  );
}

export default App;
