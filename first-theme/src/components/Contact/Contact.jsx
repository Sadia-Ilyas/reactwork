// ContactForm.jsx
import "./contactstyle.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const navigate = useNavigate();

  // Load saved records when component mounts
  useEffect(() => {
    const saved = localStorage.getItem("contactData");
    if (saved) {
      setRecords(JSON.parse(saved));
    }
  }, []);

  // Save records whenever they change
  useEffect(() => {
    localStorage.setItem("contactData", JSON.stringify(records));
  }, [records]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new form data into the array
    setRecords([...records, form]);

    // Reset form fields
    setForm({ name: "", email: "", message: "" });

    // Redirect (optional)
    navigate("/about");
  };


   //  Delete function
  const handleDelete = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
    localStorage.setItem("contactData", JSON.stringify(updated)); // update storage
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setForm({ ...form, image: reader.result }); // save base64 string
                };
                reader.readAsDataURL(file);
              }
            }}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="form-submit-btn">
          Send
        </button>
        
      </form>
    </div>
  );
}

export default ContactForm;
