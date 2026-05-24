
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import MagneticButton from './ui/MagneticButton';
import { Github } from 'lucide-react';
import { BentoCard } from './ui/BentoCard';

const projects = [
    {
        name: 'Chat with PDF using Local LLM',
        description: 'A conversational AI application allowing users to interact with and query PDF documents locally, ensuring data privacy without relying on external APIs.',
        tags: [
            { name: 'Python', color: 'blue-text-gradient' },
            { name: 'LangChain', color: 'green-text-gradient' },
            { name: 'Local LLM', color: 'pink-text-gradient' },
            { name: 'VectorDB', color: 'blue-text-gradient' },
        ],
        source_code_link: 'https://github.com/divyaparadkar/Chat-with-PDF-using-Local-LLM-',
        className: 'lg:col-span-1',
        image: '/project_images/chat%20with%20pdf.webp',
    },
    {
        name: 'Object Detection using OpenCV',
        description: 'A robust computer vision application that performs real-time object detection and tracking using OpenCV and pre-trained deep learning models.',
        tags: [
            { name: 'Python', color: 'blue-text-gradient' },
            { name: 'OpenCV', color: 'green-text-gradient' },
            { name: 'Deep Learning', color: 'pink-text-gradient' },
        ],
        source_code_link: 'https://github.com/divyaparadkar/Object_Detection_using_OpenCV',
        className: 'lg:col-span-1',
        image: '/project_images/object%20detection.webp',
    },
    {
        name: 'Analytics Dashboard',
        description: 'An interactive website performance analytics dashboard built with Python to visualize key metrics, featuring dynamic data filtering and clear visual insights.',
        tags: [
            { name: 'Python', color: 'blue-text-gradient' },
            { name: 'Streamlit', color: 'green-text-gradient' },
            { name: 'Pandas', color: 'pink-text-gradient' },
            { name: 'Data Viz', color: 'blue-text-gradient' },
        ],
        source_code_link: 'https://github.com/divyaparadkar/Website-Performance-Analytics-Dashboard-with-Interactive-Visualizations',
        className: 'lg:col-span-1',
        image: '/project_images/data-analysis%20deshboard.webp',
    },
    {
        name: 'Insurance Cost Explorer',
        description: 'A predictive data science tool that explores demographic and health data to estimate and analyze individual medical insurance costs using regression techniques.',
        tags: [
            { name: 'Machine Learning', color: 'blue-text-gradient' },
            { name: 'Scikit-Learn', color: 'green-text-gradient' },
            { name: 'EDA', color: 'pink-text-gradient' },
        ],
        source_code_link: 'https://github.com/divyaparadkar/Insurance-Cost-Explorer.',
        className: 'lg:col-span-1',
        image: '/project_images/insurance%20cost.webp',
    },
    {
        name: 'Animated Interactive Website',
        description: 'A modern, responsive frontend project highlighting advanced web design principles, featuring smooth scrolling and complex interactive animations.',
        tags: [
            { name: 'JavaScript', color: 'blue-text-gradient' },
            { name: 'CSS Animations', color: 'green-text-gradient' },
            { name: 'UI/UX', color: 'pink-text-gradient' },
        ],
        source_code_link: 'https://github.com/divyaparadkar/Animated_website',
        className: 'lg:col-span-1',
        image: '/project_images/animated%20webside.webp',
    },
    {
        name: 'Heart Disease Predictor',
        description: 'A diagnostic machine learning application that analyzes patient attributes and clinical data to predict the probability of heart disease occurrences.',
        tags: [
            { name: 'Data Science', color: 'blue-text-gradient' },
            { name: 'Classification', color: 'green-text-gradient' },
            { name: 'Python', color: 'pink-text-gradient' },
        ],
        source_code_link: 'https://github.com/divyaparadkar/Heart-Heartdisease',
        className: 'lg:col-span-1',
        image: '/project_images/heart%20diseasis.webp',
    },
];

interface ProjectTag {
    name: string;
    color: string;
}

interface ProjectProps {
    name: string;
    description: string;
    tags: ProjectTag[];
    source_code_link: string;
    className: string;
    image: string;
}

interface ProjectCardProps {
    project: ProjectProps;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Tilt>
            <BentoCard className={project.className}>
                <div className="relative w-full h-[230px]">
                    <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-2xl' />
                    <div className="absolute top-0 right-0 m-2">
                        <MagneticButton>
                            <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded-full">
                                <Github className="w-6 h-6 text-white" />
                            </a>
                        </MagneticButton>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag: ProjectTag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </BentoCard>
        </Tilt>
    );
};

const Projects = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-syne">
                    Projects.
                </h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and expertise through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} project={project} />
                ))}
            </div>
        </>
    );
};

export default Projects;