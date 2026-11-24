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

  // Requests are delivered by email through Web3Forms (free, no backend needed).
  // Set VITE_WEB3FORMS_KEY in a .env.local file or your hosting provider's settings.
  // Without a key, the visitor's email app opens with the request pre-filled,
  // so no lead is ever silently lost.
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
  const contactEmail = 'contact@lesnuitscorpo.com';

  const resetForm = () =>
    setFormData({ fullName: '', phone: '', email: '', position: '', motivation: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!accessKey) {
      const body = [
        `Full name: ${formData.fullName}`,
        `Phone: ${formData.phone}`,
        `Email: ${formData.email}`,
        `Position: ${formData.position}`,
        '',
        formData.motivation,
      ].join('\n');
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        `Invitation request - ${formData.fullName}`,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Invitation request - ${formData.fullName}`,
          from_name: 'Les Nuits Corpo website',
          replyto: formData.email,
          ...formData,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);

      toast.success('Request sent successfully! Our team will contact you soon.');
      resetForm();
    } catch {
      toast.error(`Error sending request. Please try again or email us at ${contactEmail}.`);
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