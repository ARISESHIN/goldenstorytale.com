import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Heart, Laugh, Mountain, BookOpen, Shield, Info } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-12">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Sparkles className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-3xl mb-3">Golden Story Tales</h1>
          <p className="text-amber-100 text-lg mb-6">
            Where wild adventures meet heartwarming inspiration
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">Courage</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">Laughter</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">Nature's Beauty</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-lg mx-auto px-6 -mt-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1743687034924-77e449e8ba9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHBlb3BsZSUyMGp1bmdsZSUyMGV4cGVkaXRpb24lMjB0cmVra2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzI4NTQ5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Golden Story Tales - Jungle Expedition Adventure"
            className="w-full h-56 object-cover"
          />
        </div>
      </div>

      {/* What We Offer */}
      <div className="max-w-lg mx-auto px-6 py-8">
        <h2 className="text-2xl text-gray-900 mb-6 text-center">Discover Our Content</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link to="/stories" className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mountain className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-gray-900 mb-1">Survival Stories</h3>
            <p className="text-xs text-gray-600">Jungle adventures</p>
          </Link>

          <Link to="/videos" className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-gray-900 mb-1">Motivation</h3>
            <p className="text-xs text-gray-600">Inspiring tales</p>
          </Link>

          <Link to="/videos" className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Laugh className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-1">Pet Humor</h3>
            <p className="text-xs text-gray-600">Hilarious moments</p>
          </Link>

          <Link to="/stories" className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-1">Wildlife</h3>
            <p className="text-xs text-gray-600">Nature's wonders</p>
          </Link>
        </div>

        {/* YouTube CTA */}
        <a
          href="https://www.youtube.com/@Goldenstory-fw2"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all mb-6"
        >
          <div className="flex justify-center mb-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Sparkles className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl mb-2">Visit Our YouTube Channel</h3>
          <p className="text-red-100 text-sm mb-4">
            Subscribe for exclusive video content, wild adventures, and heartwarming stories!
          </p>
          <span className="inline-block bg-white text-red-600 px-6 py-2 rounded-full text-sm hover:bg-red-50 transition-colors">
            Watch Now →
          </span>
        </a>

        {/* Quick Links */}
        <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
          <h3 className="text-lg text-gray-900 mb-3">Quick Links</h3>
          
          <Link 
            to="/about" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="bg-amber-100 p-2 rounded-lg">
              <Info className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">About Us</p>
              <p className="text-xs text-gray-600">Learn about Golden Story Tales</p>
            </div>
          </Link>

          <Link 
            to="/privacy" 
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="bg-gray-100 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm text-gray-900">Privacy Policy</p>
              <p className="text-xs text-gray-600">Your data & privacy</p>
            </div>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-xs text-gray-600">
          <p>© 2026 Golden Story Tales. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for adventure lovers</p>
        </div>
      </div>
    </div>
  );
}