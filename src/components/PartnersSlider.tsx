import { useEffect, useState } from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const PartnersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock partner data - replace with real data
  const partners: Partner[] = [
    { id: 1, name: 'Partner 1', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Partner+1' },
    { id: 2, name: 'Partner 2', logo: 'https://via.placeholder.com/150x80/06B6D4/FFFFFF?text=Partner+2' },
    { id: 3, name: 'Partner 3', logo: 'https://via.placeholder.com/150x80/F97316/FFFFFF?text=Partner+3' },
    { id: 4, name: 'Partner 4', logo: 'https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=Partner+4' },
    { id: 5, name: 'Partner 5', logo: 'https://via.placeholder.com/150x80/06B6D4/FFFFFF?text=Partner+5' },
    { id: 6, name: 'Partner 6', logo: 'https://via.placeholder.com/150x80/F97316/FFFFFF?text=Partner+6' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= partners.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <div className="w-full overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {partners.concat(partners).map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex-shrink-0 w-1/4 px-4"
          >
            <div className="bg-card/50 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSlider;