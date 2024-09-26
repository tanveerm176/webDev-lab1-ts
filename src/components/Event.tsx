import React from "react";

interface EventProps {
  color: string;
  event: string;
  location?: string;
}
const Event: React.FC<EventProps> = (props) => {
  return (
    <td className={"Event " + props.color}>
      <h5>{props.event}</h5>
      <h6>{props.location}</h6>
    </td>
  );
};

export default Event;
