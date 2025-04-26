import { motion } from "framer-motion"


export default function Connect() {
    return (
        <>
            <div className="container mt-20 text-center">
                <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-10}} transition={{duration:0.5}} className="text-4xl">
                    Get In Touch
                </motion.div>

                <div className="mt-5 mb-10 flex flex-col ">
                    <motion.a whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} href="mailto:bipinshrestha830@gmail.com" className="text-blue-400 hover:underline">
                        bipinshrestha830@gmail.com
                    </motion.a>


                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}}>Monroe,LA</motion.p>
                </div>
            </div>
        </>
    )
}