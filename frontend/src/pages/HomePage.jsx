import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';
import { fetchCardsData } from '../libs/getAllCards';
import { fetchCardByTitle } from '../libs/getCard';
import Loader from './Loader';
import Error from './Error';

const HomePage = () => {
  const [cardsData, setCardsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCardsData();
        setCardsData(data);
        setFilteredCards(data); // Initialize filtered cards with all cards
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = cardsData.filter(card =>
      card.title.toLowerCase().includes(term)
    );
    setFilteredCards(filtered);
  };

  const handleCardClick = async (id) => {
    try {
      setLoading(true);
      const card = await fetchCardByTitle(id);
      console.log('Card Details:', card); // You can display these details as needed
      // Here you could set the state to show the card details, redirect, or any other logic
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (error) {
    return (
      <Error error={error}/>
    );
  }

  return (
    <div>
      <Header />
      <section className="relative bg-[#DADBF0] py-10 px-4 h-72">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-8">
            How can we help?
          </h1>
          <div className="relative justify-around">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-3 pl-4 pr-16 text-base md:text-lg border border-gray-300 rounded-full shadow-md focus:outline-none"
            />
            <button
              onClick={handleCardClick}
              className="absolute inset-y-0 right-1 mt-1 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white border-none rounded-full hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-8 sm:p-8 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card._id)}
              className="cursor-pointer"
            >
              <Card
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
