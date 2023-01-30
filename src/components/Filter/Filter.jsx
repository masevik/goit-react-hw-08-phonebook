import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';
import { Input, Label } from './Filter.styled';
import { Box } from 'components/Box';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterInputId = nanoid();

  const onFilterChange = event => {
    const filter = event.currentTarget.value.toLowerCase();
    dispatch(filterContact(filter));
  };

  return (
    <Box display="flex" flexDirection="column">
      <Label htmlFor={filterInputId}>Find contact by name</Label>
      <Input
        type="text"
        name="filter"
        id={filterInputId}
        value={filter}
        onChange={onFilterChange}
      />
    </Box>
  );
};
