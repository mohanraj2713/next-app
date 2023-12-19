'use client'

import { useSelector } from "react-redux"

const UsersPage = () => {

    const users = useSelector((state) => state.userInfo)

    console.log("USERS", users)
    return <>{
        JSON.stringify(users)
    }
    </>

}

export default UsersPage