export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export const getDog = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
}