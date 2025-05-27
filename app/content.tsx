
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_VITE_SUPABASE_URL, process.env.NEXT_PUBLIC_VITE_SUPABASE_ANON_KEY);

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from("countries").select();
        setCountries(data);
    }

    return (
        <>
            <div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="text-center m-0 mb-3">Country List</h1>
                            <ul className="list-group">
                                {countries.map((countries) => (
                                    <li className="list-group-item" key={countries.name}>{countries.emoji} {countries.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;