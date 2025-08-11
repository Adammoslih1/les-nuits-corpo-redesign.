import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: '',
    motivation: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Request sent successfully! Our team will contact you soon.');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        position: '',
        motivation: '',
      });
    } catch (error) {
      toast.error('Error sending request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-foreground">
            Full Name *
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="bg-card/50 backdrop-blur-md border-border/50 focus:border-primary/50 transition-colors duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground">
            Phone *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="bg-card/50 backdrop-blur-md border-border/50 focus:border-primary/50 transition-colors duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-card/50 backdrop-blur-md border-border/50 focus:border-primary/50 transition-colors duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="position" className="text-foreground">
            Position/Title *
          </Label>
          <Input
            id="position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            required
            className="bg-card/50 backdrop-blur-md border-border/50 focus:border-primary/50 transition-colors duration-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation" className="text-foreground">
          Your Motivation *
        </Label>
        <Textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleInputChange}
          required
          rows={4}
          className="bg-card/50 backdrop-blur-md border-border/50 focus:border-primary/50 transition-colors duration-300 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-primary hover:scale-105 transition-transform duration-300 shadow-gold"
      >
        {isSubmitting ? 'Sending...' : 'Send Request'}
      </Button>
    </form>
  );
};

export default ContactForm;