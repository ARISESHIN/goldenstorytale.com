import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingBag, Star, ExternalLink } from "lucide-react";
import { AdsterraAd } from "./AdsterraAd";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  amazonLink: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Generic 36\" Expandable Duffle Bag",
    description: "Lightweight rolling wheeled spinner suitcase luggage for travel and storage. Perfect for jungle expeditions and adventure travel!",
    price: "$49.99",
    rating: 4.5,
    reviews: 1250,
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBsdWdnYWdlJTIwYmFnfGVufDF8fHx8MTc3NzcyMzYwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Travel Gear",
    amazonLink: "https://amzn.to/4s6QY4Y"
  },
  {
    id: 2,
    name: "Wild Life by Cynthia DeFelice",
    description: "Captivating wildlife adventure story. A thrilling paperback that brings nature and survival stories to life. Perfect for wildlife enthusiasts!",
    price: "$12.99",
    rating: 4.7,
    reviews: 311,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMGJvb2slMjBuYXR1cmV8ZW58MXx8fHwxNzc3NzIzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Books",
    amazonLink: "https://amzn.to/4cympR2"
  },
  {
    id: 3,
    name: "Eco-Friendly Pet Odor Eliminator Gel",
    description: "5.3 oz, 90-day long lasting odor absorber box. Plant-based, safe around cats & dogs. Continuous air freshener for home with pets!",
    price: "$14.99",
    rating: 4.6,
    reviews: 2840,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBjYXJlJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzc3NzIzNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Pet Care",
    amazonLink: "https://amzn.to/4rjujS1"
  },
  {
    id: 4,
    name: "AUOBAG Emergency Survival Blanket",
    description: "Thermal mylar blankets sleeping bag for cold weather camping. Lightweight prepper supplies perfect for emergency survival situations!",
    price: "$19.99",
    rating: 4.7,
    reviews: 5642,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBibGFua2V0JTIwc3Vydml2YWx8ZW58MXx8fHwxNzc3NzIzNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Survival Gear",
    amazonLink: "https://amzn.to/4b5TqBC"
  },
  {
    id: 5,
    name: "Reusable Aluminum Foil Storage Bags",
    description: "Upgrade reusable food storage and preservation slider bags with stand-up bottom design. Kitchen essential - 30pcs (S+M+L sizes)!",
    price: "$16.99",
    rating: 4.5,
    reviews: 1890,
    image: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwc3RvcmFnZSUyMGJhZ3N8ZW58MXx8fHwxNzc3NzIzNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Kitchen",
    amazonLink: "https://amzn.to/46HVgHI"
  },
  {
    id: 6,
    name: "MEOWFIA Premium Cat Cave",
    description: "Handmade Merino wool felt cat bed for indoor cats. Cozy, stylish, and loved by over 8,620+ cat owners. Light grey, medium size.",
    price: "$39.99",
    rating: 4.7,
    reviews: 8620,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBiZWQlMjBjb3p5fGVufDF8fHx8MTc3NzcyMzYwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Pet Supplies",
    amazonLink: "https://amzn.to/47v39Al"
  },
  {
    id: 7,
    name: "RoverTac 14-in-1 Multitool Camping Axe",
    description: "Essential camping gear with knife, hammer, saw, bottle opener, screwdriver. Multi tool with sheath - perfect gifts for outdoor adventures! 9,614 reviews.",
    price: "$39.99",
    rating: 4.6,
    reviews: 9614,
    image: "https://images.unsplash.com/photo-1636633762833-5f62a4488f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXRvb2wlMjBheGUlMjBjYW1waW5nfGVufDF8fHx8MTc3NzcyMzYwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Survival Gear",
    amazonLink: "https://amzn.to/40QM2oW"
  },
  {
    id: 8,
    name: "Light My Fire Flint Fire Starter",
    description: "Ferro rod survival tool - Fire steel bushcraft gear. Flint and steel magnesium fire starter kit, 2-in-1 for campfires. 3,000 strikes! 3,336 reviews.",
    price: "$14.95",
    rating: 4.7,
    reviews: 3336,
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc3RhcnRlciUyMGNhbXBpbmd8ZW58MXx8fHwxNzc3NzIzNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Survival Gear",
    amazonLink: "https://amzn.to/4rU67qe"
  },
  {
    id: 9,
    name: "LifeStraw Personal Water Purifier",
    description: "Award-winning portable water filter for hiking, camping, travel, and emergency preparedness. Removes 99.99% bacteria & parasites!",
    price: "$19.95",
    rating: 4.8,
    reviews: 78543,
    image: "https://images.unsplash.com/photo-1523294587484-bae6cc870010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZpbHRlciUyMGhpa2luZ3xlbnwxfHx8fDE3Nzc3MjM2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Survival Gear",
    amazonLink: "https://amzn.to/3PnGz6s"
  },
  {
    id: 10,
    name: "BOBBYBEE Rechargeable Headlamp",
    description: "LED head lamp with 4 modes, waterproof head lights for forehead. Adjustable headlamp for adults - bright headlamp for outdoor camping, hiking, running.",
    price: "$19.99",
    rating: 4.0,
    reviews: 252,
    image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkbGFtcCUyMGNhbXBpbmclMjBoaWtpbmd8ZW58MXx8fHwxNzc3NzIzNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Outdoor Gear",
    amazonLink: "https://amzn.to/46NwLZD"
  },
  {
    id: 11,
    name: "Portable Camping Kitchen Utensil Set",
    description: "27-piece cookware kit, stainless steel outdoor cooking and grilling utensil organizer. Perfect for travel, picnics, RVs, camping, BBQs! 918 reviews.",
    price: "$34.99",
    rating: 4.7,
    reviews: 918,
    image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwY29va3dhcmUlMjB1dGVuc2lsc3xlbnwxfHx8fDE3Nzc3MjM2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Camping Gear",
    amazonLink: "https://amzn.to/4su2ffy"
  },
  {
    id: 12,
    name: "First Aid Only Emergency First Aid Kit",
    description: "All-purpose 10-person first aid kit for business, worksite, home, and car. 57 pieces of essential emergency supplies. 12,105 reviews!",
    price: "$24.99",
    rating: 4.7,
    reviews: 12105,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJzdCUyMGFpZCUyMGtpdCUyMGVtZXJnZW5jeXxlbnwxfHx8fDE3Nzc3MjM2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Safety",
    amazonLink: "https://amzn.to/4u9nLI9"
  },
];

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 sticky top-0 z-10">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl flex items-center gap-2">
            <ShoppingBag className="w-7 h-7" />
            Recommended Products
          </h1>
          <p className="text-sm text-blue-100 mt-1">Gear for jungle survival & wildlife adventures</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-lg mx-auto px-6 py-6 space-y-4">
        {mockProducts.map((product, index) => (
          <div key={product.id}>
            <div
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 p-4">
                <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-base text-gray-900 line-clamp-2">{product.name}</h2>
                    <span className="text-lg text-blue-600 flex-shrink-0">{product.price}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-600 line-clamp-2 mb-3">{product.description}</p>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 text-white py-2.5 rounded-lg hover:bg-amber-600 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  View on Amazon
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Add Adsterra Ad after product 4 and product 8 */}
            {(index === 3 || index === 7) && (
              <AdsterraAd adKey="baac6719a3ff0b9a3570e1f39c5b3088" />
            )}
          </div>
        ))}
      </div>

      {/* Affiliate Disclosure */}
      <div className="max-w-lg mx-auto px-6 pb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-gray-600">
          <p className="mb-2">
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate, Golden Story Tales earns from qualifying purchases. This means we may earn a small commission when you purchase products through our links, at no additional cost to you.
          </p>
          <p className="mb-2">
            We only recommend products we genuinely believe will enhance your adventure and storytelling experience.
          </p>
          <p className="text-center mt-3">
            <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
              View our Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}