import { useEffect, useState } from "react";
import styles from "./aboutstyle.module.css";

function ShowContact() {
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("contactData");
    if (saved) {
      setRecords(JSON.parse(saved)); // parse into array
    }
  }, []);

  const handleDelete = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
    localStorage.setItem("contactData", JSON.stringify(updated));
  };

  return (
    <div>
      {/* Search Input */}

      <div className={styles["searchContainer"]}>
        <h3>Filter Your Form</h3>
        <input
          type="text"
          placeholder="Search by First Name..."
          value={search}
          onChange={(e) => {
            // console.log(e.target.value);
            setSearch(e.target.value);
          }}
          className={styles.searchBox}
        />
      </div>

      {records.length > 0 ? (
        <div className={styles["about-all"]}>
          {records.map((item, index) => {
            const name = item?.firstName || "";
            const isMatch = name.toLowerCase().includes(search.toLowerCase());

            return (
              <div
                key={index}
                className={`${styles["info-box"]} ${
                  isMatch && search ? styles.highlight : ""
                }`}
              >
                <h3>Submitted Contact Data</h3>
                <button
                  onClick={() => handleDelete(index)}
                  type="button"
                  className={styles["form-dlt-btn"]}
                >
                  Delete
                </button>

                <p>
                  <strong>Name:</strong> {item.firstName}
                </p>
                <p>
                  <strong>Email:</strong> {item.mailAddress}
                </p>
                <p>
                  <strong>Phone:</strong> {item.phoneNumber}
                </p>
                <p>
                  <strong>Message:</strong> {item.message}
                </p>

                {item.image && (
                  <img src={item.image} alt={item.name} width="150" />
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default ShowContact;
