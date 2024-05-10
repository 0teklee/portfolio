import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <main
      className={`w-full h-screen px-3.5 lg:px-32 py-24 scroll-hidden lg:snap-y lg:snap-mandatory overflow-y-auto scroll-stop`}
    >
      {children}
    </main>
  );
};

export default Layout;
