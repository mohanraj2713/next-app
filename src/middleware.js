import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt";
const isLoggedIn = true
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    // const { pathname } = request.nextUrl

    // GET /_next/data/build-id/hello.json

    // let cookie = request.cookies.get('my-cookie')
    // let headers = new Headers(request.headers)

    // console.log("Check", cookie)

    const res = NextResponse.next()

    const token = await getToken({
        req:request,
        secret:process.env.NEXTAUTH_SECRET
    })

    if (token) {
        return NextResponse.next()
    }

    // console.log("PATH NAME",pathname)

    // if(!isLoggedIn && request.url === "http://localhost:3000/profile"){
    //     return NextResponse.redirect(new URL('/',request.url))
    // }
    // return NextResponse.next()
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/users', "/add-user", "/"],
}
