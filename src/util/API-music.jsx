export const APIMusic = () => {
  fetch('http://localhost:4000/musicAll')
    .then((resp) => resp.json())
    .then((data) => console.log(data));
  return (
    <audio>
      <source src="https://drive.google.com/uc?id=1emzFaAEN7st7btLKdHGNMXfnKNTrtV1g&export=download" type="audio/mp3" />
    </audio>
  );
};
