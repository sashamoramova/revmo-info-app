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

        <link rel="preload" href="/icons/apk-button.svg" as="image" />
        <link rel="preload" href="/icons/apple-icon.svg" as="image" />
        <link rel="preload" href="/icons/arrow.svg" as="image" />
        <link rel="preload" href="/icons/arrows.svg" as="image" />
        <link rel="preload" href="/icons/burger-menu-mobile.svg" as="image" />
        <link rel="preload" href="/icons/burger-menu-tablet.svg" as="image" />
        <link rel="preload" href="/icons/calendar.svg" as="image" />
        <link rel="preload" href="/icons/download-arrow.svg" as="image" />
        <link rel="preload" href="/icons/download-button.svg" as="image" />
        <link rel="preload" href="/icons/dzen-white.svg" as="image" />
        <link rel="preload" href="/icons/google-icon.svg" as="image" />
        <link rel="preload" href="/icons/qr-icon.svg" as="image" />
        <link rel="preload" href="/icons/shadow-reviews.svg" as="image" />
        <link rel="preload" href="/icons/shadow.svg" as="image" />
        <link rel="preload" href="/icons/telegram-white.svg" as="image" />
        <link rel="preload" href="/icons/video-icon.svg" as="image" />
        <link rel="preload" href="/icons/video-poster.jpg" as="image" />
        <link rel="preload" href="/icons/vk-video-white.svg" as="image" />
        <link rel="preload" href="/icons/vk-white.svg" as="image" />
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
