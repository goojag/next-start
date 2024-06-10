import React, { useState, useEffect, useTransition } from "react";
import privacy from "@/data/privacy.json";
import { useRouter } from "next/router";

const Accordion = () => {
  const [active, setActive] = useState([]);
  const data = privacy;


  return (
    <section className="accordion">
      <ul>
        {data.map((item, i) => {
          return (
            <li key={i}>
              {item.title_en}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Accordion;
