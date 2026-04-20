import React, { useEffect, useRef } from 'react';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let animationId: number;

    const loadGlobe = async () => {
      try {
        const createGlobe = (await import('cobe')).default;
        
        const globe = createGlobe(canvas, {
          devicePixelRatio: 2,
          width: 600,
          height: 600,
          phi: 0,
          theta: 0,
          dark: 0,
          diffuse: 1.2,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.9, 0.9, 0.9],
          markerColor: [0.8, 0.2, 0.3],
          glowColor: [0.9, 0.4, 0.5],
          offset: [0, 0],
          markers: [
            { location: [6.5244, 3.3792], size: 0.08 }, // Lagos
            { location: [9.0579, 8.6753], size: 0.05 }, // Abuja
            { location: [6.2088, 6.9915], size: 0.03 }, // Anambra
            { location: [12.0022, 8.5919], size: 0.04 }, // Kano
            { location: [4.8156, 7.0498], size: 0.03 }, // Port Harcourt
            { location: [6.3350, 5.6037], size: 0.03 }, // Benin City
          ],
          onRender: (state) => {
            state.phi = phi;
            phi += 0.003;
          },
        });

        return () => {
          globe.destroy();
        };
      } catch (error) {
        console.error('Failed to load globe:', error);
      }
    };

    const cleanup = loadGlobe();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      cleanup?.then(destroyGlobe => destroyGlobe?.());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '450px', height: '450px' }}
      width="600"
      height="600"
      className="relative z-10"
    />
  );
}