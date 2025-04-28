import { useEffect, useState } from 'react';
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiHibernate, SiJavascript, SiKubernetes, SiMongodb, SiMysql, SiSpringboot } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';
import { motion } from 'framer-motion';


const skills = [
    { name: 'Java', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Spring Boot', level: 50 },
    { name: 'SQL', level: 82 },
    { name: 'AWS', level: 75 },
    { name: 'TailWindCSS', level: 90 },
];

const COLORS = [
    '#ff6f00',   // Java – Neon Orange
    '#00e8f8',   // React – Neon Cyan
    '#00ff66',   // Spring Boot – Neon Green
    '#00b3ff',   // SQL – Neon Blue
    '#ffcc00',   // AWS – Neon Yellow-Orange
    '#4ef5ff',   // TailWindCSS – Neon Teal
];

const techVar = (duration: number) => ({
    initial: { y: -10 }, // fixed here
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear' as const,
            repeat: Infinity,
            repeatType: 'reverse' as const,
        }
    }
})


export default function Skills() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100); // trigger animation after mount
    }, []);

    return (
        <>
            <motion.div whileInView={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:0.5}} className='text-center font-light mt-45  md:mt-0 text-4xl '>
                Skills
            </motion.div>

            <div className='flex flex-col md:flex-row gap-10 mb-35 items-center justify-between'>

                <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full  max-w-md md:w-4/5 space-y-4 p-4 bg-[#0d0d0d] rounded-xl">
                    {skills.map((skill, i) => (
                        <div key={skill.name}>
                            <div className="flex justify-between text-sm text-white mb-1">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-[#2c2c2c] h-3 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: animate ? `${skill.level}%` : '0%',
                                        backgroundColor: COLORS[i % COLORS.length],
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
                {/* Breaker */}

                <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: 50 }} transition={{ duration: 0.5 }} className="flex  md:w-3/5 flex-wrap gap-4">
                    <div className="flex justify-center flex-wrap gap-4">
                        <motion.div variants={techVar(2)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <FaReact className="text-5xl text-cyan-400" />
                            <div className="absolute  bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white! bg-black rounded shadow opacity-0  group-hover:opacity-100 transition-opacity">
                                85%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(2.5)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-2 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <FaJava className="text-5xl text-orange-600" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                90%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(3)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <SiMongodb className="text-5xl text-green-500" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                80%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(2.8)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <FaAws className="text-5xl text-yellow-400" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                75%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(3.2)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <SiMysql className="text-5xl text-blue-600" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                80%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(2.3)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <SiJavascript className="text-5xl text-yellow-300" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                85%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(3.5)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <FaNodeJs className="text-5xl text-green-400" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                85%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(3.8)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <SiSpringboot className="text-5xl text-green-600" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                20%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(2.7)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <SiKubernetes className="text-5xl text-blue-400" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                20%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(3.1)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <RiTailwindCssFill className="text-5xl text-teal-300" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                90%
                            </div>
                        </motion.div>

                        <motion.div variants={techVar(2.9)} initial="initial" animate="animate" className="relative group border border-[#2c2c2c] p-3 rounded-2xl transition-transform hover:scale-95 active:scale-90">
                            <SiHibernate className="text-5xl text-purple-500" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                0%
                            </div>
                        </motion.div>

                    </div>



                </motion.div>





            </div>
        </>
    );
}
