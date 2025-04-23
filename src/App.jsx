import React, { useEffect, useState } from "react";
import "./App.scss";
import DAMIOSKI from "./sections/DAMIOSKI/DAMIOSKI";
import Cursus from "./sections/Cursus/Cursus";
import Jobs from "./sections/Jobs/Jobs";
import Skills from "./sections/Skills/Skills";
import Loisirs from "./sections/Loisirs/Loisirs";
import Contact from "./sections/Contact/Contact";
import MobileWarning from "./components/MobileWarning";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détection de l'appareil mobile par la largeur d'écran
    const checkIfMobile = () => {
      const mobileWidth = 768;
      setIsMobile(window.innerWidth < mobileWidth);
      
      // Appliquer une classe au body si c'est un mobile et que l'utilisateur n'a pas bypass l'avertissement
      const bypassWarning = localStorage.getItem('bypassMobileWarning') === 'true';
      if (window.innerWidth < mobileWidth && !bypassWarning) {
        document.body.classList.add('show-mobile-warning');
      } else {
        document.body.classList.remove('show-mobile-warning');
      }
    };

    // Vérifier au chargement
    checkIfMobile();
    
    // Vérifier à chaque redimensionnement
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      {isMobile && !localStorage.getItem('bypassMobileWarning') && <MobileWarning />}
      
      <div>
        <section><DAMIOSKI /></section>
        <section><Cursus /></section>
        <section><Jobs /></section>
        <section><Skills /></section>
        {/* <section><Loisirs /></section> Plus tard*/}
        <section><Contact /></section>
      </div>
    </>
  );
};

export default App
