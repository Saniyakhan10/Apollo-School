import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apollo Convent Higher Secondary School | Balaghat, M.P.",
  description:
    "Apollo Convent Higher Secondary School, Balaghat (M.P.) — Excellence Through Education. Quality education from Grade 1 to Grade 12 with modern learning, experienced faculty, and a nurturing environment.",
  keywords: [
    "Apollo Convent",
    "school",
    "Balaghat",
    "Madhya Pradesh",
    "education",
    "Grade 1-12",
  ],
  openGraph: {
    title: "Apollo Convent Higher Secondary School | Balaghat",
    description:
      "Shaping Future Leaders Through Excellence in Education — Grade 1 to Grade 12",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
