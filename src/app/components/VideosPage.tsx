import { Play, ExternalLink } from "lucide-react";

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  category: string;
}

const mockVideos: Video[] = [
  {
    id: 1,
    title: "Surviving 72 Hours in the Wild Jungle",
    description: "Watch as we tackle extreme survival challenges deep in the jungle with minimal supplies.",
    thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5nbGUlMjBzdXJ2aXZhbCUyMGV4cGxvcmVyfGVufDF8fHx8MTc3MjcxNDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    youtubeUrl: "https://www.youtube.com/@Goldenstory-fw2",
    category: "Survival"
  },
  {
    id: 2,
    title: "The Most Heartwarming Animal Rescue",
    description: "A touching story of compassion as we help rescue wildlife in need.",
    thumbnail: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjByZXNjdWUlMjB3aWxkbGlmZXxlbnwxfHx8fDE3NzI3MTQ0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    youtubeUrl: "https://www.youtube.com/@Goldenstory-fw2",
    category: "Wildlife"
  },
  {
    id: 3,
    title: "Hilarious Pet Compilation 2026",
    description: "Laugh out loud with the funniest pet moments captured this year!",
    thumbnail: "https://images.unsplash.com/photo-1583511666407-5f06533f2113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBkb2clMjBjYXQlMjBmdW5ueXxlbnwxfHx8fDE3NzI3MTQ0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    youtubeUrl: "https://www.youtube.com/@Goldenstory-fw2",
    category: "Pets & Humor"
  },
  {
    id: 4,
    title: "Against All Odds: Mountain Peak Journey",
    description: "An inspiring tale of determination and courage as climbers reach new heights.",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNsaW1iJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc3MjcxNDQ2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    youtubeUrl: "https://www.youtube.com/@Goldenstory-fw2",
    category: "Motivation"
  }
];

export function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-4 sticky top-0 z-10">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl flex items-center gap-2">
            <Play className="w-7 h-7" />
            Featured Videos
          </h1>
          <p className="text-sm text-red-100 mt-1">Wild adventures & inspiring stories</p>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-4">
        {mockVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="bg-red-500 rounded-full p-4 shadow-lg">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                  {video.category}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <h2 className="text-lg text-gray-900 mb-2">{video.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{video.description}</p>
              
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Play className="w-4 h-4" />
                Watch on YouTube
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe CTA */}
      <div className="max-w-lg mx-auto px-6 pb-6">
        <a
          href="https://www.youtube.com/@Goldenstory-fw2"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
        >
          <h3 className="text-xl mb-2">Subscribe to Our Channel</h3>
          <p className="text-amber-100 text-sm mb-4">
            Get notified about new videos and exclusive content!
          </p>
          <span className="inline-block bg-white text-amber-600 px-6 py-2 rounded-full text-sm hover:bg-amber-50 transition-colors">
            Subscribe Now →
          </span>
        </a>
      </div>
    </div>
  );
}
