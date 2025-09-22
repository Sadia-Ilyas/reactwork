import { useEffect, useState } from "react";
import "./aboutstyle.css";

function ShowContact() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("contactData");
    if (saved) {
      setRecords(JSON.parse(saved)); // parse into array
    }
  }, []);
  //  Define the delete function here
  const handleDelete = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
    localStorage.setItem("contactData", JSON.stringify(updated));
  };

  return (
    <div>
      {records.length > 0 ? (
        <div className="about-all">
          {records.map((item, index) => (
            <div className="info-box" key={index}>
              <h3>Submitted Contact Data</h3>
              <button
                onClick={() => handleDelete(index)}
                type="submit"
                className="form-dlt-btn"
              >Delete</button>
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Message:</strong> {item.message}
              </p>

              <img src={item.image} alt={item.name} width="150" />
            </div>
          ))}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default ShowContact;
