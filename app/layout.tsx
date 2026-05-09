import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Limelight } from "next/font/google";
import { I18nProvider } from "@/components/i18n-provider";
import { PwaRegister } from "@/components/pwa-register";
import "./globals.css";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-limelight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://www.mehana-manastira-svetivlas.bg";

export const viewport: Viewport = {
  themeColor: "#2D1B14",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mehana Manastira Sveti Vlas | Traditional Bulgarian Restaurant — Dinevi Marina",
    template: "%s | Mehana Manastira Sveti Vlas",
  },
  description:
    "Mehana Manastira Sveti Vlas: monastery‑inspired Bulgarian hospitality on the first line of Dinevi Marina. Wood, stone, grill craftsmanship, and the Black Sea at arm’s length.",
  keywords: [
    "Mehana Manastira Sveti Vlas",
    "Traditional Bulgarian Restaurant Dinevi Marina",
    "механа манастира свети влас",
    "ресторант Диневи марина",
    "Bulgarian mehana marina",
  ],
  openGraph: {
    title: "Mehana Manastira Sveti Vlas",
    description:
      "Quiet luxury by the water — authentic Bulgarian tradition, grill mastery, Dinevi Marina.",
    locale: "bg_BG",
    type: "website",
    url: siteUrl,
    siteName: "Mehana Manastira Sveti Vlas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehana Manastira Sveti Vlas",
    description:
      "Traditional Bulgarian mehana on Dinevi Marina — Mehana Manastira Sveti Vlas.",
  },
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    title: "Mehana Manastira",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Mehana Manastira Sveti Vlas",
  description:
    "Premium traditional Bulgarian mehana at Dinevi Marina, Sveti Vlas. Monastery-inspired setting, grill specialties, seafood, and marina calm.",
  url: siteUrl,
  telephone: "+359-XXX-XXX-XXX",
  email: "reservations@mehana-manastira.example",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dinevi Marina",
    addressLocality: "Sveti Vlas",
    postalCode: "8256",
    addressRegion: "Burgas",
    addressCountry: "BG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.7166,
    longitude: 27.7518,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "23:00",
    },
  ],
  servesCuisine: ["Bulgarian", "Mediterranean", "Seafood", "Grill"],
  priceRange: "€€",
  hasMenu: `${siteUrl}/#menu`,
  image: `${siteUrl}/og-mehana-manastira.jpg`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${limelight.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <I18nProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-espresso focus:px-4 focus:py-2 focus:text-alabaster"
          >
            Към съдържанието
          </a>
          {children}
          <PwaRegister />
        </I18nProvider>
      </body>
    </html>
  );
}
