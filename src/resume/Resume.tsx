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
              <a href="Resume only.pdf" download>
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
                  <span>Built backend with Spring Boot, Hibernate ORM, and MySQL, deployed on scalable AWS infrastructure 
                  (EC2, RDS, S3, API Gateway, Elastic Beanstalk) with automated CI/CD via CodePipeline & CodeBuild.</span>
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
                  <span>Leveraged Spring AI with a locally hosted model to dynamically generate quizzes, using MongoDB 
                  for flexible quiz storage and PostgreSQL for relational data in a hybrid database architecture.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Deployed PostgreSQL, MongoDB, and RabbitMQ in Docker containers for portability, consistency, 
                  and smooth inter-service communication.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Managed secure routing and service discovery with API Gateway and Eureka Service Registry for 
                  seamless microservice interactions.</span>
                </li>
              </ul>
              <p className="text-[9px] sm:text-xs text-gray-700 ml-4">
                <span className="font-semibold">Tech Stack:</span> <span className="italic">Java, Spring Boot, Spring AI, MongoDB, PostgreSQL, 
                RabbitMQ, Docker, GitHub</span>
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
                  <span>Applied AOP with custom annotations for logging and payment validation, configured centralized 
                  Logger, and published OpenAPI/Swagger UI for interactive API documentation.</span>
                </li>
              </ul>
              <p className="text-[9px] sm:text-xs text-gray-700 ml-4">
                <span className="font-semibold">Tech Stack:</span> <span className="italic">Java, Spring Boot, MySQL, Hibernate</span>
              </p>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[14px] font-bold text-black">Stock Prediction AI Platform</h3>
                <div className="text-[9px] sm:text-xs text-blue-600">
                  <a href="https://github.com/bipinstha07/stock_prediction" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Repository</a>
                </div>
              </div>
              <p className="text-[9px] sm:text-xs text-gray-700 mb-2 leading-tight ml-4">
                AI-powered stock prediction web app with Next.js frontend and Spring Boot + Spring AI backend. 
                Predicts stock prices for a given time (in months) from news/statements using Open Router API, 
                secured with Spring Security.
              </p>
              <ul className="text-[9px] sm:text-xs text-gray-700 space-y-0.5  ml-4">
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Developed AI-powered stock prediction web app with Next.js frontend (interactive charts) and 
                  Spring Boot + Spring AI backend, leveraging generative AI for predictive insights.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">-</span>
                  <span>Integrated OpenRouter API for stock predictions, implemented secure user login and premium 
                  authentication via Spring Security, and built interactive charts with Chart.js, TypeScript, and TailwindCSS.</span>
                </li>
              </ul>
              <p className="text-[9px] sm:text-xs text-gray-700 ml-4">
                <span className="font-semibold">Tech Stack:</span> <span className="italic">Java, Spring Boot, MySQL, Hibernate, Spring MVC, 
                Next.js, TailwindCSS, TypeScript, Generative AI, OpenRouter</span>
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-3">
            <h2 className="text-[16px] font-bold text-black ">TECHNICAL SKILLS</h2>
            <div className="border-b border-black mb-2"></div>
            <div className="space-y-1">
              <p className="text-[9px] sm:text-xs text-gray-700">
                <span className="font-semibold">Frontend:</span> <span className="italic">React.js, Next.js, TypeScript, JavaScript (ES6+), 
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