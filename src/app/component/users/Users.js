'use client'

import { useSelector } from "react-redux"

import {useSession} from "next-auth/react"

const UsersPage = () => {

    const {data} = useSession()

    const users = useSelector((state) => state.userInfo)

    console.log("USERS", users)
    return <>{
        JSON.stringify(users)
        
    }

    <br/>

    {
        JSON.stringify(data)
    }
    </>

}

export default UsersPage