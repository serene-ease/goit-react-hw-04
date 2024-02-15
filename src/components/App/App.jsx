///////////////////////////
import { useEffect, useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
////////////////////////////
import { fetchImages } from '../../api';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Text } from '../Text/Text'
import { Loader } from '../Loader/Loader';
////////////////////////////
import style from './App.module.css'
////////////////////////////

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!query) return;
  
    setLoading(true);
    setError(false);

    async function fetchCurrentImages() {
      try {
        const fetchedData = await fetchImages(query.split('/')[1], page);
        console.log('fetchedData',fetchedData)
        setImages(prevImages => [...prevImages, ...fetchedData.results]);
        setTotal(() => setTotal(fetchedData.total));
        {console.log('fethed total_pages ', total);}
        // {console.log('fetchedData.total_pages ', fetchedData.total_pages);}
        
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
      {console.log('after async ',total);}
    }
    fetchCurrentImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = async newQvery => {
    console.log('On Press', total)
    if (!total) {
      toast.error('Oops, there are not data by this query!', {
        duration: 2000,
        position: 'top-right',
      });
    }
    const qId = nanoid(5);
    setQuery(`${qId}/${newQvery}`);
    setPage(1);
    setTotal(0);
    setError(null);
    setImages([]);
  };
  {console.log('total:',total);}
  // {console.log('images.length:', images.length);}

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      
      {!query && loading && <Loader />}
      {console.log('Toaster', total)}
      {!total && <Toaster position="top-right" reverseOrder={false} />}
      {error && <Text>{'Wrong request, we sorry'}</Text>}     
      {images.length > 0 && <ImageGallery items={images} />} 
      {images.length > 0 && !loading && images.length !== total &&<button className={style.button} onClick={handleLoadMore}>Load more</button>}
      
    </div>
  );
};
