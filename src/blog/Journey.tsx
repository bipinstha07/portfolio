import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

interface Article {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  featured: boolean
  content: string
  detailedContent: string
}

function Journey() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const articles = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn the basics of React Hooks and how they can simplify your functional components with practical examples and best practices.",
      author: "Bipin Shrestha",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      featured: true,
      content: "React Hooks revolutionized how we write React components. They allow us to use state and other React features in functional components. The most commonly used hooks are useState and useEffect. useState lets you add state to functional components, while useEffect lets you perform side effects like data fetching or subscriptions.",
      detailedContent: "React Hooks completely transformed the way we build React applications. Before hooks, we had to use class components to manage state and lifecycle methods, which often led to complex component hierarchies and difficult-to-reuse logic.<br><br>With hooks, we can now use state and other React features directly in functional components, making our code more readable and maintainable. The useState hook is perhaps the most fundamental hook, allowing us to add state to functional components. It returns an array with two elements: the current state value and a function to update it.<br><br>The useEffect hook is equally important, enabling us to perform side effects like data fetching, subscriptions, or manually changing the DOM. Other essential hooks include useContext for consuming context, useReducer for complex state logic, and useMemo and useCallback for performance optimization.<br><br>The beauty of hooks lies in their composability - you can create custom hooks to extract component logic into reusable functions. This leads to cleaner, more testable code and better separation of concerns."
    },
    {
      id: 2,
      title: "Building RESTful APIs with Spring Boot",
      excerpt: "A comprehensive guide to creating robust REST APIs using Spring Boot framework with security and testing.",
      author: "Bipin Shrestha", 
      date: "Dec 12, 2024",
      readTime: "8 min read",
      featured: false,
      content: "Spring Boot makes it easy to create production-ready applications. With its auto-configuration and starter dependencies, you can quickly set up a REST API. Key annotations like @RestController, @RequestMapping, and @Autowired help you build clean, maintainable APIs. Don't forget to implement proper error handling and validation.",
      detailedContent: "Spring Boot has revolutionized Java enterprise development by providing a convention-over-configuration approach that dramatically reduces boilerplate code. The framework's auto-configuration feature automatically configures your application based on the dependencies you include, eliminating the need for extensive XML configuration files.<br><br>When building RESTful APIs, Spring Boot offers powerful annotations that make the process intuitive and clean. The @RestController annotation combines @Controller and @ResponseBody, making it perfect for REST endpoints. @RequestMapping and its variants (@GetMapping, @PostMapping, etc.) provide flexible URL mapping capabilities. The @Autowired annotation handles dependency injection automatically, promoting loose coupling between components.<br><br>Spring Boot's embedded Tomcat server means you can run your application as a standalone JAR file, making deployment incredibly simple. The framework also includes built-in support for security, data access, testing, and monitoring through Spring Security, Spring Data JPA, and Spring Boot Actuator.<br><br>Error handling is streamlined with @ControllerAdvice and @ExceptionHandler annotations, allowing you to create global exception handling strategies. Validation is made easy with Bean Validation annotations like @Valid and @NotNull. Spring Boot's ecosystem includes Spring Cloud for microservices, Spring Data for database operations, and Spring Security for authentication and authorization. The framework's extensive documentation and active community make it an excellent choice for both beginners and experienced developers building enterprise-grade applications."
    },
    {
      id: 3,
      title: "Docker Containerization Best Practices",
      excerpt: "Essential tips for containerizing your applications effectively with Docker and Kubernetes orchestration.",
      author: "Bipin Shrestha",
      date: "Dec 10, 2024", 
      readTime: "6 min read",
      featured: false,
      content: "Docker containers provide consistency across development, testing, and production environments. Use multi-stage builds to reduce image size, leverage .dockerignore files, and always specify exact versions in your Dockerfile. Remember to run containers as non-root users for security and use health checks to monitor container status.",
      detailedContent: "Docker has fundamentally changed how we think about application deployment and infrastructure management. Containerization provides a lightweight, portable way to package applications with all their dependencies, ensuring consistency across different environments.<br><br>The key to effective Docker usage lies in understanding best practices that optimize both performance and security. Multi-stage builds are crucial for reducing image size by separating build dependencies from runtime requirements. This approach allows you to compile your application in one stage and copy only the necessary artifacts to a minimal runtime image.<br><br>The .dockerignore file is often overlooked but essential for excluding unnecessary files and reducing build context size. Always specify exact versions in your Dockerfile to ensure reproducible builds and avoid unexpected updates that could break your application.<br><br>Security should be a top priority when containerizing applications. Running containers as non-root users significantly reduces the attack surface and follows the principle of least privilege. Use specific base images rather than generic ones, and regularly update them to patch security vulnerabilities.<br><br>Health checks are vital for monitoring container status and enabling proper orchestration. Docker's HEALTHCHECK instruction allows you to define custom health check commands that orchestrators like Kubernetes can use to determine container health. Resource limits are another critical consideration - always set memory and CPU limits to prevent containers from consuming excessive resources.<br><br>Use Docker Compose for local development and testing, as it simplifies multi-container application management. For production deployments, consider using container orchestration platforms like Kubernetes or Docker Swarm. Monitoring and logging are essential for maintaining containerized applications in production, so integrate with tools like Prometheus, Grafana, or ELK stack. Remember that containers are ephemeral, so design your applications to be stateless and store persistent data in external volumes or databases."
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "Understanding the differences between CSS Grid and Flexbox for creating responsive, modern layouts.",
      author: "Bipin Shrestha",
      date: "Dec 8, 2024",
      readTime: "4 min read", 
      featured: false,
      content: "CSS Grid is perfect for two-dimensional layouts where you need to control both rows and columns. Flexbox excels at one-dimensional layouts and component-level styling. Use Grid for page layouts and complex designs, while Flexbox is ideal for navigation bars, card layouts, and centering content.",
      detailedContent: "The choice between CSS Grid and Flexbox often confuses developers, but understanding their strengths and use cases makes the decision much clearer. CSS Grid is a two-dimensional layout system that allows you to work with both rows and columns simultaneously, making it perfect for complex page layouts.<br><br>It excels at creating grid-based designs where you need precise control over item placement. Grid is ideal for overall page structure, card layouts, image galleries, and any design that requires items to align both horizontally and vertically. The grid-template-areas property is particularly powerful for creating semantic layouts where you can name grid areas and place items intuitively.<br><br>Flexbox, on the other hand, is a one-dimensional layout system that works along a single axis (either row or column). It's perfect for component-level styling and distributing space within a container. Flexbox excels at centering content, creating navigation bars, building card components, and handling dynamic content that needs to flow naturally.<br><br>The flex-grow, flex-shrink, and flex-basis properties give you fine-grained control over how items behave within their container. The key is to use them together: Grid for overall page layout and Flexbox for individual components. For example, you might use Grid to create a three-column layout for your main content, sidebar, and navigation, then use Flexbox within each of those areas to arrange the content.<br><br>Modern CSS also allows you to combine both systems - you can have a Grid container with Flexbox children, or vice versa. This hybrid approach gives you the best of both worlds. Remember that both Grid and Flexbox are responsive by default, but Grid's fr units and Flexbox's flexible sizing make them particularly well-suited for creating adaptive layouts. The gap property works with both systems, making it easy to add consistent spacing between items."
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-9xl mx-auto  sm:px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Journey of My Life</h1>
          <p className="text-gray-300 text-lg">From Thought to Word.</p>
        </motion.div>

        {/* Featured Article */}
        {articles.filter(article => article.featured).map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-12"
          >
            <div className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 text-sm">{article.readTime}</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-2 cursor-pointer">
                {article.title}
              </h2>
              
              
              <p className="text-gray-200 mb-6 text-lg leading-relaxed max-w-3xl cursor-pointer">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="cursor-pointer">
                    <p className="font-semibold text-white text-lg">{article.author}</p>
                    <p className="text-gray-300">{article.date}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors border border-white/20 cursor-pointer"
                  >
                    Read More →
                  </button>
                  
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {articles.filter(article => !article.featured).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="bg-gray-800/50 rounded-xl  p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-500 text-xs">{article.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2 hover:text-blue-400 cursor-pointer transition-colors">
                {article.title}
              </h2>
              
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="cursor-pointer">
                    <p className="font-medium text-white text-sm">{article.author}</p>
                    <p className="text-xs text-gray-400">{article.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedArticle(article)}
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm cursor-pointer"
                >
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Detailed Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedArticle(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">{selectedArticle.readTime}</span>
                    </div>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
                    >
                      <X className="w-6 h-6 text-gray-400" />
                    </button>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl font-bold text-white mb-4">
                    {selectedArticle.title}
                  </h1>
                  

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-700">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer">
                      {selectedArticle.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="cursor-pointer">
                      <p className="font-semibold text-white text-lg">{selectedArticle.author}</p>
                      <p className="text-gray-400">{selectedArticle.date}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div 
                    className="prose prose-lg text-gray-300 max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-ul:text-gray-300 prose-li:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.detailedContent }}
                  />

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-700 flex justify-end">
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-4 py-1 border border-gray-600 hover:border-gray-200 text-white hover:text-gray-200 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}




export default Journey
