import React from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';

const Skills = () => {
    // Variants pour les animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 10
            }
        }
    };

    const skillItemVariants = {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 10
            }
        }
    };

    return (
        <motion.section 
            id="skills" 
            className="skills-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants}>Compétences</motion.h2>
            
            <div className="skills-container">
                <motion.div className="skills-column" variants={itemVariants}>
                    <motion.h3 variants={itemVariants}>Compétences Informatiques</motion.h3>
                    
                    <ul className="skills-list">
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">OS</span>
                            <span className="skill-description">Installation, configuration, maintenance et dépannage, Ubuntu Server, Windows Server</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Virtualisation</span>
                            <span className="skill-description">Déploiement de container Docker, Configuration de VM et Switch Hyper-V</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Réseau</span>
                            <span className="skill-description">VLAN, Cisco, Compréhension des protocoles de base (TCP/IP, UDP/IP, DNS, DHCP), Mise en place de Firewall et Routeurs sous PFSense (Connaissance intégrée de PFSense) ou autre software, VPN (OpenVPN, Wireguard)</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Hardware</span>
                            <span className="skill-description">Changement de composants serveurs (CPU, RAM, Storage, etc..)</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Scripting</span>
                            <span className="skill-description">Scripts en C++, Bash, Batch avec configuration CRON, Services Systemd pour Linux</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Base de données</span>
                            <span className="skill-description">MariaDB ou MySQL, installation PHPMyAdmin</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Annexe</span>
                            <span className="skill-description">Mise en place d'un serveur mail avec Dovecot et Postfix, Gestion serveur Web avec NGINX (Reverse Proxy, SSL, HTML/ CSS, PHP), Automatisation de certificats SSL avec Certbot</span>
                        </motion.li>
                    </ul>
                </motion.div>
                
                <motion.div className="skills-column" variants={itemVariants}>
                    <motion.h3 variants={itemVariants}>Compétences Non-Informatiques</motion.h3>
                    
                    <ul className="skills-list">
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Résolution de problèmes</span>
                            <span className="skill-description">Capacité à analyser les problèmes, identifier les causes et à mettre en œuvre des solutions adaptées</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Organisation</span>
                            <span className="skill-description">Gérer plusieurs projets en parallèle, respecter les délais et les budgets</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Adaptation</span>
                            <span className="skill-description">Être capable de s'adapter rapidement aux nouvelles technologies et aux évolutions du secteur</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Travail en équipe</span>
                            <span className="skill-description">Collaborer avec d'autres équipes (développement, sécurité, etc...)</span>
                        </motion.li>
                        
                        <motion.li variants={skillItemVariants}>
                            <span className="skill-title">Communication</span>
                            <span className="skill-description">Expliquer des concepts techniques à des publics variés (techniques et non techniques), rédiger de la documentation claire</span>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills; 