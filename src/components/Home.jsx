import React from 'react';
import { ReactTyped } from 'react-typed';
import '../styles/Home.css';

function Home() {
  return (
    <div className="hero-banner">
      <div className="overlay"></div>

      <div className="content position-relative text-center">
        <p className="hero-eyebrow">Applied CS · Dalhousie · AWS Certified</p>

        <h1 className="hero-name">Gavin Sharma</h1>

        <h2 className="hero-typed">
          <ReactTyped
            strings={[
              "Software engineer focused on building reliable backend and cloud systems",
              "I build full-stack apps that don't fall apart under pressure",
              "Most productive when I've got code, coffee, and a controller nearby",
              "Not a fan of bloated UIs or broken APIs - so I fix them"
            ]}
            typeSpeed={30}
            backSpeed={20}
            backDelay={2500}
            loop
          />
        </h2>

        <div className="hero-actions">
          <a href="/resume" className="btn-resume">
            View Resume
          </a>
          <a href="#contact" className="btn-contact">
            Let's Connect
          </a>
        </div>
      </div>

      <div className="scroll-cue position-absolute bottom-0 mb-4">
        <span className="scroll-arrow">↓</span>
      </div>
    </div>
  );
}

export default Home;
