import image1 from "../images/card-image1.png";
import image2 from "../images/card-image2.png";
import image3 from "../images/card-image3.png";
import image4 from "../images/exp2.jpg";
import image5 from "../images/exp3.jpg";
import image6 from "../images/exp4.jpg";

import nov1 from "../images/novedades1.png";
import nov2 from "../images/novedades2.jpg";
import nov3 from "../images/novedades3.jpg";

const experiencesCardsArray = [
  {
    id: 1,
    image: image1,
    rating: 5.0,
    location: "USA",
    description: "Lecciones para la vida con Katie Sepht",
    price: 136,
    openSpots: 0,
  },
  {
    id: 2,
    image: image2,
    rating: 5.0,
    location: "Online",
    description: "Aprende fotografía de bodas",
    price: 125,
    openSpots: 5,
  },
  {
    id: 3,
    image: image3,
    rating: 4.8,
    location: "Estados Unidos",
    description: "Grupo de Mountain Bike",
    price: 50,
    openSpots: 10,
  },
  {
    id: 4,
    image: image4,
    rating: 5.0,
    location: "Estados Unidos",
    description: "Descubre la soleada Fort Lauderdale",
    price: 24,
    openSpots: 0,
  },
  {
    id: 5,
    image: image5,
    rating: 5.0,
    location: "Italia",
    description: "Planifica una aventura en Venecia con Giulia",
    price: 30,
    openSpots: 5,
  },
  {
    id: 6,
    image: image6,
    rating: 4.96,
    location: "Mexíco",
    description: "Tu viaje a medida por Ciudad de México",
    price: 2,
    openSpots: 10,
  },
];

export const novedadesArray = [{
  id: 1,
  image: nov1,
  titulo: "Más populares en todo el mundo"
}, {
  id: 2,
  image: nov2,
  titulo: "Ideales para fomentarel espíritu de equipo"
},
{
  id: 3,
  image: nov3,
  titulo: "Diversión para toda la família"
}
]

export default experiencesCardsArray;
