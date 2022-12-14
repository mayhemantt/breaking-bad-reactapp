import React from 'react';
import { Link } from 'react-router-dom';
import './charCard.css';

export const CharacterCard = ({ e }) => {
  return (
    <Link
      to={`character/${e.char_id}`}
      style={{
        color: 'inherit',
        textDecoration: 'inherit',
        position: 'relative',
      }}>
      <div
        className="card__status"
        style={{
          backgroundColor:
            e.status === 'Presumed dead'
              ? 'orange'
              : e.status === 'Alive'
              ? 'green'
              : 'red',
        }}>
        {e.status}
      </div>

      <div
        className="card__nickname"
        style={{
          backgroundColor:
            e.status === 'Presumed dead'
              ? 'orange'
              : e.status === 'Alive'
              ? 'green'
              : 'red',
        }}>
        {e.nickname}
      </div>
      <div className="card__image">
        <img
          src={e.img}
          alt={e.img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              'https://m.media-amazon.com/images/M/MV5BMWY1MGExNTAtNTNjMy00ZTIyLTg1NmQtMTM2MjViNzYwYzgxXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg';
          }}
        />
      </div>
      <div className="card__copy">
        <h1>{e.name}</h1>
        <h2>{e.birthday}</h2>
        <h2>Occupation</h2>
        <div className="card__occupation">
          {e.occupation &&
            e.occupation.length > 0 &&
            e.occupation.map((t, i) => {
              return <p key={i}>{t}</p>;
            })}
        </div>
      </div>
    </Link>
  );
};
