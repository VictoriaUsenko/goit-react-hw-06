import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
}
