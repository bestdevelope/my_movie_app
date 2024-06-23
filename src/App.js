import React from "react";
import Movie from "./Movie";

const LivreFav =[
  {
    id: "1 ",
    name: "Demien",
    img: "https://www.livredepoche.com/sites/default/files/images/livres/couv/9782253022916-001-T.jpeg"
  },
  { id: "2 ",
    name: "La vie est belle",
    img: " https://actualitte.com/uploads/images/9782070406234-475x500-1-61eaf7575e8ec789153864.jpg"
  },
  { id: "3 ",
    name: "Ciel blue",
    img: "https://www.livredepoche.com/sites/default/files/images/livres/couv/9782253934103-001-T.jpeg "
  },
  { id: "4 ",
    name: "Totoro",
    img: "https://m.media-amazon.com/images/I/81C62N5woGL._SY522_.jpg "
  },
  { id: "5",
    name: "Chateu dans le ciel",
    img: "https://cdn.cultura.com/media/pim/TITELIVE/10_9782344033739_1_75.jpg"
  },
]

function Livre({name, images}) {
  return (
    <div>
      <h2>Titre de livre: {name}</h2>
      <img src={images} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Livre favorite</h1>
      {LivreFav.map(favorite => (<Livre key={favorite.id} name = {favorite.name} images = {favorite.img}/>))}
    </div>
  );
}

export default App;
