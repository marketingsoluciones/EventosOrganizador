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
            <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen pt-8">
<Navbar/>

            {/* Hero Section */}
            <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
                        Centro de <span className="text-[#6096B9]">Ayuda</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-[700px] mx-auto">
                        Aprende todo lo que necesitas para organizar eventos exitosos con nuestras guías y tutoriales.
                    </p>
                </div>
            </section>

            {/* Blog Component Section */}
            <section className="w-full py-12 px-4">
                <BlogComponent/>
            </section>

            <Footer/>
            </div>

        </>
    )
}

