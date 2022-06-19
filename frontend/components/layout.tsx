import { Children, PropsWithChildren } from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = (props: PropsWithChildren) => {
    return (
        <>
            <div className="flex flex-col overflow-x-clip">
            <Navbar />
                {/* mt needs to match navbar height */}
                <main className='mt-20 mb-5'>{props.children}</main>
            <Footer/>
            </div>
        </>
    )
}

export default Layout