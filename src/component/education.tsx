
import ulm from '../assets/ulm.png'
import aws from '../assets/cloudAws.png'
import hackerank from '../assets/hackerank.png'
import { Link } from 'react-router'
import postman from '../assets/postman.png'
import saylor from '../assets/saylor.png'
import udemy from '../assets/udemy.png'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const data = [
    {
        title: 'University of Louisiana at Monroe',
        subtitle: "Bachelor's Degree in Computer Science (Expected 2026)",
        img: ulm,
        link: null,
        type: 'education',
        gpa: 'GPA: 3.6/4.0'
    },

    {
        title: 'AWS Certified Cloud Practitioner',
        subtitle: (<>Amazon Web Services (Issued 2024)  <Link to="https://www.credly.com/badges/f477c3a2-4557-40d9-abf3-5fa64e5dd87b/linked_in?t=sn4nwf" target='_blank' className='text-blue-500'>View Certificate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Link>

        </>),
        img: aws,
        link: "https://www.credly.com/badges/f477c3a2-4557-40d9-abf3-5fa64e5dd87b/linked_in?t=sn4nwf",
        type: 'certification'
    },
    {
        title: 'Problem Solving (Java)',
        subtitle: (
            <>
                HackerRank Earned March 2024{' '}
                <Link to="https://www.hackerrank.com/certificates/4965911b13aa" target="_blank" className="text-blue-500">
                    View Certificate
                </Link><br />
                <span className="text-gray-500 text-sm">
                    Covers Java : classes,objects, methods, control statements, <br /> data structures,  inheritance, exception handling (Java 7/8).
                </span>
            </>
        ),
        img: hackerank,
        link: "https://www.hackerrank.com/certificates/4965911b13aa",
        type: 'certification'
    },
    {
        title: 'Linux Command Line: From Zero to Hero',
        subtitle: (
            <>
                Udemy Earned May 2025{' '}
                <Link to="https://www.udemy.com/certificate/UC-a7f64826-e9a5-4255-83c6-9559ad2791fa" target="_blank" className="text-blue-500">
                    View Certificate
                </Link><br />
                <span className="text-gray-500 text-sm">
                Skilled in using Linux commands for managing files, users, software, tasks, system monitoring, and firewall settings.  </span>
            </>
        ),
        img: udemy,
        link: "https://www.udemy.com/certificate/UC-a7f64826-e9a5-4255-83c6-9559ad2791fa",
        type: 'certification'
    },
    {
        title: 'CS406: Information Security',
        subtitle: (
            <>
                Saylor Academy Earned May 2025{' '}
                <Link to="https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1746495391/0234703439BS.pdf" target="_blank" className="text-blue-500">
                    View Certificate
                </Link><br />
                <span className="text-gray-500 text-sm">
                    Solid understanding of key information security concepts, including  modes of threats <br /> and attacks on information systems, threat mitigation, cryptography, user identification <br />and authentication, access control, privacy laws, and more.
                </span>
            </>
        ),
        img: saylor,
        link: "https://www.hackerrank.com/certificates/4965911b13aa",
        type: 'certification'
    },
    {
        title: 'Postman API Fundamentals Student Expert',
        subtitle: (
            <>
                Postman - Issued Feb 23, 2024 <Link to="https://badgr.com/public/assertions/6y4UDaLhRyedVimaQEH9Jg?identity__email=bipinshrestha830@gmail.com" target='_blank' className='text-blue-500'>View Certificate</Link><br />
                <span className="text-gray-500 text-sm"> Proficient in API usage and Postman fundamentals.</span>
            </>
        ),
        img: postman,
        link: "https://badgr.com/public/assertions/6y4UDaLhRyedVimaQEH9Jg?identity__email=bipinshrestha830@gmail.com",
        type: 'certification'
    }
];

export default function Education() {
    return (
        <>
            <div className="container mx-auto">
                <motion.div 
                    whileInView={{ y: 0, opacity: 1 }} 
                    initial={{ y: -20, opacity: 0 }} 
                    transition={{ duration: 0.5 }} 
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-300 mb-4">
                        Education & Certifications
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My academic journey and professional certifications that showcase my expertise
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {data.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="group  sm:w-2/3 mx-auto relative bg-gradient-to-br from-gray-900/10 to-gray-800/10 backdrop-blur-[2px] border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-600/50 transition-all duration-500"
                            whileInView={{ y: 0, opacity: 1 }} 
                            initial={{ y: -0, opacity: 0 }} 
                            transition={{ duration: 0.6, delay:0.1 }}
                            
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image Container - Left Side */}
                                <motion.div 
                                    className="lg:w-1/4  sm:ml-20 relative  h-32 lg:h-auto overflow-hidden flex items-center justify-center p-6"
                                    whileInView={{ x: 0, opacity: 1 }} 
                                    initial={{ x: -100, opacity: 0 }} 
                                    transition={{ duration: 0.6, delay: 0.1}}
                                >
                                    <div className="relative w-24 h-24 lg:w-32 lg:h-32">
                                        <motion.img 
                                            className="w-full h-full object-contain transition-transform duration-500 " 
                                            src={item.img} 
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        {item.type === 'education' ? (
                                            <GraduationCap className="w-6 h-6 text-blue-400" />
                                        ) : (
                                            <Award className="w-6 h-6 text-yellow-400" />
                                        )}
                                    </div>
                                </motion.div>

                                {/* Content - Right Side */}
                                <motion.div 
                                    className="lg:w-3/4 p-6 ml-10"
                                    whileInView={{ x: 0, opacity: 1 }} 
                                    initial={{ x: 100, opacity: 0 }} 
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        {item.gpa && (
                                            <span className="text-sm text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                                                {item.gpa}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="text-gray-300 text-sm leading-relaxed">
                                        {item.subtitle}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}