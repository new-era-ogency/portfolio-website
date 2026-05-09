import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mehana Manastira Sveti Vlas",
    short_name: "Manastira",
    description:
      "Traditional Bulgarian mehana on Dinevi Marina — reservations, menu, and directions.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F9F7",
    theme_color: "#2D1B14",
    orientation: "portrait-primary",
    lang: "bg",
    categories: ["food", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
