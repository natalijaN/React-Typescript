import { CarType } from "../types/types";
import BasicCarImage from "../assets/Car.jpg";
import ToyotaCorolla from "../assets/Toyota Corolla.jpg";
import ToyotaHighlanderCar from "../assets/Toyota Highlander.jpg";
import { ICar, BasicCar, EleganceCar, FamilyCar } from "../services/Car";
import Card from "../components/Card/Card";

let car: ICar = new BasicCar();
let carElegance: ICar = new EleganceCar(car);
let carFamily: ICar = new FamilyCar(carElegance);

const cars: Array<CarType> = [
  {
    id: 1,
    image: <img src={BasicCarImage} alt="car" className="object-contain" />,
    title: "The Classic Reinvented",
    description:
      "Select your preferred Model, then confirm your location and budget to browse the vehicles available through nearby retailers. ",
    cost: `${car.getCost()}$`,
  },
  {
    id: 2,
    image: <img src={ToyotaHighlanderCar} alt="car" />,
    title: "Family-Friendly Sophistication",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    cost: `${carFamily.getCost()}$`,
  },
  {
    id: 3,
    image: <img src={ToyotaCorolla} alt="car" />,
    title: "Compact Elegance",
    description:
      "The Corolla has always been a reliable compact car, and the 2024 model elevates this to new heights. It features a more powerful yet efficient engine. ",
    cost: `${carElegance.getCost()}$`,
  },
];

const OurSugestion = () => {
  return (
    <div className=" bg-emerald-50 mx-aut p-48 mt-8">
      <div className="md:my-5 md:w-3/5">
        <h2 className="text-xl">MORE THAN JUST A CAR.</h2>
        <p className="my-5 text-sm">
          Embarking on a journey through Toyota’s innovative spirit, the 2024
          Toyota lineup range promises to redefine automotive excellence. As
          East Coast Toyota unveils these latest offerings, each vehicle stands
          as a testament to the brand’s relentless pursuit of perfection,
          blending advanced technology with refined aesthetics. Prepare to be
          captivated by 2024s Toyota models.
        </p>
      </div>

      <div className="mt-5 items-center justify-between gap-8 md:flex">
        {cars.map((car: CarType) => (
          <Card
            key={car.id}
            image={car.image}
            name={car.title}
            description={car.description}
            cost={car.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default OurSugestion;
