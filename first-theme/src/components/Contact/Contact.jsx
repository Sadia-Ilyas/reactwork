// ContactForm.jsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./contactstyle.module.css";   // CSS Module
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  // Zod validation schema
  const schema = z.object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .regex(/^[A-Za-z\s]+$/, "First name cannot contain numbers"),

    mailAddress: z.string().email("Enter valid mail like: example@mail.com"),

    phoneNumber: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .max(15, { message: "Phone number must not exceed 15 digits" })
      .regex(/^[0-9]+$/, { message: "Only digits are allowed" }),
    qualification: z.enum(
      ["Matric", "Intermediate", "Bachelors", "Masters", "PhD"],
      { message: "Please select a qualification" }
    ),

    message: z
      .string()
      .min(5, "Message must be at least 5 characters long")
      .max(500, "Message cannot exceed 500 characters"),

    image: z.any().refine((files) => files?.length > 0, "Image is required"),
  });

  // React Hook Form with Zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Load saved records
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

  // Form submit handler
  const onSubmit = (data) => {
    const file = data.image[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const newRecord = {
        ...data,
        image: reader.result, // Base64 string
      };
      setRecords((prev) => [...prev, newRecord]);

      reset(); // reset form
      navigate("/about");
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
        {/* Name */}
        <div className={styles["form-group"]}>
          <label>Name</label>
          <input
            type="text"
            {...register("firstName")}
            className={errors.firstName ? styles["error-input"] : ""}
            placeholder="Enter your Name"
          />
          {errors.firstName && (
            <span className={styles["error-text"]}>
              {errors.firstName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className={styles["form-group"]}>
          <label>Email</label>
          <input
            type="email"
            {...register("mailAddress")}
            className={errors.mailAddress ? styles["error-input"] : ""}
            placeholder="Enter your Email"
          />
          {errors.mailAddress && (
            <span className={styles["error-text"]}>
              {errors.mailAddress.message}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className={styles["form-group"]}>
          <label>Phone Number</label>
          <input
            type="tel"
            {...register("phoneNumber")}
            className={errors.phoneNumber ? styles["error-input"] : ""}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && (
            <span className={styles["error-text"]}>
              {errors.phoneNumber.message}
            </span>
          )}
        </div>

        {/* Qualification */}
        <div className={styles["form-group"]}>
          <label>Qualification</label>
          <select
            {...register("qualification")}
            className={
              errors.qualification
                ? `${styles["error-input"]} ${styles["select-input"]}`
                : styles["select-input"]
            }
          >
            <option value="">-- Select Qualification --</option>
            <option value="Matric">Matric</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
          {errors.qualification && (
            <span className={styles["error-text"]}>
              {errors.qualification.message}
            </span>
          )}
        </div>

        {/* Image */}
        <div className={styles["form-group"]}>
          <label>Image</label>
          <label htmlFor="imageUpload" className={styles["custom-file-upload"]}>
            Choose Image
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            {...register("image")}
            className={errors.image ? styles["error-input"] : ""}
          />
          {errors.image && (
            <span className={styles["error-text"]}>
              {errors.image.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div className={styles["form-group"]}>
          <label>Message</label>
          <textarea
            {...register("message")}
            className={errors.message ? styles["error-input"] : ""}
            placeholder="Enter your Message"
          ></textarea>
          {errors.message && (
            <span className={styles["error-text"]}>
              {errors.message.message}
            </span>
          )}
        </div>

        <button type="submit" className={styles["form-submit-btn"]}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
