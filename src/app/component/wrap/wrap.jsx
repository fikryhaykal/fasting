import { Toaster } from "react-hot-toast";

export default function Wrap({ children }) {
    return (
    <>
        <Toaster  position="bottom-right" reverseOrder={false}/>
        <div className="grid grid-cols-4 p-4 gap-4">
            {children}
        </div>
    </>
    )
}