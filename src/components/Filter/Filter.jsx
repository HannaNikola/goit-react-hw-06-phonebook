import { useDispatch, useSelector } from "react-redux";
import { Title, InputFilter, DivBox } from "./Filter.styled"
import { filterAction } from "store/action";


export const FilterName = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    // const contacts = useSelector((state)=> state.contacts)

    

    const handleFilterChange = (event) => {
        const filterValue = event.target.value.toLowerCase();
        
        dispatch(filterAction(filterValue));

        // const filteredContacts = contacts.filter((contact) =>
        //     contact.name.toLowerCase().includes(filter.toLowerCase())
        // );
    };

    return (
        <DivBox>
            <Title>Find contacts by Name</Title>
            <label htmlFor="filter"> </label>
            <InputFilter
                type="text"
                id="filter"
                value={filter}
                onChange={handleFilterChange}
            />
        </DivBox>
    )


}



// const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
// );
