export const getCharacter = (charId) => {
  return fetch(`https://www.breakingbadapi.com/api/characters/${charId}`)
    .then((res) => res.json())
    .catch((err) => err);
};
