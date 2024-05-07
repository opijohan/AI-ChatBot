import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  headline: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, headline, description }) => {
  return (
    <div
      className="flex flex-col gap-6 text-left max-w-72 md:items-start
        items-center"
    >
      <div className="py-4 px-4 rounded-md border max-w-fit">{icon}</div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {headline}
      </h3>
      <p className="text-minor md:text-sm text-sm leading-7 text-minor">
        {description}
      </p>
    </div>
  );
};

export default Feature;
