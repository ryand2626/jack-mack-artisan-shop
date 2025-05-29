import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, ShoppingCart } from 'lucide-react';

const Kitchenware = () => {
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
    <div className="min-h-screen bg-nature-sage">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 nature-grain-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-nature-moss text-nature-moss mb-4">
                Functional Beauty
              </Badge>
              <h1 className="text-4xl font-playfair font-bold text-nature-forest mb-4">
                Kitchenware Collection
              </h1>
              <p className="text-xl text-nature-charcoal/70 max-w-2xl mx-auto">
                Beautiful, functional pieces that bring artisan craftsmanship to your kitchen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kitchenware.map((item) => (
                <Card key={item.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-nature-sage border-nature-moss/20 rounded-xl overflow-hidden">
                  <div className="relative">
                    <div className={`${item.image} h-64 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="text-white/80 text-6xl font-playfair relative z-10">JM</span>
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                        {item.stock}
                      </Badge>
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                        <Button size="sm" variant="secondary" className="bg-nature-sage text-nature-charcoal">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-nature-moss text-nature-sage">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-nature-forest mb-2">
                      {item.title}
                    </h3>
                    <p className="text-nature-charcoal/60 mb-3">{item.wood}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-nature-moss">{item.price}</span>
                      <Button className="bg-nature-moss hover:bg-nature-forest text-nature-sage rounded-lg">
                        Add to Cart
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

export default Kitchenware;
