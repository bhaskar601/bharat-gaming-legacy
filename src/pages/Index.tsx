import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Shuffle, Gamepad2, Trophy, Sparkles, Clock, Zap, Rocket } from "lucide-react";

// Enhanced GameCard component
const GameCard = ({ name, description, url, image, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
          category === 'ancient' ? 'bg-amber-500/80 text-white' :
          category === 'modern' ? 'bg-blue-500/80 text-white' :
          'bg-purple-500/80 text-white'
        }`}>
          {category === 'ancient' ? 'Ancient' : category === 'modern' ? 'Modern' : 'Future'}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
          {name}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* Play button */}
        <Button 
          onClick={() => window.open(url, '_blank')}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group-hover:scale-105"
        >
          <Gamepad2 className="mr-2 h-4 w-4" />
          Play Now
        </Button>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

const Index = () => {
  const [currentTab, setCurrentTab] = useState("ancient");

  // Ancient games data
  const ancientGames = [
    {
      name: "Pachisi",
      description: "The ancient predecessor to modern Ludo, played on cross-shaped boards with cowrie shells as dice.",
      url: "https://www.youtube.com/watch?v=qI-LHcCyMZQ",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      category: "ancient"
    },
    {
      name: "Chaupar",
      description: "A traditional Indian board game similar to Pachisi, popular among Mughal royalty.",
      url: "https://www.youtube.com/watch?v=5XxeN1r4oXs",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
      category: "ancient"
    },
    {
      name: "Gilli Danda",
      description: "Traditional Indian street game played with two wooden sticks, testing skill and precision.",
      url: "https://www.youtube.com/watch?v=VQNYMwrM9Fg",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "ancient"
    },
    {
      name: "Kabaddi",
      description: "Ancient contact sport combining wrestling and tag, requiring strength and strategy.",
      url: "https://www.youtube.com/watch?v=t2FgkxgijgM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "ancient"
    },
    {
      name: "Chess (Chaturanga)",
      description: "The ancient Indian origin of modern chess, representing the four divisions of the military.",
      url: "https://www.youtube.com/watch?v=vqXLGX0szIQ",
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=300&fit=crop",
      category: "ancient"
    },
    {
      name: "Kho-Kho",
      description: "Traditional Indian tag sport played between two teams, emphasizing speed and agility.",
      url: "https://www.youtube.com/watch?v=R9oEp7Z2Tko",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      category: "ancient"
    }
  ];

  // Modern games data
  const modernGames = [
    {
      name: "Ludo King",
      description: "Digital revival of the classic board game, connecting millions of Indian players online.",
      url: "https://www.youtube.com/watch?v=bREIbfDYFuw",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      category: "modern"
    },
    {
      name: "BGMI",
      description: "Battlegrounds Mobile India - the localized battle royale that captivated the nation.",
      url: "https://www.youtube.com/watch?v=Yu3e4_WkTDc",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      category: "modern"
    },
    {
      name: "Dream11 Fantasy Cricket",
      description: "Fantasy sports platform that revolutionized how Indians engage with cricket.",
      url: "https://www.youtube.com/watch?v=cdfwbAaYPbE",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
      category: "modern"
    },
    {
      name: "Chess.com India",
      description: "Rise of Indian grandmasters in the digital chess revolution, dominating global tournaments.",
      url: "https://www.youtube.com/watch?v=PEdQ3F3O0oI",
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=300&fit=crop",
      category: "modern"
    },
    {
      name: "RummyCircle & Teen Patti",
      description: "Digital versions of traditional Indian card games, preserving cultural gaming practices.",
      url: "https://www.youtube.com/watch?v=RJZ3nG-6HoU",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "modern"
    },
    {
      name: "Gaming Café Culture",
      description: "Local arcade games and digital café culture that brought gaming to the masses.",
      url: "https://www.youtube.com/watch?v=IAdT3Uw1OHo",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      category: "modern"
    }
  ];

  // Future games data
  const futureGames = [
    {
      name: "Raji: An Ancient Epic",
      description: "Made-in-India action-adventure game showcasing Indian mythology and artistry.",
      url: "https://www.youtube.com/watch?v=HpG4zSLop1E",
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=400&h=300&fit=crop",
      category: "future"
    },
    {
      name: "Indian Esports Scene",
      description: "Professional competitive gaming with organizations like Skyesports and Nodwin Gaming.",
      url: "https://www.youtube.com/watch?v=E0FKso0c2Ao",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      category: "future"
    },
    {
      name: "AR/VR Traditional Games",
      description: "Augmented and virtual reality simulations bringing ancient games to life.",
      url: "https://www.youtube.com/watch?v=5VkYH9kfsRs",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop",
      category: "future"
    },
    {
      name: "Metaverse Gaming",
      description: "Virtual worlds and metaverse experiences tailored for Indian audiences and culture.",
      url: "https://www.youtube.com/watch?v=gAzZ_Ag9kZw",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      category: "future"
    },
    {
      name: "Regional Language Gaming",
      description: "Educational and entertainment games developed in local Indian languages.",
      url: "https://www.youtube.com/watch?v=pVo3xChO7yM",
      image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=300&fit=crop",
      category: "future"
    },
    {
      name: "Indus Battle Royale",
      description: "India's own battle royale game featuring culturally relevant themes and characters.",
      url: "https://www.youtube.com/watch?v=rPK9FuGzX4I",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      category: "future"
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

  const getTabIcon = (tab) => {
    switch (tab) {
      case "ancient":
        return <Clock className="h-5 w-5" />;
      case "modern":
        return <Zap className="h-5 w-5" />;
      case "future":
        return <Rocket className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl shadow-lg">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    Timeless Game Gallery
                  </h1>
                  <p className="text-gray-300 text-lg mt-1 flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                    Discover India's rich gaming heritage
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={getRandomGame}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-lg"
            >
              <Shuffle className="mr-3 h-5 w-5" />
              Random Adventure
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-xl rounded-2xl p-2 mb-12 border border-white/20 shadow-2xl">
            <TabsTrigger 
              value="ancient" 
              className="text-base font-semibold py-4 px-8 rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300 hover:text-white flex items-center space-x-2"
            >
              {getTabIcon("ancient")}
              <span>Ancient Era</span>
            </TabsTrigger>
            <TabsTrigger 
              value="modern" 
              className="text-base font-semibold py-4 px-8 rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300 hover:text-white flex items-center space-x-2"
            >
              {getTabIcon("modern")}
              <span>Modern Gaming</span>
            </TabsTrigger>
            <TabsTrigger 
              value="future" 
              className="text-base font-semibold py-4 px-8 rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300 hover:text-white flex items-center space-x-2"
            >
              {getTabIcon("future")}
              <span>Future Tech</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ancient" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ancientGames.map((game, index) => (
                <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{animationDelay: `${index * 100}ms`}}>
                  <GameCard {...game} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="modern" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modernGames.map((game, index) => (
                <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{animationDelay: `${index * 100}ms`}}>
                  <GameCard {...game} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="future" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {futureGames.map((game, index) => (
                <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{animationDelay: `${index * 100}ms`}}>
                  <GameCard {...game} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </div>
  );
};

export default Index;