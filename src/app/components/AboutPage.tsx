import { Heart, Youtube, BookOpen, Trophy } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl flex items-center gap-2">
            <Heart className="w-7 h-7" />
            About Golden Story Tales
          </h1>
          <p className="text-sm text-amber-100 mt-1">Our story and mission</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-amber-500 text-white p-4 rounded-full">
              <BookOpen className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">
            Welcome to Golden Story Tales
          </h2>
          <p className="text-center text-gray-700 leading-relaxed">
            Where wild adventures meet heartwarming inspiration, courage, laughter, and nature's beauty.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-600" />
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Golden Story Tales is dedicated to sharing captivating stories about jungle survival, wildlife adventures, motivational journeys, and hilarious pet moments. Our goal is to inspire, entertain, and connect people with the wonders of nature and the animal kingdom.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through our content, we celebrate courage, resilience, humor, and the incredible bond between humans and animals.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-green-100 p-3 rounded-lg h-fit">
                <BookOpen className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Survival Stories</h3>
                <p className="text-sm text-gray-600">Real-life jungle survival tales and wilderness adventures that test human endurance.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-lg h-fit">
                <Heart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Motivational Content</h3>
                <p className="text-sm text-gray-600">Inspiring stories of courage, perseverance, and triumph over adversity.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-100 p-3 rounded-lg h-fit">
                <Youtube className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Wildlife & Pet Adventures</h3>
                <p className="text-sm text-gray-600">Hilarious and heartwarming moments featuring our furry friends and wild animals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Channel */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Youtube className="w-6 h-6 text-red-600" />
            Our YouTube Channel
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Subscribe to our YouTube channel for exclusive video content featuring:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Wild jungle survival documentaries</li>
            <li>Heartwarming animal rescue stories</li>
            <li>Funny pet compilations</li>
            <li>Nature exploration and wildlife encounters</li>
            <li>Motivational survival stories</li>
          </ul>
          <a
            href="https://www.youtube.com/@Goldenstory-fw2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Youtube className="w-5 h-5" />
            Visit Our Channel
          </a>
        </div>

        {/* Product Recommendations */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Product Recommendations</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As outdoor enthusiasts and animal lovers, we carefully curate product recommendations to help you on your own adventures. Our recommended products include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Survival gear and camping equipment</li>
            <li>Pet adventure supplies</li>
            <li>Wildlife observation tools</li>
            <li>Outdoor safety equipment</li>
            <li>Books on survival and nature</li>
          </ul>
          <p className="text-sm text-gray-600 italic">
            <strong>Note:</strong> We participate in the Amazon Associates Program and may earn commissions from qualifying purchases. We only recommend products we genuinely believe in.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Get In Touch</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Have questions, suggestions, or want to share your own survival story? Connect with us on YouTube!
          </p>
          <a
            href="https://www.youtube.com/@Goldenstory-fw2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
          >
            <Youtube className="w-5 h-5" />
            Golden Story Tales on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
