import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Record from "./Record";
import CreateRecord from "./CreateRecord";

function App() {
  const [records, setRecords] = useState([]);

  function addRecord(newRecord) {
    setRecords((prevRecords) => {
      return [...prevRecords, newRecord];
    });
  }

  function deleteRecord(id) {
    setRecords((prevRecords) => {
      return prevRecords.filter((record, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateRecord onAdd={addRecord} />
      {records.map((recordItem, index) => {
        return (
          <Record
            id={index}
            key={index}
            title={recordItem.title}
            details={recordItem.details}
            onDelete={deleteRecord}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
