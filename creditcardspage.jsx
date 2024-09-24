import React from 'react';

// CreditFeatureCard component
const CreditFeatureCard = ({ imgSrc, title }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-center">
      <img
        aria-hidden="true"
        alt={title}
        src={imgSrc}
        className="w-16 h-16 mx-auto"
      />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
    </div>
  );
};

// CreditFeatureGrid component
const CreditFeatureGrid = () => {
  const features = [
    {
      imgSrc: 'https://openui.fly.dev/openui/100x100.svg?text=📈',
      title: 'Monthly free credit report',
    },
    {
      imgSrc: 'https://openui.fly.dev/openui/100x100.svg?text=📊',
      title: 'Detailed analysis of factors affecting score',
    },
    {
      imgSrc: 'https://openui.fly.dev/openui/100x100.svg?text=💡',
      title: 'Personalised tips on improving & building score',
    },
    {
      imgSrc: 'https://openui.fly.dev/openui/100x100.svg?text=📱',
      title: 'Pre-approved offers',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
      {features.map((feature, index) => (
        <CreditFeatureCard
          key={index}
          imgSrc={feature.imgSrc}
          title={feature.title}
        />
      ))}
    </div>
  );
};

// Main CreditScorePage component
const CreditScorePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-primary">
        Track Your Credit Score Effortlessly
      </h1>
      <CreditFeatureGrid />
    </div>
  );
};

export default CreditScorePage;
