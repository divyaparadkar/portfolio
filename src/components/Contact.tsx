
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, LineChart } from 'lucide-react';

const Contact = () => {
    return (
        <div className="my-20 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-syne">
                    Ready to scale? Let's build.
                </h2>
            </motion.div>

            <div className="mt-10 flex justify-center gap-8 md:gap-12">
                <motion.a
                    href="https://github.com/divyaparadkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    title="GitHub"
                >
                    <Github className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/divyaparadkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    title="LinkedIn"
                >
                    <Linkedin className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </motion.a>
                <motion.a
                    href="https://www.kaggle.com/divyaparadkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    title="Kaggle"
                >
                    <LineChart className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </motion.a>
                <motion.a
                    href="mailto:divyaparadkar@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    title="Email"
                >
                    <Mail className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </motion.a>
            </div>
        </div>
    );
};

export default Contact;