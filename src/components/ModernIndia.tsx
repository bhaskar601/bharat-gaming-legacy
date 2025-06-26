
import GameCard from "./GameCard";

const ModernIndia = () => {
  const modernGames = [
    {
      name: "Ludo King",
      description: "Digital revival of the classic board game, connecting millions of Indian players online.",
      url: "https://www.youtube.com/watch?v=bREIbfDYFuw"
    },
    {
      name: "Chess.com India",
      description: "Rise of Indian grandmasters in the digital chess revolution, dominating global tournaments.",
      url: "https://www.youtube.com/watch?v=PEdQ3F3O0oI"
    },
    {
      name: "BGMI",
      description: "Battlegrounds Mobile India - the localized battle royale that captivated the nation.",
      url: "https://www.youtube.com/watch?v=Yu3e4_WkTDc"
    },
    {
      name: "RummyCircle & Teen Patti",
      description: "Digital versions of traditional Indian card games, preserving cultural gaming practices.",
      url: "https://www.youtube.com/watch?v=RJZ3nG-6HoU"
    },
    {
      name: "Dream11 Fantasy Cricket",
      description: "Fantasy sports platform that revolutionized how Indians engage with cricket.",
      url: "https://www.youtube.com/watch?v=cdfwbAaYPbE"
    },
    {
      name: "Gaming Café Culture",
      description: "Local arcade games and digital café culture that brought gaming to the masses.",
      url: "https://www.youtube.com/watch?v=IAdT3Uw1OHo"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Modern Indian Gaming</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Witness the digital revolution in Indian gaming, where traditional games meet modern technology 
          and new platforms emerge to serve millions of passionate gamers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modernGames.map((game, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <GameCard 
              name={game.name}
              description={game.description}
              url={game.url}
              category="modern"
            />
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 text-center border-2 border-blue-200">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">The Digital Awakening</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Modern Indian gaming represents a beautiful blend of preserving traditional games in digital formats 
          while embracing global gaming trends. This era has seen the rise of homegrown gaming companies and 
          millions of new gamers joining the digital playground.
        </p>
      </div>
    </div>
  );
};

export default ModernIndia;
