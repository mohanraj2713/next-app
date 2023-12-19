import Link from "next/link"
import UsersPage from "../component/users/Users"


const getUsers = () => {

    return "user defined"
}

const Users = () => {

    const message = getUsers()
    console.log("message", message)

    return <>

        <UsersPage />
        <button>
            <Link href="/">Home</Link>
        </button>

    </>
}

export default Users