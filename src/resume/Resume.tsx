import { Download, Home } from 'lucide-react'

export default function Resume() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-2">
              <a 
                href="/" 
                className="flex items-center gap-1 px-2 py-0.5 border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent rounded text-xs"
              >
                <Home className="w-3 h-3" />
                Home
              </a>
              <a href="Resume only.pdf" download>
              <button className="flex items-center gap-1 px-2 py-0.5 border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent rounded text-xs">
                <Download className="w-3 h-3" />
                Download Resume
              </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Bipin Shrestha</h1>
          <div className="text-gray-600 text-sm">
            Monroe, LA | bipinshrestha830@gmail.com | 318-690-8483 | 
            <a href="#" className="text-blue-600 underline ml-1">LinkedIn</a> | 
            <a href="#" className="text-blue-600 underline ml-1">GitHub</a>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-black mb-2">SUMMARY</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Motivated Computer Science student with a passion for problem solving and software development. 
            Proficient in Java programming languages with a solid foundation in algorithms and data structures. 
            Experienced in web development technologies and eager to learn and grow in a technology corporation.
          </p>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-black mb-2">EDUCATION</h2>
          <div className="flex justify-between items-start mb-1">
            <div>
              <p className="text-sm font-medium text-black">University of Louisiana at Monroe, Monroe, LA</p>
              <p className="text-sm text-gray-700">Bachelor of Science in Computer Science</p>
            </div>
            <span className="text-sm text-gray-600">May 2026</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-700">Relevant Coursework: Java, Data Structure, Algorithm, HTML, CSS, JavaScript, Database</p>
            <span className="text-sm text-gray-600">GPA: 3.6 / 4.0</span>
          </div>
        </div>

        {/* Course Projects / Research */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-black mb-2">COURSE PROJECT / RESEARCH</h2>
          
          <div className="mb-3">
            <h3 className="text-sm font-bold text-black mb-1">Personal Portfolio</h3>
            <p className="text-sm text-gray-700 mb-1">
              A professional personal portfolio showcasing skills, projects, and experience, built with modern web
              technologies for optimal performance.
            </p>
            <a href="https://www.bipinshrestha01.com.np" className="text-blue-600 underline text-sm">
              https://www.bipinshrestha01.com.np
            </a>
          </div>

          <div className="mb-3">
            <h3 className="text-sm font-bold text-black mb-1">URL Link Shortener</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Developed URL link shortener system using Node.js, Express and MongoDB</li>
              <li>For User Interface EJS was implemented</li>
            </ul>
          </div>

          <div className="mb-3">
            <h3 className="text-sm font-bold text-black mb-1">Armstrong Number Checker</h3>
            <p className="text-sm text-gray-700">
              Created a website that checks whether the number is an Armstrong number or not. HTML CSS JavaScript
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black mb-1">Emerging Scholar Program (Collaborative Research with Professor)</h3>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">• AI in Business Communication</span>
                <span className="text-sm text-gray-600">Fall 2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">• Teacher Candidate Perceptions of the Use of Virtual Reality as a Teaching Tool</span>
                <span className="text-sm text-gray-600">Spring 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-black mb-2">SKILLS</h2>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>HTML, CSS, and JavaScript, Tailwind, Bootstrap, Java, Spring Boot, REST API, Next.js, React, Angular, Node.js</li>
            <li>Java, Data Structure, Algorithm, API integration, SQL, NoSQL, MongoDB</li>
            <li>AWS Cloud Practitioner</li>
          </ul>
        </div>

        {/* Awards/Honors */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-black mb-2">AWARDS/HONORS</h2>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">• President's List</span>
              <span className="text-sm text-gray-600">Spring 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">• Dean's List</span>
              <span className="text-sm text-gray-600">Fall 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">• Lalita & Janak Karn Foundation Student Scholarship</span>
              <span className="text-sm text-gray-600">Spring 2024</span>
            </div>
          </div>
        </div>

        {/* Organization */}
        <div>
          <h2 className="text-lg font-bold text-black mb-2">ORGANIZATION</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Member of Google Developer Student Club (GDSC) and Association for Computing Machinery (ACM). 
            Collaborate with peers on software development projects, participate in coding challenges, and stay 
            updated on the latest technologies.
          </p>
        </div>
      </div>
    </div>
  )
}