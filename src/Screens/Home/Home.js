import React from 'react';
import { getAllCharacters } from '../../actions/getAllCharacters';
import { CharacterCard } from '../../components/characterCard/characterCard';
import './home.css';
import { Loader } from '../../components/loader/loader';
import { NavBar } from '../../components/nav/navbar';

export const HomeScreen = () => {
  const [charData, setCharData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [limit, setLimit] = React.useState(6);

  const infiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (isLoading) return;
      setIsLoading(true);
      let pageVal = limit;
      pageVal = pageVal + 6;
      setLimit(pageVal);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      infiniteScroll();
    });
  });

  React.useEffect(() => {
    setIsLoading(true);
    getAllCharacters(limit)
      .then((res) => {
        setCharData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [limit]);

  return (
    <>
      <NavBar />
      <div className="container">
        {charData &&
          charData &&
          charData.length > 0 &&
          charData.map((e, i) => {
            return <CharacterCard e={e} key={i} />;
          })}
      </div>
      <div
        className="loader"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        {isLoading && <Loader />}
      </div>
    </>
  );
};
