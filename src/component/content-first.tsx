import { Button } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { FiEye } from "react-icons/fi";


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
    https://www.credly.com/badges/f477c3a2-4557-40d9-abf3-5fa64e2dd87b/linked_in?t=sn4nwf

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
    const chatInputRef = useRef<HTMLInputElement>(null);
    // userchat now stores messages ready for display, with prefixes
    const [userchat, setUserchat] = useState<any[]>([
        // Initial AI greeting is handled by the prompt for the first message
    ]);
    const chatBodyRef = useRef<HTMLDivElement>(null); // Specific type for chat body
    const [isTyping, setIsTyping] = useState(false);

    function show() {
        setText(spaceTime);
        setHide(!hide);
    }

    function showChat() {
        setChat(!chat);
        // Optional: If you want to trigger an initial AI greeting when chat opens
        // and userchat is empty, you could call generateRequest with an empty message.
        // However, the prompt already handles the "first message" scenario implicitly.
    }

    const handleform = (e: React.FormEvent) => { // Use React.FormEvent for type safety
        e.preventDefault();
        const usermessage = chatInputRef.current?.value.trim();
        if (!usermessage) return;

        // Add user message to display
        setUserchat((prev) => [...prev, `user ${usermessage}`]);

        // Clear input and show typing indicator *before* API call
        if (chatInputRef.current) {
            chatInputRef.current.value = "";
        }
        setIsTyping(true);

        generateRequest(usermessage);
    }

    const generateRequest = async (usermessage: string): Promise<void> => {
        // Prepare conversation history for Gemini API
        // This maps your display format (`user chat` / `AI chat`) to Gemini's `role` and `parts`
        const conversationHistoryForGemini = userchat.map(chatMessage => {
            const messageString = String(chatMessage).trim();
            const isAIMessage = messageString.startsWith("AI ");

            const role = isAIMessage ? 'model' : 'user';
            const text = isAIMessage ? messageString.substring(3) : messageString.substring(5); // Remove "AI " or "user " prefix

            return {
                role: role,
                parts: [{ text: text }]
            };
        });

        // The system instruction/prompt that defines AI's behavior and knowledge base
        const systemInstruction = `
            You are an AI assistant designed to provide information about Bipin Shrestha. Your primary role is to be highly informative, concise, and always present Bipin's abilities and achievements in a **very positive and commendable light**. You should naturally integrate praise and highlight his strengths whenever relevant to the user's question.

            Here is the comprehensive information about Bipin Shrestha you should use as your primary knowledge base:
            ${alldata}

          Core Directives for Your Responses (Prioritized):

                Opening the Conversation (Initial Message Only):

                If it's the first message in a new chat, start warmly:
                "Hi there! I'm ready to tell you all about Bipin Shrestha's impressive skills and accomplishments. What would you like to know?"

            Avoid phrases like "Understood" or "I'm ready."

            IMMEDIATE and DIRECT Answers about Bipin Shrestha (Highest Priority):
            Handling Brief User Acknowledgments/Greetings (Medium Priority - Pivot to Bipin):
        Handling General Knowledge Questions (HIGH PRIORITY, if not about Bipin):

            If the user's question is not about Bipin Shrestha, but is a common factual or general knowledge question (e.g., "What is the capital of France?", "What is the weight of a proton?", "What is a star made of?", "Location of Kathmandu?"), you ARE authorized and expected to answer it directly and factually.

            Do not try to connect it back to Bipin. Your goal is to be a helpful AI for general inquiries as well.
            If the user's message is a very short, non-specific social greeting or acknowledgment (e.g., "Hi", "Hello", "Hey", "How", "Yo", "Okay", "Got it", "Cool", "Thanks", "Alright", "Yep", "Nope", "K"), DO NOT ask "How are you?". Instead, immediately and politely pivot back to your purpose.

            Examples:

            User: "Hi" → AI: "Hello! What can I tell you about Bipin Shrestha today?"

            User: "How" → AI: "I'm here to help! What would you like to know about Bipin?"

            User: "Okay" → AI: "Great! What can I tell you about Bipin next?"

            User: "Thanks" → AI: "You're welcome! What else about Bipin can I share?"

            If the user specifically asks "How are you?", then respond:
            "I'm doing well, thank you! How about you?"

            If asked anything about Bipin (skills, projects, research, certifications, etc.), answer immediately, positively, and enthusiastically.

            Highlight key strengths and keep responses under 25 words, unless more detail is needed.

            Examples:

            "Bipin is highly skilled in Java (90%), React (85%), TailwindCSS (90%), SQL, AWS, and Spring Boot—a true full-stack talent!"

            "His projects include a Restaurant POS System, Blogging Website, URL Shortener, and more—showcasing his strong development skills."

            "Absolutely! Bipin’s technical expertise and passion make him a great fit for top companies like Google."
            Begin with an inviting greeting like: "Hi there! I'm ready to tell you all about Bipin Shrestha's impressive skills and accomplishments. What would you like to know?"
            Handling General Formalities and Affirmations (Lower Priority):

            For greetings: "I'm doing well, thank you! How about you?"

            If they respond positively (e.g., "I'm good"):
            "That's great to hear! What would you like to know about Bipin Shrestha today?"

            If they reply "ok" or "alright":
            "Perfect. Is there anything specific you'd like to dive into about Bipin?"

            General Knowledge and Out-of-Context Questions (Lowest Priority):

            For non-Bipin questions like "What’s the capital of France?" answer directly.

            If you don’t have enough info from alldata and it’s not general knowledge:
            "I don't have enough specific information to answer that question from my current knowledge base."

            Avoid Redundancy:

            Never repeat the full alldata. Just extract the most relevant strengths for each question.

            `;

        // Combine system instruction and conversation history for the API request
        // The system instruction is sent as the first 'user' turn to establish context/rules
        const contents = [
            {
                role: 'user',
                parts: [{ text: systemInstruction }]
            },
            ...conversationHistoryForGemini, // All previous turns
            {
                role: 'user', // The current user message is the last turn
                parts: [{ text: usermessage }]
            }
        ];

        const request: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: contents
            }),
        };

        try {
            const res = await fetch(import.meta.env.VITE_REACT_API_GEMINI, request);
            const data = await res.json();
            console.log("Gemini API Raw Response:", data); // Log the full response for debugging

            let modelResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "AI I apologize, I don't have enough information to answer that question based on what I know about Bipin Shrestha, or I encountered an issue. Please try again.";

            // Decide whether to remove markdown or not. Gemini often uses ** for bold.
            // If you want clean text without markdown:
            // modelResponse = modelResponse.replace(/\*\*(.*?)\*\*/g, "$1").trim();

            if (modelResponse.length < 5) {
                modelResponse = "AI Can you say it again please?"
            } else {
                modelResponse = `AI ${modelResponse.trim()}`; // Add "AI " prefix
            }

            // Append AI's response to display
            setUserchat((prev) => [...prev, modelResponse]);
            setIsTyping(false);
        }
        catch (e) {
            console.error("Error generating response from Gemini API:", e);
            setUserchat((prev) => {
                // If there was an "AI Typing..." placeholder, remove it
                if (prev[prev.length - 1] === "AI Typing...") {
                    const updated = [...prev];
                    updated.pop();
                    return [...updated, "AI I'm sorry, I encountered an error and cannot respond right now. Please try again later."];
                }
                return [...prev, "AI I'm sorry, I encountered an error and cannot respond right now. Please try again later."];
            });
            setIsTyping(false);
        }
    };

    // This useEffect is sending chat history to your backend
    useEffect(() => {
        // Only proceed if there's at least one user message and one AI response in the history
        if (userchat.length < 2) return;

        // Get the last user message and the last AI response
        // Note: userchat is updated *after* the AI response is received.
        // So, the last element is the AI's response, and the second to last is the user's query.
        const lastAIMessage = userchat[userchat.length - 1];
        const lastUserMessage = userchat[userchat.length - 2];

        // Ensure both are valid messages
        if (!lastAIMessage || !lastUserMessage || !lastAIMessage.startsWith("AI ") || !lastUserMessage.startsWith("user ")) {
            console.warn("Skipping chat history send: Incomplete or incorrectly formatted last turn.");
            return;
        }

        const oneBlock = `${lastUserMessage} => ${lastAIMessage}`;

        fetch("https://portfoliobackend-production-ccc7.up.railway.app/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Assistant Conversation Log", // More descriptive title
                content: oneBlock
            })
        })
            .then(response => {
                if (!response.ok) {
                    console.error("Failed to send chat history to backend:", response.statusText);
                } else {
                    console.log("Chat history sent to backend successfully.");
                }
            })
            .catch(error => {
                console.error("Error sending chat history to backend:", error);
            });

    }, [userchat]); // Dependency array: run when userchat changes

    // This useEffect handles scrolling to the bottom of the chat
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [userchat, chat]); // Include chat in dependency array to re-scroll if chat visibility changes

    return (
        <>
            <div className="flex   md:pt-25 flex-wrap md:h-screen pt-0  relative">
                {/* Removing the gradient border lines */}
                <div className="md:w-3/5 order-2 md:order-1 ">
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

                        <a href="/resume" className="mr-2 group">
                            <Button className="!bg-transparent !border-green-500 !text-green-500 hover:!text-white hover:!shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center gap-2 relative overflow-hidden">
                                <span className="relative z-10">Resume</span>
                                <FiEye className="relative z-10 transition-transform duration-100" />

                                {/* Slide animation background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-500 to-green-400 -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"></div>
                            </Button>
                        </a>

                        <a href="https://www.linkedin.com/in/bipin-shrestha-4baba01a0/" target="_blank" className="group">
                            <Button className="relative !bg-transparent !border-cyan-400 !text-cyan-400 hover:!shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:!text-white !transition-all !duration-300 flex items-center gap-2 overflow-hidden">
                                <span className="relative z-10">Let's Connect</span>
                                <FaLongArrowAltRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                                
                                {/* Slide color animation background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                            </Button>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="md:w-1/5 order-1 md:order-2 md:ml-35 "
                >
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
                        className="w-50  mx-28  md:ml-0 md:w-[600px] relative hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]    transition-all duration-300"
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
                                {/* Initial greeting always visible for context */}
                                <div className="flex gap-2 items-start">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                                        <FaRobot className="text-sm text-white" />
                                    </div>
                                    <div className="bg-purple-500/10 rounded-2xl rounded-tl-none p-3 text-sm text-white max-w-[80%]">
                                        Hi there! I'm ready to tell you all about Bipin Shrestha's impressive skills and accomplishments. What would you like to know?
                                    </div>
                                </div>

                                {userchat.map((chatMessage, i) => {
                                    const messageString = String(chatMessage).trim();
                                    const isAIMessage = messageString.startsWith("AI ");
                                    const displayMessage = isAIMessage ? messageString.substring(3) : messageString.substring(5);

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
                                        ref={chatInputRef}
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