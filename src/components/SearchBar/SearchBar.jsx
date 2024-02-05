import toast from 'react-hot-toast'
import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleInputChange = e => {
    setQuery(e.target.value);
    
  }
  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
    setQuery('')
  }


  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={handleInputChange} type="text" name="search" autoComplete="off" required autoFocus />
      <button type="submit">Search</button>
    </form>
  );
};
