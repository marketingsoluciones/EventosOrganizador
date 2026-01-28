import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/IndexHeader";
import Socials from "@/components/Socials/IndexSocials";
import Ticketing from "@/components/Ticketing/IndexTicketing";
import Solutions from "@/components/Solutions/IndexSolutions";
import ProductFeatures from "@/components/Solutions/ProductFeatures";
import Testimonies from "@/components/Testimonies/IndexTestim";
import Informations from "@/components/Informations/IndexInfo";
import Footer from "@/components/Footer/IndexFooter";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white text-gray-900 min-h-screen">
      <Navbar />
      <Header />
      <Informations />
      <Socials />
      <Ticketing />
      <Solutions />
      <ProductFeatures />
      <Testimonies />
      <Footer />
    </div>
  );
}
