
"use client"

import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Content() {

    return <>
        <div className="container py-5">

            <div className="row justify-content-center">
                <div className="col-lg-6">

                    <h1 className="text-center m-0 mb-3">Country List</h1>

                    <ul className="list-group">
                        <li className="list-group-item">🇨🇦 Canada</li>
                        <li className="list-group-item">🇺🇸 United States</li>
                        <li className="list-group-item">🇧🇷 Brazil</li>
                    </ul>

                    <p className="text-center mt-2 text-muted">TODO: Connect to database</p>

                </div>
            </div>

        </div>
    </>
}