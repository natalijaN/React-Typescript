import { CardProps } from "../../types/interfaces";

const Card: React.FC<CardProps> = ({
  image,
  description,
  cost,
  name,
  country,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white my-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">
          Vehicle name: {name}
        </div>
        {image && (
          <div className="mb-4 flex justify-center">
            <div className=" bg-primary-100 p-4">{image}</div>
          </div>
        )}
        <p className="text-gray-700 text-base">{description}</p>
        {country && (
          <p className="text-gray-700 text-base">Country: {country}</p>
        )}
        {cost && <p>Cost: {cost}</p>}
      </div>
    </div>
  );
};

export default Card;
