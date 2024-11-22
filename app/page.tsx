"use client";

import { data } from "@/data";
import List from "@/components/List";
import { useState } from "react";

export default function Home() {
    const [people, setPeople] = useState(data);
    const removeItem = (id: number) => {
        const newPeople = people.filter((person) => {
            return person.id !== id;
        });
        setPeople(newPeople);
    };
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} removeItem={removeItem} />
                {people.length > 0 ? (
                    <button
                        type="button"
                        className="btn btn-block"
                        onClick={() => setPeople([])}
                    >
                        clear all
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-block"
                        onClick={() => setPeople(data)}
                    >
                        get people
                    </button>
                )}
            </section>
        </main>
    );
}
