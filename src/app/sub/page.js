import { fetchApi, queries } from "../../Utils/Fetching";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
        hola
    </main>
  );
}



export async function getServerSideProps() {
    try {
      const lastPost = await fetchApi({
        query: queries.lastPost,
        variables: { development: "diariocivitas" }
      });
      const lastPostForCategorie = await fetchApi({
        query: queries.lastPostForCategorie,
        variables: { development: "diariocivitas" }
      });
      return {
        props: {
          ultimasNoticias: lastPost?.post,
          lastPost: lastPostForCategorie,
        }
      };
    } catch (error) {
      console.log(error);
      return {
        props: {},
      };
    }
  }