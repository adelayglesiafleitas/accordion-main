import Plus from "../assets/faq-accordion-main/assets/images/icon-plus.svg";
import Minus from "../assets/faq-accordion-main/assets/images/icon-minus.svg";
import "../styles/AccordionList.css";
import { useState } from "react";

const AccordionList = ({ title1, title2 }) => {
  const [activa, setActivate] = useState(false);
  const hadleclipPlus = () => {
    setActivate(!activa);
  };

  const hadleclipMinus = () => {
    setActivate(!activa);
  };
  const hadleclipTitle1 = () => {
    setActivate(!activa);
  };

  return (
    <>
      <div className="container-active-list">
        <p className="Bolt title-list" onClick={hadleclipTitle1}>
          {title1}
        </p>
        {activa ? (
          <img
            style={{ cursor: "pointer" }}
            src={Minus}
            alt="logo de suma"
            onClick={hadleclipMinus}
          />
        ) : (
          <img
            style={{ cursor: "pointer" }}
            src={Plus}
            alt="logo de suma"
            onClick={hadleclipPlus}
          />
        )}
      </div>
      {activa ? <p className="Bolt list_title2">{title2}</p> : ""}
    </>
  );
};

export default AccordionList;
