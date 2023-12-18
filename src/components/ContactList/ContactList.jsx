import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContactAction } from "store/action";
import { List, ListItem, ButtonDelete } from "./ContactList.styled";



export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteContactAction(id));
  };

  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => deleteContact(contact.id)}>Delete</ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
};
 




