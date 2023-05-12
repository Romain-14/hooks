import React, { useEffect, useState } from "react";
import User from "./User";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await (await fetch("https://dummyjson.com/products")).json();

            setData(res.products);
        }

        fetchData();
    }, []);

    return (
        <>
            <User />
            {!data ? (
                <p>LOADING</p>
            ) : (
                data.map((d, i) => {
                   
                    return (
                        <figure key={i}>
                            <figcaption>{d.title}</figcaption>
                            <img src={d.images[0]} alt="" />
                        </figure>
                    );
                })
            )}
        </>
    );
}
export default App;
