import { useEffect, useState } from "react";

import { HeroData } from "./constant";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [HeroCount, setHeroCount] = useState(2);
  const [PlayStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2?0:count+1;
      });
    }, 3000);
  }, []);

  return (
    <>
      <Background PlayStatus={PlayStatus} HeroCount={HeroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        HeroData={HeroData[HeroCount]}
        HeroCount={HeroCount}
        setHeroCount={setHeroCount}
        PlayStatus={PlayStatus}
      />
    </>
  );
};

export default App;
