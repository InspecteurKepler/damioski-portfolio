import React from 'react';
import { motion } from 'framer-motion';
import './Jobs.scss';
import '../styles/Background.scss';

const Jobs = () => {
    // Variants pour les animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 12
            }
        }
    };
    
    // Variants pour l'effet hover sur les cartes
    const cardHoverVariants = {
        hover: { 
            scale: 1.05, 
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.6)",
            transition: { 
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            id="jobs" 
            className="jobs-section nextjs-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants}>Experiences Professionnelles</motion.h2>
            
            <div className="content-wrapper">
                <div className="timeline">
                    <motion.div className="timeline-item" variants={itemVariants}>
                        <div className="timeline-content left">
                            <motion.div 
                                className="timeline-job-card"
                                whileHover="hover"
                                variants={cardHoverVariants}
                            >
                                <div className="job-period">Mai 2023 - Juillet 2023</div>
                                <div className="job-image">
                                    <img src="/src/assets/rttb.jpg" alt="Régie des Transports du Territoire de Belfort" />
                                </div>
                            </motion.div>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content right">
                            <div className="timeline-job-details">
                                <h3>Régie des Transports du Territoire de Belfort</h3>
                                <p className="job-title">Stage en année de BTS</p>
                                <ul className="job-tasks">
                                    <li>Développement de jobs Talend Open Studio pour mise en place d'une API</li>
                                    <li>Schématisation du réseau d'entreprise</li>
                                    <li>Documentation API</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Ajoutez d'autres expériences professionnelles ici si nécessaire */}
                </div>
            </div>
        </motion.section>
    );
};

export default Jobs; 