import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "Sep 2024 – Present",
    title: "Senior Software Engineer - Capital One",
    description: `As a Senior Software Engineer, I contributed to the development of Capital One’s Finance Platform, creating Django-based systems to handle high-volume financial data ingestion and real-time analytics. I led efforts to build fraud detection services and optimized ETL workflows, utilizing tools like Apache Spark, Kafka, and AWS to improve data processing efficiency. Additionally, I delivered interactive dashboards and real-time features, improving financial decision-making capabilities for clients by providing actionable insights from complex data streams.`,
    type: "experience"
  },
  {
    id: 2,
    year: "Mar 2024 – Jun 2024",
    title: "Full-Stack Software Engineer - Avanade",
    description: `At Avanade, I developed a demo RAG web application that integrated Azure OpenAI GPT models with Azure AI Search to create an intelligent system capable of delivering contextually relevant responses to user queries. I built the backend using FastAPI and orchestrated the data flow with LangChain, ensuring real-time, high-accuracy results. On the frontend, I implemented a React-based interface that displayed AI-generated responses alongside retrieved knowledge base sources, demonstrating the value of generative AI in enterprise settings.`,
    type: "experience"
  },
  {
    id: 3,
    year: "Nov 2021 - Jan 2024",
    title: "Full-Stack Software Engineer - Lone Star Analysis",
    description: "As a Full-Stack Software Developer, I played a key role in building and maintaining a Django-powered web application that allowed data analysts to manage ETL workflows and analyze large datasets. I implemented backend processes using Django, Celery, and RabbitMQ for data processing, while developing dynamic, real-time dashboards using React and Vue.js. I also led the migration from a monolithic application to microservices and deployed everything to Azure Kubernetes Service (AKS) for improved scalability and performance.",
    type: "experience"
  },
  {
    id: 4,
    year: "Feb 2019 - Oct 2021",
    title: "Full-Stack Software Developer - Auction Software, Inc",
    description: "In my role as a Junior Full-Stack Developer, I contributed to the development of auction web applications, including features such as real-time bidding, payment processing via Stripe and Authorize.net, and communication systems using Twilio and SendGrid. I built key backend functionality in Python Django, connected to MySQL and MongoDB databases, ensuring smooth user interaction and secure transactions. I also developed frontend interfaces with React, providing a responsive, user-friendly experience for both bidders and administrators.",
    type: "experience"
  },
  {
    id: 5,
    year: "2017 - 2020",
    title: `Bachelor's Degree in Computer Science, The University of Texas at Dallas`,
    description: "Focused on full stack development, AI, cloud computing, and mobile app development. Built multiple academic and personal projects using modern technologies.",
    type: "education"
  }
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-semibold text-blue-400">full stack engineer</span> who specializes in building intelligent, AI-powered applications that solve complex problems.
              </p>
              <p className="text-muted-foreground mb-4">
                With expertise spanning both <span className="font-semibold text-blue-400">frontend and backend development</span>, I focus on creating seamless user experiences backed by robust, scalable architectures.
              </p>
              <p className="text-muted-foreground">
                Currently, I'm exploring the potential of <span className="font-semibold text-blue-400">AI agents</span> to automate workflows and enhance software capabilities.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Certifications</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.credly.com/badges/8335860e-846d-45d8-b013-863c5e76c233" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS Certified Solutions Architect - Associate" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">AWS Certified Solutions Architect - Associate</div>
                    <div className="text-xs text-muted-foreground">Amazon Web Services Focus</div>
                  </div>
                </a>
                <a href="https://www.credly.com/badges/ea4fde04-0fe1-4801-9836-4d8f282f9775" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="data:image/jpeg;base64,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" alt="Professional Scrum Developer I" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Professional Scrum Developer I (PSD 1)</div>
                    <div className="text-xs text-muted-foreground">Agile Methodologies Focus</div>
                  </div>
                </a>
                <a href="https://learn.microsoft.com/en-us/users/AkitoIto-5464/credentials/E494141BD8BCA4D1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="data:image/jpeg;base64,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" alt="Azure AI Fundamentals" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Microsoft Certified: Azure AI Fundamentals</div>
                    <div className="text-xs text-muted-foreground">Microsoft Azure Focus</div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/specialization/LI5Q0UI157UD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Learning Kubernetes" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Learning Kubernetes</div>
                    <div className="text-xs text-muted-foreground">Kubernetes Focus</div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/learning/certificates/539617b084fe1757c0e13bc1462a5fef4695d86a99c5d1d2ed72f38426d9039c?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Learning Docker" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Learning Docker</div>
                    <div className="text-xs text-muted-foreground">Docker Focus</div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
