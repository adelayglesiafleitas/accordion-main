import Star from "../../src/assets/faq-accordion-main/assets/images/icon-star.svg";
import "../styles/HeaderAccordion.css";

const HeaderAccordion = () => {
  return (
    <div className="container-accordion-header">
      <img src={Star} alt="star" />
      <p className="Bolt">FAQs</p>
    </div>
  );
};

export default HeaderAccordion;
