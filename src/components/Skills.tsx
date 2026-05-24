
import type React from 'react';
import { motion } from 'framer-motion';
import { 
    Code, Binary, BrainCircuit, Layers,
    Zap, LayoutDashboard,
    LineChart, Hexagon, Database, BarChart, BookOpen, Filter, CheckCircle, Server, Network,
    Sparkles, Sliders, ShieldCheck, Target, Cloud, TerminalSquare, Link, Cpu,
    Waypoints, Bot
} from 'lucide-react';

interface SkillItem {
    name: string;
    icon: React.ReactNode;
}

interface SkillsData {
    [key: string]: SkillItem[];
}

const skills: SkillsData = {
    'Core': [
        { name: 'Python', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'C++', icon: <Code className="w-8 h-8 text-white" /> },
        { name: 'Data Structures', icon: <Binary className="w-8 h-8 text-white" /> },
        { name: 'Algorithms', icon: <BrainCircuit className="w-8 h-8 text-white" /> },
        { name: 'Object-Oriented Programming', icon: <Layers className="w-8 h-8 text-white" /> },
    ],
    'Backend & AI Serving': [
        { name: 'FastAPI', icon: <Zap className="w-8 h-8 text-white" /> },
        { name: 'Streamlit', icon: <LayoutDashboard className="w-8 h-8 text-white" /> },
    ],
    'Machine Learning & Data Science': [
        { name: 'Scikit-Learn', icon: <LineChart className="w-8 h-8 text-white" /> },
        { name: 'NumPy', icon: <Hexagon className="w-8 h-8 text-white" /> },
        { name: 'Pandas', icon: <Database className="w-8 h-8 text-white" /> },
        { name: 'Matplotlib/Seaborn', icon: <BarChart className="w-8 h-8 text-white" /> },
        { name: 'Jupyter Notebooks', icon: <BookOpen className="w-8 h-8 text-white" /> },
        { name: 'Data Preprocessing & Feature Engineering', icon: <Filter className="w-8 h-8 text-white" /> },
        { name: 'Model Evaluation & Validation', icon: <CheckCircle className="w-8 h-8 text-white" /> },
        { name: 'Model Deployment & Monitoring', icon: <Server className="w-8 h-8 text-white" /> },
        { name: 'Deep Learning (CV/NLP)', icon: <Network className="w-8 h-8 text-white" /> }
    ],
    'Generative AI & Prompt Engineering': [
        { name: 'LLMs (OpenAI, Claude, Llama)', icon: <Sparkles className="w-8 h-8 text-white" /> },
        { name: 'Fine-tuning & Custom Models', icon: <Sliders className="w-8 h-8 text-white" /> },
        { name: 'AI Ethics & Bias Mitigation', icon: <ShieldCheck className="w-8 h-8 text-white" /> },
        { name: 'AI Evaluation & Metrics', icon: <Target className="w-8 h-8 text-white" /> },
        { name: 'AI Deployment & Scaling', icon: <Cloud className="w-8 h-8 text-white" /> },
        { name: 'Prompt Engineering', icon: <TerminalSquare className="w-8 h-8 text-white" /> },
        { name: 'LangChain / LlamaIndex', icon: <Link className="w-8 h-8 text-white" /> },
        { name: 'Vector Databases (Pinecone/Chroma)', icon: <Database className="w-8 h-8 text-white" /> },
        { name: 'Hugging Face', icon: <Cpu className="w-8 h-8 text-white" /> }
    ],
    'Stack (Web & Automation)': [
        { name: 'GraphQL', icon: <Waypoints className="w-8 h-8 text-white" /> },
        { name: 'MongoDB', icon: <Database className="w-8 h-8 text-white" /> },
        { name: 'Google Colab', icon: <BookOpen className="w-8 h-8 text-white" /> },
        { name: 'Gemini AI', icon: <Sparkles className="w-8 h-8 text-white" /> },
        { name: 'GitHub Copilot', icon: <Bot className="w-8 h-8 text-white" /> }
    ]
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};


const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10 font-syne">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.keys(skills).map((category, index) => (
                    <motion.div
                        key={index}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills[category].map((skill: SkillItem, skillIndex: number) => (
                                <motion.div
                                    key={skillIndex}
                                    className="flex items-center gap-2 p-2 rounded-lg bg-white/10"
                                    variants={item}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
                                        {skill.icon}
                                    </motion.div>
                                    <span className="text-white">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
