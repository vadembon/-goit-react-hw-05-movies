import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { Form, Input, Button } from './SearchBar.styled';
import { useState } from 'react';

export const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSearchForm = evt => {
    evt.preventDefault();
    const query = value.trim();
    if (query === '') {
      toast.info('Please enter a name!');
    }
    if (query) {
      onSearch(query);
      setValue('');
    }
  };
  return (
    <Form onSubmit={handleSearchForm}>
      <Input
        value={value}
        placeholder="Search for movies"
        onChange={evt => setValue(evt.target.value)}
      />
      <Button type="submit">
        {' '}
        <BsSearch size={20} />
      </Button>
    </Form>
  );
};
