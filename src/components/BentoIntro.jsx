import { motion } from 'framer-motion';
import { header, bio } from '../data';
import { Github, Linkedin, Mail, FileText, ArrowUpRight, Code, Cpu, Globe, Layers } from 'lucide-react';
import { SiReact, SiPython, SiNodedotjs, SiSpringboot } from 'react-icons/si';

const BentoIntro = ({ openResume }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
            <motion.div
                className="container bento-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Bio Card - Large */}
                <motion.div
                    className="bento-card"
                    variants={itemVariants}
                    style={{ gridColumn: 'span 8', gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#22c55e',
                            borderRadius: '50%',
                            display: 'inline-block'
                        }} />
                        <span style={{ fontSize: '0.9rem', color: '#22c55e', fontWeight: 600, letterSpacing: '0.5px' }}>AVAILABLE FOR WORK</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1, marginBottom: '20px', letterSpacing: '-0.04em' }}>
                        {header.name}
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-secondary)', marginBottom: '30px' }}>
                        {header.title}
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '95%' }}>
                        {bio.trim()}
                    </p>
                </motion.div>

                {/* Preferred Stack Card (Replaces Latest Role) */}
                <motion.div
                    className="bento-card"
                    variants={itemVariants}
                    style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--hover-bg)' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Layers size={24} />
                        {/* Colored Icon for visual appeal */}
                        <Code size={60} style={{ opacity: 0.8, color: '#3b82f6', filter: 'drop-shadow(0 4px 6px rgba(59, 130, 246, 0.3))' }} />
                    </div>
                    <div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>Preferred Stack</p>
                        <div style={{ display: 'flex', gap: '15px', color: 'var(--text-color)' }}>
                            <SiReact size={24} title="React" />
                            <SiPython size={24} title="Python" />
                            <SiNodedotjs size={24} title="Node.js" />
                            <SiSpringboot size={24} title="Spring Boot" />
                        </div>
                    </div>
                </motion.div>

                {/* Resume Card */}
                <motion.div
                    className="bento-card"
                    variants={itemVariants}
                    style={{ gridColumn: 'span 4', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', background: 'linear-gradient(135deg, var(--card-bg) 0%, var(--hover-bg) 100%)' }}
                    onClick={openResume}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ padding: '12px', backgroundColor: 'var(--bg-color)', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <FileText size={24} />
                        </div>
                        <div>
                            <p style={{ fontWeight: 600 }}>Resume</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>View / Download</p>
                        </div>
                    </div>
                    <ArrowUpRight size={20} color="var(--text-secondary)" />
                </motion.div>

                {/* Social Cards */}
                <motion.div
                    className="bento-card"
                    variants={itemVariants}
                    style={{ gridColumn: 'span 4', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}
                >
                    {header.socials.filter(s => !s.isResume).map((social, idx) => {
                        const Icon = social.label === 'GitHub' ? Github : social.label === 'LinkedIn' ? Linkedin : Mail;
                        return (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '15px 0',
                                    backgroundColor: 'var(--bg-color)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    color: 'var(--text-color)',
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.borderColor = 'var(--text-secondary)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'var(--border-color)';
                                }}
                            >
                                <Icon size={24} />
                            </a>
                        );
                    })}
                </motion.div>

                {/* Key Skills / Focus Area */}
                <motion.div
                    className="bento-card"
                    variants={itemVariants}
                    style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Core Expertise</p>
                    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ padding: '8px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', color: '#3b82f6' }}>
                                <Globe size={20} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>Full Stack</p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>React, Node, Spring</p>
                            </div>
                        </div>

                        <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border-color)' }} />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ padding: '8px', backgroundColor: 'rgba(168, 85, 247, 0.1)', borderRadius: '8px', color: '#a855f7' }}>
                                <Cpu size={20} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 600 }}>AI & ML</p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>PyTorch, Scikit-Learn</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default BentoIntro;
