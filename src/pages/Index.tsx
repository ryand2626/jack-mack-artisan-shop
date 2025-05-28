
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-wood-birch">
      <Header />
      <Hero />
      <ProductShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
