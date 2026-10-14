import { useState } from "react";
import Intro from "./components/Intro";
import Hearts from "./components/Hearts";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Message from "./components/Message";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <Intro onOpen={() => setOpened(true)} />}
      {opened && (
        <>
          <Hearts />
          <main>
            <Hero />
            <Gallery />
            <Message />
          </main>
        </>
      )}
    </>
  );
}
