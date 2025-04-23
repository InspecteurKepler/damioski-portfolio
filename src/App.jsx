import "./App.scss";
import DAMIOSKI from "../src/sections/DAMIOSKI/DAMIOSKI";
import Cursus from "../src/sections/Cursus/Cursus";
import Jobs from "../src/sections/Jobs/Jobs";
import Skills from "../src/sections/Skills/Skills";
import Loisirs from "../src/sections/Loisirs/Loisirs";
import Contact from "../src/sections/Contact/Contact";

const App = () => {

  return <div>
      <section><DAMIOSKI /></section>
      <section><Cursus /></section>
      <section><Jobs /></section>
      <section><Skills /></section>
      {/* <section><Loisirs /></section> Plus tard*/}
      <section><Contact /></section>
    </div>;
};

export default App
