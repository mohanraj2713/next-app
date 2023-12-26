
'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"

const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await signIn("credentials", form)
        console.log("RESPONSE",response)
    }


    return <>

        <div className="row">
            <div className="d-flex justify-content-center">
                <div className="col-md-5 col-sm-10 col-lg-5">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" value={form.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setForm({ ...form, ["email"]: e.target.value })} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" value={form.password} id="exampleInputPassword1" placeholder="Password" onChange={(e) => setForm({ ...form, ["password"]: e.target.value })} />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </>

}

export default Login