'use client';

import React, { createContext, useContext, useState } from 'react';
import { PricingPlan } from '@/data/gymData';

interface BranchModalContextType {
  isBranchModalOpen: boolean;
  openBranchModal: () => void;
  closeBranchModal: () => void;
  isPlanModalOpen: boolean;
  selectedPlan: PricingPlan | null;
  openPlanModal: (plan: PricingPlan) => void;
  closePlanModal: () => void;
}

const BranchModalContext = createContext<BranchModalContextType | undefined>(undefined);

export function BranchModalProvider({ children }: { children: React.ReactNode }) {
  const [isBranchModalOpen, setIsBranchModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const openBranchModal = () => setIsBranchModalOpen(true);
  const closeBranchModal = () => setIsBranchModalOpen(false);

  const openPlanModal = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsPlanModalOpen(true);
  };
  const closePlanModal = () => {
    setIsPlanModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <BranchModalContext.Provider
      value={{
        isBranchModalOpen,
        openBranchModal,
        closeBranchModal,
        isPlanModalOpen,
        selectedPlan,
        openPlanModal,
        closePlanModal,
      }}
    >
      {children}
    </BranchModalContext.Provider>
  );
}

export function useBranchModal() {
  const context = useContext(BranchModalContext);
  if (!context) {
    throw new Error('useBranchModal must be used within a BranchModalProvider');
  }
  return context;
}
