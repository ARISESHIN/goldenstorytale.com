import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  User,
  Settings,
  Bell,
  Shield,
  HelpCircle,
  ExternalLink,
  DollarSign,
  BarChart3,
  Share2,
} from "lucide-react";

export function ProfilePage() {
  const menuItems = [
    {
      icon: User,
      title: "Account Settings",
      description: "Manage your profile",
      action: "Edit",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Push & email alerts",
      action: "Configure",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Control your data",
      action: "Manage",
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get assistance",
      action: "Contact",
    },
  ];

  const statsCards = [
    { label: "Videos Watched", value: "127", icon: BarChart3, color: "blue" },
    { label: "Quizzes Completed", value: "43", icon: Settings, color: "purple" },
    { label: "Shares", value: "89", icon: Share2, color: "green" },
  ];

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-6 shadow-lg">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <User className="w-7 h-7" />
          Profile & More
        </h1>
        <p className="text-indigo-50 text-sm mt-1">Settings & information</p>
      </header>

      {/* PropellerAds Banner */}
      <div className="bg-gray-100 border border-indigo-200 mx-4 mt-4 rounded-lg overflow-hidden">
        <div className="h-20 flex items-center justify-center text-gray-500 text-sm">
          <div className="text-center">
            <p className="font-semibold">PropellerAds Profile Banner</p>
            <p className="text-xs text-gray-400">728x90 or 320x50</p>
          </div>
        </div>
      </div>

      {/* User Stats */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Your Activity</h2>
        <div className="grid grid-cols-3 gap-3">
          {statsCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="p-3 text-center border-gray-200 shadow-sm"
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 text-${stat.color}-600`} />
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Monetag Banner */}
      <div className="bg-gray-50 border border-purple-200 mx-4 mt-6 rounded-lg overflow-hidden">
        <div className="h-16 flex items-center justify-center text-gray-500 text-sm">
          <div className="text-center">
            <p className="font-semibold">Monetag Profile Banner 1</p>
            <p className="text-xs text-gray-400">320x50 In-Content Ad</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 mt-6 space-y-3">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Settings</h2>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className="p-4 flex items-center justify-between border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-300">
                {item.action}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Ad Network Info Cards */}
      <div className="px-4 mt-6 space-y-3">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Monetization Info</h2>
        
        {/* PropellerAds Card */}
        <Card className="p-5 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-start gap-3">
            <div className="bg-green-500 p-2 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-800">PropellerAds</h3>
                <Badge className="bg-green-500 hover:bg-green-600 text-xs">Primary</Badge>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Premium ad network with multiple banner formats, push notifications, and pop-unders. $5 minimum payout.
              </p>
              <a
                href="https://propellerads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-700 font-semibold"
              >
                Visit PropellerAds
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Card>

        {/* Monetag Card */}
        <Card className="p-5 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-800">Monetag</h3>
                <Badge className="bg-blue-500 hover:bg-blue-600 text-xs">Secondary</Badge>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                High-performance ad network for additional revenue. Pop-unders, native ads, and banner ads. No minimum traffic.
              </p>
              <a
                href="https://monetag.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-semibold"
              >
                Visit Monetag
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* Monetag Banner */}
      <div className="bg-gray-50 border border-indigo-200 mx-4 mt-6 mb-4 rounded-lg overflow-hidden">
        <div className="h-16 flex items-center justify-center text-gray-500 text-sm">
          <div className="text-center">
            <p className="font-semibold">Monetag Profile Banner 2</p>
            <p className="text-xs text-gray-400">320x50 Bottom Ad</p>
          </div>
        </div>
      </div>

      {/* YouTube Link */}
      <div className="mx-4 mb-4">
        <a
          href="https://www.youtube.com/@Goldenstory-fw2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-5 text-center shadow-lg hover:shadow-xl transition-all border-0">
            <h3 className="font-bold mb-2 flex items-center justify-center gap-2">
              Golden Story Tales
              <ExternalLink className="w-4 h-4" />
            </h3>
            <p className="text-sm text-red-50">Visit our YouTube channel for more content!</p>
          </Card>
        </a>
      </div>
    </div>
  );
}
