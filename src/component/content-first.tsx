import { Button } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";
import person from '../assets/person.png'
import { motion } from "framer-motion";
import { useState } from "react";

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

const spaceTime = ` I am also a Space and Astronomy enthusiast, deeply fascinated by the mysteries of the universe — from black holes and time travel to the very fabric of reality. I am passionate about exploring how space and time shape everything we know and everything yet to be discovered. I also lead a vibrant community called "Space Time," bringing together over 140,000 members who share the same passion.`

function ContentFirst() {
    const [text, setText] = useState("")
    const [hide, setHide] = useState<boolean>(false)

    function show() {
        setText(spaceTime)
        setHide(!hide)
    }

    return (
        <>
            <div className="flex md:pt-25 flex-wrap md:h-screen pt-0 md:pt-25 relative">
                {/* Removing the gradient border lines */}
                <div className="md:w-3/5 order-2 md:order-1 relative">
                    <motion.p 
                        variants={container(0.5)} 
                        initial='hidden' 
                        animate='visible' 
                        className="text-5xl md:text-8xl mb-2 md:mb-8 font-extralight relative"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-white relative z-10">
                            Bipin Shrestha
                        </span>
                        <span className="absolute -left-2 top-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50 blur-sm">
                            Bipin Shrestha
                        </span>
                    </motion.p>

                    <motion.p 
                        variants={container(0.5)} 
                        initial='hidden' 
                        animate='visible' 
                        className="md:mb-8 mb-4 text-xl md:text-2xl font-mono relative"
                    >
                        <span className="bg-gradient-to-r from-purple-600 via-cyan-400 to-[#39ff14] text-transparent bg-clip-text">
                            FULL_STACK_DEVELOPER
                        </span>
                        <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-purple-600/50 to-cyan-400/50" />
                    </motion.p>

                    <motion.div 
                        variants={container(0.5)} 
                        initial='hidden' 
                        animate='visible' 
                        className="text-sm relative group"
                    >
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400/50 transition-colors duration-500" />
                        <p className="font-mono leading-relaxed">
                            Motivated Computer Science student with a passion for problem solving and software development. Proficient in Java with a solid foundation in algorithms and data structures. Skilled in web development and experienced in building projects using React, Spring Boot, and Microservices. Familiar with CI/CD pipelines, SQL/NoSQL databases, and AWS. Passionate about AI agents and autonomous services. Seeking opportunities to contribute innovative ideas and grow in a dynamic tech environment. 
                            {hide && (
                                <motion.span 
                                    animate={{opacity:1}} 
                                    initial={{opacity:0}} 
                                    transition={{duration:2}} 
                                    className="text-cyan-400 block mt-4"
                                >
                                    {text} 
                                    <a 
                                        href="https://www.facebook.com/groups/1578981188801831" 
                                        target="_blank" 
                                        className="text-purple-400 hover:text-purple-300 transition-all duration-300 border-b border-purple-400/50 hover:border-purple-400"
                                    > 
                                        [Visit_Community] 
                                    </a>
                                </motion.span>
                            )}
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={container(0.5)} 
                        initial='hidden' 
                        animate='visible' 
                        className="text-end mt-4 mb md:mt-20"
                    >
                        <a href="https://www.linkedin.com/in/bipin-shrestha-4baba01a0/" target="_blank">
                            <Button className="!bg-transparent !border-cyan-400 !text-cyan-400 hover:!shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:!text-cyan-300 hover:!border-cyan-300 !transition-all !duration-300 flex items-center gap-2">
                                Let's Connect <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </a>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 1, opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.5}} 
                    className="md:w-1/5 order-1 md:order-2 md:ml-35 relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500" />
                    <motion.img 
                        onClick={show} 
                        initial={{ y: -20 }} 
                        animate={{
                            y: [10, -10],
                            transition: {
                                duration: 3,
                                ease: 'linear' as const,
                                repeat: Infinity,
                                repeatType: 'reverse' as const,
                            }
                        }} 
                        className="w-50 md:w-[600px] relative hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300" 
                        src={person} 
                        alt="Bipin Shrestha" 
                    />
                </motion.div>
            </div>
        </>
    )
}

export default ContentFirst;