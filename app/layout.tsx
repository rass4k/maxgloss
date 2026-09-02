import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaxGloss | Car Detailing & Ceramic Coating",
  description:
    "Car Detailing, pulido de pintura, recubrimiento cerámico y cuidado automotriz en Constitución y alrededores.",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}