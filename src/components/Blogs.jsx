import Section from './Section';
import { blogs } from '../data';
import { ExternalLink, BookOpen } from 'lucide-react';

const Blogs = () => {
    return (
        <Section id="blogs">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                <div style={{ padding: '10px', backgroundColor: 'var(--card-bg)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                    <BookOpen size={20} />
                </div>
                <h2 style={{ fontSize: '2rem' }}>Writing</h2>
            </div>

            <div className="bento-grid">
                {blogs.map((blog, index) => (
                    <a
                        key={index}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bento-card"
                        style={{
                            gridColumn: 'span 6',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        <div>
                            <div className="flex-between" style={{ marginBottom: '15px' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Article</span>
                                <ExternalLink size={18} color="var(--text-secondary)" />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', lineHeight: 1.3 }}>{blog.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {blog.summary}
                            </p>
                        </div>
                        <div style={{ marginTop: '20px', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-color)' }}>
                            Read on Medium &rarr;
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
};

export default Blogs;
