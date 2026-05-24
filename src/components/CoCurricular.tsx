import { motion } from 'framer-motion';
import { Medal, Trophy, Activity, Star } from 'lucide-react';

const activities = [
    {
        title: 'All India Taekwondo Championship',
        description: 'National Level - Kurukshetra University',
        date: '2022',
        icon: <Trophy className="w-8 h-8 text-white" />,
    },
    {
        title: 'Volleyball',
        description: 'Two-Time State Level Gold Medalist',
        date: '',
        icon: <Medal className="w-8 h-8 text-white" />,
    },
    {
        title: 'Kabaddi',
        description: 'State Level Participant',
        date: '',
        icon: <Activity className="w-8 h-8 text-white" />,
    },
    {
        title: 'School Topper & Gold Medalist',
        description: 'Reso Vista',
        date: '2018',
        icon: <Star className="w-8 h-8 text-white" />,
    },
];

const CoCurricular = () => {
    return (
        <section id="cocurricular" className="py-20">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10 font-syne">
                Co-curricular Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="block p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 shrink-0 rounded-full bg-purple-500/20 flex items-center justify-center">
                                {activity.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                                <p className="text-lg font-medium text-secondary">{activity.description}</p>
                                {activity.date && (
                                    <p className="text-sm text-purple-400 mt-1">{activity.date}</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CoCurricular;
