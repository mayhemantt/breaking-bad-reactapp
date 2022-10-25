export const getAllCharacters = (page) => {
  return fetch(
    `https://www.breakingbadapi.com/api/characters?limit=6&offset=${page}`
  )
    .then((res) => res.json())
    .catch((err) => err);
};

// https://www.breakingbadapi.com/api/characters?limit=6&offset=0
