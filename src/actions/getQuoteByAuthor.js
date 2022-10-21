// quote?author=Jesse+Pinkman

export const getQuoteByAuthor = (author) => {
  return fetch(`https://www.breakingbadapi.com/api/quote?author=${author}`)
    .then((res) => res.json())
    .catch((err) => err);
};
