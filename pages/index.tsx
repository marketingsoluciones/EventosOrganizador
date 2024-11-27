import Image from "next/image";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { fetchApi, queries } from "@/utils/Fetching";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/IndexHeader";
import Socials from "@/components/Socials/IndexSocials";
import Ticketing from "@/components/Ticketing/IndexTicketing";
import Solutions from "@/components/Solutions/IndexSolutions";
import Testimonies from "@/components/Testimonies/IndexTestim";
import Footer from "@/components/Footer/IndexFooter";
import Informations from "@/components/Informations/IndexInfo";


/* interface Post {
  title: string
  _id: string
  subTitle:string
  content:string
  permaLink:string
  slug:string
  seoDescription:string
  categories: Category[]
  subCategories: Category[]
  tags: string
  imgCarrusel: ImageNew[]
  imgMiniatura: ImageNew
  imgTexto: ImageNew[]
  video: Video
  authorUid:string
  authorUsername:string
  updaterUsername:string
  status: boolean
  views: number
  postFormat:string
  createdAt: number
  updatedAt: number
}
interface Category {
  _id: string
}
type ImageNew = {
  _id: string
  i1024: string
  i800: string
  i640: string
  i320: string
  videoUrl: string
  createdAt: number
  }

  type Video = {
    _id: string
    url: string
    createdAt: number
    }

interface Results {
  total: number;
  results: Post[];
}
interface Props {
  componentState: any;
  setComponentState: any;
}
 */

export default function Home() {

/*   const [data,setData] = useState<Post[]>();
  useEffect(() => {
    fetchApi({
      query: queries.getAllPost,
      variables: {sort:{createdAt:-1}, skip:0, limit:10, development:"bodasdehoy" },
    }).then((results:Results) =>{
      setData(results.results)
      console.log(results)
    })
    
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data]) */
  

  return (

    <div className="w-full flex flex-col bg-white text-black items-center justify-items-center min-h-screen px-8 pt-8 gap-4">
      <Navbar/>
      
      <div className="self-stretch flex items-center justify-center">
      <Header/>
      </div>
      <div className="self-stretch flex items-center justify-center">
      <Informations/>
      </div>
      <div className="self-stretch flex items-center justify-center">
      <Socials/>
      </div>
      <div className="self-stretch flex items-center justify-center">
      <Ticketing/>
      </div>
      <div className="self-stretch flex items-center justify-center">
      <Testimonies/>
      </div>
      <div className="self-stretch flex items-center justify-center">
      <Solutions/>
      </div>
      
      
{/*       <div className="flex flex-col gap-8 items-center">
          {data?.map((elem, idx) => {
            return(
              <div key={idx} >
              {elem.title}
              </div>
            )
          })
        }
      </div> */}
<Footer/>
    </div>
  );
}
