import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaxGloss | Car Detailing & Ceramic Coating",
  description:
    "Detailing automotriz, pulido de pintura, recubrimiento cerámico y cuidado profesional en Constitución y alrededores.",
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