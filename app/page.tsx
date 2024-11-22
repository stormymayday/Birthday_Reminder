"use client";

import { data } from "@/app/data.js";
import { useState } from "react";

export default function Home() {
    const [people, setPeople] = useState(data);
    const handleClick = () => {
        setPeople([]);
    };
    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return <div key={id}>{name}</div>;
            })}
            <button type="button" className="btn" onClick={handleClick}>
                clear
            </button>
        </>
    );
}
