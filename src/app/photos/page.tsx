import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import PhotoGrid from "@/components/photo-grid";

export default function PhotosPage() {
  return (
    <main className="page">
      <PageHeader label="Gallery" title="Photos" />

      <PhotoGrid />

      <Footer />
    </main>
  );
}
