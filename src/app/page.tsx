"use client";

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header simple du projet existant */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Mon Application
              </h1>
            </div>
            <nav className="flex space-x-4">
              <Link 
                href="/evaluation-pages/dashboards" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                📊 Dashboard d'Évaluation
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue dans votre application
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Gérez vos données et consultez les analyses détaillées
          </p>
          
          {/* Cards d'action */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Gestion des Utilisateurs</h3>
              <p className="text-gray-600 mb-4">Gérez vos utilisateurs et leurs permissions</p>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded">
                Accéder
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Configuration</h3>
              <p className="text-gray-600 mb-4">Paramétrez votre application</p>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded">
                Configurer
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Analyses & Rapports</h3>
              <p className="text-gray-600 mb-4">Consultez vos données et analyses</p>
              <Link 
                href="/evaluation-pages/dashboards"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                📊 Ouvrir Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}