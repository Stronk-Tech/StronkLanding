// Import necessary components
import React, { useState, useEffect, useRef } from "react";
import DvdLogo from "../components/DvdLogo";
import "./home.css";

const Home = () => {
  const [chadImages, setChadImages] = useState([]);
  const headerRef = useRef(null);
  const homeContainerRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    if (chadImages.length === 0) {
      const generateChadImages = () => {
        let count = 1;
        const newChadImages = Array.from({ length: 3 }, () => {
          const randomChad = performance.now() + count++;
          return "https://stronk.rocks/avatar.png?" + randomChad;
        });
        setChadImages(newChadImages);
      };
      generateChadImages();
    }
  }, [chadImages]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (headerRef.current && homeContainerRef.current) {
        const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
        const scale = 1 + (scrollPosition / maxScrollHeight) * 2.0;
        const opacity = Math.max(1 - (scrollPosition / maxScrollHeight) * 1.2, 0.0);
        const maxTranslateY = homeContainerRef.current.clientHeight - headerRef.current.clientHeight;
        const translateY = Math.min(scrollPosition * 0.2, maxTranslateY);
        headerRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
        headerRef.current.style.opacity = `${opacity}`;
      }

      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = Math.max(1 - (scrollPosition / 300), 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container" ref={homeContainerRef}>
      <DvdLogo parentRef={homeContainerRef} />
      <header className="header" ref={headerRef}>
        <img alt="" src="logo_centered.png" className="header-logo" />
      </header>

      <div className="scroll-indicator" ref={scrollIndicatorRef}>
        <span>Links</span>
      </div>

      <main className="main-content">
        <section className="orchestrator-section">
          <h3>Stronk Sites</h3>
          <div className="button-group">
            <a href="https://stronk.tech" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="logo_centered.png" className="button-icon" />
                <span>Stronk Tech</span>
              </button>
            </a>
            <a href="https://linktr.ee/stronk.tech" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="linktree.png" className="button-icon" />
                <span>Contact</span>
              </button>
            </a>
            <a href="https://www.streamcrafter.live/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="streamcrafter.webp" className="button-icon" />
                <span>Stream Crafter</span>
              </button>
            </a>
          </div>
        </section>
        <section className="orchestrator-section">
          <h3>Stronk Apps</h3>
          <div className="button-group">
            <a href="https://inference.stronk.rocks/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="logo_centered.png" className="button-icon" />
                <span>Stronk AI</span>
              </button>
            </a>
            <button className="link-button" disabled>
              <img alt="" src="logo_centered.png" className="button-icon" />
              <span>Stronk Video</span>
            </button>
          </div>
        </section>

        <div className="call-to-action">
          <a href="https://explorer.livepeer.org/accounts/0x847791cbf03be716a7fe9dc8c9affe17bd49ae5e/delegating" target="_blank" rel="noopener noreferrer" className="link-button">
            <img alt="" src={chadImages[0]} className="button-icon" />
            <span>Stake LPT</span>
          </a>
        </div>

        <section className="orchestrator-section">
          <h3>Livepeer Orchestrator</h3>
          <div className="button-group">
            <a href="https://grafana.stronk.tech/d/71b6OZ0Gz/orchestrator-overview" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="grafana.png" className="button-icon" />
                <span>Transcode Stats</span>
              </button>
            </a>
            <a href="https://grafana.stronk.tech/d/Livepeer-AI/orchestrator-ai-overview" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="grafana.png" className="button-icon" />
                <span>AI Stats</span>
              </button>
            </a>
            <a href="https://forum.livepeer.org/t/transcoder-campaign-captain-stronk/2051/999" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="livepeer.png" className="button-icon" />
                <span>News & Updates</span>
              </button>
            </a>
          </div>
        </section> <section className="broadcaster-section">
          <h3>Livepeer Apps</h3>
          <div className="button-group">
            <a href="https://explorer.stronk.rocks/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="livepeer.png" className="button-icon" />
                <span>Contract Explorer</span>
              </button>
            </a>
            <a href="https://stats.stronk.rocks/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="livepeer.png" className="button-icon" />
                <span>Monthly Charts</span>
              </button>
            </a>
            <a href="https://transcode-performance.stronk.rocks/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="livepeer.png" className="button-icon" />
                <span>Transcoder Health</span>
              </button>
            </a>
            <a href="https://ai-performance.stronk.rocks/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="livepeer.png" className="button-icon" />
                <span>AI Health</span>
              </button>
            </a>
          </div>
        </section>

        <div className="call-to-action">
          <a href="https://explorer.livepeer.org/accounts/0x847791cbf03be716a7fe9dc8c9affe17bd49ae5e/delegating" target="_blank" rel="noopener noreferrer" className="link-button">
            <img alt="" src={chadImages[1]} className="button-icon" />
            <span>Stake LPT</span>
          </a>
        </div>

        <section className="utilities-section">
          <h3>Livepeer Utilities</h3>
          <div className="button-group">
            <a href="https://dune.com/stronk/livepeer-arbitrum" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="dune.png" className="button-icon" />
                <span>Dune Stats</span>
              </button>
            </a>
            <a href="https://github.com/stronk-tech/MistLoadLivepeer" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="github.png" className="button-icon" />
                <span>Load Tester</span>
              </button>
            </a>
            <a href="https://github.com/stronk-tech/OrchestratorSiphon" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="github.png" className="button-icon" />
                <span>Orch Siphon</span>
              </button>
            </a>
          </div>
        </section>

        <section className="utilities-section">
          <h3>Stronk Tips</h3>
          <div className="button-group">
            <a href="https://www.livepeer.tools/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="xodeapp.png" className="button-icon" />
                <span>More Stats</span>
              </button>
            </a>
            <a href="https://livepeer-test-gateway.ad-astra.video/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="ad-astra-video.png" className="button-icon" />
                <span>Test Gateway</span>
              </button>
            </a>
            <a href="https://video-miner.com/" target="_blank" rel="noopener noreferrer">
              <button className="link-button">
                <img alt="" src="videominer.svg" className="button-icon" />
                <span>Livepeer Pool</span>
              </button>
            </a>
          </div>
        </section>

        <div className="call-to-action">
          <a href="https://explorer.livepeer.org/accounts/0x847791cbf03be716a7fe9dc8c9affe17bd49ae5e/delegating" target="_blank" rel="noopener noreferrer" className="link-button">
            <img alt="" src={chadImages[2]} className="button-icon" />
            <span>Stake LPT</span>
          </a>
        </div>

      </main>
    </div>
  );
};

export default Home;
