import React from 'react';
import './MobileWarning.scss';

const MobileWarning = () => {
  return (
    <div className="mobile-warning">
      <div className="mobile-warning-content">
        <svg 
          className="mobile-warning-icon" 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z" 
            fill="#9163CB"
          />
        </svg>
        <h1>Version Mobile Bientôt Disponible</h1>
        <p>
          Ce portfolio est actuellement optimisé pour les ordinateurs et tablettes.
          Une version adaptée aux mobiles est en cours de développement.
        </p>
        <p>
          Pour une meilleure expérience, veuillez visiter ce site sur un ordinateur portable ou de bureau.
        </p>
        <button 
          className="continue-button"
          onClick={() => {
            document.body.classList.remove('show-mobile-warning');
            localStorage.setItem('bypassMobileWarning', 'true');
          }}
        >
          Continuer vers le site quand même
        </button>
      </div>
    </div>
  );
};

export default MobileWarning; 