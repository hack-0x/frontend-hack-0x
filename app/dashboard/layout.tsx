import Sidebar from "@/components/nav/sidebar";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const layout = (props: Props) => {
    return(
        <div className="flex mx-auto my-auto w-full bg-black">
            <div>
            <Sidebar/>
            </div>
        <main className="w-full">
            {props.children}
        </main>
        </div>
    )
}

export default layout;