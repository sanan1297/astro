import Card, { type Movie } from "./Card";

interface Props {
  movies: Movie[];
}

const Container = ({ movies }: Props) => (

<div className="
    grid gap-5 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
    xl:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] 
    sm:max-w-2xl 
    md:max-w-3xl 
    lg:max-w-6xl
    xl:max-w-7xl
    max-w-md
    ">
    {movies.map((movie, index) => (
      <Card key={index} movie={movie} />
    ))}
  </div>

);

export default Container;
