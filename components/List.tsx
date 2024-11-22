import { PersonType } from "@/types";
import Person from "./Person";

interface ListProps {
    people: PersonType[];
}

function List({ people }: ListProps) {
    return (
        <section>
            {people.map((person) => {
                return <Person key={person.id} {...person} />;
            })}
        </section>
    );
}
export default List;
