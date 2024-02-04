import axios from 'axios';
////////////////////////////
import { useEffect, useState, useId } from 'react';
////////////////////////////
import { fetchImages } from '../api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery'
////////////////////////////

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
        // if (query === '') return;

    {console.log(query)}
    async function fetch() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImages(query.split('/'[1], page));
        setImages(prevImages => [...prevImages, ...fetchedData]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const searchImages = async newQuery => {
    const id = useId()
    setQuery(`${id}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      <ImageGallery items={images} />
      {console.log(images)}
      {/* {console.log(error)}
      {console.log(loading)} */}
      {images.length > 0 && !loading && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
};
