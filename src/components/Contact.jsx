import Section from './Section';
import { header } from '../data';

const Contact = () => {
    return (
        <Section id="contact" className="flex-center" style={{ minHeight: '60vh', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Let's Connect</h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    maxWidth: '500px',
                    marginBottom: '40px',
                    fontSize: '1.1rem',
                    lineHeight: 1.6
                }}>
                    I'm currently looking for Software Engineering opportunities. If you have an exciting project or role in mind, I'd love to hear from you!
                </p>

                <a
                    href={header.socials.find(s => s.label === 'Email')?.url}
                    style={{
                        padding: '16px 32px',
                        backgroundColor: 'var(--text-color)',
                        color: 'var(--bg-color)',
                        borderRadius: '4px',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Say Hello
                </a>

                <footer style={{ marginTop: '100px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>© {new Date().getFullYear()} {header.name}. Built with React & Vite.</p>
                </footer>
            </div>
        </Section>
    );
};

export default Contact;
