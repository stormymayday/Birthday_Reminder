import { PersonType } from "@/types";
import Image from "next/image";

function Person({ name, age, image }: PersonType) {
    return (
        <article className="person">
            <Image
                src={image}
                alt={name}
                width={75}
                height={75}
                className="img"
            />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </article>
    );
}
export default Person;
