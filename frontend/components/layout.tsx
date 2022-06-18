import { Children, PropsWithChildren } from "react"
import Navbar from "./navbar"

const Layout = (props: PropsWithChildren) => {
    const navbarHeight = 20

    return (
        <div className="flex flex-col">
            <Navbar height={navbarHeight} />
            <main className={`mt-${navbarHeight}`}>{props.children}</main>
        </div>
    )
}

export default Layout