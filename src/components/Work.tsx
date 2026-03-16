import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projectsData = [
  {
    name: "MiniGit — Version Control System",
    bullets: [
      "Built from scratch using 7 core DSA concepts — no external DS libraries used",
      "Features branching, merging, undo/redo, commit history via binary trees, and multi-repository support",
      "Powered by a FastAPI backend with 17 REST endpoints and an interactive terminal UI mimicking a real Git CLI",
    ],
    tags: ["C++", "Python", "FastAPI", "DSA", "Render"],
    image: "/assets/images/minigit.png",
    github: "https://github.com/sanyam-katoch10/Mini-Git-Version-Control-System",
    demo: "https://mini-git-dsa.onrender.com",
  },
  {
    name: "BotShield — ML CAPTCHA Refinement System",
    bullets: [
      "ML-powered CAPTCHA refinement system that generates, classifies, and adjusts CAPTCHA difficulty dynamically",
      "CNN classifier trained on 6,000 labeled images achieving 97% validation accuracy",
      "Adaptive Predict → Adjust → Re-generate → Finalize loop that fine-tunes complexity for maximum bot resistance",
    ],
    tags: ["CNN", "TensorFlow", "Keras", "Streamlit", "Python"],
    image: "/assets/images/botshield.png",
    github:
      "https://github.com/sanyam-katoch10/BOtShield_ML-CAPTCHA-Refinement-System",
    demo: "https://botshield0captcha-sam.streamlit.app/",
  },
  {
    name: "SegVision — PSO Image Segmentation",
    bullets: [
      "PSO-powered image segmentation web app that segments images into meaningful color regions",
      "Encodes pixels as 5D spatial feature vectors [R,G,B,x,y] with KMeans++ warm-start seeding",
      "Real-time SSE progress streaming with non-blocking threaded backend, deployed on Railway",
    ],
    tags: ["Python", "Flask", "NumPy", "OpenCV", "PSO", "SSE"],
    image: "/assets/images/segvision.png",
    github:
      "https://github.com/sanyam-katoch10/SegViSion_PSO_Image_Segmentation_System",
    demo: "https://segvision.up.railway.app",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projectsData.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projectsData.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.name}</h4>
                        <p className="carousel-category">
                          {project.tags.join(" • ")}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.bullets.join(" • ")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.name}
                        link={project.demo || project.github}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projectsData.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
