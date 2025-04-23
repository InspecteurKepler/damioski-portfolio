import { useEffect, useState } from 'react';
import "./DAMIOSKI.scss";
import { Gradient } from './Gradient.js'
import { motion, AnimatePresence } from "framer-motion"

const DAMIOSKI = () => {
    const [isAlternate, setIsAlternate] = useState(false);

    useEffect(() => {
        const gradient = new Gradient()
        gradient.initGradient('#gradient-canvas')
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAlternate(prev => !prev);
        }, 5000); // Change toutes les 5 secondes

        return () => clearInterval(interval);
    }, []);

    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <motion.div 
            className="damioski-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
        >
            <canvas id="gradient-canvas" data-transition-in />
            <div className="content">
                <motion.div 
                    className="text-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
                >
                    <motion.h1
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={isAlternate ? "enzo" : "damioski"}
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                            >
                                {isAlternate ? "Enzo DELHAYE WOLFF" : "DAMIOSKI"}
                            </motion.span>
                        </AnimatePresence>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                    >
                        Développeur JS, C++, PHP | Réseaux d'entreprises, Technicien Informatique
                    </motion.p>
                </motion.div>
                <motion.div 
                    className="profile-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ 
                        scale: 1.1,
                        transition: { 
                            type: "spring",
                            stiffness: 100,
                        }
                    }}
                >
                    <img src="../../src/assets/photoprofil.png" alt="Profile" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default DAMIOSKI;