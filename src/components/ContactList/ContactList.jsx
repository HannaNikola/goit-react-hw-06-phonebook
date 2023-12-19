import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContactAction } from "store/action";
import { List, ListItem, ButtonDelete } from "./ContactList.styled";



export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteContactAction(id));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )
  return (
    <List>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => deleteContact(contact.id)}>Delete</ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
};
 




