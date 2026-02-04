import React, { useState, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface SidebarLink {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export function SidebarProvider({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function Sidebar({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
}

export function SidebarBody(props: React.ComponentProps<typeof motion.div>) {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<'div'>)} />
    </>
  );
}

function DesktopSidebar({
  className = '',
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  useSidebar();
  return (
    <motion.div
      className={`h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-950 border-r border-neutral-800 w-[260px] shrink-0 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function MobileSidebar({
  className = '',
  children,
  ...props
}: React.ComponentProps<'div'>) {
  const { open, setOpen } = useSidebar();
  return (
    <div
      className="h-12 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-950 border-b border-neutral-800 w-full"
      {...props}
    >
      <div className="flex justify-end z-20 w-full">
        <button onClick={() => setOpen(!open)} className="text-text-secondary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed h-full w-full inset-0 bg-neutral-950 p-10 z-[100] flex flex-col justify-between ${className}`}
          >
            <button
              className="absolute right-10 top-10 z-50 text-text-secondary"
              onClick={() => setOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SidebarLinkItem({
  link,
  active = false,
  className = '',
}: {
  link: SidebarLink;
  active?: boolean;
  className?: string;
}) {
  const { open, animate } = useSidebar();
  return (
    <button
      onClick={link.onClick}
      className={`flex items-center justify-start gap-2 group/sidebar py-2.5 px-2 rounded-lg transition-colors duration-150 w-full text-left cursor-pointer
        ${active ? 'bg-white/5 text-white' : 'text-neutral-400 hover:text-white hover:bg-white/5'}
        ${className}
      `}
    >
      <span className="shrink-0 w-5 h-5">{link.icon}</span>
      <motion.span
        animate={{
          display: animate ? (open ? 'inline-block' : 'none') : 'inline-block',
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-sm whitespace-pre group-hover/sidebar:translate-x-0.5 transition duration-150 !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </button>
  );
}
