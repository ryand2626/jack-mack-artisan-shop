
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, ShoppingCart } from 'lucide-react';

const ProductShowcase = () => {
  const artPieces = [
    {
      id: 1,
      title: "Walnut Bowl Collection",
      price: "£180",
      wood: "Black Walnut",
      badge: "1 of 1",
      image: "bg-gradient-to-br from-amber-800 to-amber-900"
    },
    {
      id: 2,
      title: "Cherry Wood Vase",
      price: "£240",
      wood: "Wild Cherry",
      badge: "1 of 1",
      image: "bg-gradient-to-br from-red-800 to-red-900"
    },
    {
      id: 3,
      title: "Oak Decorative Platter",
      price: "£320",
      wood: "English Oak",
      badge: "1 of 1",
      image: "bg-gradient-to-br from-yellow-800 to-yellow-900"
    }
  ];

  const kitchenware = [
    {
      id: 4,
      title: "Cutting Board Set",
      price: "£85",
      wood: "Maple & Walnut",
      stock: "In Stock",
      image: "bg-gradient-to-br from-amber-700 to-amber-800"
    },
    {
      id: 5,
      title: "Serving Spoons",
      price: "£45",
      wood: "Cherry Wood",
      stock: "In Stock",
      image: "bg-gradient-to-br from-red-700 to-red-800"
    },
    {
      id: 6,
      title: "Salad Bowl",
      price: "£120",
      wood: "Ash Wood",
      stock: "In Stock",
      image: "bg-gradient-to-br from-gray-700 to-gray-800"
    }
  ];

  return (
    <div className="py-20">
      {/* One-Off Art Pieces Section */}
      <section id="art" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-wood-hickory text-wood-hickory mb-4">
              Unique Artworks
            </Badge>
            <h2 className="text-4xl font-playfair font-bold text-wood-chestnut mb-4">
              One-Off Art Pieces
            </h2>
            <p className="text-xl text-wood-charcoal/70 max-w-2xl mx-auto">
              Each piece is completely unique, showcasing the natural beauty and character of the wood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artPieces.map((piece) => (
              <Card key={piece.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-wood-birch border-wood-hickory/20 rounded-xl overflow-hidden">
                <div className="relative">
                  <div className={`${piece.image} h-64 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <span className="text-white/80 text-6xl font-playfair relative z-10">JM</span>
                    <Badge className="absolute top-4 left-4 bg-wood-chestnut text-wood-birch">
                      {piece.badge}
                    </Badge>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      <Button size="sm" variant="secondary" className="bg-wood-birch text-wood-charcoal">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-wood-birch text-wood-charcoal">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-wood-hickory text-wood-birch">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-wood-chestnut mb-2">
                    {piece.title}
                  </h3>
                  <p className="text-wood-charcoal/60 mb-3">{piece.wood}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-wood-hickory">{piece.price}</span>
                    <Button className="bg-wood-hickory hover:bg-wood-chestnut text-wood-birch rounded-lg">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchenware Section */}
      <section id="kitchenware" className="wood-grain-bg py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-wood-hickory text-wood-hickory mb-4">
              Functional Beauty
            </Badge>
            <h2 className="text-4xl font-playfair font-bold text-wood-chestnut mb-4">
              Kitchenware Collection
            </h2>
            <p className="text-xl text-wood-charcoal/70 max-w-2xl mx-auto">
              Beautiful, functional pieces that bring artisan craftsmanship to your kitchen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitchenware.map((item) => (
              <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-wood-birch border-wood-hickory/20 rounded-xl overflow-hidden">
                <div className="relative">
                  <div className={`${item.image} h-64 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <span className="text-white/80 text-6xl font-playfair relative z-10">JM</span>
                    <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                      {item.stock}
                    </Badge>
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      <Button size="sm" variant="secondary" className="bg-wood-birch text-wood-charcoal">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-wood-birch text-wood-charcoal">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-wood-hickory text-wood-birch">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-wood-chestnut mb-2">
                    {item.title}
                  </h3>
                  <p className="text-wood-charcoal/60 mb-3">{item.wood}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-wood-hickory">{item.price}</span>
                    <Button className="bg-wood-hickory hover:bg-wood-chestnut text-wood-birch rounded-lg">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;
