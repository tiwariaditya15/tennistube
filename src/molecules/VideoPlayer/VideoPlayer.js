import styles from "./VideoPlayer.module.css";
export function VideoPlayer({ url }) {
  return (
    <iframe
      className={styles.frame}
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
