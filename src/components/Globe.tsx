import React, { useEffect, useRef } from 'react';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let destroyed = false;

    const loadGlobe = async () => {
      try {
        const createGlobe = (await import('cobe')).default;

        if (destroyed) return;

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
            { location: [6.5244, 3.3792], size: 0.08 },
            { location: [9.0579, 8.6753], size: 0.05 },
            { location: [6.2088, 6.9915], size: 0.03 },
            { location: [12.0022, 8.5919], size: 0.04 },
            { location: [4.8156, 7.0498], size: 0.03 },
            { location: [6.3350, 5.6037], size: 0.03 },
          ],
          onRender: (state) => {
            state.phi = phi;
            phi += 0.003;
          },
        });

        if (!destroyed) {
          return () => globe.destroy();
        }
      } catch (error) {
        console.error('Failed to load globe:', error);
      }
    };

    loadGlobe().then(cleanup => {
      if (cleanup) {
        return () => cleanup();
      }
    });

    return () => {
      destroyed = true;
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