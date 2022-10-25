import React from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../actions/getCharacterById';
import { getQuoteByAuthor } from '../../actions/getQuoteByAuthor';
import './character.css';
import { Loader } from '../../components/loader/loader';
import { NavBar } from '../../components/nav/navbar';

export const CharacterScreen = () => {
  const { id } = useParams();
  const [charData, setCharData] = React.useState(null);
  const [charQuotes, setCharQuotes] = React.useState([]);
  const [loadingChar, setLoadingChar] = React.useState(false);
  const [loadingQuote, setLoadingQuote] = React.useState(false);

  React.useEffect(() => {
    setLoadingChar(true);
    setLoadingQuote(true);
    getCharacter(id).then((res) => {
      setCharData(res[0]);
      console.log(res[0]);
      setLoadingChar(false);
      getQuoteByAuthor(res[0].name).then((data) => {
        setCharQuotes(data);
        setLoadingQuote(false);
      });
    });
  }, []);

  return (
    <div>
      <NavBar />
      {!loadingChar && charData && (
        <div className="wrapper">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img">
              <img
                src={charData.img}
                alt="profile card"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    'https://m.media-amazon.com/images/M/MV5BMWY1MGExNTAtNTNjMy00ZTIyLTg1NmQtMTM2MjViNzYwYzgxXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg';
                }}
              />
            </div>

            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">{charData.name}</div>
              <div className="profile-card__txt">
                Nickname <strong>{charData.nickname}</strong>
              </div>
              <div className="profile-card-loc">
                <span className="profile-card-loc__txt">
                  Birthday: {charData.birthday || ' Who Knows? '}
                </span>
              </div>
              <div className="profile-card-inf__item">
                <div className="profile-card-inf__title">
                  Quotes By {charData.name}
                </div>

                <div className="quote__box">
                  {charQuotes &&
                    charQuotes.map((e, i) => {
                      return (
                        <div className="quote" key={i}>
                          <div className="profile-card-inf__txt ">
                            {e.quote}
                          </div>
                        </div>
                      );
                    })}
                  {!loadingQuote && charQuotes.length === 0 && (
                    <div className="profile-card-inf__txt">
                      No Quote By This Character
                    </div>
                  )}
                </div>
                {loadingQuote && (
                  <div style={{ position: 'relative' }}>
                    <Loader />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="loader"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        {loadingChar && <Loader />}
      </div>
    </div>
  );
};

{
  /* <div>
      {charData && <div>{charData.name}</div>}
      {charQuotes &&
        charQuotes.length > 0 &&
        charQuotes.map((e, i) => {
          return <div key={i}>{e.quote}</div>;
        })}
    </div> */
}
