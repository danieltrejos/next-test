//Tipar Hooks
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Person } from "./types";

export default function PersonWithHook() {
  const [person, setPerson] = useState<Person>({
    name: "Alberto",
    age: 16,
  });

  const [inputValue, setinputValue] = useState<string>("");

  const handleClick = () => {
    const newPerson = {
      name: person.name,
      age: person.age + 1,
    };
    setPerson(newPerson);
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setinputValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(event.target);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>{person.name}</h1>
        <p>{person.age}</p>
        <input onChange={handleChange} />
        <button
          className="bg-slate-700 text-white p-5 rounded-md"
          onClick={handleClick}
        >
          Incrementar edad
        </button>
        <input
          type="submit"
          value="submit"
          className="bg-slate-700 text-white p-5 rounded-md"
        />
      </form>
    </div>
  );
}
