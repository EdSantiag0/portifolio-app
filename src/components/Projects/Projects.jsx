import React, { useRef } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";
import Slider from "react-slick";

const Projects = () => {
  const sliderRef = useRef("");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="project-container">
      <h5>Projects</h5>

      <div className="project-content">
        <div className="arrow-right" onClick={sliderRight}>
          <span className="material-symbols-outlined">&gt;</span>
        </div>
        <div className="arrow-left" onClick={sliderLeft}>
          <span className="material-symbols-outlined">&lt;</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => (
            <ProjectCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
