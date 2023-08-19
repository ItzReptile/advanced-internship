import React from "react";
import PricingImg from "../assets/pricing-top.png";
import { Footer } from "../Components/Footer";
export const ChoosePlan = () => {
  return (
    <>
      <div className="choose-plan">
        <div className="choose-plan-header">
          <h1>Get unlimted access to many amazing books to read</h1>
          <h5>Turn ordinary moments into amazing learning opportunities</h5>
          <figure className="choose-plan-img-wrapper">
            <img className="choose-plan-img" src={PricingImg} alt="" />
          </figure>
        </div>
        <div className="container">
          <div className="row">
            <div className="choose-plan-benefits">
              <div className="choose-plan-benefit">
                <i className="choose-plan-icon"></i>
                <h2>Key ideas in few min with many books to read</h2>
              </div>
              <div className="choose-plan-benefit">
                <i className="choose-plan-icon"></i>
                <h2>Key ideas in few min with many books to read</h2>
              </div>
              <div className="choose-plan-benefit">
                <i className="choose-plan-icon"></i>
                <h2>Key ideas in few min with many books to read</h2>
              </div>
            </div>
            <div className="choose-plan-billings">
              <h1>Choose the plan that fits you</h1>
              <div className="choose-plan-billing choose-plan-billing-acitve">
                <div className="choose-plan-billing-dot-wrapper">
                  <div className="choose-plan-billing-dot"></div>
                </div>
                <div className="choose-plan-billing-text">
                  <h1>Premium Plus Yearly</h1>
                  <h2>$99.99/year</h2>
                  <h4>7-day free trial included</h4>
                </div>
              </div>
              <div className="choose-plan-border">Or</div>
              <div className="choose-plan-billing choose-plan-billing-acitve">
                <div className="choose-plan-billing-dot-wrapper">
                  <div className="choose-plan-billing-dot"></div>
                </div>
                <div className="choose-plan-billing-text">
                  <h1>Premium Plus Yearly</h1>
                  <h2>$99.99/year</h2>
                  <h4>7-day free trial included</h4>
                </div>
              </div>
              <div className="choose-plan-billing-btn-wrapper">
                <button className="choose-plan-billing-start">
                  Start Your Free 7-day trail
                </button>
                <h6 className="">
                  Cancel your trial at any time before it ends, and you won’t be
                  charged.
                </h6>
                <button className="choose-plan-billing-start">
                  Start Your First Month
                </button>
                <h6 className="">
                  30-day money back guarantee, no questions asked.
                </h6>
              </div>
            </div>
            <div className="choose-plan-faqs">
              <div className="choose-plan-faq">
                <div className="choose-plan-faq-header">
                  <h3 className="">How does the free 7-day trial work?</h3>
                </div>
                <div className="choose-plan-faq-collapse">
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
                <div className="choose-plan-faq-header">
                  <h3 className="">How does the free 7-day trial work?</h3>
                </div>
                <div className="choose-plan-faq-collapse">
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
                <div className="choose-plan-faq-header">
                  <h3 className="">How does the free 7-day trial work?</h3>
                </div>
                <div className="choose-plan-faq-collapse">
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
                <div className="choose-plan-faq-header">
                  <h3 className="">How does the free 7-day trial work?</h3>
                </div>
                <div className="choose-plan-faq-collapse">
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
