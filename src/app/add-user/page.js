'use client'

import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/slice/UserSlice"


const AddUser = () => {

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: "",
        mobile_number: "",
        native: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    const userAdd = (e) => {
        e.preventDefault()
        dispatch(addUser({data:form}))
        setForm({
            name: "",
            mobile_number: "",
            native: ""
        })
    }
    return <>

        <label>Name</label> : <input type="text" value={form.name} name="name" onChange={handleChange} />
        <label>Mobile Number</label> : <input type="number" value={form.mobile_number} name="mobile_number" onChange={handleChange} />
        <label>Native Place</label> : <input type="text" value={form.native} name="native" onChange={handleChange} />

        <button type="button" onClick={userAdd}>Add User</button>


        <button>
            <Link href="/users">Users</Link>
        </button>

    </>

}

export default AddUser