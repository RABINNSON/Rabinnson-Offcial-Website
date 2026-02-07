import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Rabinnson Private Limited",
        short_name: "Rabinnson",
        description:
            "Comprehensive business services including company registration, compliance, legal documentation, tax filing, and digital platforms.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1a1a2e",
        orientation: "portrait-primary",
        categories: ["business", "finance", "productivity"],
        icons: [
            {
                src: "/a.webp",
                sizes: "192x192",
                type: "image/webp",
                purpose: "any",
            },
            {
                src: "/a.webp",
                sizes: "512x512",
                type: "image/webp",
                purpose: "maskable",
            },
        ],
    };
}
