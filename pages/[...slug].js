import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { menuItems } from "../components/Navbar/Navbar"

const BusinessSlug = ({ props }) => {
  const router = useRouter()

  const [optionSelect, setOptionSelect] = useState(0);

  useEffect(() => {
    const pathNames = window.location.pathname.split("/").filter(item => item !== '')
    const f1 = menuItems.findIndex(elem => elem.slug === `/${router.query.slug?.[0]}`)
    if (f1 > -1) {
      setOptionSelect(f1)
    }
  }, [router.query.slug]) 
/* 
  const dataComponents = [
    {
      icon: "",
      title: "Eventos",
      slug: "/events",
      component: <HomeScreen componentState={optionSelect} />
    },
  ] */

  return (
    <div >
      <div
        className={`w-[100%] flex z-10`}>
        {
          !!menuItems[optionSelect].component  
            ? menuItems[optionSelect].component
            : <div>aqui va pa pagina 404</div>
        }
      </div>
    </div>
  );
};

export default BusinessSlug;

export async function getServerSideProps({ params }) {
  return {
    props: params,
  };
}
