import { PropsWithChildren } from "react";

const PostLayout = (props: PropsWithChildren) => {
    return (
        <div className="mx-10 text-lg my-5 p-5 post">
            {props.children}
        </div>
    )
}

export default PostLayout;