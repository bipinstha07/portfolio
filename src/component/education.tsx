import ulm from '../assets/ulm.png'
import aws from '../assets/cloudAws.png'
import hackerank from '../assets/hackerank.png'
import { Link } from 'react-router'
import postman from '../assets/postman.png'
import saylor from '../assets/saylor.png'
import { motion } from 'framer-motion'


const data = [
    {
        title: 'University of Louisiana at Monroe',
        subtitle: "Bachelor's Degree in Computer Science (Expected 2026)",
        img: ulm,
        link: null,

    },

    {
        title: 'AWS Certified Cloud Practitioner',
        subtitle: (<>Amazon Web Services (Issued 2024)  <Link to="https://www.credly.com/badges/f477c3a2-4557-40d9-abf3-5fa64e5dd87b/linked_in?t=sn4nwf" target='_blank' className='text-blue-500'>View Certificate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Link>

        </>),
        img: aws,
        link: null,

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
    },
    {
        title: 'Postman API Fundamentals Student Expert',
        subtitle: (
            <>
                Postman - Issued Feb 23, 2024 <Link to="https://badgr.com/public/assertions/6y4UDaLhRyedVimaQEH9Jg?identity__email=bipinshrestha830@gmail.com" target='_blank' className='text-blue-500'>View Certificate</Link><br />
                Proficient in API usage and Postman fundamentals.
            </>
        ),
        img: postman,
        link: null,

    }
];


export default function Education() {
    return (
        <>
            <div className="container mt-20">
                <motion.div whileInView={{ y: 0, opacity: 1 }} initial={{ y: -20, opacity: 0 }} transition={{ duration: 0.5 }} className="text-center mb-10 text-2xl">
                    Education and Certifications
                </motion.div>



                {data.map((data, index) => (
                    <>
                        <div key={index} className="flex items-center justify-center gap-10  p-4 ">
                            <div className="w-1/3  ">
                                <motion.img whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='ml-auto' width="120px" src={data.img} alt="ULM Logo" />
                            </div>

                            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='w-2/3 ' >
                                
                                    <p className="text-lg font-semibold">{data.title}</p>
                                    <p className="text-sm text-gray-600">{data.subtitle}</p>
                             
                            </motion.div>
                        </div>
                    </>
                ))}








            </div>
        </>
    )
}