import { PersonType } from "@/types";
import Image from "next/image";

interface PersonProps {
    person: PersonType;
    removeItem: (id: number) => void; // Include removeItem as a prop
}

function Person({ person, removeItem }: PersonProps) {
    return (
        <article className="person">
            <Image
                src={person.image}
                alt={person.name}
                width={75}
                height={75}
                className="img"
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <h4>{person.name}</h4>
                    <p>{person.age} years</p>
                </div>
                <button
                    className="btn"
                    onClick={() => {
                        removeItem(person.id);
                    }}
                >
                    delete
                </button>
            </div>
        </article>
    );
}
export default Person;
