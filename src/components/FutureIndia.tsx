
import GameCard from "./GameCard";

const FutureIndia = () => {
  const futureGames = [
    {
      name: "Metaverse Gaming",
      description: "Virtual worlds and metaverse experiences tailored for Indian audiences and culture.",
      url: "https://www.youtube.com/watch?v=gAzZ_Ag9kZw"
    },
    {
      name: "AR/VR Traditional Games",
      description: "Augmented and virtual reality simulations bringing ancient games to life.",
      url: "https://www.youtube.com/watch?v=5VkYH9kfsRs"
    },
    {
      name: "Indian Esports Scene",
      description: "Professional competitive gaming with organizations like Skyesports and Nodwin Gaming.",
      url: "https://www.youtube.com/watch?v=E0FKso0c2Ao"
    },
    {
      name: "Regional Language Gaming",
      description: "Educational and entertainment games developed in local Indian languages.",
      url: "https://www.youtube.com/watch?v=pVo3xChO7yM"
    },
    {
      name: "Raji: An Ancient Epic",
      description: "Made-in-India action-adventure game showcasing Indian mythology and artistry.",
      url: "https://www.youtube.com/watch?v=HpG4zSLop1E"
    },
    {
      name: "Indus Battle Royale",
      description: "India's own battle royale game featuring culturally relevant themes and characters.",
      url: "https://www.youtube.com/watch?v=rPK9FuGzX4I"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Future of Indian Gaming</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore the cutting-edge technologies and innovative approaches shaping the future of gaming in India, 
          from AR/VR experiences to homegrown game development and esports excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {futureGames.map((game, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <GameCard 
              name={game.name}
              description={game.description}
              url={game.url}
              category="future"
            />
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 text-center border-2 border-purple-200">
        <h3 className="text-2xl font-bold text-purple-800 mb-4">The Next Generation</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          The future of Indian gaming lies in the perfect fusion of cutting-edge technology with rich cultural heritage. 
          As India becomes a global gaming powerhouse, we're witnessing the birth of uniquely Indian gaming experiences 
          that will influence the worldwide gaming landscape.
        </p>
      </div>
    </div>
  );
};

export default FutureIndia;
