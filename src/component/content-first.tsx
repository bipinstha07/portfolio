import { Button } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";
import person from '../assets/person.png'
import { motion } from "framer-motion";
import { useState } from "react";

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

const spaceTime = ` I am also a Space and Astronomy enthusiast, deeply fascinated by the mysteries of the universe — from black holes and time travel to the very fabric of reality. I am passionate about exploring how space and time shape everything we know and everything yet to be discovered. I also lead a vibrant community called "Space Time," bringing together over 140,000 members who share the same passion. 


`

function ContentFirst() {
    const [text, setText] = useState("")
    const [hide, setHide] = useState<boolean>(false)

    function show() {

        setText(spaceTime)
        setHide(!hide)

    }

    return (
        <>
            <div className="flex md:pt-25  flex-wrap md:h-screen">
                <div className="md:w-3/5  order-2 md:order-1 ">
                    <motion.p variants={container(0.5)} initial='hidden' animate='visible' className=" text-5xl md:text-8xl mb-2 md:mb-8  font-extralight ">Bipin Shrestha</motion.p>
                    <motion.p variants={container(0.5)} initial='hidden' animate='visible' className="md:mb-8 mb-4 text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-[#39ff14] text-transparent bg-clip-text">FULL STACK DEVELOPER</motion.p>
                    <motion.p variants={container(0.5)} initial='hidden' animate='visible' className="text-sm ">Motivated Computer Science student with a passion for problem solving and software development. Proficient in Java with a solid foundation in algorithms and data structures. Skilled in web development and experienced in building projects using React, Spring Boot, and Microservices. Familiar with CI/CD pipelines, SQL/NoSQL databases, and AWS. Passionate about AI agents and autonomous services. Seeking opportunities to contribute innovative ideas and grow in a dynamic tech environment. 
                        {hide && <motion.span  animate={{x:0,opacity:1}} initial={{x:-400,opacity:0}} transition={{duration:2}} className="text-cyan-600"

                        >
                            {text} <a href="https://www.facebook.com/groups/1578981188801831" target="_blank" className="text-blue-500"> Visit </a>
                        </motion.span>
                        }
                    </motion.p>
                    <motion.div variants={container(0.5)} initial='hidden' animate='visible' className="text-end mt-4 mb md:mt-20">

                        <a href="https://www.linkedin.com/in/bipin-shrestha-4baba01a0/" target="_blank">
                            <Button  color="cyan" variant="filled" className=" border-cyan-200! hover:border-cyan-400! hover:bg-cyan-400! hover:text-black! bg-transparent!">
                                Let's Connect <FaLongArrowAltRight />
                            </Button>
                        </a>

                    </motion.div>
                </div>


                <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5}} className=" md:w-1/5 order-1 md:order-2 md:ml-35 ">
                    <motion.img onClick={show} initial={{ y: -20 }} animate={{
                        y: [10, -10],
                        transition: {
                            duration: 3,
                            
                            ease: 'linear' as const,
                            repeat: Infinity,
                            repeatType: 'reverse' as const,
                        }
                    }} className="w-50  md:w-[600px]" src={person} alt="" />
                </motion.div>
            </div>
        </>
    )
}

export default ContentFirst;