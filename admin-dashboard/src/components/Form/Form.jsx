
import { useState } from "react";
import styles from "./formstyle.module.css";

const Form = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    specialization: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.specialization ||
      !formData.address
    ) {
      alert("Please fill all fields!");
      return;
    }

    onAddUser(formData); // Send data to parent

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: "",
      specialization: "",
      address: "",
    });
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Phone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Specialization:</label>
            <select name="specialization" value={formData.specialization} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="uiux">UI/UX</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>Add User</button>
      </form>
    </div>
  );
};

export default Form;
