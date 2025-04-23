import "./App.scss";
import DAMIOSKI from "../sections/DAMIOSKI/DAMIOSKI";
import Cursus from "../sections/Cursus/Cursus";
import Jobs from "../sections/Jobs/Jobs";
import Skills from "../sections/Skills/Skills";
import Loisirs from "../sections/Loisirs/Loisirs";
import Contact from "../sections/Contact/Contact";

const App = () => {

  return <div>
      <section><DAMIOSKI /></section>
      <section><Cursus /></section>
      <section><Jobs /></section>
      <section><Skills /></section>
      <section><Loisirs /></section>
      <section><Contact /></section>
    </div>;
};

export default App
