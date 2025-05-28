
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 nature-grain-bg relative overflow-hidden">
      {/* Background Workshop Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/54c5f08a-ba4a-4be9-a112-1f629d1b3525.png" 
          alt="Jack at work in his workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nature-sage/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-nature-charcoal/70 font-medium">Handcrafted Excellence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-nature-forest mb-6 leading-tight">
              Artisan
              <span className="block text-nature-moss">Woodturning</span>
            </h1>
            
            <p className="text-xl text-nature-charcoal/80 mb-8 leading-relaxed">
              Each piece is meticulously handcrafted from carefully selected wood, 
              creating unique artworks and functional pieces that bring natural 
              beauty into your home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-nature-moss hover:bg-nature-forest text-nature-sage font-medium px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('art')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop One-Off Art
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-nature-moss text-nature-moss hover:bg-nature-moss hover:text-nature-sage px-8 py-3 rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Meet Jack
              </Button>
            </div>
          </div>

          {/* Right Column - Workshop Image Feature */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-nature-moss/20 to-nature-forest/30 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-nature-sage rounded-xl shadow-inner overflow-hidden">
                <img 
                  src="/lovable-uploads/54c5f08a-ba4a-4be9-a112-1f629d1b3525.png" 
                  alt="Jack Mack at work in his woodturning workshop" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-nature-forest text-nature-sage px-4 py-2 rounded-xl shadow-lg">
              <span className="font-medium">1 of 1 Pieces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
