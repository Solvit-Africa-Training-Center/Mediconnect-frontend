import dashboard from "../../assets/dashboard.png";
import qr from "../../assets/qr.png";
import records from "../../assets/records.png";
import settings from "../../assets/settings.png";
import background from "../../assets/Background.png";
import prefix from "../../assets/prefix.png";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white text-[#7B899D] flex flex-col">
      <div className="p-4 text-xl text-[#1F252E] flex items-center gap-2">
        <img src={background} alt="MedOrd Logo" className="w-6 h-6" />
        <span>MedOrd</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-2">
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded">
            <img src={dashboard} alt="Dashboard" className="w-5 h-5" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded">
            <img src={qr} alt="QR Code" className="w-5 h-5" />
            <span>Scan QR Code</span>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded">
            <img src={records} alt="Records" className="w-5 h-5" />
            <span>Dispensed Records</span>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded">
            <img src={settings} alt="Settings" className="w-5 h-5" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
      <div className="p-4 h-64 border-t flex gap-3">
        <img
          src={prefix}
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-[#1F252E]">Dr. Marie Uwimana</p>
          <span className="text-sm text-gray-500">Licensed Pharmacist</span>
        </div>
      </div>
    </aside>
  );
}