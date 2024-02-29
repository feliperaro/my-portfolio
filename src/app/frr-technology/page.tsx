import Footer from "../components/footer";
import HeaderNav from "../components/header-nav";

export default function FRRTechnologyPage() {
  const pageIsReady = false;

  return (
    <div className="h-full">
      <HeaderNav page="frr-technology" />
      <main className="h-full pb-40">
        <h1 className="border font-bold p-5 text-center">{"FRR Technology"}</h1>
        {!pageIsReady && (
          <div className="font-semibold p-10 ">
            {
              "This page is currently under construction. Exciting things coming soon! ✨"
            }
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
