import Image from "next/image";
import { photos } from "@/content/site";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";

export default function PhotosPage() {
  return (
    <main className="page">
      <PageHeader label="Gallery" title="Photos" />

      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.src} className="photo-grid__item">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={1000}
              className="photo-grid__img"
            />
            <p className="photo-grid__caption">{photo.caption}</p>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
