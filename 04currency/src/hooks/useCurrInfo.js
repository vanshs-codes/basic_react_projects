import { useState, useEffect } from "react";

function useCurrInfo (currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);

    return data;
}

export default useCurrInfo;