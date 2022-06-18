import { Children, PropsWithChildren } from "react"
import Navbar from "./navbar"

const Layout = (props: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen">
                {/* mt needs to match navbar height */}
                <main className='mt-12'>{props.children}</main>
            </div>
        </>
    )
}

export default Layout