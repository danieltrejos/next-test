//Tipar props
import { Person } from "./types";

type Props = Person;

export default function PersonCard({ name, age }: Props) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}
