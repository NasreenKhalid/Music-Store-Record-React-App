import React from "react";

function Record(props) {
  const date = new Date().toLocaleDateString();
  console.log(date);

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="record">
      <h1>Instrument Title: {props.title}</h1>
      <p>Instrument details: {props.details}</p>
      <p>Created At: {date}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Record;
