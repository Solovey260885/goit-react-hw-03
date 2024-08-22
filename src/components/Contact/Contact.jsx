import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.contactText}>
        <span>
          <FaUser className={css.contactIcon} />
          {name}
        </span>
        <span>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </span>
      </div>
      <button onClick={() => onDelete(id)} className={css.btn}>
        Delete
      </button>
    </div>
  );
}
