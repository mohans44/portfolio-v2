import Section from './Section';
import { projects } from '../data';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    return (
        <Section id="projects">
            <h2 style={{ marginBottom: '40px', fontSize: '2rem' }}>Selected Work</h2>

            <div className="bento-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bento-card"
                        style={{
                            gridColumn: 'span 6', // 2 cards per row
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            position: 'relative',
                            minHeight: '450px', // Taller cards
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            overflow: 'hidden',
                            padding: 0, // Remove default padding to let image bleed
                            border: '1px solid var(--border-color)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            e.currentTarget.style.borderColor = 'var(--text-secondary)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                        }}
                    >
                        {/* Image Section - Prominent */}
                        <div style={{
                            height: '240px',
                            width: '100%',
                            overflow: 'hidden',
                            position: 'relative',
                            borderBottom: '1px solid var(--border-color)'
                        }}>
                            {project.media ? (
                                <img
                                    src={project.media}
                                    alt={project.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: 'var(--hover-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                                    No Preview
                                </div>
                            )}

                            {/* Floating Links */}
                            <div style={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '8px' }}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Github size={16} />
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer"
                                    style={{ padding: '8px', borderRadius: '50%', backgroundColor: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{project.name}</h3>
                            </div>

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                marginBottom: '20px',
                                flex: 1
                            }}>
                                {project.desc}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {project.tech.map((tech) => (
                                    <span key={tech} style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--text-secondary)',
                                        padding: '4px 10px',
                                        backgroundColor: 'var(--hover-bg)',
                                        borderRadius: '6px',
                                        fontWeight: 500,
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
