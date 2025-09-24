import systemIcon from "../assets/notification.png";
export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div>
        <h1 className="text-xl  text-[#1F252E]   ">Dashboard</h1>
        <p className="text-sm text-gray-500">Sunday, 7 September 2025</p>
      </div>
      <button className="relative p-2 rounded-full hover:bg-gray-100">
        {/* Bell icon image */}
        <img
          src={systemIcon}
          alt="Notifications"
          className="w-6 h-6 object-contain"
        />

        {/* Notification badge */}
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
          2
        </span>
      </button>
    </header>
  );
}
