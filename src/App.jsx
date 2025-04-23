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
  // État pour contrôler l'affichage de l'avertissement
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    // Détection de l'appareil mobile par la largeur d'écran
    const checkIfMobile = () => {
      const mobileWidth = 768;
      const isMobileDevice = window.innerWidth < mobileWidth;
      setIsMobile(isMobileDevice);
      
      // Si c'est un mobile, ajouter la classe au body
      if (isMobileDevice && showWarning) {
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
  }, [showWarning]);

  // Fonction pour fermer l'avertissement
  const closeWarning = () => {
    setShowWarning(false);
    document.body.classList.remove('show-mobile-warning');
  };

  return (
    <>
      {isMobile && showWarning && <MobileWarning onClose={closeWarning} />}
      
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
