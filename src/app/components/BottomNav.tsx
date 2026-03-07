import { NavLink } from "react-router-dom";
import { Home, BookOpen, Play, ShoppingBag } from "lucide-react";

export function BottomNav() {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/stories", icon: BookOpen, label: "Stories" },
    { to: "/videos", icon: Play, label: "Videos" },
    { to: "/products", icon: ShoppingBag, label: "Products" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive
                    ? "text-amber-600"
                    : "text-gray-600 hover:text-amber-500"
                }`
              }
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
