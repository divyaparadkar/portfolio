
import { motion } from 'framer-motion';
import { Award, Star, Code } from 'lucide-react';

const achievements = [
    {
        title: 'LeetCode',
        description: 'Profile',
        icon: <Code className="w-8 h-8 text-white" />,
        link: 'https://leetcode.com/u/divyaparadkar/',
    },
    {
        title: 'HackerRank',
        description: '5 Star Coder',
        icon: <Star className="w-8 h-8 text-white" />,
        link: 'https://www.hackerrank.com/',
    },
    {
        title: 'DSA in Python',
        description: 'Udemy Certification',
        icon: <Award className="w-8 h-8 text-white" />,
    },
    {
        title: 'Machine Learning',
        description: 'freeCodeCamp Certification',
        icon: <Award className="w-8 h-8 text-white" />,
    },
    {
        title: 'DBMS',
        description: 'NPTEL - IIT KGP Certification',
        icon: <Award className="w-8 h-8 text-white" />,
    },
    {
        title: 'SQL',
        description: 'HackerRank Certification',
        icon: <Award className="w-8 h-8 text-white" />,
    },
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10 font-syne">
                Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                    <motion.a
                        key={index}
                        href={achievement.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="block p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10"
                    >
                        <div className="flex items-center gap-4">
                            {achievement.icon}
                            <div>
                                <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                                <p className="text-xl font-semibold text-accent">{achievement.description}</p>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Achievements;