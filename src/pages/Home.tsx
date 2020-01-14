import React from "react";

import Card from "../components/card/Card";
import Counter from "../components/counter/Counter";

const Home = () => (
  <div className="vi-container home-page">
    <div>
      <h1>Title</h1>

      <p>description</p>
    </div>

    <div>
      <Card text="TEXXXRT" title="Title Hello" />

      <Card
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        title="Title Hello"
      />
    </div>

    <Counter />
  </div>
);

export default Home;
