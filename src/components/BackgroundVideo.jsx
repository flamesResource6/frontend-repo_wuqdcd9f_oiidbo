import React from 'react';

const BackgroundVideo = ({ src, fallbackImageUrl, opacity = 0.5 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Desktop/Tablet Video */}
      <video
        className="hidden md:block w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{ opacity }}
        src={src}
      />
      {/* Mobile Fallback */}
      <div
        className="md:hidden w-full h-full"
        style={{
          backgroundImage: fallbackImageUrl
            ? `url(${fallbackImageUrl})`
            : "radial-gradient(ellipse at 30% 20%, rgba(0,230,255,0.25), rgba(11,11,13,0.2) 40%), linear-gradient(180deg, rgba(11,11,13,0.9), rgba(11,11,13,0.95))",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity,
        }}
      />
      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/60 via-[#0B0B0D]/40 to-[#0B0B0D]/80" />
    </div>
  );
};

export default BackgroundVideo;
