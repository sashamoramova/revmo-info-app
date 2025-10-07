import Head from "next/head";
import { Footer } from "@/widgets/Footer/Footer";
import { Header } from "@/widgets/Header";
import { MainSection } from "@/widgets/MainSection/MainSection";
import { MainApi } from "@/entities/main-content/api/mainApi";
import ReviewsSection from "@/widgets/ReviewsSection/ReviewsSection";

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
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
