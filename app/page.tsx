import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="text-center py-16 bg-cover bg-hero-pattern">
      <h2 className="text-4xl font-bold text-white mb-2">
        Welcome to Our Coffee Shop
      </h2>
      <p className="text-white">The best coffee in town.</p>
    </div>
  );
};

export default Hero;
