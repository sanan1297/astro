export type Movie = {
  title: string;
  description: string;
  image: string;
};

interface Props {
  movie: Movie;
}

const Card = ({ movie }: Props) => {
  const { title, description, image } = movie;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transition-transform duration-200 hover:scale-105">
      <div className="shadow-md rounded-t-lg overflow-hidden">
        <img
          src={image}
          alt="Scenic View"
          className="w-full h-auto"
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
