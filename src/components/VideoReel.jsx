import React, { useState } from "react";
import styles from "./VideoReel.module.css";

// Import video files
/* import reel1 from "../assets/videos/reel1.mp4";
import reel2 from "../assets/videos/reel2.mp4"; */
import reel3 from "../assets/videos/reel3.mp4";
import reel4 from "../assets/videos/reel4.mp4";

const videos = [reel3, reel4];

export default function VideoReel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setIsModalOpen(false);
  };

  return (
    <section id="videos" className={styles.videoSection}>
      <h2 className={styles.title}>Video Reels</h2>
      <div className={styles.grid}>
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            className={styles.thumbnail}
            onClick={() => openModal(video)}
            muted
            loop
            playsInline
          />
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={currentVideo}
              controls
              autoPlay
              className={styles.modalVideo}
            />
            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
