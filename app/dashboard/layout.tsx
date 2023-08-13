import Sidebar from "@/components/nav/sidebar";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

const layout = (props: Props) => {
    return(
        <div className="flex  mx-auto my-auto w-full bg-black">
            <div className="">
            <Sidebar/>
            </div>
            <main className="w-full flex  mx-auto my-auto">
                {props.children}
            </main>
        </div>
    )
}

export default layout;