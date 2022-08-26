import React from "react";
const Api = () => {
    const myApi = () => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=goma&appid=f5586608c2d3ba7b09e56baef9ba3d46&units=metric')
            .then(response => response.json())
            .then(json => console.log(json.list))

    }
    console.log(myApi())
    return (
        <div>
            <h1>Console</h1>
        </div>

    )
}

export default Api;