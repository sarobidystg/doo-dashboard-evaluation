import "@/dashboard/css/satoshi.css";
import "@/dashboard/css/style.css";

import { Sidebar } from "@/app/components/dashboard-components/Layouts/sidebar";
import { Header } from "@/app/components/dashboard-components/header";
import { Providers } from "../providers";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import Link from "next/link";

export default function EvaluationLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="w-full bg-gray-100 dark:bg-gray-900">
          <Header />
          
          {/* Breadcrumb pour navigation */}
          <div className="bg-white border-b px-6 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/evaluation-pages" className="text-gray-500 hover:text-gray-700">
                Accueil
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">Dashboard d'Évaluation</span>
            </nav>
          </div>

          <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
            {children}
          </main>
        </div>
      </div>
    </Providers>
  );
}