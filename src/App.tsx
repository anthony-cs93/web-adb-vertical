import React, { useState, useEffect } from 'react';
import { PageView, Product } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProductModal } from './components/ProductModal';
import { QuoteWizard } from './components/QuoteWizard';
import { motion, AnimatePresence } from 'motion/react';

// Views
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ServicesView } from './components/views/ServicesView';
import { ProductsView } from './components/views/ProductsView';
import { MaintenanceView } from './components/views/MaintenanceView';
import { ProjectsView } from './components/views/ProjectsView';
import { ContactView } from './components/views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  
  // Quote Modal State (available globally from any CTA button)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteInitialSolution, setQuoteInitialSolution] = useState<string | undefined>(undefined);

  // Scroll to top on page change
  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Quote Modal from anywhere
  const handleOpenQuoteModal = (solutionId?: string) => {
    setQuoteInitialSolution(solutionId);
    setIsQuoteModalOpen(true);
  };

  // Handle ESC key for closing modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProductForModal(null);
        setIsQuoteModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-[#085AB3] selection:text-white">
      
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuoteModal()}
      />

      {/* Main Content Area with Smooth Page Transitions */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            {currentPage === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenQuote={handleOpenQuoteModal}
                onOpenProductModal={(product) => setSelectedProductForModal(product)}
              />
            )}

            {currentPage === 'about' && (
              <AboutView
                onNavigate={handleNavigate}
                onOpenQuote={() => handleOpenQuoteModal()}
              />
            )}

            {currentPage === 'services' && (
              <ServicesView
                onNavigate={handleNavigate}
                onOpenQuote={(sol) => handleOpenQuoteModal(sol)}
              />
            )}

            {currentPage === 'products' && (
              <ProductsView
                onNavigate={handleNavigate}
                onOpenQuote={(sol) => handleOpenQuoteModal(sol)}
                onOpenProductModal={(product) => setSelectedProductForModal(product)}
              />
            )}

            {currentPage === 'maintenance' && (
              <MaintenanceView
                onNavigate={handleNavigate}
                onOpenQuote={(sol) => handleOpenQuoteModal(sol)}
              />
            )}

            {currentPage === 'projects' && (
              <ProjectsView
                onNavigate={handleNavigate}
                onOpenQuote={(sol) => handleOpenQuoteModal(sol)}
              />
            )}

            {currentPage === 'contact' && (
              <ContactView
                onNavigate={handleNavigate}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuoteModal()}
        onSelectProductModal={(productId) => {
          handleOpenQuoteModal(productId);
        }}
      />

      {/* Persistent Floating WhatsApp Speed-Dial */}
      <WhatsAppFloatingButton currentPage={currentPage} />

      {/* Product Technical Modal */}
      {selectedProductForModal && (
        <ProductModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onSelectForQuote={(productId) => {
            setSelectedProductForModal(null);
            handleOpenQuoteModal(productId);
          }}
        />
      )}

      {/* Global Floating Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#02163B]/80 backdrop-blur-xs"
            onClick={() => setIsQuoteModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-transparent max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <QuoteWizard
                initialSolution={quoteInitialSolution}
                onCloseModal={() => setIsQuoteModalOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
