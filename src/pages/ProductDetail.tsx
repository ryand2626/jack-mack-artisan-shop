
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // This would normally come from a database or API
  const allProducts = [
    {
      id: 1,
      title: "Olive Ash Lidded Bowl",
      price: "£470",
      wood: "Olive Ash",
      badge: "1 of 1",
      image: "/lovable-uploads/ca6a59db-03d5-49fe-93a7-485a2bc2e00f.png",
      description: "A stunning one-off piece crafted from beautiful olive ash wood. This decorative lidded bowl showcases the natural grain patterns and rich colors that make each piece unique. Perfect for storing jewelry, small keepsakes, or simply as a decorative centerpiece.",
      dimensions: "135mm x 110mm",
      artist: "Jack Mack",
      materials: "Olive Ash",
      finishedPiece: "Decorative lidded bowl",
      note: "This item was green turned. As a natural material, wood has the potential to change shape slightly depending on environmental conditions. It is unlikely to be noticeable to the eye but it's important to be aware that all wooden items can change shape and colour over time."
    },
    {
      id: 2,
      title: "Pear Wood Burl Bowl",
      price: "£480",
      wood: "Pear Wood Burl",
      badge: "1 of 1",
      image: "/lovable-uploads/a5e75673-1dcf-492b-b253-772cc9469ef4.png",
      description: "An extraordinary bowl turned from rare pear wood burl, showcasing the dramatic swirling grain patterns and rich honey tones unique to burled wood. This natural edge piece celebrates the tree's natural form while creating a functional work of art.",
      dimensions: "25cm diameter x 12cm height",
      artist: "Jack Mack",
      materials: "Pear Wood Burl",
      finishedPiece: "Natural edge decorative bowl",
      note: "As a natural material, wood has the potential to change shape slightly depending on environmental conditions. Burled wood may show natural checking and movement over time, which adds to its unique character and beauty."
    },
    {
      id: 3,
      title: "Purple Comets",
      price: "£280",
      wood: "Yew Wood",
      badge: "1 of 1",
      image: "/lovable-uploads/72c710c9-e20a-44b0-a63e-69f70440b92b.png",
      description: "A striking natural edge vessel turned from yew wood, featuring the distinctive purple heartwood streaks that give this piece its name. The dramatic coloration and natural defects create a cosmic appearance reminiscent of shooting stars.",
      dimensions: "20cm diameter x 15cm height",
      artist: "Jack Mack",
      materials: "Yew Wood",
      finishedPiece: "Natural edge decorative vessel",
      note: "Yew wood contains natural toxins and should not be used for food contact. This piece is intended for decorative purposes only. As with all natural wood, some movement and color changes may occur over time."
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(id || '1'));

  const handleAddToCart = () => {
    console.log('Adding to cart:', product?.title);
    toast({
      title: "Added to Cart",
      description: `${product?.title} has been added to your cart.`,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-nature-sage flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair font-bold text-nature-forest mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/one-off-art')} className="bg-nature-moss text-nature-sage">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nature-sage">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline" 
            className="mb-8 border-nature-moss text-nature-moss hover:bg-nature-moss hover:text-nature-sage"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative">
                <div className={`aspect-square rounded-xl overflow-hidden ${product.image.startsWith('bg-') ? product.image : 'bg-gray-50'}`}>
                  {product.image.startsWith('/') ? (
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white/80 text-8xl font-playfair">JM</span>
                      </div>
                    </>
                  )}
                  <Badge className="absolute top-4 left-4 bg-nature-forest text-nature-sage">
                    {product.badge}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-playfair font-bold text-nature-forest mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-nature-moss">{product.price}</span>
                  <Badge variant="outline" className="border-nature-moss text-nature-moss">
                    {product.wood}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-semibold text-nature-forest">Description</h3>
                <p className="text-nature-charcoal/70 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nature-forest mb-2">Dimensions</h4>
                  <p className="text-nature-charcoal/70">{product.dimensions}</p>
                </div>
                {product.artist && (
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Artist</h4>
                    <p className="text-nature-charcoal/70">{product.artist}</p>
                  </div>
                )}
                {product.materials && (
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Materials</h4>
                    <p className="text-nature-charcoal/70">{product.materials}</p>
                  </div>
                )}
                {product.finishedPiece && (
                  <div>
                    <h4 className="font-semibold text-nature-forest mb-2">Finished Piece</h4>
                    <p className="text-nature-charcoal/70">{product.finishedPiece}</p>
                  </div>
                )}
              </div>

              {product.note && (
                <div className="bg-nature-moss/10 rounded-lg p-6">
                  <h4 className="font-semibold text-nature-forest mb-2">Please Note</h4>
                  <p className="text-nature-charcoal/70 text-sm">
                    {product.note}
                  </p>
                </div>
              )}

              <div className="flex gap-4 pt-6">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-nature-moss hover:bg-nature-forest text-nature-sage"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              {!product.note && (
                <div className="bg-nature-moss/10 rounded-lg p-6 mt-8">
                  <h4 className="font-semibold text-nature-forest mb-2">Craftsmanship Promise</h4>
                  <p className="text-nature-charcoal/70 text-sm">
                    Each piece is individually hand-crafted with care and attention to detail. 
                    As a one-off artwork, this piece is completely unique and will never be replicated.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
