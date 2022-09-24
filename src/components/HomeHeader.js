import { useState } from 'react';

export default function HomeHeader() {
  const [query, setQuery] = useState (``);
  const [artworks, setArtworks] = useState([]);
  console.log('artworks', artworks)

  
const q = {
    query: `query GetArtworksFromYears($yearFrom: String, $yearTo: String) {
          getArtworksFromYears(yearFrom: $yearFrom, yearTo: $yearTo) {
          author 
          title
         }}`,
    values: `{
        'yearFrom': '1969',
        'yearTo': '2000'
      }`
  };

    async function sendRequest() {
  const data = JSON.stringify(q);
  const response = await fetch(
    'https://damp-atoll-46195.herokuapp.com/graphql',
    {
      method: 'post',
      body: data,
      headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'User-Agent': 'Node',
      },
    }
  );
  const json = await response.json();
  setArtworks(json.data.getArtworksFromYears);
  }

  
  


  
    const submitForm = (event) => {
        event.preventDefault();
          const query = event.target.value;
        sendRequest();
    }


  return (
    <div className='home-header'>
      <h2>Witaj w miejscu gdzie sztuka jest na wyciągnięcie ręki</h2>
      <p>Dziel się tysiącami dzieł sztuki bez granic i ograniczeń licencyjnych. Odczuwaj i dziel się emocjami. Zainspiruj siebie i innych.</p>
      <h3>Odkryj naszą kolekcję</h3>
      <p className="description">Użyj słowa klucz albo tagów aby przeszukać ponad 10000 + dzieł sztuki</p>
      <form onSubmit={submitForm} className="search-bar">
        <div className='search-bar-inner'>
          <svg className="magnifier-big" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
        <input 
        type="text" 
        className='search-input-big'
        aria-label="wyszukiwarka obrazów"
        aria-placeholder="Użyj słowa klucz aby przeszukać 100000 + dzieł sztuki"
        placeholder="Użyj słowa klucz aby przeszukać 100000 + dzieł sztuki"
        value={query} 
        onChange={element => setQuery(element.target.value)}/>
        </div>
        <select className="search-filter" aria-label="przefiltruj wyniki wyszukiwania">
          <option>Filtry</option>
          <option>artyści</option>
          <option>style</option>
          <option>techniki</option>
        </select>
      </form>
      <div className='buttons-search'>
        <button aria-label="przycisk katalogu 'Natura'">Natura</button>
        <button aria-label="przycisk katalogu 'Performans'">Performans</button>
        <button aria-label="przycisk katalogu 'Feminizm'">Feminizm</button>
        <button aria-label="przycisk katalogu 'Ekologia'">Ekologia</button>
        <button aria-label="przycisk katalogu 'Plakat'">Plakat</button>
      </div>
      <div className='print' aria-label="wyniki wyszukiwania">
        {artworks.map((item, index) => {
          return (
              <div key={index} className='work'>
                  <p className='tittle'>{item.title}</p>
                  <p className='items'>{item.author}</p>
              </div>
          )
        })}
       </div>
    </div>
  )
}
