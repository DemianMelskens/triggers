import { useState } from "react";
import { For } from "../components/for";
import { Lorem } from "../components/lorem";
import { Waypoint } from "../waypoints/waypoint";

export function Home() {
    const [count, setCount] = useState(0);

    const loadMore = () => setCount(c => c + 3);

    return (
        <section className="container">
            <For amount={count}>
                <Lorem />
            </For>
            <Waypoint onScreenEnter={loadMore} onScreenLeave={() => console.log('left screen')} options={{ rootMargin: '300px' }}>
                <button onClick={loadMore}>click here to load more...</button>
            </Waypoint>
        </section>
    );
}