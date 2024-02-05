////////////////////////////
import { useEffect, useState } from 'react';
////////////////////////////
import { fetchImages } from '../api';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
////////////////////////////

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
  
    setLoading(true);
    setError(false);

    async function fetchCurrentImages() {
      try {
        const fetchedData = await fetchImages(query, page);
        // console.log(fetchedData)
        setImages(prevImages => [...prevImages, ...fetchedData]);
        // setTotal(total_results)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCurrentImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const searchImages = async newQvery => {
    
    setQuery(newQvery);
    setPage(1);
    setTotal(0);
    setError(null);
    setImages([]);
  };

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      <ImageGallery items={images} />
      {/* {console.log(images)} */}
      {/* {console.log(error)}
      {console.log(loading)} */}
      {images.length > 0 && !loading && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
};
