import React, { useEffect, useState } from "react";
import axiosInstance from "../services/AxiosInstance";
import { FixedSizeList as List } from "react-window";

const height = window.innerHeight - 300;
const width = 0.8 * window.innerWidth;

const Items: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axiosInstance.get(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json",
          {
            timeout: 5000,
          }
        );
        setData(response.data.Results);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => {
    return (
      <div
        data-testid={`vehicle-card-${index}`}
        style={style}
        className="flex border-2 border-solid rounded overflow-hidden shadow-lg bg-white my-2"
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">
            Vehicle name: {data[index].Name}
          </div>
          <p className="text-gray-700 text-base">
            Vehicle Type: {data[index].VehicleType}
          </p>
          <p className="text-gray-700 text-base">
            Country: {data[index].Country}
          </p>
          <p className="text-gray-700 text-base">{index}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-col items-center justify-center bg-emerald-50 mx-aut p-48">
      <h1 className="flex justify-center mb-4 basis-3/5 font-montserrat text-3xl font-bold">
        Our Vehicles
      </h1>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {data && (
        <List
          height={height}
          itemCount={data.length}
          itemSize={200}
          width={width}
        >
          {Row}
        </List>
      )}
    </div>
  );
};

export default Items;
