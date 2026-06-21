import "./globals.css";

export const metadata = {
  title: "Orbitech Security Company Ltd",
  description:
    "Business Compliance, Technology & Security Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}