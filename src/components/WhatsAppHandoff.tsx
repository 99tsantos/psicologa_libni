"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type HandoffState = {
  footerActive: boolean;
  setFooterActive: (active: boolean) => void;
};

const WhatsAppHandoffContext = createContext<HandoffState>({
  footerActive: false,
  setFooterActive: () => {},
});

export function WhatsAppHandoffProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [footerActive, setFooterActive] = useState(false);
  return (
    <WhatsAppHandoffContext.Provider value={{ footerActive, setFooterActive }}>
      {children}
    </WhatsAppHandoffContext.Provider>
  );
}

export function useWhatsAppHandoff() {
  return useContext(WhatsAppHandoffContext);
}
