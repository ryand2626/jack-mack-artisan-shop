
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 wood-grain-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-wood-charcoal/70 font-medium">Handcrafted Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-wood-chestnut mb-6 leading-tight">
              Artisan
              <span className="block text-wood-hickory">Woodturning</span>
            </h1>
            
            <p className="text-xl text-wood-charcoal/80 mb-8 leading-relaxed">
              Each piece is meticulously handcrafted from carefully selected wood, 
              creating unique artworks and functional pieces that bring natural 
              beauty into your home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-wood-hickory hover:bg-wood-chestnut text-wood-birch font-medium px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('art')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop One-Off Art
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-wood-hickory text-wood-hickory hover:bg-wood-hickory hover:text-wood-birch px-8 py-3 rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Meet Jack
              </Button>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-wood-hickory/20 to-wood-chestnut/30 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-wood-birch rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-wood-hickory/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-playfair text-wood-chestnut">JM</span>
                  </div>
                  <p className="text-wood-charcoal/60 italic">
                    "Every piece tells a story of the wood's journey from tree to treasured artwork."
                  </p>
                  <p className="text-wood-hickory font-medium mt-2">- Jack Mack</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-wood-chestnut text-wood-birch px-4 py-2 rounded-xl shadow-lg">
              <span className="font-medium">1 of 1 Pieces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
