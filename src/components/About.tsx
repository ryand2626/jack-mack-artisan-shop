
import { Award, Clock, Hammer, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Master Craftsmanship",
      description: "Over 15 years of woodturning expertise, creating pieces that last generations."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Sourcing",
      description: "Responsibly sourced local woods, supporting sustainable forestry practices."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award-Winning Quality",
      description: "Recognized by woodworking guilds for exceptional attention to detail."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timeless Design",
      description: "Classic techniques meet contemporary aesthetics for enduring beauty."
    }
  ];

  return (
    <section id="about" className="py-20 bg-wood-birch">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-wood-hickory/30 to-wood-chestnut/40 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="w-80 h-80 bg-wood-birch rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-wood-hickory rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-5xl font-playfair text-wood-birch font-bold">J</span>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-wood-chestnut mb-2">Jack Mack</h3>
                  <p className="text-wood-charcoal/60">Master Woodturner</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-4">
              <div className="bg-wood-chestnut text-wood-birch p-4 rounded-xl shadow-lg text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years</div>
              </div>
              <div className="bg-wood-hickory text-wood-birch p-4 rounded-xl shadow-lg text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Pieces</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl font-playfair font-bold text-wood-chestnut mb-6">
              Meet the Artisan Behind Each Piece
            </h2>
            
            <p className="text-lg text-wood-charcoal/80 mb-8 leading-relaxed">
              Jack Mack discovered his passion for woodturning over fifteen years ago in a small workshop 
              tucked away in the countryside. What started as a weekend hobby quickly became a calling, 
              as Jack found himself drawn to the meditative rhythm of the lathe and the endless possibilities 
              hidden within each piece of wood.
            </p>
            
            <p className="text-lg text-wood-charcoal/80 mb-12 leading-relaxed">
              Today, Jack's workshop is home to an ever-growing collection of unique pieces, each one 
              telling the story of the tree it came from. From locally sourced oak and ash to exotic 
              burls discovered on woodland walks, every creation is a celebration of nature's artistry 
              enhanced by human skill.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-wood-hickory/20 bg-wood-birch/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-wood-hickory mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-playfair font-semibold text-wood-chestnut mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-wood-charcoal/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
