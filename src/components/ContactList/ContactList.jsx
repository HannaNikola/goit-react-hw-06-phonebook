import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delateContactAction } from "store/action";
import { List, ListItem, ButtonDelete } from "./ContactList.styled";




// export const ContactList = ({ contacts, onDeleteContact }) => {
//   const data = useSelector((state) => state.contacts)
//   console.log(data)
//   return (
//     <List>
//       {contacts.map(contact => (
//         <ListItem key={contact.id}>
//           {/* {contact.name}: {contact.number} */}
//           <ButtonDelete onClick={() => onDeleteContact(contact.id)}>Delete</ButtonDelete>
//         </ListItem>
//       ))}
//     </List>
//   );
// }



// const deleteContactBook = (contactId) => {
//   // const dispatch = useDispatch(DELETE_CONTACT('id'));
// //   setContacts(prevState => prevState.filter(contact => contact.id !== contactId));

// }


export const ContactList = () => {

  // const deleteContactBook = (contactId) => {
    
  //   //  setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  // }

  const delateDispatch  = useDispatch();
  const data = useSelector((state) => state.contacts)
  // console.log(data)
 
  return (
    <List>
      {data.map(contact => (
       
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          
          <ButtonDelete onClick={() => delateDispatch(delateContactAction)}>Delete</ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
}

