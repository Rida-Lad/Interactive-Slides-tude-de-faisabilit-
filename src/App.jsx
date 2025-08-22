import React, { useState, useEffect } from 'react';
import Slide from './components/Slide';
import PurpleBgAnimation from './PurpleBgAnimation';
import arrowback from './assets/arrow_back.svg';
import arrowforward from './assets/arrow_forward.svg';


function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Page de garde",
      subtitle: "Présentation encadrée dans le cadre du gestion de projet",
      content: (
        <div className="w-[750px] h-[400px] flex flex-col justify-between bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/90 rounded-xl border border-gray-700 backdrop-blur-sm p-8 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full filter blur-xl"></div>

          {/* Main Content */}
          <div className="text-center z-10">
            <h1 className="text-3xl font-bold text-white mb-3">
              Étude de faisabilité d'un projet : approche classique et avancée
            </h1>
          </div>

          {/* Presenters Section with Animation */}
          <div class="flex flex-col items-center gap-4 z-10">
            <div class="text-center">
              <div class="text-sm text-gray-400 mb-2">Présenté par</div>
              <div class="flex gap-4 items-center">
                <div class="relative h-12 overflow-hidden w-25">
                  <div class="absolute inset-0 name-slider">
                    <div class="text-xl font-bold text-white h-12 flex items-center justify-center">OUSSAMA</div>
                    <div class="text-xl font-bold text-white h-12 flex items-center justify-center">LAMIAE</div>
                    <div class="text-xl font-bold text-white h-12 flex items-center justify-center">RIDA</div>
                  </div>
                </div>
                <div class="relative h-12 overflow-hidden w-32">
                  <div class="absolute inset-0 name-slider">
                    <div class="text-xl font-bold text-white h-12 flex items-center justify-center">BOUATIR</div>
                    <div class="text-xl font-bold text-white h-12 flex items-center justify-center">AIT-ZIDANE</div>
                    <div class="text-xl font-bold text-white h-12 flex items-center justify-center">LADIB</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-64 h-px bg-gray-600"></div>

            <div class="flex justify-center items-center gap-10">
              <div class="text-center">
                <div class="text-sm text-gray-400 mb-2">Encadré par</div>
                <div class="text-lg text-white font-medium">M. Mohamed RADI</div>
              </div>

              <div class="h-12 w-px bg-gray-600"></div>

              <div class="text-center">
                <div class="text-sm text-gray-400 mb-2">Date</div>
                <div class="text-lg text-white font-medium">03 Juin 2025</div>
              </div>
            </div>
          </div>

          {/* Opening Quote */}
          <div className="text-center z-10 mt-6">
            <div className="text-xl italic text-blue-300 max-w-2xl mx-auto">
              "Avant de démarrer un projet, il faut s'assurer qu'il mérite d'exister et qu'il peut réussir."
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "INTRODUCTION",
      subtitle: "Premiers repères sur l’étude de faisabilité",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-white/90">
              Une étude de faisabilité est une analyse qui permet de vérifier si un projet peut être réalisé avec succès, en tenant compte de différents facteurs comme les ressources, les contraintes et les risques.            </p>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              <p className="text-purple-300 font-medium">Origine du concept : apparu dans les années 1950 avec l’essor du management de projet aux États-Unis.</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-400"></div>
              <p className="text-purple-300 font-medium">Taux d’échec des projets sans faisabilité : environ 60 % des projets échouent à cause d’un manque d’analyse préalable</p>
            </div>
          </div>
          <div className=" p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-purple-300 mb-4">Structure de présentation sur l'étude de faisabilité</h3>
            <ul className="space-y-3 text-white text-lg">
              <li className="flex items-center space-x-3">
                <span className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">1</span>
                <span>Objectifs et utilité </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center">2</span>
                <span>Les axes principaux  </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center">3</span>
                <span>Méthodologie de réalisation</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center">4</span>
                <span>Exemple réel</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center">5</span>
                <span>Conclusion</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Utilité de l’étude de faisabilité",
      subtitle: "Pourquoi réaliser une étude de faisabilité avant de lancer un projet ?",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Réduire les risques */}
          <div style={{ height: '190px' }} className="bg-gradient-to-br from-blue-800/50 to-indigo-900/50 p-6 rounded-2xl border border-blue-500/30 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02]">
            <div className="flex items-start mb-4">
              <div className="bg-red-500/20 p-3 rounded-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Réduire les risques</h3>
                <p className="text-blue-100">Identifier à l'avance les obstacles et problèmes potentiels</p>
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="ml-2 text-sm text-red-300 font-bold">-85%</span>
            </div>
          </div>

          {/* Card 2: Évaluer la rentabilité */}
          <div style={{ height: '190px' }} className="bg-gradient-to-br from-emerald-800/50 to-teal-900/50 p-6 rounded-2xl border border-emerald-500/30 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02]">
            <div className="flex items-start mb-4">
              <div className="bg-green-500/20 p-3 rounded-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Évaluer la rentabilité</h3>
                <p className="text-emerald-100">Vérifier si le projet peut générer des gains supérieurs aux coûts</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-green-300">+42%</span>
                <span className="ml-2 text-green-100 text-sm">ROI moyen</span>
              </div>
              <div className="text-xs bg-green-900/50 text-green-300 px-2 py-1 rounded">Économies potentielles</div>
            </div>
          </div>

          {/* Card 3: Aider à la prise de décision */}
          <div style={{ height: '170px' }} className="bg-gradient-to-br from-amber-800/50 to-orange-900/50 p-6 rounded-2xl border border-amber-500/30 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02]">
            <div className="flex items-start mb-4">
              <div className="bg-amber-500/20 p-3 rounded-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Aider à la prise de décision</h3>
                <p className="text-amber-100">Donner aux décideurs des données fiables et concrètes</p>
              </div>
            </div>
          </div>

          {/* Card 4: Alignement stratégique */}
          <div style={{ height: '170px' }} className="bg-gradient-to-br from-violet-800/50 to-purple-900/50 p-6 rounded-2xl border border-violet-500/30 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02]">
            <div className="flex items-start mb-4">
              <div className="bg-purple-500/20 p-3 rounded-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Alignement stratégique</h3>
                <p className="text-violet-100">S'assurer que le projet est cohérent avec les objectifs de l'entreprise</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Les composantes classiques",
      subtitle: "Les piliers fondamentaux de toute analyse de projet",
      content: (
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Row 1 */}
            <div className="bg-blue-900/30 p-5 rounded-xl border-l-4 border-blue-500 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-lg font-bold text-white">Faisabilité économique</h3>
              </div>
              <p className="text-blue-100 text-sm mb-3">Analyse du rapport coûts/bénéfices du projet à moyen et long terme</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-800/50 text-blue-200 text-xs px-2 py-1 rounded">ROI</span>
                <span className="bg-blue-800/50 text-blue-200 text-xs px-2 py-1 rounded">Coûts fixes</span>
                <span className="bg-blue-800/50 text-blue-200 text-xs px-2 py-1 rounded">Bénéfices</span>
                <span className="bg-blue-800/50 text-blue-200 text-xs px-2 py-1 rounded">Rentabilité</span>
              </div>
            </div>

            <div className="bg-green-900/30 p-5 rounded-xl border-l-4 border-green-500 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-lg font-bold text-white">Faisabilité financière</h3>
              </div>
              <p className="text-green-100 text-sm mb-3">Vérifie la disponibilité des ressources financières et la capacité de financement</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-800/50 text-green-200 text-xs px-2 py-1 rounded">Fonds propres</span>
                <span className="bg-green-800/50 text-green-200 text-xs px-2 py-1 rounded">Investissements</span>
                <span className="bg-green-800/50 text-green-200 text-xs px-2 py-1 rounded">Budget</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-amber-900/30 p-5 rounded-xl border-l-4 border-amber-500 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-lg font-bold text-white">Faisabilité technique</h3>
              </div>
              <p className="text-amber-100 text-sm mb-3">Évalue la disponibilité des moyens techniques et leur adaptation au projet</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-800/50 text-amber-200 text-xs px-2 py-1 rounded">Technologie</span>
                <span className="bg-amber-800/50 text-amber-200 text-xs px-2 py-1 rounded">Infrastructure</span>
                <span className="bg-amber-800/50 text-amber-200 text-xs px-2 py-1 rounded">Expertise</span>
                <span className="bg-amber-800/50 text-amber-200 text-xs px-2 py-1 rounded">Ressources</span>
              </div>
            </div>

            <div className="bg-purple-900/30 p-5 rounded-xl border-l-4 border-purple-500 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-lg font-bold text-white">Faisabilité commerciale</h3>
              </div>
              <p className="text-purple-100 text-sm mb-3">Étudie la demande potentielle, la concurrence et la capacité de vente</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded">Marché cible</span>
                <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded">Concurrence</span>
                <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded">Marketing</span>
                <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded">Demande</span>
              </div>
            </div>
          </div>

          {/* Connection Note */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center">
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Axes avancés de faisabilité",
      subtitle: "Approche élargie pour une analyse plus stratégique et réaliste",
      content: (
        <div className="w-[750px] h-[350px] flex flex-col">
          {/* Compact Grid with 2 rows of 3 cards */}
          <div className="grid grid-cols-3 gap-3 flex-grow">
            {/* Row 1 */}
            <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <h4 className="text-xl font-bold text-white">Organisationnelle</h4>
              </div>
              <p className="text-blue-100 text-sm mb-2">Structure interne, compétences humaines et capacité de gestion</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-blue-800/50 text-blue-200 text-[10px] px-2 py-1 rounded">Recrutement</span>
                <span className="bg-blue-800/50 text-blue-200 text-[10px] px-2 py-1 rounded">Formation</span>
                <span className="bg-blue-800/50 text-blue-200 text-[10px] px-2 py-1 rounded">Réorganisation</span>
              </div>
            </div>

            <div className="bg-green-900/30 p-3 rounded-lg border border-green-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <h4 className="text-xl font-bold text-white">Gouvernance</h4>
              </div>
              <p className="text-green-100 text-sm mb-2">Pilotage et méthodes de suivi du projet</p>
              <div className="text-xs text-green-200 mt-2 italic">
                "Une bonne idée mal gérée reste un échec"
              </div>
            </div>

            <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-amber-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <h4 className="text-xl font-bold text-white">Chaîne de valeur</h4>
              </div>
              <p className="text-amber-100 text-sm mb-2">Renforcement des étapes clés</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-amber-800/50 text-amber-200 text-[10px] px-2 py-1 rounded">Approvisionnement</span>
                <span className="bg-amber-800/50 text-amber-200 text-[10px] px-2 py-1 rounded">Production</span>
                <span className="bg-amber-800/50 text-amber-200 text-[10px] px-2 py-1 rounded">Distribution</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                <h4 className="text-xl font-bold text-white">Concurrentielle</h4>
              </div>
              <p className="text-purple-100 text-sm mb-2">Avantage réel par rapport à la concurrence</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-purple-800/50 text-purple-200 text-[10px] px-2 py-1 rounded">Différenciation</span>
                <span className="bg-purple-800/50 text-purple-200 text-[10px] px-2 py-1 rounded">Innovation</span>
                <span className="bg-purple-800/50 text-purple-200 text-[10px] px-2 py-1 rounded">Barrières</span>
              </div>
            </div>

            <div className="bg-teal-900/30 p-3 rounded-lg border border-teal-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                <h4 className="text-xl font-bold text-white">Digitale</h4>
              </div>
              <p className="text-teal-100 text-sm mb-2">Intégration efficace du numérique</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="bg-teal-800/50 text-teal-200 text-[10px] px-2 py-1 rounded">Transformation</span>
                <span className="bg-teal-800/50 text-teal-200 text-[10px] px-2 py-1 rounded">Automatisation</span>
                <span className="bg-teal-800/50 text-teal-200 text-[10px] px-2 py-1 rounded">Outils</span>
              </div>
            </div>

            {/* Sixth card - Complementary Elements */}
            <div className="bg-indigo-900/30 p-3 rounded-lg border border-indigo-500/30 backdrop-blur-sm flex flex-col justify-center items-center text-center">
              <div className="bg-indigo-500/20 p-2 rounded-full mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Éléments complémentaires</h4>
              <p className="text-indigo-100 text-xs">Ces axes permettent une évaluation plus complète des projets complexes</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-400 italic">Analyse exhaustive pour une prise de décision éclairée</p>
          </div>
        </div>
      ),
    },
    {
      title: "Méthodologie de l’étude de faisabilité",
      subtitle: "Les étapes clés pour analyser un projet",
      content: (
        <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Step 1: Collecte des informations */}
          <div className="bg-blue-900/30 p-5 rounded-xl border border-blue-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <h3 className="text-lg font-bold text-white">Collecte des informations</h3>
            </div>
            <p className="text-blue-100 text-sm mb-3">Études de marché, analyse interne, ressources disponibles</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-800/50 text-blue-200 text-xs px-3 py-1 rounded-full">Données financières</span>
              <span className="bg-blue-800/50 text-blue-200 text-xs px-3 py-1 rounded-full">Analyse concurrentielle</span>
              <span className="bg-blue-800/50 text-blue-200 text-xs px-3 py-1 rounded-full">Études sectorielles</span>
              <span className="bg-blue-800/50 text-blue-200 text-xs px-3 py-1 rounded-full">Ressources humaines</span>
            </div>
          </div>

          {/* Step 2: Analyse des données */}
          <div className="bg-green-900/30 p-5 rounded-xl border border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-500 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <h3 className="text-lg font-bold text-white">Analyse des données</h3>
            </div>
            <p className="text-green-100 text-sm mb-4">Utilisation d'outils comme la matrice SWOT</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-green-800/30 p-2 rounded text-center">
                <div className="font-medium text-green-300 text-sm">Forces</div>
                <div className="text-green-100 text-xs">Avantages internes</div>
              </div>
              <div className="bg-green-800/30 p-2 rounded text-center">
                <div className="font-medium text-green-300 text-sm">Faiblesses</div>
                <div className="text-green-100 text-xs">Limitations internes</div>
              </div>
              <div className="bg-green-800/30 p-2 rounded text-center">
                <div className="font-medium text-green-300 text-sm">Opportunités</div>
                <div className="text-green-100 text-xs">Facteurs externes +</div>
              </div>
              <div className="bg-green-800/30 p-2 rounded text-center">
                <div className="font-medium text-green-300 text-sm">Menaces</div>
                <div className="text-green-100 text-xs">Facteurs externes -</div>
              </div>
            </div>
          </div>

          {/* Step 3: Élaboration de scénarios */}
          <div className="bg-amber-900/30 p-5 rounded-xl border border-amber-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-amber-500 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <h3 className="text-lg font-bold text-white">Élaboration de scénarios</h3>
            </div>
            <p className="text-amber-100 text-sm mb-4">Prévoir plusieurs options de réalisation</p>
            <div className="flex justify-between">
              <div className="text-center">
                <div className="text-amber-300 font-medium text-sm">Optimiste</div>
                <div className="text-amber-100 text-xs">Meilleur cas</div>
              </div>
              <div className="text-center">
                <div className="text-amber-300 font-medium text-sm">Réaliste</div>
                <div className="text-amber-100 text-xs">Cas probable</div>
              </div>
              <div className="text-center">
                <div className="text-amber-300 font-medium text-sm">Pessimiste</div>
                <div className="text-amber-100 text-xs">Pire cas</div>
              </div>
            </div>
          </div>

          {/* Step 4: Formulation de recommandations */}
          <div style={{ height: '170px' }} className="bg-purple-900/30 p-5 rounded-xl border border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <h3 className="text-lg font-bold text-white">Formulation de recommandations</h3>
            </div>
            <ul className="text-purple-100 text-sm mb-3 list-disc list-inside space-y-1">
              <li>Améliorations à apporter au projet</li>
              <li>Conditions nécessaires à sa réussite</li>
              <li>Ajustements possibles</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Exemple réel – Étude de faisabilité par un expert",
      subtitle: "L’approche professionnelle de Youssef Ghandour",
      content: (
        <div className="w-[750px] h-[350px] flex bg-gradient-to-br from-gray-900 to-blue-900/50 rounded-xl border border-gray-700 backdrop-blur-sm overflow-hidden">
          {/* Expert Profile Section */}
          <div className="w-2/5 p-5 flex flex-col border-r border-gray-700">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-blue-200 rounded-xl w-16 h-16" />
              <div>
                <h3 className="text-lg font-bold text-white">Youssef Ghandour</h3>
                <p className="text-blue-300 text-sm">Expert en études de faisabilité</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="text-xs uppercase text-gray-400 mb-1">Formation</h4>
                <p className="text-sm text-white">Master en informatique quantique</p>
                <p className="text-xs text-gray-300">Faculté des sciences de Rabat</p>
              </div>

              <div>
                <h4 className="text-xs uppercase text-gray-400 mb-1">Expérience actuelle</h4>
                <p className="text-sm text-white">Gérant chez BROOFFICE IT</p>
                <p className="text-xs text-gray-300">4 ans et 4 mois d'expérience</p>
              </div>
            </div>
          </div>

          {/* Document Content Section */}
          <div className="w-3/5 p-5 bg-gray-900/30">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Contenu du document partagé</h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">1</div>
                  <h4 className="text-sm font-bold text-white">Analyse de l'environnement</h4>
                </div>
                <p className="text-blue-100 text-xs">Méthodes : PESTEL, SWOT</p>
              </div>

              <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">2</div>
                  <h4 className="text-sm font-bold text-white">Étude de marché</h4>
                </div>
                <p className="text-green-100 text-xs">Demande, concurrents, segments</p>
              </div>

              <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-amber-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">3</div>
                  <h4 className="text-sm font-bold text-white">Évaluation technique</h4>
                </div>
                <p className="text-amber-100 text-xs">Moyens, ressources et capacités</p>
              </div>

              <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-purple-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">4</div>
                  <h4 className="text-sm font-bold text-white">Analyse financière</h4>
                </div>
                <p className="text-purple-100 text-xs">Coûts et retours sur investissement</p>
              </div>

              <div className="col-span-2 bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">5</div>
                  <h4 className="text-sm font-bold text-white">Étude des risques et scénarios</h4>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="text-center">
                    <div className="text-red-300 font-medium text-xs">Pessimiste</div>
                    <div className="text-red-100 text-[10px]">Scénario défavorable</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-300 font-medium text-xs">Réaliste</div>
                    <div className="text-red-100 text-[10px]">Cas probable</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-300 font-medium text-xs">Optimiste</div>
                    <div className="text-red-100 text-[10px]">Meilleur cas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Entretien avec un professionnel – Az-eddine Serhani",
      subtitle: "Retour d’échange avec un développeur full-stack",
      content: (
        <div className="w-[750px] h-[350px] flex bg-gradient-to-br from-gray-900 to-indigo-900/50 rounded-xl border border-gray-700 backdrop-blur-sm overflow-hidden">
          {/* Left Column - Profile */}
          <div className="w-1/3 p-5 border-r border-gray-700">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-purple-200 rounded-xl w-16 h-16" />
              <div>
                <h3 className="text-lg font-bold text-white">Az-eddine Serhani</h3>
                <p className="text-indigo-300 text-sm">Développeur Full-stack</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs uppercase text-gray-400 mb-1">Expérience</h4>
                <p className="text-sm text-white">Diverses expériences en freelance et en entreprise</p>
              </div>

              <div>
                <h4 className="text-xs uppercase text-gray-400 mb-1">Disponibilité</h4>
                <p className="text-sm text-white">Entretien via Google Meet</p>
              </div>

              <div className="mt-5">
                <h4 className="text-xs uppercase text-gray-400 mb-2">Objectif de l'entretien</h4>
                <p className="text-sm text-gray-300 leading-tight">
                  Comprendre la réalité terrain de la gestion de projet et la prospection client.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Interview Questions */}
          <div className="w-2/3 p-5 bg-gray-900/30">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Questions prévues pour l'entretien</h3>

            <div className="grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="space-y-4">
                <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                  <h4 className="text-sm font-bold text-white mb-2">Méthode de gestion de projet</h4>
                  <ul className="space-y-1 text-xs text-blue-100">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Quelle approche utilises-tu ? (Agile, Scrum, classique...)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      Comment assures-tu le suivi et la livraison des projets ?
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/30">
                  <h4 className="text-sm font-bold text-white mb-2">Outils et organisation</h4>
                  <ul className="space-y-1 text-xs text-amber-100">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      Quels outils utilises-tu pour la gestion ?
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      Comment gères-tu ton emploi du temps entre plusieurs projets ?
                    </li>
                  </ul>
                </div>
              </div>11

              {/* Column 2 */}
              <div className="space-y-4">
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                  <h4 className="text-sm font-bold text-white mb-2">Stratégie de prospection client</h4>
                  <ul className="space-y-1 text-xs text-green-100">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Comment trouves-tu tes clients ?
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      Quelle méthode utilises-tu pour convaincre un prospect ?
                    </li>
                  </ul>
                </div>

                <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                  <h4 className="text-sm font-bold text-white mb-2">Gestion des imprévus et des risques</h4>
                  <ul className="space-y-1 text-xs text-red-100">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      Comment réagis-tu face à un retard ou un client insatisfait ?
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      As-tu déjà annulé un projet ? Pourquoi ?
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      ),
    },
    {
      title: "Conclusion",
      subtitle: "Étudier avant d’agir, c’est garantir le succès",
      content: (
        <div className="w-[750px] h-[350px] flex flex-col bg-gradient-to-br from-gray-900 to-purple-900/70 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Key Message */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                L'étude de faisabilité est une étape <span className="text-purple-400">essentielle</span> avant tout lancement de projet.
              </h3>

              {/* Benefits Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-800/30 p-3 rounded-lg border border-purple-500/30">
                  <div className="text-purple-400 text-lg font-bold mb-1">Évaluation</div>
                  <p className="text-blue-100 text-xs">Viabilité globale (classique et avancée)</p>
                </div>
                <div className="bg-purple-800/30 p-3 rounded-lg border border-purple-500/30">
                  <div className="text-purple-400 text-lg font-bold mb-1">Anticipation</div>
                  <p className="text-blue-100 text-xs">Identification et gestion des risques</p>
                </div>
                <div className="bg-purple-800/30 p-3 rounded-lg border border-purple-500/30">
                  <div className="text-purple-400 text-lg font-bold mb-1">Décision</div>
                  <p className="text-blue-100 text-xs">Choix éclairés et structurés</p>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="text-center border-t border-gray-700 pt-4">
              <div className="text-xl italic text-purple-300 font-light mb-2">
                "Une idée brillante ne suffit pas…
              </div>
              <div className="text-xl font-bold text-white">
                encore faut-il qu'elle soit faisable, utile et maîtrisable."
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center bg-blue-900/40 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm text-purple-300">Investissement stratégique pour la réussite de tout projet</span>
            </div>
          </div>
        </div>
      ),
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <PurpleBgAnimation />
      <div className="relative w-full h-screen overflow-hidden ">
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              {...slide}
              index={index}
              currentSlide={currentSlide}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-purple-300 w-6' : 'bg-gray-200'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all duration-300"
          aria-label="Previous slide"
        >
          <img src={arrowback} alt="Previous" className="h-8 w-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all duration-300"
          aria-label="Next slide"
        >
          <img src={arrowforward} alt="Next" className="h-8 w-8" />
        </button>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-purple-800 transition-all duration-1000 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>
    </>
  );
}

export default App;