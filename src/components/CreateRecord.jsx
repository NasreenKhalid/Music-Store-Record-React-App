import React, { useState } from "react";

function CreateRecord(props) {
  const [record, setRecord] = useState({
    title: "",
    details: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setRecord((prevRecord) => {
      return {
        ...prevRecord,
        [name]: value,
      };
    });
  }

  function submitRecord(e) {
    props.onAdd(record);
    setRecord({
      title: "",
      details: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Enter instrument title.."
          value={record.title}
        />
        <textarea
          onChange={handleChange}
          name="details"
          placeholder="Details of the Instrument"
          value={record.details}
        />
        <button onClick={submitRecord}>Add</button>
      </form>
    </div>
  );
}

export default CreateRecord;
