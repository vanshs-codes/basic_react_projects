import { useLoaderData } from "react-router-dom";

function Github () {
    const data = useLoaderData();

    return (
        <>
            <h1 className="text-white text-2xl"> {data.login} </h1>
            <img src={data.avatar_url} alt="github avatar" />
        </>
    )
}

export default Github;