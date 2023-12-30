import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  // Your layout component logic goes here

  return (
    <div className='flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center'>
      {children}
    </div>
  );
};

export default Layout;
