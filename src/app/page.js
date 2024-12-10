'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heroSelection = [
  { src: "/Resume/Hero/Artificio.png", alt: "Artificio Presentation", title: "", description:"Artificio, a Peruvian startup, is building a benchmarking platform to improve autonomous vehicle perception in complex traffic environments, and I’m assisting them in crafting their investor pitch deck.", link:"https://www.canva.com/design/DAGWSKvxIFw/8j1237SHowHIRkpBmSPxAA/edit?utm_content=DAGWSKvxIFw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", width: 325, height: 260 },
  { src: "/Resume/Hero/Helios.png", alt: "Corporate Project Presentation", title: "", description:"For our first-place winning corporate project, we collaborated with Barter Energy, a Spanish environmental energy company by identifying ideal locations and business customers within a specific radius in Madrid through an interactive dashboard.",link:"https://www.canva.com/design/DAGHGAotRgo/hhTBc43clywtbGZ7Mi2JJQ/edit?utm_content=DAGHGAotRgo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", width: 325, height: 260 },
  { src: "/Resume/Hero/Curitiba.png", alt: "Curitiba Presentation", title: "", description:"A story about how a group of friends developed a graph algorithm to find the shortest path to Curitiba", link:"https://www.canva.com/design/DAF3L_5zxdw/GaBSWwZ_3G29VemvBOzZqA/edit?utm_content=DAF3L_5zxdw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", width: 325, height: 260 },
  { src: "/Resume/Hero/PlatformEngineering.png", alt: "Platform Engineering Executive Deck", title: "", description:"For a class project, I created a slide deck summarizing Platform Engineering's role in streamlining software delivery and addressing hybrid cloud complexities through automation and DevOps practices.", link:"https://www.canva.com/design/DAF23UGucFQ/biwbMXxQiq8FKFM2ej91zQ/edit?utm_content=DAF23UGucFQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", width: 325, height: 260 },
];

const giftsSelection = [
  { src: "/Resume/Projects/Parri.png", alt: "Parri's Portoflio Desktop Website", title: "Parri's Portoflio Desktop Website", description:"My high school friend Guillermo Parrilla was approached by a potential client who asked for his website to see his portfolio and pricing. However, Guillermo only had a slide deck to showcase this information. To help him meet the client’s expectations, I transformed his deck into a professional desktop website featuring his portfolio, services, and a contact page. The site includes a Calendly integration and an email card (in progress) to allow clients to easily schedule calls or send inquiries. This project helped Guillermo present his work in a polished and accessible online format.", link: "https://parrillaportfolio.vercel.app/", width: 325, height: 550 },
  { src: "/Resume/Projects/Stylus.png", alt: "Stylus Mobile Website", title: "Stylus Mobile Website", description:"My Uncle Amaury Sánchez owns a high-end luxury furniture store in San Juan, primarily growing his business through word-of-mouth. While he has always talked about having a mobile website, he never had one. I took on the challenge of creating my first mobile website for his store. This is the first version, featuring an elegant design that highlights his luxury offerings. I plan to expand it by adding a contact page with email and Calendly integrations to streamline new business inquiries and a dedicated gifts section integrated with a Shopify store to step into e-commerce.", link: "https://stylus-mobile-95yejzxbo-caborojos-projects.vercel.app/", width: 325, height: 550 },
  { src: "/Resume/Projects/Helios1.png", alt: "Project Helios Github", title: "Award Winning Corporate Project Github", description:"Project Helios was my award-winning master's corporate project, where our team competed against five others to support Barter, a renewable energy company, in identifying potential clients for their solar panel sharing programs. Due to regulations limiting solar energy distribution to a 2km radius, Barter required a tool to map all businesses within this area and pinpoint potential customers. Our team developed a 3-tier application featuring a dashboard with a map view and the capability to download detailed data in Excel, enabling Barter to streamline their client identification process effectively.", link: "https://github.com/Amalaga19/Project-Helios", width: 325, height: 550 },
  { src: "/Resume/Projects/Healthcare.jpg", alt: "Tech Assessment Github Repo", title: "Tech Assessment - Healthcare use case", description:"Developed a predictive model to classify health insurance members into categories based on their likelihood of having a chronic condition, leveraging a dataset containing demographics, lifestyle, and health behavior attributes. Delivered insights to inform personalized wellness programs, early interventions, and cost-saving strategies. This project involved feature engineering, model selection, evaluation, and actionable recommendations to improve health outcomes and reduce healthcare costs.", link: "https://github.com/CaboRojo/Xtillion_Assessment", width: 325, height: 550 },
];

const workIcons = [
  { src: "/Resume/Companies/Accenture.png", alt: "Accenture vector icon", link: "https://www.accenture.com/us-en", width: 325, height: 550 },
  { src: "/Resume/Companies/MapfreRe.png", alt: "Mapfre RE vector icon", link: "https://www.mapfrere.com/", width: 325, height: 550 },
  { src: "/Resume/Companies/Oriental.png", alt: "Oriental vector icon", link: "https://orientalbank.com/en/", width: 325, height: 550 },
];

export default function Home() {
  const marqueeRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [activeHeroCard, setActiveHeroCard] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = (index, event) => {
    const cardContainer = event.currentTarget;
    if (cardContainer.contains(event.target) && event.target.tagName !== 'A' && event.target.tagName !== 'SVG' && event.target.tagName !== 'PATH') {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const handleHeroCardClick = (index, event) => {
    const cardContainer = event.currentTarget;
    if (cardContainer.contains(event.target) && event.target.tagName !== 'A' && event.target.tagName !== 'SVG' && event.target.tagName !== 'PATH') {
      setActiveHeroCard(activeHeroCard === index ? null : index);
    }
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.card')) {
      setActiveCard(null);
      setActiveHeroCard(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const width = marquee.scrollWidth; // Total width of the original marquee
      marquee.style.width = `${width}px`; // Set the correct width
      const clone = marquee.cloneNode(true); // Clone the entire marquee
    }
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .marquee-container {
          position: relative; /* Ensures clones are positioned relative to the container */
          overflow: hidden;
          width: 100%;
          height: 60px;
        }
        .marquee {
          display: flex;
          position: absolute; /* Align horizontally */
          top: 0; /* Align to the top of the container */
          left: 0; /* Start at the left */
          animation: marquee 20s linear infinite;
          will-change: transform;
          gap: 2rem; /* Consistent spacing */
        }
        .marquee-item {
          flex-shrink: 0;
        }
          @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        .card-description {
          background-color: rgba(0, 0, 0, 0.8); /* Increased opacity for better contrast */
          padding: 1rem;
          border-radius: 0.5rem;
          max-height: 100%; /* Ensure text is constrained within the card */
          overflow-y: auto; /* Add scroll if text overflows */
        }
        .card {
          position: relative;
          z-index: 1; /* Ensure active cards are on top */
        }
        .card.active {
          z-index: 10; /* Higher z-index for active cards */
        }
      `}</style>
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/Stylus/Outdoor/Sofa/Sofa_Pablo_Outdoor_A-02.webp"
          alt="Background"
          fill
          className="absolute inset-0 w-full h-full z-10"
        />
        <section className="relative flex flex-col min-w-full min-h-full pt-16 pl-4 pr-4 pb-10 justify-start items-center space-y-4 z-20">
          <h1 className="text-hero-title font-thin text-white mt-8 text-center">
              Welcome to my Portfolio
            </h1>
            <p className="text-body font-thin text-white text-center underline">
              <Link
                href="/contact"
                className="focus:text-gray-300 active:text-gray-500"
                onClick={() => {
                  console.log("Contact link clicked");
                }}
              >
                Let's Connect
              </Link>
            </p>
            <div className="flex-grow"></div>
            {showButton && (
            <a
              href="/AlexisFranciscoResume.pdf"
              download
              className={`p-2 ${isClicked ? 'bg-gray-500' : 'bg-gray-700'} text-white rounded-full animate-bounce focus:bg-black active:bg-black`}
              onClick={() => {
                console.log("Download button clicked");
                setIsClicked(true);
              }}
            >
              Download My Resume
            </a>
        )}
        </section>
      </div>
      
      <div className="w-full min-h-screen" style={{ background: 'radial-gradient(circle at center, #000000, #434343)' }}>
        <section className="flex flex-col min-w-full min-h-screen pt-16 pl-4 pr-4 pb-10 justify-start space-y-4 z-20">
          <h2 className="text-sub-heading font-thin text-white text-left">
            Companies
          </h2>
            {/* <div className="marquee-container">
              <div ref={marqueeRef} className="marquee">
                {partnerLogos.map((logo, index) => (
                  <div key={index} className="marquee-item">
                    <Image src={logo.src} alt={logo.alt} width={50} height={50} />
                  </div>
                ))}
              </div>
            </div> */}
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100px' }}>
            <div className="grid grid-cols-3 items-center content-between justify-items-center" style={{ width: '100%' }}>
              {workIcons.map((icon, index) => (
                <div key={index} className="p-2">
                  <Link href={icon.link}>
                    <Image src={icon.src} alt={icon.alt} width={95} height={95} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-grow w-full">
            <h1 className="text-sub-heading font-thin text-white text-left">
              Shaping Business Narratives with Data
            </h1>
            <p className="test-body font-thin text-white text-left mt-8">
              Business storytelling should be concise and engaging. 
              Slides must provide enough detail to captivate without overwhelming, 
              allowing the speaker to add depth. This involves analyzing large data sets 
              and presenting only the most relevant insights.
            </p>
            <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 mt-8">
              {heroSelection.map((photo, index) => {
                const backgroundSize = '100% 100%'; // Change this value to test different options
                const backgroundPosition = 'center'; // Change this value to test different options
                return (
                  <div
                    key={index}
                    className={`snap-center min-w-[325px] min-h-[260px] bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col justify-between card group hover:scale-105 transition-transform duration-300 ${activeHeroCard === index ? 'active' : ''}`}
                    style={{
                      backgroundImage: `url(${photo.src})`,
                      backgroundSize: backgroundSize,
                      backgroundPosition: backgroundPosition,
                      position: 'relative',
                    }}
                    onClick={(event) => handleHeroCardClick(index, event)}
                  >
                    <div className="flex justify-between items-center mt-auto p-2 rounded-b-lg">
                      <h2 className="text-card-title font-bold">{photo.title}</h2>
                      <a href={photo.link} target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </a>
                    </div>
                    {activeHeroCard === index && (
                      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white p-4 card-description">
                        <p>{photo.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <div className="w-full min-h-screen" style={{ background: 'radial-gradient(circle at center, #000000, #434343)' }}>
        <section className="flex flex-col min-w-full min-h-screen pt-8 pl-4 pr-4 justify-start items-center space-y-4 z-20">
          <div className="flex-grow w-full">
            <h1 className="text-hero-title font-thin text-white mt-8 text-left">
              Creative projects
            </h1>
            <p className="test-body font-thin text-white text-left mt-4">
              From web applications to data science
            </p>
            <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 mt-8">
              {giftsSelection.map((gift, index) => (
                <div
                  key={index}
                  className={`min-w-[325px] h-[550px] bg-gray-800 text-gray-900 p-4 rounded-lg shadow-lg flex flex-col justify-between snap-center group hover:scale-105 transition-transform duration-300 card ${activeCard === index ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${gift.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  onClick={(event) => handleCardClick(index, event)}
                >
                  <div className="flex justify-between items-center mt-auto p-2 rounded-b-lg">
                    <h2 className="text-card-title font-bold">{gift.title}</h2>
                    <a href={gift.link} target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </a>
                  </div>
                  {activeCard === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white p-4 card-description">
                      <p>{gift.description}</p>
                    </div>
                  )}
              </div>
            ))}
           </div>
        </div>
      </section>
      </div>
    </>
  );
}