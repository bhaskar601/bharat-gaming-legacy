
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface GameCardProps {
  name: string;
  description: string;
  url: string;
  category?: string;
}

const GameCard = ({ name, description, url, category }: GameCardProps) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  const getCategoryColors = () => {
    switch (category) {
      case 'ancient':
        return 'from-amber-500 to-orange-600';
      case 'modern':
        return 'from-blue-500 to-purple-600';
      case 'future':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white/80 backdrop-blur-sm border-2 border-amber-100 hover:border-amber-300 overflow-hidden"
      onClick={handleClick}
    >
      <CardContent className="p-6 relative">
        {/* Play button overlay */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`bg-gradient-to-r ${getCategoryColors()} p-2 rounded-full shadow-lg`}>
            <Play className="w-4 h-4 text-white" fill="white" />
          </div>
        </div>

        {/* Game thumbnail placeholder */}
        <div className={`w-full h-32 bg-gradient-to-br ${getCategoryColors()} rounded-lg mb-4 flex items-center justify-center shadow-md`}>
          <Play className="w-8 h-8 text-white opacity-70" />
        </div>

        {/* Game info */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-700 transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        {/* Hover effect border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColors()} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`}></div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
