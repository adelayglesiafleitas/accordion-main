import { List } from "../data/info";
import "../styles/ListAccordion.css";
import Plus from "../assets/faq-accordion-main/assets/images/icon-plus.svg";
import Minus from "../assets/faq-accordion-main/assets/images/icon-minus.svg";
import AccordionList from "./AccordionList.jsx";

const ListAccordion = () => {
  return (
    <div className="container-accordion-list">
      {List.map((data) => (
        <div key={data.id}>
          <hr />
          <div className="list-container">
            <AccordionList title1={data.title1} title2={data.title2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAccordion;
