import { motion } from 'framer-motion';
import { header, bio } from '../data';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 style={{
                        fontSize: '1.2rem',
                        fontWeight: 400,
                        color: 'var(--text-secondary)',
                        marginBottom: '1rem'
                    }}>
                        Hi, I'm {header.name}
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        {header.title.split('&').map((part, i) => (
                            <span key={i} style={{ display: 'block' }}>
                                {part.trim()} {i === 0 && <span style={{ color: 'var(--text-secondary)' }}>&</span>}
                            </span>
                        ))}
                    </h1>
                    <p style={{
                        maxWidth: '600px',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        lineHeight: 1.8
                    }}>
                        {bio.trim()}
                    </p>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a
                            href="#projects"
                            style={{
                                padding: '12px 24px',
                                backgroundColor: 'var(--text-color)',
                                color: 'var(--bg-color)',
                                borderRadius: '4px',
                                fontWeight: 500,
                                fontSize: '0.95rem'
                            }}
                        >
                            View Work
                        </a>
                        <a
                            href={header.socials.find(s => s.isResume)?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '12px 24px',
                                border: '1px solid var(--border-color)',
                                borderRadius: '4px',
                                fontWeight: 500,
                                fontSize: '0.95rem'
                            }}
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <ArrowDown size={24} color="var(--text-secondary)" />
            </motion.div>
        </section>
    );
};

export default Hero;
