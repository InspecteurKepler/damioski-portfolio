import React from 'react';
import { motion } from 'framer-motion';
import './Cursus.scss';
import '../styles/Background.scss';

const Cursus = () => {
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
            backgroundColor: "#7e54b3",
            transition: { 
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            id="cursus" 
            className="cursus-section nextjs-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="content-wrapper">
                <motion.h2 variants={itemVariants}>Cursus Scolaire</motion.h2>
                
                <div className="timeline">
                    <motion.div className="timeline-item" variants={itemVariants}>
                        <div className="timeline-content left">
                            <motion.div 
                                className="timeline-card"
                                whileHover="hover"
                                variants={cardHoverVariants}
                            >
                                <h3>BAC TECHNOLOGIQUE STI2D</h3>
                                <p>Spécialité Systèmes Informatiques et Numériques</p>
                                <div className="note">12.34 / 20</div>
                            </motion.div>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content right">
                            <div className="timeline-school">
                                <h3>Lycée Jean Monnet - Pôle Général et Technologique</h3>
                                <p>1 Pl. Maréchal de Lattre de Tassigny Cedex, 74100 Annemasse</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="timeline-item" variants={itemVariants}>
                        <div className="timeline-content left">
                            <div className="timeline-school">
                                <h3>Lycée des Métiers Charles Poncet - Espace Poncet</h3>
                                <p>1 Av. Charles Poncet, 74300 Cluses</p>
                            </div>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content right">
                            <motion.div 
                                className="timeline-card"
                                whileHover="hover"
                                variants={cardHoverVariants}
                            >
                                <h3>BTS SYSTÈMES NUMÉRIQUES</h3>
                                <p>Option Informatique et Réseaux</p>
                                <div className="note">16.22 / 20</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div className="timeline-item" variants={itemVariants}>
                        <div className="timeline-content left">
                            <motion.div 
                                className="timeline-card"
                                whileHover="hover"
                                variants={cardHoverVariants}
                            >
                                <h3>LICENCE PRO</h3>
                                <p>Administration et Sécurité des Systèmes et des Réseaux</p>
                                <div className="year">Année 2025-2026</div>
                            </motion.div>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content right">
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Cursus; 