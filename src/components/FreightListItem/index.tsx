import React from "react";
import { Freighters } from "../../data/types";
import { FreighterListElement } from "./styles";

interface Props {
  onClick: (id: string) => void;
}

type CombinedProps = Freighters & Props;

const FreightListItem: React.FC<CombinedProps> = ({
  id,
  base,
  destinations,
  cbm,
  transport_type,
  onClick,
}) => {
  return (
    <FreighterListElement onClick={() => onClick(id)}>
      <div>
        <b>Ships From:</b> <br />
        {base.map((b, index) => (
          <>
            <span key={index}>{b}</span>
            <br />
          </>
        ))}
      </div>
      <div>
        <b>Ships To:</b>
        <br />
        {destinations.map((d, index) => (
          <>
            <span key={index}>{d}</span>
            <br />
          </>
        ))}
      </div>
      <div>
        <b>CBM</b>
        <br />
        {cbm} &#13221;
      </div>
      <div>
        <b>Transport Type</b>
        <br />
        {transport_type.map((t, index) => (
          <>
            <span key={index}>{t}</span>
            <br />
          </>
        ))}
      </div>
    </FreighterListElement>
  );
};

export default FreightListItem;
