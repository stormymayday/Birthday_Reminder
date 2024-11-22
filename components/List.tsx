import { PersonType } from "@/types";
import Person from "./Person";

interface ListProps {
    people: PersonType[];
    removeItem: (id: number) => void;
}

function List({ people, removeItem }: ListProps) {
    return (
        <section>
            {people.map((person) => {
                return (
                    <Person
                        key={person.id}
                        person={person}
                        removeItem={removeItem}
                    />
                );
            })}
        </section>
    );
}
export default List;
