import { PropsWithChildren } from "react";

const PostLayout = (props: PropsWithChildren) => {
    return (
        <div className="mx-8 md:mx-16 text-lg my-5 pb-5 post">
            {props.children}
        </div>
    )
}

export default PostLayout;