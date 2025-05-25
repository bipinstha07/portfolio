import { Button } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

import person from '../assets/person.png'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";


const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
})

const spaceTime = ` I am also a Space and Astronomy enthusiast, deeply fascinated by the mysteries of the universe — from black holes and time travel to the very fabric of reality. I am passionate about exploring how space and time shape everything we know and everything yet to be discovered. I also lead a vibrant community called "Space Time," bringing together over 140,000 members who share the same passion.`
const alldata = `
Bipin Shrestha is a passionate Full-Stack Developer and a Computer Science student at the University of Louisiana at Monroe, expected to graduate in 2026. He is proficient in Java, React, Spring Boot, SQL, AWS, and TailWindCSS, with expertise in full-stack development, CI/CD, and cloud computing.

Skills:
Java (90%), React (85%), Spring Boot (50%), SQL (82%), AWS (75%), TailWindCSS (90%)

Projects:

Restaurant POS System (in progress): A full-featured business POS platform using React, Node.js, Tailwind, Typescript, Vite, JWT, MongoDB, Express.
Link: null

Blogging Website: A blogging platform with authentication and MongoDB integration.
Link: https://blog-3npo.onrender.com/

Personal Portfolio: Built using React, Tailwind CSS, Framer Motion, and TypeScript.
Link: (currently viewing)

URL Shortener: A web app to shorten long URLs.
Link: https://url-shortener-b0ag.onrender.com/

Armstrong Number Checker: Tool to verify Armstrong numbers using JavaScript.
Link: https://bipinstha07.github.io/Armstrong/

WSCube Clone Website: Static clone demonstrating advanced frontend work.
Link: https://bipinstha07.github.io/wscube/#project

Research:
Spring 2023 – Teacher Candidate Perceptions of the Use of Virtual Reality as a Teaching Tool (Prof. Stacia Austin)
Fall 2023 – AI in Business Communication (Prof. Veronika Humphries)

Certifications:

AWS Certified Cloud Practitioner (2024)
https://www.credly.com/badges/f477c3a2-4557-40d9-abf3-5fa64e5dd87b/linked_in?t=sn4nwf

Problem Solving (Java) – HackerRank (March 2024)
https://www.hackerrank.com/certificates/4965911b13aa

Linux Command Line – Udemy (May 2025)
https://www.udemy.com/certificate/UC-a7f64826-e9a5-4255-83c6-9559ad2791fa

CS406: Information Security – Saylor Academy (May 2025)
https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1746495391/0234703439BS.pdf

Postman API Fundamentals – Postman (Feb 2024)
https://badgr.com/public/assertions/6y4UDaLhRyedVimaQEH9Jg?identity__email=bipinshrestha830@gmail.com

Contact:
Email: bipinshrestha830@gmail.com
Location: Monroe, LA
LinkedIn: https://www.linkedin.com/in/bipin-shrestha-4baba01a0/
GitHub: https://github.com/bipinstha07
`

function ContentFirst() {
    const [text, setText] = useState("")
    const [hide, setHide] = useState<boolean>(false)
    const [chat, setChat] = useState<boolean>(false)
    const chatInputRef = useRef<HTMLInputElement>(null); // Renamed for clarity
    const [userchat, setUserchat] = useState<any[]>([

    ])
    const chatBodyRef = useRef<any>([]);
    const [isTyping, setIsTyping] = useState(false);





    function show() {
        setText(spaceTime)
        setHide(!hide)
    }

    function showChat() {
        setChat(!chat)
        console.log("chatbot opened")
    }

    const handleform = (e: any) => {
        e.preventDefault()
        const usermessage = chatInputRef.current?.value.trim(); // Access value safely
        if (!usermessage) return;
        setUserchat((prev) => [...prev, `user ${usermessage}`, "AI Typing..."]); // Prefix user message
        setIsTyping(true);
        generateRequest(usermessage); // Pass user message directly
        if (chatInputRef.current) {
            chatInputRef.current.value = ""; // Clear input after sending
        }
    }

    const generateRequest = async (usermessage: string): Promise<void> => {
        const prompt = `
           You are an AI assistant designed to provide information about Bipin Shrestha. Your goal is to answer questions concisely and helpfully, typically within **25 words or less**, unless more detail is specifically requested.

    Here is the relevant information about Bipin Shrestha you should use as your primary knowledge source:
    ${alldata}

           Key Directives for your Responses:

        Start with a Welcoming Tone (Initial Message Only): If this is the very beginning of a new conversation (i.e., no prior user messages in the current turn), you should respond with a friendly greeting like "Hi there! What would you like to know about Bipin Shrestha?" or "Hello! How can I help you learn about Bipin Shrestha today?" Do NOT use phrases like "Understood," "I'm ready," or confirm you understand the instructions.

        Praise for Relevant Questions: If a question is about Bipin Shrestha's suitability for a role (e.g., "Is he good for Google to work?"), provide a positive and well-reasoned response based on his skills, projects, and certifications. Highlight his strengths without being overly verbose.

        Formalities: For simple social greetings like "How are you?", respond naturally: "I'm doing well, thank you! How about you?"

        Information Sourcing:

        Prioritize provided 'alldata'.
        Praise and Positive Framing:

        Whenever a question relates to Bipin's skills, projects, work ethic, or suitability for roles (e.g., "Is he good for Google?"), always provide an enthusiastic and positive answer.

        Highlight his proficiency, passion, expertise, and dedication. Emphasize how his skills (like Java, React, AWS) and projects make him an exceptionally valuable asset.

         For example, if asked about Google, respond with something like:
        "Absolutely! Bipin Shrestha's strong proficiency in Java, React, and AWS, combined with his passion for full-stack development and proble
        If the user's message is "I am good," "I'm good," "I'm doing well," or a similar positive self-assessment *after* you've asked "How about you?", acknowledge it briefly and pivot back to Bipin. For instance: "That's great to hear! So, what can I tell you about Bipin Shrestha today?" or "Glad to hear it! What would you like to know about Bipin's impressive background?"
       
        If the user's message is simply "ok", "okay", "alright", or a similar simple affirmation, respond with an encouraging follow-up question. Examples: "Great! What else can I tell you about Bipin?", "Perfect. Is there anything specific you'd like to dive into next?", "Got it. Feel free to ask away!"
        
        If the question is not about Bipin Shrestha but is a general knowledge question (e.g., "What is the capital of France?", "Tell me a joke"), you can answer it directly and factually. Do not try to connect it back to Bipin unless the question implicitly allows for it.
        If a question cannot be answered from the provided 'alldata', politely state: "I don't have enough information to answer that question about Bipin Shrestha from my current knowledge base."
       DIRECTLY Answering Questions About Bipin Shrestha:

IMMEDIATELY and directly answer any question that asks for specific information related to Bipin's skills, projects, research, certifications, or contact details from the provided alldata.

Always provide an enthusiastic and positive answer, highlighting his proficiency, passion, expertise, and dedication. Emphasize how his skills and projects make him an exceptionally valuable asset.

Examples:

If asked "projects" or "tell me his projects":
"Bipin Shrestha's impressive projects include a Restaurant POS System, a Blogging Website, his Personal Portfolio, a URL Shortener, an Armstrong Number Checker, and a WSCube Clone Website, showcasing his diverse development expertise!"

If asked "skills":
"Bipin is highly proficient in Java (90%), React (85%), and TailwindCSS (90%), with strong capabilities in SQL, AWS, and Spring Boot—a true full-stack talent!"
        You can provide general, common knowledge if the question is a basic formality (like "How are you?"). However, for questions specifically about Bipin Shrestha, stick to the provided alldata unless it's a very general positive statement.

        Avoid Redundancy: Do not repeat the full alldata or lengthy descriptions on every question. Provide only the relevant praise or information for the specific query.

        Conciseness: Keep answers brief and to the point (under 25 words where possible) unless the question clearly requires more detail.

        User's Current Question:
            ${usermessage}`;

        const request: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    role: 'user',
                    parts: [{ text: prompt }]
                }]
            }),
        };

        try {
            const res = await fetch(import.meta.env.VITE_REACT_API_GEMINI, request);
            const data = await res.json();
           

            let modelResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, I don't have enough information to answer that question based on what I know about Bipin Shrestha.";

            // Optional: If you want to keep markdown formatting, remove the next line.
            // If you want to remove bolding specifically, you can keep this:
            // modelResponse = modelResponse.replace(/\*\*(.*?)\*\*/g, "$1").trim();

            if (modelResponse.length < 5) {
                modelResponse = "AI Can you say it again please?"
            } else {
                modelResponse = `AI ${modelResponse.trim()}`; // Add "AI " prefix
            }

            setUserchat((prev) => {
                const updated = [...prev];
                updated.pop(); // remove "AI Typing..."
                return [...updated, modelResponse];
            });
            setIsTyping(false);
        }
        catch (e) {
           
            setUserchat((prev) => {
                const updated = [...prev];
                updated.pop(); // remove "AI Typing..."
                return [...updated, "AI I'm sorry, I encountered an error and cannot respond right now. Please try again later."];
            });
            setIsTyping(false);
        }
    };
    useEffect(() => {
        
        if (userchat.length === 0) return;

        const lastMessage = userchat[userchat.length - 1];
        const secondlastMessage = userchat[userchat.length-2];
       
       
        const oneBlock = `${secondlastMessage} => ${lastMessage}`
        

        
        fetch("http://localhost:1010/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: "Assistant Connection",
            content: oneBlock
          })
          
        })
       
      }, [userchat])

      


    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [userchat, show]);

    return (
        <>
            <div className="flex md:pt-25 flex-wrap md:h-screen pt-0  relative">
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
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ duration: 2 }}
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
                    transition={{ duration: 0.5, delay: 0.5 }}
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

                <div className="md:w-1/5 fixed bottom-8 z-50 md:right-60 lg:right-40 xl:right-30 2xl:right-10 order-3">
                    {!chat && (
                        <button
                            onClick={showChat}
                            className="p-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 float-right"
                        >
                            <FaRobot className="text-2xl text-white" />
                        </button>
                    )}

                    {chat && (
                        <div className="w-[380px] h-[600px] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl">
                            {/* Header */}
                            <div className="p-4 bg-gradient-to-r from-purple-600/10 to-blue-500/10 border-b border-purple-500/20">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                                            <FaRobot className="text-xl text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">AI Assistant</h3>
                                            <span className="text-xs text-green-400 flex items-center gap-1">
                                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                                Online
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={showChat}
                                        className="text-gray-400 hover:text-red-400 transition-colors"
                                    >
                                        <RxCrossCircled className="text-2xl" />
                                    </button>
                                </div>
                            </div>

                            {/* Messages */}
                            <div ref={chatBodyRef} className="h-[calc(100%-140px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-4 space-y-4">
                                <div className="flex gap-2 items-start">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                                        <FaRobot className="text-sm text-white" />
                                    </div>
                                    <div className="bg-purple-500/10 rounded-2xl rounded-tl-none p-3 text-sm text-white max-w-[80%]">
                                        Hi there! Ask me anything about Bipin Shrestha.
                                    </div>
                                </div>

                                {userchat.map((chatMessage, i) => {
                                    // Ensure chatMessage is a string before splitting
                                    const messageString = String(chatMessage).trim();
                                    const isAIMessage = messageString.startsWith("AI ");
                                    const displayMessage = isAIMessage ? messageString.substring(3) : messageString.substring(5); // Remove "AI " or "user " prefix

                                    return (
                                        <div key={i} className={`flex gap-2 items-start ${isAIMessage ? '' : 'flex-row-reverse'}`}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isAIMessage ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}>
                                                {isAIMessage ? <FaRobot className="text-sm text-white" /> : <span className="text-sm text-white">You</span>}
                                            </div>
                                            <div className={`rounded-2xl p-3 text-sm text-white max-w-[80%] ${isAIMessage ? 'bg-purple-500/10 rounded-tl-none' : 'bg-blue-500/10 rounded-tr-none'}`}>
                                                {displayMessage}
                                            </div>
                                        </div>
                                    );
                                })}

                                {isTyping && (
                                    <div className="flex gap-2 items-start">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                                            <FaRobot className="text-sm text-white" />
                                        </div>
                                        <div className="bg-purple-500/10 rounded-2xl rounded-tl-none p-3 space-x-1">
                                            <span className="w-2 h-2 bg-white/50 rounded-full inline-block animate-bounce"></span>
                                            <span className="w-2 h-2 bg-white/50 rounded-full inline-block animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                            <span className="w-2 h-2 bg-white/50 rounded-full inline-block animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input */}
                            <form onSubmit={handleform} className="p-4 border-t border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-blue-500/10">
                                <div className="flex gap-2 items-center">
                                    <input
                                        ref={chatInputRef} // Use the new ref
                                        type="text"
                                        placeholder="Type your message..."
                                        className="flex-1 bg-white/5 border border-purple-500/20 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40"
                                    />
                                    <button type="submit" className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                                        <IoMdSend className="text-xl text-white" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default ContentFirst;