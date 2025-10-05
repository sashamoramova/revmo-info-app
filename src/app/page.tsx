// export default function HomePage() {
//   return (
//     <main>
//       <h1>Revmo Info App</h1>
//       <p>Главная страница приложения</p>
//     </main>
//   )
// }
import { Footer } from "@/widgets/Footer/Footer";
import { Header } from "@/widgets/Header";
// Footer

export default function HomePage() {
  return (
    <>
      <Header />

      {/* <main style={{ paddingTop: '100px' }}> */}
      <main>
        <h1>Revmo Info App</h1>
        <p>Главная страница приложения</p>

        {/* Временный контент для проверки скролла */}
        <div
          style={{
            height: "2000px",
            // background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
          }}
        >
          <p>Скроллите страницу чтобы проверить фиксированный Header</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
