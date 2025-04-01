import { useForm } from "react-hook-form";
import Store from "../services/Observers/Store";
import Vehicle from "../services/Observers/Vehicle";
import Customer from "../services/Observers/Customer";
import { useState } from "react";

type AddVehicleFormInputs = {
  image: string;
  title: string;
  description: string;
  cost: string;
};

const AddVehicleForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<AddVehicleFormInputs>({});

  const [formData, setFormData] = useState<AddVehicleFormInputs>({
    image: "",
    title: "",
    description: "",
    cost: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(
        formData.image,
        formData.title,
        formData.description,
        formData.cost
      );
      const store = new Store();
      const vehicle = new Vehicle();
      const customer = new Customer();

      store.addObserver(vehicle);
      store.addObserver(customer);

      store.newProduct({
        image: formData.image,
        title: formData.title,
        description: formData.description,
        cost: Number(formData.cost),
      });
    } catch (error) {
      console.error(error);
    }
    setFormData({
      image: "",
      title: "",
      description: "",
      cost: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-emerald-50 mx-aut p-48 mt-8">
      <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Add Vehicle
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                type="text"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Image"
                value={formData.image}
                {...register("image")}
                onChange={handleChange}
              />
              {errors.image ? (
                <p className="text-white">{errors.image.message}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
                {...register("title")}
                onChange={handleChange}
              />
              {errors.title ? (
                <p className="text-white">{errors.title.message}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="text"
                id="Description"
                value={formData.description}
                placeholder="Description"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("description")}
                onChange={handleChange}
              />
              {errors.description ? (
                <p className="text-white">{errors.description.message}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label
                htmlFor="cost"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cost
              </label>
              <input
                type="number"
                id="cost"
                value={formData.cost}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cost"
                {...register("cost")}
                onChange={handleChange}
              />
              {errors.title ? (
                <p className="text-white">{errors.title.message}</p>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="rounded-md bg-emerald-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleForm;
