import Footer from "../components/footer";
import HeaderNav from "../components/header-nav";

export default function BlogPage() {
  return (
    <div className="h-full">
      <HeaderNav page={"blog"}/>
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
