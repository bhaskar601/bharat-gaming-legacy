
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Shuffle, Play } from "lucide-react";
import AncientIndia from "@/components/AncientIndia";
import ModernIndia from "@/components/ModernIndia";
import FutureIndia from "@/components/FutureIndia";
import GameCard from "@/components/GameCard";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("ancient");

  // All games data for random selection
  const allGames = [
    // Ancient games
    { name: "Pachisi", description: "Ancient predecessor to modern Ludo", url: "https://www.youtube.com/watch?v=qI-LHcCyMZQ", category: "ancient" },
    { name: "Chaupar", description: "Traditional Indian board game", url: "https://www.youtube.com/watch?v=5XxeN1r4oXs", category: "ancient" },
    { name: "Gilli Danda", description: "Traditional Indian street game", url: "https://www.youtube.com/watch?v=VQNYMwrM9Fg", category: "ancient" },
    { name: "Kabaddi", description: "Ancient contact sport", url: "https://www.youtube.com/watch?v=t2FgkxgijgM", category: "ancient" },
    { name: "Chess (Chaturanga)", description: "Origin of modern chess", url: "https://www.youtube.com/watch?v=vqXLGX0szIQ", category: "ancient" },
    // Modern games
    { name: "Ludo King", description: "Digital revival of classic board game", url: "https://www.youtube.com/watch?v=bREIbfDYFuw", category: "modern" },
    { name: "BGMI", description: "Battlegrounds Mobile India", url: "https://www.youtube.com/watch?v=Yu3e4_WkTDc", category: "modern" },
    { name: "Dream11", description: "Fantasy cricket platform", url: "https://www.youtube.com/watch?v=cdfwbAaYPbE", category: "modern" },
    // Future games
    { name: "Raji", description: "Made-in-India action adventure", url: "https://www.youtube.com/watch?v=HpG4zSLop1E", category: "future" },
    { name: "Indian Esports", description: "Growing competitive gaming scene", url: "https://www.youtube.com/watch?v=E0FKso0c2Ao", category: "future" },
  ];

  const getRandomGame = () => {
    const randomGame = allGames[Math.floor(Math.random() * allGames.length)];
    window.open(randomGame.url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            भारत Play
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-amber-100">
            A Timeless Gaming Journey
          </p>
          <div className="text-lg md:text-xl italic text-amber-200 mb-8">
            "क्रीडायाम् अपि संस्कृति अस्ति।"
            <br />
            <span className="text-sm text-amber-300">Even in play, there is culture.</span>
          </div>
          <Button 
            onClick={getRandomGame}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Shuffle className="mr-2" size={20} />
            Play & Learn
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-orange-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 border-2 border-red-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/70 backdrop-blur-sm border-2 border-amber-200 rounded-xl p-2 mb-12 shadow-lg">
            <TabsTrigger 
              value="ancient" 
              className="text-lg font-semibold py-4 px-6 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300"
            >
              🏺 Ancient India
            </TabsTrigger>
            <TabsTrigger 
              value="modern" 
              className="text-lg font-semibold py-4 px-6 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300"
            >
              🎮 India Now
            </TabsTrigger>
            <TabsTrigger 
              value="future" 
              className="text-lg font-semibold py-4 px-6 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
            >
              🚀 Future Gaming
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ancient" className="animate-fade-in">
            <AncientIndia />
          </TabsContent>

          <TabsContent value="modern" className="animate-fade-in">
            <ModernIndia />
          </TabsContent>

          <TabsContent value="future" className="animate-fade-in">
            <FutureIndia />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="text-lg mb-2">Celebrating India's Rich Gaming Heritage</p>
          <p className="text-amber-200">From Ancient Traditions to Digital Innovations</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
