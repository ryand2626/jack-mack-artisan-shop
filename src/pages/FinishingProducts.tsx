
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, ShoppingCart } from 'lucide-react';

const FinishingProducts = () => {
  const finishingProducts = [
    {
      id: 7,
      title: "Premium Wood Oil",
      price: "£28",
      type: "Natural Finish",
      stock: "In Stock",
      image: "bg-gradient-to-br from-orange-700 to-orange-800"
    },
    {
      id: 8,
      title: "Beeswax Polish",
      price: "£15",
      type: "Natural Polish",
      stock: "In Stock",
      image: "bg-gradient-to-br from-yellow-700 to-yellow-800"
    },
    {
      id: 9,
      title: "Wood Conditioner",
      price: "£22",
      type: "Pre-treatment",
      stock: "In Stock",
      image: "bg-gradient-to-br from-blue-700 to-blue-800"
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
                Care & Maintenance
              </Badge>
              <h1 className="text-4xl font-playfair font-bold text-nature-forest mb-4">
                Finishing Products
              </h1>
              <p className="text-xl text-nature-charcoal/70 max-w-2xl mx-auto">
                Premium finishing products to protect and enhance your wooden pieces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {finishingProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-nature-sage border-nature-moss/20 rounded-xl overflow-hidden">
                  <div className="relative">
                    <div className={`${product.image} h-64 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="text-white/80 text-6xl font-playfair relative z-10">JM</span>
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                        {product.stock}
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
                      {product.title}
                    </h3>
                    <p className="text-nature-charcoal/60 mb-3">{product.type}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-nature-moss">{product.price}</span>
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

export default FinishingProducts;
