import PersonCard from "./PersonCard";
import { Person } from "./types";

type Props = {
  personList: Person[];
};

export default function PersonList({ personList }: Props) {
  return (
    <div>
      {personList.map((person, index) => (
        <PersonCard name={person.name} age={person.age} key={index} />
      ))}
    </div>
  );
}
