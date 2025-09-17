import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Mon Application - Projet Principal",
  description: "Application principale avec intégration du dashboard d'évaluation",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}