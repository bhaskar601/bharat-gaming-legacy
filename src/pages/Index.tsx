
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import GameCard from "@/components/GameCard";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("ancient");

  // Ancient games data
  const ancientGames = [
    {
      name: "Pachisi",
      description: "The ancient predecessor to modern Ludo, played on cross-shaped boards with cowrie shells as dice.",
      url: "https://www.youtube.com/watch?v=qI-LHcCyMZQ",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop"
    },
    {
      name: "Chaupar",
      description: "A traditional Indian board game similar to Pachisi, popular among Mughal royalty.",
      url: "https://www.youtube.com/watch?v=5XxeN1r4oXs",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop"
    },
    {
      name: "Gilli Danda",
      description: "Traditional Indian street game played with two wooden sticks, testing skill and precision.",
      url: "https://www.youtube.com/watch?v=VQNYMwrM9Fg",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      name: "Kabaddi",
      description: "Ancient contact sport combining wrestling and tag, requiring strength and strategy.",
      url: "https://www.youtube.com/watch?v=t2FgkxgijgM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      name: "Chess (Chaturanga)",
      description: "The ancient Indian origin of modern chess, representing the four divisions of the military.",
      url: "https://www.youtube.com/watch?v=vqXLGX0szIQ",
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=300&fit=crop"
    },
    {
      name: "Kho-Kho",
      description: "Traditional Indian tag sport played between two teams, emphasizing speed and agility.",
      url: "https://www.youtube.com/watch?v=R9oEp7Z2Tko",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop"
    }
  ];

  // Modern games data
  const modernGames = [
    {
      name: "Ludo King",
      description: "Digital revival of the classic board game, connecting millions of Indian players online.",
      url: "https://www.youtube.com/watch?v=bREIbfDYFuw",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop"
    },
    {
      name: "BGMI",
      description: "Battlegrounds Mobile India - the localized battle royale that captivated the nation.",
      url: "https://www.youtube.com/watch?v=Yu3e4_WkTDc",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    },
    {
      name: "Dream11 Fantasy Cricket",
      description: "Fantasy sports platform that revolutionized how Indians engage with cricket.",
      url: "https://www.youtube.com/watch?v=cdfwbAaYPbE",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop"
    },
    {
      name: "Chess.com India",
      description: "Rise of Indian grandmasters in the digital chess revolution, dominating global tournaments.",
      url: "https://www.youtube.com/watch?v=PEdQ3F3O0oI",
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=300&fit=crop"
    },
    {
      name: "RummyCircle & Teen Patti",
      description: "Digital versions of traditional Indian card games, preserving cultural gaming practices.",
      url: "https://www.youtube.com/watch?v=RJZ3nG-6HoU",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      name: "Gaming Café Culture",
      description: "Local arcade games and digital café culture that brought gaming to the masses.",
      url: "https://www.youtube.com/watch?v=IAdT3Uw1OHo",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop"
    }
  ];

  // Future games data
  const futureGames = [
    {
      name: "Raji: An Ancient Epic",
      description: "Made-in-India action-adventure game showcasing Indian mythology and artistry.",
      url: "https://www.youtube.com/watch?v=HpG4zSLop1E",
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=400&h=300&fit=crop"
    },
    {
      name: "Indian Esports Scene",
      description: "Professional competitive gaming with organizations like Skyesports and Nodwin Gaming.",
      url: "https://www.youtube.com/watch?v=E0FKso0c2Ao",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    },
    {
      name: "AR/VR Traditional Games",
      description: "Augmented and virtual reality simulations bringing ancient games to life.",
      url: "https://www.youtube.com/watch?v=5VkYH9kfsRs",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop"
    },
    {
      name: "Metaverse Gaming",
      description: "Virtual worlds and metaverse experiences tailored for Indian audiences and culture.",
      url: "https://www.youtube.com/watch?v=gAzZ_Ag9kZw",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
    },
    {
      name: "Regional Language Gaming",
      description: "Educational and entertainment games developed in local Indian languages.",
      url: "https://www.youtube.com/watch?v=pVo3xChO7yM",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=300&fit=crop"
    },
    {
      name: "Indus Battle Royale",
      description: "India's own battle royale game featuring culturally relevant themes and characters.",
      url: "https://www.youtube.com/watch?v=rPK9FuGzX4I",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    }
  ];

  const allGames = [...ancientGames, ...modernGames, ...futureGames];

  const getRandomGame = () => {
    const randomGame = allGames[Math.floor(Math.random() * allGames.length)];
    window.open(randomGame.url, '_blank');
  };

  const getCurrentGames = () => {
    switch (currentTab) {
      case "ancient":
        return ancientGames;
      case "modern":
        return modernGames;
      case "future":
        return futureGames;
      default:
        return ancientGames;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Timeless Game Gallery</h1>
              <p className="text-gray-600 mt-1">Discover India's rich gaming heritage</p>
            </div>
            <Button 
              onClick={getRandomGame}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
            >
              <Shuffle className="mr-2 h-4 w-4" />
              Random Game
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white rounded-lg shadow-sm p-1 mb-8">
            <TabsTrigger 
              value="ancient" 
              className="text-sm font-medium py-3 px-6 rounded-md data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
            >
              Ancient Games
            </TabsTrigger>
            <TabsTrigger 
              value="modern" 
              className="text-sm font-medium py-3 px-6 rounded-md data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
            >
              Modern Gaming
            </TabsTrigger>
            <TabsTrigger 
              value="future" 
              className="text-sm font-medium py-3 px-6 rounded-md data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
            >
              Future Gaming
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ancient" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ancientGames.map((game, index) => (
                <GameCard
                  key={index}
                  name={game.name}
                  description={game.description}
                  url={game.url}
                  image={game.image}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="modern" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modernGames.map((game, index) => (
                <GameCard
                  key={index}
                  name={game.name}
                  description={game.description}
                  url={game.url}
                  image={game.image}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="future" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureGames.map((game, index) => (
                <GameCard
                  key={index}
                  name={game.name}
                  description={game.description}
                  url={game.url}
                  image={game.image}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
