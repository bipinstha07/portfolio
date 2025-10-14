import { Download, Home } from 'lucide-react'

export default function Resume() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E6E6E6' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-2">
              <a 
                href="/" 
                className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent rounded text-sm font-medium"
              >
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="Bipin_Shrestha_Resume.pdf" download>
              <button className="flex items-center gap-1 px-3 py-1.5 cursor-pointer border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent rounded text-sm font-medium">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-15 pb-8">
        {/* Resume Paper */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-4 sm:p-8">
          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-1">Bipin Shrestha</h1>
            <div className="text-gray-600 text-[10px] sm:text-xs">
              Monroe, LA | bipinshrestha830@gmail.com | +1 318-690-8483 | 
              <a href="https://www.linkedin.com/in/bipin-shrestha-4baba01a0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">LinkedIn</a> | 
              <a href="https://github.com/bipinstha07" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">GitHub</a> | 
              <a href="https://www.bipinshrestha01.com.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">Portfolio</a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-3">
            <h2 className="text-[16px] font-bold text-black">SUMMARY</h2>
            <div className="border-b border-black mb-2"></div>
            <p className="text-[9px] sm:text-xs text-gray-700 leading-tight">
              Motivated Computer Science student passionate about software development and problem-solving. 
              Proficient in Java with strong algorithms and data structures skills, experienced in full-stack 
              web development and cloud/DevOps projects, eager to contribute innovative solutions and grow in 
              a dynamic tech environment.
            </p>
          </div>

          {/* Education */}
          <div className="mb-2">
            <h2 className="text-[16px] font-bold text-black">EDUCATION</h2>
            <div className="border-b border-black mb-2"></div>
            <div className="flex justify-between items-start">
              <span className="text-[9px] sm:text-xs font-semibold text-black">University of Louisiana at Monroe</span>
              <span className="text-[9px] sm:text-xs text-gray-600">Monroe, LA</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] sm:text-xs text-gray-700">Bachelor of Science in Computer Science</span>
            </div>
            <p className="text-[9px] sm:text-xs text-gray-700 ml-4">
              Data Structures and Algorithms, Object-Oriented Programming, Operating System, Computer Networks, Database Management
            </p>
          </div>

          {/* Projects */}
          <div className="mb-3">
            <h2 className="text-[16px] font-bold text-black ">PROJECTS</h2>
            <div className="border-b border-black mb-2"></div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[14px] font-bold text-black">Hotel Booking Application</h3>
                <div className="text-[9px] sm:text-xs text-blue-600">
                  <a href="https://hotel-booking-frontend-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Website</a>
                  <span className="mx-2">|</span>
                  <a href="https://github.com/bipinstha07/Hotel_Booking" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Repository</a>
                </div>
              </div>
              <p className="text-[9px] sm:text-xs text-gray-700 mb-2 leading-tight ml-4">
                A full-stack hotel booking system for privately-owned or large hotels, built with Spring Boot, 
                Next.js, and AWS.
              </p>
              <ul className="text-[9px] sm:text-xs text-gray-700 space-y-0.5  ml-4">
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Implemented secure JWT-based authentication with role-based access for users, supporting sign-up, 
                  login, bookings, payments, and profile management.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Developed admin dashboard for room management (CRUD) and booking approvals, integrated with 
                  asynchronous email notifications and Stripe payments.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>- Deployed backend on AWS (EC2, RDS, S3) with CI/CD, reducing <span className="font-semibold">deployment time from 30 mins to &lt; 5 mins.</span></span>
                </li>
              </ul>
              <p className="text-[9px] sm:text-xs text-gray-700 ml-4">
                <span className="font-semibold">Tech Stack:</span> <span className="italic">Java, Spring Boot, Spring, Next.js, AWS, MySQL, 
                Tailwind CSS, JavaScript</span>
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[14px] font-bold text-black">Quizzes Microservice Application</h3>
                <div className="text-[9px] sm:text-xs text-blue-600">
                  <a href="https://github.com/bipinstha07/Quizzes-MicroService" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Repository</a>
                </div>
              </div>
              <p className="text-[9px] sm:text-xs text-gray-700 mb-2 leading-tight ml-4">
                A microservices-based quiz app using Spring Boot and Spring AI with local AI model that generates 
                Category-based quizzes via Category and Quiz Services, managed through API Gateway and Config server 
                with externalized configuration.
              </p>
              <ul className="text-[9px] sm:text-xs text-gray-700 space-y-0.5  ml-4">
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Developed an AI-powered quiz platform using Spring AI with a locally hosted model, backed by a hybrid database architecture (MongoDB for flexible storage, PostgreSQL for relational data).</span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span> Built a resilient microservices ecosystem with API Gateway, Eureka Service Registry, and Config Server, enabling <span className="font-semibold">10,000+
                  async quiz requests/min </span>  through RabbitMQ and Kafka event streaming.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Ensured high availability and fault tolerance by deploying services in Docker containers and implementing <span className="font-semibold">Resilience4j 
                  Circuit Breaker with Retry, Fallback, and Actuator Monitoring</span>, reducing service failure rate by 35% under load testing</span>
                </li>
              </ul>
              <p className="text-[9px] sm:text-xs text-gray-700 ml-4">
                <span className="font-semibold">Tech Stack:</span> <span className="italic">Java, Spring Boot, Spring AI, MongoDB, PostgreSQL, 
                RabbitMQ, Kafka, Docker, GitHub</span>
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[14px] font-bold text-black">Train Management System (Backend)</h3>
                <div className="text-[9px] sm:text-xs text-blue-600">
                  <a href="https://github.com/bipinstha07/TrainSystem" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Repository</a>
                </div>
              </div>
              <p className="text-[9px] sm:text-xs text-gray-700 mb-2 leading-tight ml-4">
                A Full Backend Enterprise level Train Management System built with java spring boot to manage 
                trains station, routes, schedules, seats, booking and payments with secure JWT-based authentication.
              </p>
              <ul className="text-[9px] sm:text-xs text-gray-700 space-y-0.5  ml-4">
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Built Spring Boot REST API with Hibernate + MySQL for trains, stations, routes, schedules, 
                  seats, and bookings, with scalable pagination, sorting, and global error handling.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Refactored the payment validation module by applying AOP principles, resulting in a <span className="font-semibold">20% reduction in code duplication
                  </span>and a more modular design, facilitating easier updates and maintenance. <span className="font-semibold">OpenAPI/Swagger UI </span> for interactive API.</span>
                </li>
              </ul>
              <p className="text-[9px] sm:text-xs text-gray-700 ml-4">
                <span className="font-semibold">Tech Stack:</span> <span className="italic">Java, Spring Boot, MySQL, Hibernate</span>
              </p>
            </div>

          
          </div>

          {/* Research & Collaborations */}
          <div className="mb-3">
            <h2 className="text-[16px] font-bold text-black">RESEARCH & COLLABORATIONS</h2>
            <div className="border-b border-black mb-2"></div>
            
            <div className="mb-2">
              <div className="flex justify-between items-start ">
                <h3 className="text-[14px] font-bold text-black">Emerging Scholar Program Research  </h3>
                <span className="text-[9px] sm:text-xs text-gray-600">Spring 2023 - Fall 2023</span>
              </div>
              <p className="text-[9px] sm:text-xs text-gray-700 leading-tight ml-4">
                <span className="italic">Academic Research</span> <span className="text-gray-600 text-xs italic">- University of Louisiana at Monroe</span>
                <div>
               - VR in Education - analyzed teacher perceptions of virtual reality for enhanced student engagement and experiential learning
                </div>
                <div>
               - AI in Business Communication - studied impacts of AI, Robotics, and ICT on modern business operations, workforce management, and global economic trends.
                </div>
              </p>
            </div>

            <div className="mb-2">
              <div className="flex justify-between items-start">
                <h3 className="text-[14px] font-bold text-black">Google Developer Student Club (GDSC)</h3>
                <span className="text-[9px] sm:text-xs text-gray-600">Fall 2024 - Present</span>
              </div>
              <p className="text-[9px] sm:text-xs text-gray-700 leading-tight ml-4">
                <span className="italic">Active Community Member</span> - Coding competitions, hackathons, and mentoring fellow developers.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-3">
            <h2 className="text-[16px] font-bold text-black ">TECHNICAL SKILLS</h2>
            <div className="border-b border-black mb-2"></div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-xs text-gray-700">
                <span className="font-semibold">Frontend:</span> <span className="italic">React.js, Next.js, TypeScript, JavaScript, 
                HTML5/CSS3, Tailwind CSS, Chart.js, Responsive UI</span>
              </p>
              <p className="text-[9px] sm:text-xs text-gray-700">
                <span className="font-semibold">Backend & APIs:</span> <span className="italic">Java, Spring Boot, Spring AI, Spring Cloud, Spring Security, Spring Security, REST APIs, Git, 
                JWT Authentication & Role-Based Access, AOP, Microservices</span>
              </p>
              <p className="text-[9px] sm:text-xs text-gray-700">
                <span className="font-semibold">Databases & Data:</span> <span className="italic">MySQL, PostgreSQL, MongoDB, Hibernate/JPA ORM, 
                Data Modeling, Caching</span>
              </p>
              <p className="text-[9px] sm:text-xs text-gray-700">
                <span className="font-semibold">AI & Automation:</span> <span className="italic">OpenRouter API, Generative AI, Spring AI, n8n, MCP</span>
              </p>
              <p className="text-[9px] sm:text-xs text-gray-700">
                <span className="font-semibold">DevOps & Cloud:</span> <span className="italic">Docker, RabbitMQ, AWS (EC2, RDS, S3, API Gateway, 
                Elastic Beanstalk, SNS, SQS, DynamoDB), CI/CD (CodePipeline & CodeBuild), Linux, GitHub</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}