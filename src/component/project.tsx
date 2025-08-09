import url from '../assets/url.png'
import armstrong from  '../assets/armstrong.png'
import portfolio from '../assets/portfolio.png'
import blog from '../assets/blog.png'
import train from '../assets/train.png'
import hb1 from '../assets/HotelBooking/hb1.png'
import hb2 from '../assets/HotelBooking/hb2.png'
import hb3 from '../assets/HotelBooking/hb3.png'
import hb4 from '../assets/HotelBooking/hb4.png'
import hb5 from '../assets/HotelBooking/hb5.png'
import hb6 from '../assets/HotelBooking/hb6.png'
import hb7 from '../assets/HotelBooking/hb7.png'
import hb8 from '../assets/HotelBooking/hb8.png'
import url1 from '../assets/Url Shortener/url1.png'
import url2 from '../assets/Url Shortener/url2.png'
import url3 from '../assets/Url Shortener/url3.png'

import { GithubOutlined, LinkOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useState } from 'react'

// Image Gallery Component
function ImageGallery({ images, title }: { images: string[], title: string }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        console.log('Next clicked, current:', currentImageIndex, 'total:', images.length);
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        console.log('Prev clicked, current:', currentImageIndex, 'total:', images.length);
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative group">
            <img
                className="w-[380px] h-48 lg:h-60 mx-auto object-cover transition-transform duration-500 group-hover:scale-100 rounded"
                src={images[currentImageIndex]}
                alt={title + ' image ' + (currentImageIndex + 1)}
            />
            {/* Navigation Buttons */}
            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
                <LeftOutlined className="text-xs" />
            </button>
            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
                <RightOutlined className="text-xs" />
            </button>
            {/* Image Counter */}
            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-10">
                {currentImageIndex + 1} / {images.length}
            </div>
        </div>
    );
}

function Project() {
    const project = [
        {
            title: "Hotel Booking Web Application",
            description: "A full-stack hotel booking system for privately-owned or large hotels, built with Spring Boot, Next.js, and AWS. Features include JWT-based auth, JPA Criteria filtering, MapStruct DTOs, Stripe payments, async emails, caching, and auditing. Deployed on AWS (EC2, RDS, S3, API Gateway, Elastic Beanstalk) with CI/CD via CodePipeline and CodeBuild.",
            images: [hb1, hb2, hb3, hb4, hb5, hb6, hb7, hb8],
            technology: "Spring_Boot Next.js TailwindCSS TypeScript JWT Hibernate JPA MapStruct Stripe AWS EC2 RDS S3 API Gateway Elastic Beanstalk CodePipeline",
            link:'https://hotel-booking-frontend-rho.vercel.app/',
            code:'https://github.com/bipinstha07/Hotel_Booking',
        },
        {
            title: "Train Management System (Backend)",
            description: "Backend API built using Java Spring Boot for managing train routes, stations, schedules, and bookings with secure authentication.",
            images: [train],
            technology: "Java Spring Boot Hibernate Spring Security JWT MySQL REST API",
            link: "https://github.com/bipinstha07/TrainSystem",
            code:'https://github.com/bipinstha07/TrainSystem'
          },
        
        {
            title: "Blogging Website",
            description: "A full-featured blogging platform , built for efficient content management and user interaction",
            images: [blog],
            technology: "Node.js Express Bootstrap EJS MongoDB crypto.createHmac (SHA-256 + Salt)",
            link:'https://blog-3npo.onrender.com/',
            code:'https://github.com/bipinstha07/Blog'
        },
        {
            title:"Personal Portfolio",
            description: "A professional personal portfolio showcasing skills, projects, and experience, built with modern web technologies for optimal performance.",
            images:[portfolio],
            technology:"React Tailwind Framer Typescript AI Assistance GEMINI",
            link:'',
            code:''
        },
        {
            title: "URL Shortener",
            description: "A simple and efficient URL shortening web app built using Node.js, Express, MongoDB, and EJS. It allows users to enter long URLs and generate short, shareable links. When a short link is accessed, it redirects to the original URL.",
            technology: "Node.js Express.js JWT EJS MongoDB",
            images: [url1, url2, url3],
            link:'https://url-shortener-b0ag.onrender.com/',
            code:'https://github.com/bipinstha07/URL_Shortener'
        },
        {
            title: "Armstrong Number Checker",
            description: "Quickly verify if a number is an Armstrong number. This simple yet efficient tool takes user input and determines whether the number equals the sum of its digits each raised to the power of the number of digits.",
            technology: "HTML CSS Javascript",
            images: [armstrong],
            link:'https://bipinstha07.github.io/Armstrong/',
            code:'https://github.com/bipinstha07/Armstrong'
        }, {
            title:"WSCube Clone Website",
            description:"A Fully Website",
            technology:"HTML CSS Javascript Bootstrap",
            images:[armstrong],
            link:'https://bipinstha07.github.io/wscube',
            code:'https://github.com/bipinstha07/wscube'
        }
    ]

    

    return (
        <>
            <div className="container mx-auto py-12">
                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }} 
                    initial={{ y: -20, opacity: 0 }} 
                    transition={{ duration: 0.5 }} 
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-300 mb-3">
                        Projects
                    </h2>
                    <p className="text-gray-400 text-base max-w-xl mx-auto">
                        Explore my latest work showcasing full-stack development, backend systems, and modern web applications
                    </p>
                </motion.div>

                <div className="space-y-6 mx-auto mb-16">
                    {project.map((data, index) => (
                        <motion.div 
                            key={index} 
                            className="group relative bg-gradient-to-br from-gray-900/10 to-gray-800/10 backdrop-blur-[2px] border border-gray-700/50 rounded-xl overflow-hidden hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.01]"
                            whileInView={{ x: 0, opacity: 1 }} 
                            initial={{ 
                                x: -10, 
                                opacity: 0 
                            }} 
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image Container - Left Side */}
                                <motion.div 
                                    className="lg:w-1/3 relative h-52 lg:h-auto overflow-hidden"
                                    whileInView={{ x: 0, opacity: 1 }} 
                                    initial={{ x: -50, opacity: 0 }} 
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    {data.images.length > 1 ? (
                                        <ImageGallery images={data.images} title={data.title} />
                                    ) : (
                                        <motion.img 
                                            className="w-[390px] h-48 lg:h-60 mx-auto object-cover transition-transform duration-500 group-hover:scale-100" 
                                            src={data.images[0]} 
                                            alt={data.title}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </motion.div>

                                {/* Content - Right Side */}
                                <motion.div 
                                    className="lg:w-2/3 p-4"
                                    whileInView={{ x: 0, opacity: 1 }} 
                                    initial={{ x: 100, opacity: 0 }} 
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                        {data.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                        {data.description}
                                    </p>

                                    {/* Technology Tags */}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {data.technology.split(' ').slice(0, 15).map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700/50 hover:border-cyan-500/50 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {data.technology.split(' ').length > 4 && (
                                            <span className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700/50">
                                                +{data.technology.split(' ').length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        {data.link && data.link !== '' && (
                                            <a 
                                                href={data.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-xs font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                                            >
                                                <LinkOutlined className="text-xs" />
                                                Demo
                                            </a>
                                        )}
                                        
                                        {data.code && data.code !== '' && (
                                            <a 
                                                href={data.code} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 px-3 py-1.5 border border-gray-600 text-gray-300 rounded text-xs font-medium hover:border-gray-500 hover:text-white transition-all duration-300"
                                            >
                                                <GithubOutlined className="text-xs" />
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Research Section */}
                <div className="mt-20">
                    <motion.div 
                        whileInView={{ y: 0, opacity: 1 }} 
                        initial={{ y: 30, opacity: 0 }} 
                        transition={{ duration: 0.5,delay:0.1 }} 
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-300 mb-3">
                            Research & Publications
                        </h2>
                        <p className="text-gray-400 text-base max-w-xl mx-auto">
                            Academic research contributions in emerging technologies and educational innovation
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* Research Item 1 */}
                        <motion.div 
                            className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-[2px] border border-purple-700/30 rounded-xl p-6"
                            whileInView={{ x: 0, opacity: 1 }} 
                            initial={{ x: -100, opacity: 0 }} 
                            transition={{ duration: 0.5,delay:0.1 }}
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="lg:w-1/4">
                                    <div className="text-purple-400 font-semibold text-base mb-1">Spring 2023</div>
                                    <div className="text-purple-300 text-xs">Emerging Scholar Program</div>
                                </div>
                                
                                <div className="lg:w-3/4">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        Teacher Candidate Perceptions of the Use of Virtual Reality as a Teaching Tool
                                    </h3>
                                    <p className="text-purple-300 text-xs mb-3 italic">
                                        Research with Professor Stacia Austin
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Explored how virtual reality enhances teaching and learning, focusing on immersive learning, engagement, and practical applications. Analyzed studies showing positive teacher perceptions of VR in education for improving student participation, concept understanding, and real-life experiential learning.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Research Item 2 */}
                        {/* bg-gradient-to-br from-purple-900/10 to-pink-900/10 backdrop-blur-sm border border-purple-700/30  */}
                        <motion.div 
                            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-[2px] border border-blue-700/30 rounded-xl p-6"
                            whileInView={{ x: 0, opacity: 1 }} 
                            initial={{ x: 100, opacity: 0 }} 
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="lg:w-1/4">
                                    <div className="text-blue-400 font-semibold text-base mb-1">Fall 2023</div>
                                    <div className="text-blue-300 text-xs">Emerging Scholar Program</div>
                                </div>
                                
                                <div className="lg:w-3/4">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        AI in Business Communication
                                    </h3>
                                    <p className="text-blue-300 text-xs mb-3 italic">
                                        Research with Professor Veronika Humphries
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Studied the impacts of Artificial Intelligence, Robotics, and ICT on modern business operations and communication. Focused on how emerging technologies reshape business performance, workforce management, and economic factors. Analyzed global trends and challenges, including real-world examples from Nigeria and future outlooks on integrating AI into business and education systems.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;