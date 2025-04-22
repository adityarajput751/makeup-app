import React from "react";
import "./Pricing.css"; // External CSS file
import pricingImg from '../../assets/price.png'

const plans = [
  {
    title: "Silver Light Bride",
    items: [
      { service: "BRIDAL MAKEUP", price: "$25" },
      { service: "HAIR STYLE", price: "$35" },
      { service: "SAREE DRAPING", price: "$152" },
      { service: "BRIDAL MAKEUP", price: "$25" },
      { service: "HAIR STYLE", price: "$35" },
      { service: "SAREE DRAPING", price: "$152" },
    ],
  },
  {
    title: "Golden Kiss Bride",
    items: [
      { service: "HD BRIDE MAKEUP", price: "$125" },
      { service: "HAIR STYLING", price: "$300" },
      { service: "FAUX LASH", price: "$1000" },
      { service: "BROW DESIGN", price: "$200" },
      { service: "BRIDAL DRESSING", price: "$235" },
      { service: "HAIR STYLING", price: "$358" },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        {/* Left Side Image */}
        <div className="pricing-image">
          <img src={pricingImg} alt="Bridal Makeup" />
        </div>

        {/* Right Side Content */}
        <div className="pricing-content">
          <h2>Services & Pricing</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>

          <div className="pricing-buttons">
            <button className="active">Bridal makeup</button>
            <button>Birthday makeup</button>
            <button>Party Makeup</button>
          </div>

          <div className="pricing-tables">
            {plans.map((plan, index) => (
              <div className="pricing-column" key={index}>
                <h3>{plan.title}</h3>
                <ul>
                  {plan.items.map((item, idx) => (
                    <li key={idx}>
                      <span>{item.service}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
