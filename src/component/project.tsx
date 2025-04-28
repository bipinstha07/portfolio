import url from '../assets/url.png'
import ecom from '../assets/ecom.png'
import clone from '../assets/webclone.png'
import armstrong from  '../assets/armstrong.png'
import portfolio from '../assets/portfolio.png'

import { ArrowRightOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'



function Project() {
    const project = [
        {
            title: "Restaurant POS System",
            description: "(Upon completion) A comprehensive POS platform equipped with all necessary features for efficient business operations.",
            image: ecom,
            technology: "React Node.js Tailwind Typescript Yarn Vite JWT MongoDB Express",
            link:'null'
        },
        {
            title:"Personal Portfolio",
            description: "A professional personal portfolio showcasing skills, projects, and experience, built with modern web technologies for optimal performance.",
            image:portfolio,
            technology:"React Tailwind Framer Typescript",
            link:''
        },
        {
            title: "URL Shortener",
            description: "A simple and efficient URL shortening web app built using Node.js, Express, MongoDB, and EJS. It allows users to enter long URLs and generate short, shareable links. When a short link is accessed, it redirects to the original URL.",
            technology: "Node.js Express.js JWT EJS MongoDB ",
            image: url,
            link:'https://url-shortener-b0ag.onrender.com/'
        },
        {
            title: "Armstrong Number Checker",
            description: "Quickly verify if a number is an Armstrong number.",
            technology: "HTML CSS Javascript",
            image: armstrong,
            link:'https://bipinstha07.github.io/Armstrong/'
        },
        {
            title:"WSCube Clone Website",
            description:"A fully responsive static clone of the WSCube Tech website, designed to demonstrate my expertise in HTML, CSS, and JavaScript. This project focuses on recreating professional designs, applying animations, responsive layouts, and JavaScript-driven features to enhance user interaction and showcase my front-end skills.",
            technology:"HTML CSS Javascript Bootstrap",
            link: 'https://bipinstha07.github.io/wscube/#project',
            image:clone
        }

    ]

    return (
        <>

            <div className="container mt-10">
                <motion.p whileInView={{ y: 0, opacity: 1 }} initial={{ y: -20, opacity: 0 }} transition={{ duration: 0.5 }} className="text-2xl text-center mb-1">Projects</motion.p>
                {project.map((data, index) => (
                    <div key={index} className="flex p-2 border-b-1 border-blue-800 md:border-0  m-2 flex-col md:flex-row justify-center md:gap-40 items-center">
                        <div className=' text-center  md:w-1/3 '>

                       <div className=' md:pl-50'> 
                        <motion.img className='mx-auto w-[180px]' whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}  src={data.image} alt={data.title} />
                        </div>
                        </div>
                        <motion.div className=' md:w-2/3' whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} >
                            <p className="font-bold  text-xl">{data.title}</p>
                            <p className='font-light mt-1 mb-1'>{data.description}</p>
                            <p className='text-blue-400'>{data.technology}</p>
                            <p className='text-end'>
                              
                              <a href={data.link}  target='_blank'>
                                <button disabled={data.link=="null"}   className=' border px-2 rounded-md text-sm hover:border-blue-800 hover:text-blue-600 border-blue-600 text-blue-400'>
                                    View <ArrowRightOutlined />
                                </button>
                                </a>
                            </p>

                        </motion.div>
                    </div>

                ))}

{/* Research Header */}
                <div>
                    <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: -20, opacity: 0 }} transition={{ duration: 0.5 }} className="text-center mt-20 md:mt-10 mb-10 text-2xl">
                        Research
                    </motion.div>
{/* Research  */}
                  


                    <div className="flex flex-col md:flex-row mt-8 gap-6 items-start">
                        {/* Left Date */}
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="md:w-1/3  md:text-end text-gray-400 font-medium">
                            Spring 2023
                        </motion.div>

                        {/* Right Content */}
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: 10 }} transition={{ duration: 0.5 }} className="md:w-2/3 space-y-2">
                            <h3 className="text-lg font-semibold text-white">
                                Teacher Candidate Perceptions of the Use of Virtual Reality as a Teaching Tool
                            </h3>

                            <p className="italic text-gray-400">
                                Research with Professor Stacia Austin
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Explored how virtual reality enhances teaching and learning, focusing on immersive learning, engagement, and practical applications. Analyzed studies showing positive teacher perceptions of VR in education for improving student participation, concept understanding, and real-life experiential learning.
                            </p>
                        </motion.div>
                    </div>
                    <div  className="flex flex-col md:flex-row mt-8 gap-6 items-start">
                        {/* Left Date */}
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -10 }} transition={{ duration: 0.5 }} className="md:w-1/3 md:text-end text-gray-400 font-medium">
                            Fall 2023
                        </motion.div>

                        {/* Right Content */}
                        <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="md:w-2/3 space-y-2">
                            <h3 className="text-lg font-semibold text-white">
                                AI in Business Communication
                            </h3>

                            <p className="italic text-gray-400">
                                Research with Professor Veronika Humphries
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Studied the impacts of Artificial Intelligence, Robotics, and ICT on modern business operations and communication. Focused on how emerging technologies reshape business performance, workforce management, and economic factors. Analyzed global trends and challenges, including real-world examples from Nigeria and future outlooks on integrating AI into business and education systems.
                            </p>
                        </motion.div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Project;