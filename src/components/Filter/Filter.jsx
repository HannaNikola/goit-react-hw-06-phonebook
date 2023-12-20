import { useDispatch, useSelector } from "react-redux";
import { Title, InputFilter, DivBox } from "./Filter.styled"
// import { filterAction } from "store/action";
import { FILTER_CONTACT } from "store/reducer";


export const FilterName = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    
        const handleFilterChange = (event) => {
            const filterValue = event.target.value.toLowerCase();
            
        
            dispatch(FILTER_CONTACT(filterValue));

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