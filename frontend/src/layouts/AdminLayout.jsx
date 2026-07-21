import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <aside className="w-72 border-r border-gray-200">
        Sidebar
      </aside>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}