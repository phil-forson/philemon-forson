"use client";

import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import Particles from "react-particles";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles...");
    await loadFull(engine);
    console.log("Particles initialized successfully!");
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("Particles loaded:", container);
  }, []);

  console.log("ParticlesBackground component rendered");

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 3,
              },
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#00FFFF", "#45DEC4", "#61DAFB", "#0288D1", "#FDD835"],
            },
            links: {
              color: "#00FFFF",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
              trail: {
                enable: false,
              },
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false,
              },
            },
          },
          detectRetina: true,
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
