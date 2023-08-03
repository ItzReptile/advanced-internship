import React from "react";
import { useState, useEffect } from "react";
import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";

export const Features = () => {
  const heading = [
    "Enhance Your Knowledge",
    "Achieve Greater Success",
    "Improve Your Health",
    "Develop Better Parenting Skills",
    "Increase Happiness",
    "Be The Best Verison OF Yourself",
  ];
  const header1 = [
    "Expand Your Learning",
    "Accomplish Your Goals",
    "Strengthen Your Vitality",
    "Become A Better Caregiver",
    "Improve Your Mood",
    " Maximize Your Abilities",
  ];

  const [currentHeading, setcurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentHeading((prevIndex) => (prevIndex + 1) % heading.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="section__title">Understand books in few minutes</div>
          <div className="features__wrapper">
            <div className="features">
              <div className="features__icon">
                <AiFillFileText />
              </div>
              <div className="features__title">Read or listen</div>
              <div className="features__sub--title">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="features">
              <div className="features__icon">
                <AiFillBulb />
              </div>
              <div className="features__title">Find your next read</div>
              <div className="features__sub--title">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="features">
              <div className="features__icon">
                <AiFillAudio />
              </div>
              <div className="features__title">Briefcasts</div>
              <div className="features__sub--title">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
          <div className="statistics__wrapper">
            <div className="statistics__content--header">
              {heading.map((heading, index) => (
                <div
                  key={index}
                  className={`statistics__heading ${
                    index === currentHeading ? "highlighted" : ""
                  }`}
                >
                  {heading}
                </div>
              ))}
            </div>
            <div className="statistics__content--details">
              <div className="statistics__data">
                <div className="statistics__data--number">93%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>significantly increase</b> reading
                  frequency.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">96%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>establish better</b> habits.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">90%</div>
                <div className="statistics__data--title">
                  have made <b>significant positive</b> change to their lives.
                </div>
              </div>
            </div>
          </div>
          <div className="statistics__wrapper">
            <div className="statistics__content--details statistics__content--details-second">
              <div className="statistics__data">
                <div className="statistics__data--number">91%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>report feeling more productive</b>{" "}
                  after incorporating the service into their daily routine.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">94%</div>
                <div className="statistics__data--title">
                  of Summarist members have <b>noticed an improvement</b> in
                  their overall comprehension and retention of information.
                </div>
              </div>
              <div className="statistics__data">
                <div className="statistics__data--number">88%</div>
                <div className="statistics__data--title">
                  of Summarist members <b>feel more informed</b> about current
                  events and industry trends since using the platform.
                </div>
              </div>
            </div>
            <div className="statistics__content--header statistics__content--header-second">
              {header1.map((header1, index) => (
                <div
                  key={index}
                  className={`statistics__heading ${
                    index === currentHeading ? "highlighted" : ""
                  }`}
                >
                  {header1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
