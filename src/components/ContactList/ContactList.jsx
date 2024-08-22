import Contact from "../Contact/Contact";
import css from "./Contactlist.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact data={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
