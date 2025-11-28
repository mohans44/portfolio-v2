import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    style={{
                        backgroundColor: 'var(--bg-color)',
                        width: '100%',
                        maxWidth: '900px',
                        height: '85vh',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div style={{
                        padding: '15px 20px',
                        borderBottom: '1px solid var(--border-color)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'var(--card-bg)'
                    }}>
                        <h3 style={{ fontWeight: 600 }}>Resume Preview</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a
                                href="/mss_resume.pdf"
                                download="Mohan_Seetha_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    padding: '8px 16px',
                                    backgroundColor: 'var(--text-color)',
                                    color: 'var(--bg-color)',
                                    borderRadius: '6px',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    textDecoration: 'none'
                                }}
                            >
                                <Download size={16} />
                                Download
                            </a>
                            <button
                                onClick={onClose}
                                style={{
                                    padding: '8px',
                                    borderRadius: '6px',
                                    backgroundColor: 'var(--hover-bg)',
                                    color: 'var(--text-color)'
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    <div style={{ flex: 1, backgroundColor: '#525659' }}>
                        <iframe
                            src="/mss_resume.pdf"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            title="Resume PDF"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ResumeModal;
