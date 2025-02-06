import React from "react";
import AnimatedNumber from "./AnimatedNumber";

const welcomeItems = [
  { number: 20, label: "years_experience" },
  { number: 100, label: "happy_customers" },
  { number: 15, label: "choice_of_services" },
  { number: 10, label: "professional_guides" },
];

export default function WelcomeNumbers({ texts }) {
  return (
    <div className="info-welcome__numbers numbers-welcome">
      {welcomeItems.map((item, index) => (
        <AnimatedNumber
          key={index}
          number={item.number}
          label={texts[item.label]}
        />
      ))}
    </div>
  );
}
