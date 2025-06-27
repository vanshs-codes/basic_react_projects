import { useParams } from "react-router-dom";

export default function User () {
    const {userId} = useParams();

    return (
        <h1 className="p-5 text-white text-3xl">User: {userId}</h1>
    )
}