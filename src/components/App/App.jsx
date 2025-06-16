import { useState, useEffect } from 'react';
import './App.css'
import toast from 'react-hot-toast'

import { fetchImages } from "../../images-api";

import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';


function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
  if (!query) return;

  async function fetchData() {
    try {
      setLoading(true);
      const data = await fetchImages(query, page);
      setImages((prev) => (page === 1 ? data.images : [...prev, ...data.images]));
      setTotalPages(data.total);
      setError(false);
    } catch {
      setError(true);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, [query, page]);
  const handelSearch = (newQuery) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    } if (newQuery === query) {
      toast("You're already see this search!");
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => setPage((prev) => prev + 1);

  return (
    <div>
      <SearchBar onSearch={handelSearch} />
      {error && <ErrorMessage message="Try again" />}
      {images.length > 0 && <ImageGallery items={images} onImageClick={openModal} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && page < totalPages && (<LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        seletedImage={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
}

export default App
