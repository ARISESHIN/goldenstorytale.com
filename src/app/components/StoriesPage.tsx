import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Clock, Heart } from "lucide-react";
import { useState } from "react";

interface Story {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  image: string;
  likes: number;
}

const mockStories: Story[] = [
  {
    id: 1,
    title: "Surviving the Amazon Jungle",
    excerpt: "A thrilling tale of courage and resilience as an explorer navigates through the dense Amazon rainforest, facing wild animals and nature's challenges...",
    readTime: "8 min",
    category: "Survival",
    image: "https://images.unsplash.com/photo-1718988584438-124f458b79a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5nbGUlMjBhZHZlbnR1cmUlMjB3aWxkbGlmZSUyMG5hdHVyZXxlbnwxfHx8fDE3NzI3MTM1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 342
  },
  {
    id: 2,
    title: "The Tiger's Last Stand",
    excerpt: "An inspiring story about wildlife conservation and the majestic tigers fighting for survival in their natural habitat...",
    readTime: "6 min",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1655750055962-785513a1ff1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWdlciUyMHdpbGQlMjBhbmltYWwlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjcxMzU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 428
  },
  {
    id: 3,
    title: "Mountain Peak Challenge",
    excerpt: "A motivational journey of determination and perseverance as adventurers tackle one of the world's highest peaks against all odds...",
    readTime: "10 min",
    category: "Motivation",
    image: "https://images.unsplash.com/photo-1712767643121-a4cb9e5d0fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1cnZpdmFsJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc3MjcxMzU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 395
  },
  {
    id: 4,
    title: "Hilarious Pet Adventures",
    excerpt: "Laugh out loud with these heartwarming and funny moments captured with our furry friends. From playful puppies to clever cats...",
    readTime: "5 min",
    category: "Pets & Humor",
    image: "https://images.unsplash.com/photo-1627277933691-5be7c4931516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGV0cyUyMGFuaW1hbHMlMjBoYXBweXxlbnwxfHx8fDE3NzI3MTM1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 567
  },
  {
    id: 5,
    title: "Elephant Kingdom Chronicles",
    excerpt: "Discover the magnificent world of elephants - their social bonds, intelligence, and the urgent need to protect these gentle giants...",
    readTime: "7 min",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1535759802691-bf5a6cfe6ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMHdpbGRsaWZlJTIwc2FmYXJpfGVufDF8fHx8MTc3MjYwNzI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 489
  },
];

export function StoriesPage() {
  const [likedStories, setLikedStories] = useState<Set<number>>(new Set());

  const toggleLike = (storyId: number) => {
    setLikedStories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(storyId)) {
        newSet.delete(storyId);
      } else {
        newSet.add(storyId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl text-gray-900 flex items-center gap-2">
            <BookOpen className="w-7 h-7 text-amber-600" />
            My Stories
          </h1>
          <p className="text-sm text-gray-500 mt-1">{mockStories.length} thrilling adventures</p>
        </div>
      </div>

      {/* Stories List */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-4">
        {mockStories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <ImageWithFallback
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                  {story.category}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <h2 className="text-xl text-gray-900 mb-2">{story.title}</h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{story.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{story.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart
                      className={`w-4 h-4 ${
                        likedStories.has(story.id) ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                    <span>{story.likes + (likedStories.has(story.id) ? 1 : 0)}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleLike(story.id)}
                  className="flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-600 transition-colors"
                >
                  Read Story
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
