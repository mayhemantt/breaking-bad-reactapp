import React from 'react';
import { getAllCharacters } from '../../actions/getAllCharacters';
import { CharacterCard } from '../../components/characterCard/characterCard';
import './home.css';
import { Loader } from '../../components/loader/loader';
import { NavBar } from '../../components/nav/navbar';

export const HomeScreen = () => {
  const [charData, setCharData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);

  const [page, setPage] = React.useState(0);

  const observer = React.useRef();
  const lastCharRef = React.useCallback(
    (node) => {
      console.log('here---');
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((p) => p + 6);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  console.log('Hoiii----');

  React.useEffect(() => {
    if (!isLoading && hasMore) {
      setIsLoading(true);
      getAllCharacters(page)
        .then((res) => {
          if (res.length == 0) {
            setHasMore(false);
          }
          setCharData((prev) => [...prev, ...res]);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    }
  }, [page]);

  return (
    <>
      <NavBar />
      <div className="container">
        {charData &&
          charData &&
          charData.length > 0 &&
          charData.map((e, i) => {
            if (charData.length === i + 1) {
              return (
                <div className="card" ref={lastCharRef} key={i}>
                  <CharacterCard e={e} />
                </div>
              );
            } else {
              return (
                <div className="card" key={i}>
                  <CharacterCard e={e} />
                </div>
              );
            }
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

// return (
//   <div>
//     {charData &&
//       charData.length > 0 &&
//       charData.map((e, i) => {
//         return <div key={i}>{e.name}</div>;
//       })}
//   </div>
// );
