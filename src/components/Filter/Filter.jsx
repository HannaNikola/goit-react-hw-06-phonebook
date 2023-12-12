import { Title, InputFilter, DivBox } from "./Filter.styled"
// import { useState } from "react";


// const [filter, setFilter] = useState('')
// const handleFilterChange = event => {
//     setFilter(event.target.value.toLowerCase());

// }
// const filteredContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter)
// );


export const Filter = ({ filter, onFilterChange }) => {
    return (
        <DivBox>
            <Title>Find contacts by Name</Title>
            <label htmlFor="filter"> </label>
            <InputFilter
                type="text"
                id="filter"
                value={filter}
                onChange={onFilterChange}
            />
        </DivBox>
    )


}
