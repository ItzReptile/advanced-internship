import React, { useState } from "react";
import PricingImg from "../assets/pricing-top.png";
import { Footer } from "../Components/Footer";
import { HiDocumentText } from "react-icons/hi";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
export const ChoosePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedBio, setselectedBio] = useState("");
  const [isFaqOpen, setisFaqOpen] = useState(false);
  const [isFaqOpen1, setIsFaqOpen1] = useState(false);
  const [isFaqOpen2, setIsFaqOpen2] = useState(false);
  const [isFaqOpen3, setIsFaqOpen3] = useState(false);
  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };
  const toggleFaq1 = () => {
    setIsFaqOpen1(!isFaqOpen1);
  };
  
  const toggleFaq2 = () => {
    setIsFaqOpen2(!isFaqOpen2);
  };
  
  const toggleFaq3 = () => {
    setIsFaqOpen3(!isFaqOpen3);
  };
  
  const handleBioClick = (Bio) => {
    setselectedBio(Bio);
  };
  const toggleFaq = () => {
    setisFaqOpen(!isFaqOpen);
  };
  return (
    <>
      <div className="choose-plan">
        <div className="choose-plan-header">
          <h1 className="choose-plan-header-title">
            Get unlimited access to many amazing
            <br /> books to read
          </h1>
          <h5 className="choose-plan-header-subtitle">
            Turn ordinary moments into amazing learning opportunities
          </h5>
          <figure className="choose-plan-img-wrapper">
            <img className="choose-plan-img" src={PricingImg} alt="" />
          </figure>
        </div>
        <div className="container">
          <div className="row">
            <div className="choose-plan-benefits">
              <div className="choose-plan-benefit">
                <i className="choose-plan-icon">
                  <HiDocumentText />
                </i>
                <h2 className="choose-plan-ideal">
                  <span className="bold"> Key ideas in few min</span> with many
                  books to read
                </h2>
              </div>
              <div className="choose-plan-benefit">
                <i className="choose-plan-icon">
                  <PiPottedPlantFill />
                </i>
                <h2 className="choose-plan-ideal">
                  <span className="bold">3 million </span> people growing with
                  Summarist everyday
                </h2>
              </div>
              <div className="choose-plan-benefit">
                <i className="choose-plan-icon">
                  <FaHandshake />
                </i>
                <h2 className="choose-plan-ideal">
                  <span className="bold">Precise recommendations</span>{" "}
                  collections curated by experts
                </h2>
              </div>
            </div>
            <div className="choose-plan-billings">
              <h1 className="choose-plan-billings-title">
                Choose the plan that fits you
              </h1>
              <div
                className={`choose-plan-billing ${
                  selectedPlan === "yearly" ? "choose-plan-billing-active" : ""
                }`}
                onClick={() => {
                  handlePlanClick("yearly");
                  handleBioClick("bio1");
                }}
              >
                <div className="choose-plan-billing-dot-wrapper">
                  <div className="choose-plan-billing-dot"></div>
                </div>
                <div className="choose-plan-billing-text">
                  <h1 className="choose-plan-billing-text-title">
                    Premium Plus Yearly
                  </h1>
                  <h2 className="choose-plan-billing-text-price">
                    $99.99/year
                  </h2>
                  <h4 className="choose-plan-billing-text-length">
                    7-day free trial included
                  </h4>
                </div>
              </div>
              <div className="choose-plan-border">Or</div>
              <div
                className={`choose-plan-billing ${
                  selectedPlan === "monthly" ? "choose-plan-billing-active" : ""
                }`}
                onClick={() => {
                  handlePlanClick("monthly");
                  handleBioClick("bio2");
                }}
              >
                <div className="choose-plan-billing-dot-wrapper">
                  <div className="choose-plan-billing-dot"></div>
                </div>
                <div className="choose-plan-billing-text">
                  <h1 className="choose-plan-billing-text-title">
                    Premium Monthly
                  </h1>
                  <h2 className="choose-plan-billing-text-price">
                    $9.99/month
                  </h2>
                  <h4 className="choose-plan-billing-text-length">
                    No trial included
                  </h4>
                </div>
              </div>
              <div className="choose-plan-billing-btn-wrapper">
                <button className="btn" style={{ width: "350px" }}>
                  Start Your{" "}
                  {selectedPlan === "yearly" ? "7-day Trial" : "First Month"}
                </button>
                <h6 className="choose-plan-billing-description">
                  {selectedBio === "bio1"
                    ? "Cancel your trial at any time before it ends, and you won’t be charged."
                    : "30-day money back guarantee, no questions asked."}
                </h6>
              </div>
            </div>
            <div className="choose-plan-faqs">
              <div className="choose-plan-faq">
                <div className="choose-plan-faq-header" onClick={toggleFaq}>
                  <h3 className="">How does the free 7-day trial work?</h3>
                </div>
                <div
                  className={`choose-plan-faq-collapse ${
                    isFaqOpen ? "faq-open" : "faq-closed"
                  }`}
                >
                  <h5 className="choose-plan-faq-bio">
                    Begin your complimentary 7-day trial with a Summarist annual
                    membership. You are under no obligation to continue your
                    subscription, and you will only be billed when the trial
                    period expires. With Premium access, you can learn at your
                    own pace and as frequently as you desire, and you may
                    terminate your subscription prior to the conclusion of the
                    7-day free trial.
                  </h5>
                </div>
              </div>
              <div className="choose-plan-faq">
                <div className="choose-plan-faq-header" onClick={toggleFaq1}>
                  <h3 className="">
                    Can I switch subscriptions from monthly to yearly, or yearly
                    to monthly?
                  </h3>
                </div>
                <div
                  className={`choose-plan-faq-collapse ${
                    isFaqOpen1 ? "faq-open" : "faq-closed"
                  }`}
                >
                  <h5 className="choose-plan-faq-bio">
                    While an annual plan is active, it is not feasible to switch
                    to a monthly plan. However, once the current month ends,
                    transitioning from a monthly plan to an annual plan is an
                    option.
                  </h5>
                </div>
              </div>
              <div className="choose-plan-faq">
                <div className="choose-plan-faq-header" onClick={toggleFaq2}>
                  <h3 className="">What's included in the Premium plan?</h3>
                </div>
                <div
                  className={`choose-plan-faq-collapse ${
                    isFaqOpen2 ? "faq-open" : "faq-closed"
                  }`}
                >
                  <h5 className="choose-plan-faq-bio">
                    Premium membership provides you with the ultimate Summarist
                    experience, including unrestricted entry to many
                    best-selling books high-quality audio, the ability to
                    download titles for offline reading, and the option to send
                    your reads to your Kindle.
                  </h5>
                </div>
              </div>
              <div className="choose-plan-faq">
                <div className="choose-plan-faq-header" onClick={toggleFaq3}>
                  <h3 className="">
                    Can I cancel during my trial or subscription?
                  </h3>
                </div>
                <div
                  className={`choose-plan-faq-collapse ${
                    isFaqOpen3 ? "faq-open" : "faq-closed"
                  }`}
                >
                  <h5 className="choose-plan-faq-bio">
                    You will not be charged if you cancel your trial before its
                    conclusion. While you will not have complete access to the
                    entire Summarist library, you can still expand your
                    knowledge with one curated book per day.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
