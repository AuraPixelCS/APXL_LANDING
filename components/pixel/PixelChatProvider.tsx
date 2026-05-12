"use client";
import { createContext, useCallback, useContext, useState } from "react";
import PixelChat from "./PixelChat";

type PixelChatCtx = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const Ctx = createContext<PixelChatCtx | null>(null);

export function usePixelChat() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("usePixelChat must be used inside <PixelChatProvider>");
  }
  return ctx;
}

export function PixelChatProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ open, close, isOpen }}>
      {children}
      <PixelChat open={isOpen} onClose={close} />
    </Ctx.Provider>
  );
}
