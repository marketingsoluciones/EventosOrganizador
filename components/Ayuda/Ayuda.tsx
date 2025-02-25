import { FC, useEffect, useState } from "react"
import BlogComponent from "../Ayuda/BlogComponent"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/IndexFooter"


export const Ayuda: FC = () => {

/*     const [data, setData] = useState(null);

    useEffect(() => {
      fetch('http://localhost:3303/')
        .then(response => response.json())
        .then(setData);
    }, []); */

    return (
        <>
            <div className="w-full flex flex-col bg-white items-center justify-start min-h-screen gap-8 pt-4">
<Navbar/>

            <div className="flex items-center justify-center">
            <BlogComponent/>
            </div>
            <Footer/>
            </div>

        </>
    )
}

