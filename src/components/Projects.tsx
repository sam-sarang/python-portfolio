import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Capital One",
    description: "I worked on Capital One’s Finance Platform, a Django-based system handling high-volume financial data ingestion and real-time analytics, utilizing AWS services like Lambda, Glue, and S3 for seamless data flow. My contributions included building fraud detection services using Apache Spark and Kafka, which consumed streaming data and generated real-time risk scores through Django APIs and Django REST Framework. I also optimized data pipelines with PostgreSQL, leveraging advanced ORM queries, and implemented interactive dashboards using React and TypeScript to visualize complex financial metrics.",
    image: "/lovable-uploads/CapitalOne.png",
    tags: ["Django", "Python", "React", "Redux Toolkit", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"],
    demoUrl: "https://emp-hub.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Employee-Management-System"
  },
  {
    id: 2,
    title: "Avanade",
    description: "At Avanade, I developed a Retrieval-Augmented Generation (RAG) web application, integrating Azure OpenAI GPT models with Azure AI Search and LangChain for improved document retrieval and AI-driven query responses. The backend was built with FastAPI, using async endpoints and Pydantic for efficient data handling and validation, while the frontend utilized React with Material UI to create a dynamic, real-time user interface. I also integrated Azure AI Services for secure, managed access, aligning with enterprise security best practices and ensuring the application met compliance standards.",
    image: "/lovable-uploads/Avanade.png",
    tags: ["FastAPI", "Python", "React", "TypeScript", "Material UI", "Azure OpenAI", "LangChain"],
    demoUrl: "https://spacexlabtest2.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/SpaceX_API"
  },
  {
    id: 3,
    title: "Lone Star Analysis",
    description: "In my role at Lone Star Analysis, I helped build a Django-powered web application for data analysts to execute ETL pipelines and run data analysis models, integrating Celery and RabbitMQ for asynchronous task distribution. I utilized React and Vue.js to create real-time, dynamic dashboards that displayed ETL job status, performance metrics, and analysis results, while managing data persistence through PostgreSQL with optimized queries using Django ORM. I also led the migration of a monolithic application to microservices and deployed services on Azure Kubernetes Service (AKS) using Helm and Terraform to automate infrastructure provisioning.",
    image: "/lovable-uploads/LoneStarAnalysis.png",
    tags: ["Django", "Python", "React", "Vue", "PostgreSQL", "Azure"],
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/example/ecommerce-platform"
  },
  {
    id: 4,
    title: "Auction Software, Inc",
    description: "At AuctionSoftware.com, I worked on the development of B2B and B2C auction web applications, building real-time bidding modules in Python Django and integrating Stripe and Authorize.net for secure payment processing. The frontend was built using React, providing a dynamic user experience for bidders, while the backend utilized MySQL and MongoDB for transactional and auction data storage. I also integrated Twilio and SendGrid for SMS and email notifications, enhancing user engagement during auction events and ensuring timely communications.",
    image: "/lovable-uploads/AuctionSoftware.png",
    tags: ["Django", "Python", "React", "MySQL", "MongoDB"],
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/example/ecommerce-platform"
  },
  {
    id: 5,
    title: "Crypto Analytics Dashboard",
    description: "A full-stack web application for tracking and analyzing cryptocurrency data in real-time. Features real-time price tracking, historical data visualization, portfolio management, price alerts, and interactive charts. Built with React, Tailwind CSS, FastAPI, MongoDB, and more.",
    image: "/lovable-uploads/crypto.png",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Axios", "SWR", "Zustand", "FastAPI", "MongoDB", "Python"],
    demoUrl: "https://crypto-analytics-frontend.onrender.com/", // Replace with actual live link if available
    githubUrl: "https://github.com/sam-sarang/crypto-analytics-dashboard"
  },
  {
    id: 6,
    title: "Portfolio with Admin Dashboard",
    description: "A modern, full-stack portfolio website featuring an integrated admin dashboard for seamless content and project management. The platform supports secure authentication with Next-Auth, state management via React Context API. The admin dashboard allows easy updates to portfolio content, project listings, and blog posts, all within a responsive and visually engaging UI.",
    image: "/lovable-uploads/Portfolio.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context API", "Mongo"],
    demoUrl: "https://kalpsenghani1.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/portfolio-admin-dashboard"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      {/* <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div> */}
    </section>
  );
};

export default Projects;
