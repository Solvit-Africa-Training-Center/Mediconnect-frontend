import { Outlet, NavLink } from 'react-router-dom';

const PharmacyLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="font-bold text-lg mb-4">Pharmacy Menu</h2>
        <nav className="space-y-2">
          <NavLink to="/pharmacy/dashboard" className="block">Dashboard</NavLink>
          <NavLink to="/pharmacy/scan" className="block">Scan Prescription</NavLink>
          <NavLink to="/pharmacy/dispensed" className="block">Dispensed Records</NavLink>
          <NavLink to="/pharmacy/settings" className="block">Settings</NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1">
        <header className="p-4 bg-white shadow">Pharmacy Header</header>
        <main className="p-6">
          <Outlet /> {/* Nested pages render here */}
        </main>
      </div>
    </div>
  );
};

export default PharmacyLayout;
