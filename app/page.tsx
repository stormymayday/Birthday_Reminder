"use client";

import { data } from "@/data";
import List from "@/components/List";
import { useState } from "react";

export default function Home() {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <button
                    type="button"
                    className="btn btn-block"
                    onClick={() => setPeople([])}
                >
                    clear all
                </button>
            </section>
        </main>
    );
}
