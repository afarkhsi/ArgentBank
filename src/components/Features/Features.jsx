// import styled from 'styled-components';
import ChatImg from '../../assets/icon-chat.png';
import MoneyImg from '../../assets/icon-money.png';
import SecurityImg from '../../assets/icon-security.png';
import './style.css';

// HOME FEATURES COMPONENT
const Features = () => {
  return (
    <section className="features">
      <article className="feature-item">
        <img src={ChatImg} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </article>

      <article className="feature-item">
        <img src={MoneyImg} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">More savings means higher rates</h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </article>

      <article className="feature-item">
        <img src={SecurityImg} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </article>
    </section>
  );
};

export default Features;
