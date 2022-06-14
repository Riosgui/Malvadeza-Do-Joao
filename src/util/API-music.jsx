export const APIMusic = async () => {
  const response = await fetch('https://malvadeza-do-joao.herokuapp.com/musicAll');
  const musicJson = await response.json();
  return musicJson;
};
