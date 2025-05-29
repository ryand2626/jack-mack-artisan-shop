
import { Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@jackmackwoodturning.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Workshop",
      content: "Countryside Workshop, UK",
      subtitle: "Visits by appointment only"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      content: "Mon-Fri: 9AM-5PM",
      subtitle: "Weekend calls welcome"
    }
  ];

  return (
    <section id="contact" className="py-20 nature-grain-bg relative overflow-hidden">
      {/* Background Workshop Image */}
      <div className="absolute inset-0 opacity-35">
        <img 
          src="/lovable-uploads/54c5f08a-ba4a-4be9-a112-1f629d1b3525.png" 
          alt="Jack at work in his workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nature-sage/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-nature-forest mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-nature-charcoal/70 max-w-2xl mx-auto">
            Have a custom piece in mind? Questions about our craftsmanship? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-nature-forest mb-8">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-nature-moss/20 bg-nature-sage/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-nature-moss mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-nature-forest mb-1">
                          {info.title}
                        </h4>
                        <p className="text-nature-charcoal font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-nature-charcoal/60 text-sm">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-nature-forest/10 rounded-xl p-6 border border-nature-moss/20">
              <h4 className="font-playfair font-semibold text-nature-forest mb-3">
                Custom Commissions Welcome
              </h4>
              <p className="text-nature-charcoal/70 leading-relaxed">
                Each custom piece is a collaboration between your vision and our craftsmanship. 
                We work closely with you to create something truly unique that fits your space and style perfectly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-nature-moss/20 bg-nature-sage shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-nature-forest mb-6">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-nature-moss/30 focus:border-nature-moss bg-nature-sage text-gray-700"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-nature-moss/30 focus:border-nature-moss bg-nature-sage text-gray-700"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-600 font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-nature-moss/30 focus:border-nature-moss bg-nature-sage text-gray-700"
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-600 font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="border-nature-moss/30 focus:border-nature-moss bg-nature-sage resize-none text-gray-700"
                      placeholder="Tell us about your project or ask us anything..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-nature-moss hover:bg-nature-forest text-nature-sage font-medium py-3 rounded-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
