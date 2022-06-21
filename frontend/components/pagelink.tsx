import { PropsWithChildren } from "react";

const PageLink = ({ children, href }: { children: any, href: string }) => {
    return (
        <a href={href} className="text-blue-600 duration-200 hover:text-blue-800 hover:underline">
            {children}
        </a>
    )
}

export default PageLink;