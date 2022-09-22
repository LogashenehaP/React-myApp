import React from "react";

import Header from "./components/common/header";

import { FeaturedItems } from "./components/common/FeaturedItems";
import { Search } from "./components/common/Search";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <FeaturedItems />
      <Search />
    </div>
  );
};

export default App;
