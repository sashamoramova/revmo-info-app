import Head from "next/head";
import { Footer } from "@/widgets/Footer/Footer";
import { Header } from "@/widgets/Header";
import { MainSection } from "@/widgets/MainSection/MainSection";
import { MainApi } from "@/entities/main-content/api/mainApi";

export default async function HomePage() {
  const mainData = await MainApi.getMainData();

  return (
    <>
      <Head>
        <link rel="preload" href="/icons/download-button.svg" as="image" />
      </Head>
      <Header />

      <main>
        <MainSection data={mainData} />

        <div
          style={{
            height: "2000px",
            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
          }}
        >
          <p>Скролл страницы</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
