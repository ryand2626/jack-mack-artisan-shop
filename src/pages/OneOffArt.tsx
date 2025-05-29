import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, ShoppingCart } from 'lucide-react';

const OneOffArt = () => {
  const artPieces = [
    {
      id: 1,
      title: "Olive Ash Lidded Bowl",
      price: "£470",
      wood: "Olive Ash",
      badge: "1 of 1",
      image: "/lovable-uploads/ca6a59db-03d5-49fe-93a7-485a2bc2e00f.png"
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

  return (
    <div className="min-h-screen bg-nature-sage">
      <Header />
      
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-nature-moss text-nature-moss mb-4">
                Unique Artworks
              </Badge>
              <h1 className="text-4xl font-playfair font-bold text-nature-forest mb-4">
                One-Off Art Pieces
              </h1>
              <p className="text-xl text-nature-charcoal/70 max-w-2xl mx-auto">
                Each piece is completely unique, showcasing the natural beauty and character of the wood.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artPieces.map((piece) => (
                <Card key={piece.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-nature-sage border-nature-moss/20 rounded-xl overflow-hidden">
                  <div className="relative">
                    <div className={`h-80 w-full flex items-center justify-center relative overflow-hidden ${piece.image.startsWith('bg-') ? piece.image : 'bg-gray-50'}`}>
                      {piece.image.startsWith('/') ? (
                        <img 
                          src={piece.image} 
                          alt={piece.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <span className="text-white/80 text-6xl font-playfair relative z-10">JM</span>
                        </>
                      )}
                      <Badge className="absolute top-4 left-4 bg-nature-forest text-nature-sage">
                        {piece.badge}
                      </Badge>
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                        <Button size="sm" variant="secondary" className="bg-nature-sage text-nature-charcoal">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-nature-sage text-nature-charcoal">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-nature-moss text-nature-sage">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-nature-forest mb-2">
                      {piece.title}
                    </h3>
                    <p className="text-nature-charcoal/60 mb-3">{piece.wood}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-nature-moss">{piece.price}</span>
                      <Button className="bg-nature-moss hover:bg-nature-forest text-nature-sage rounded-lg">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OneOffArt;
