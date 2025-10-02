import React from 'react';
import Sidebar from '@/components/pharmacyComponent/components/Sidebar';
import Header from '@/components/pharmacyComponent/components/Header';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar: fixed width, full height */}
      <aside className="w-64 bg-gray-100 border-r h-full">
        <Sidebar />
      </aside>

      {/* Main section: fills rest of screen */}
      <div className="flex flex-col flex-1">
        {/* Header only spans content area (not sidebar) */}
        <Header />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
