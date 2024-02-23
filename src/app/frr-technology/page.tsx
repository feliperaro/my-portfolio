import Footer from "../components/footer";
import HeaderNav from "../components/header-nav";

export default function FRRTechnologyPage() {
  return (
    <div className="border border-black h-full">
      <HeaderNav page="frr-technology" />
      <main className="h-full">
        <div className="font-semibold text-center p-40">
          {
            "This page is currently under construction. Exciting things coming soon! ✨"
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}
