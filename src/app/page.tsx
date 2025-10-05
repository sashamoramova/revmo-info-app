import { Footer } from "@/widgets/Footer/Footer";
import { Header } from "@/widgets/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <h1>Revmo Info App</h1>
        <p>Главная страница приложения</p>

        {/* проверка скролла */}
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