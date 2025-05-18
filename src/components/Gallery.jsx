import React, { useState } from "react";
import styles from "./Gallery.module.css";

// Import images directly
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.jpg";
import photo8 from "../assets/images/photo8.jpg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

function Gallery() {
  //State for controlling the lightbox visibility and selected image
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  //function to open the lightbox
  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage(null);
  };
  return (
    <section id="gallery" className={styles.gallerySection}>
      <h2 className={styles.title}>Photo Gallery</h2>
      <div className={styles.grid}>
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Photo ${index + 1}`}
            className={styles.image}
            onClick={() => openLightbox(src)} // Open lightbox on click
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Selected"
              className={styles.lightboxImage}
            />
            <button className={styles.closeButton} onClick={closeLightbox}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
