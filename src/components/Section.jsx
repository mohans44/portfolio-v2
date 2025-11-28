import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`section ${className}`}
        >
            <div className="container">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
