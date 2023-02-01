import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';
import { Input, Label, Button } from './Filter.styled';
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
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor="#3f51b5"
      width="500px"
      borderRadius="5px"
      mb="20px"
    >
      <Label htmlFor={filterInputId}>Find contact by name</Label>
      <Box display="flex">
        <Input
          type="text"
          name="filter"
          id={filterInputId}
          value={filter}
          onChange={onFilterChange}
        />
        <Button
          onClick={() => {
            dispatch(filterContact(''));
          }}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};
