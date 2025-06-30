import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile () {
    const {user} = useContext(UserContext);

    if(!user) return (
        <div>Login to view profile details</div>
    )

    return (
        <>
            <h2>
                Username: {user.username}
            </h2>
        </>
    )
}

export default Profile;