
import GameCard from "./GameCard";

const AncientIndia = () => {
  const ancientGames = [
    {
      name: "Pachisi",
      description: "The ancient predecessor to modern Ludo, played on cross-shaped boards with cowrie shells as dice.",
      url: "https://www.youtube.com/watch?v=qI-LHcCyMZQ"
    },
    {
      name: "Chaupar",
      description: "A traditional Indian board game similar to Pachisi, popular among Mughal royalty.",
      url: "https://www.youtube.com/watch?v=5XxeN1r4oXs"
    },
    {
      name: "Gilli Danda",
      description: "Traditional Indian street game played with two wooden sticks, testing skill and precision.",
      url: "https://www.youtube.com/watch?v=VQNYMwrM9Fg"
    },
    {
      name: "Kabaddi",
      description: "Ancient contact sport combining wrestling and tag, requiring strength and strategy.",
      url: "https://www.youtube.com/watch?v=t2FgkxgijgM"
    },
    {
      name: "Kho-Kho",
      description: "Traditional Indian tag sport played between two teams, emphasizing speed and agility.",
      url: "https://www.youtube.com/watch?v=R9oEp7Z2Tko"
    },
    {
      name: "Mallakhamb",
      description: "Ancient Indian sport combining gymnastics and yoga on a vertical wooden pole.",
      url: "https://www.youtube.com/watch?v=IgRwq7rpMX8"
    },
    {
      name: "Akharas (Wrestling)",
      description: "Traditional Indian wrestling practiced in earthen pits, building strength and character.",
      url: "https://www.youtube.com/watch?v=tt0VtYYghlE"
    },
    {
      name: "Chess (Chaturanga)",
      description: "The ancient Indian origin of modern chess, representing the four divisions of the military.",
      url: "https://www.youtube.com/watch?v=vqXLGX0szIQ"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-amber-800 mb-4">Ancient Indian Games</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover the rich heritage of traditional Indian games that have been played for millennia, 
          shaping cultures and bringing communities together across the subcontinent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ancientGames.map((game, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <GameCard 
              name={game.name}
              description={game.description}
              url={game.url}
              category="ancient"
            />
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8 text-center border-2 border-amber-200">
        <h3 className="text-2xl font-bold text-amber-800 mb-4">The Foundation of Play</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          These ancient games weren't just entertainment—they were tools for physical fitness, 
          mental development, and social bonding. Many modern games trace their origins back to these timeless traditions.
        </p>
      </div>
    </div>
  );
};

export default AncientIndia;
