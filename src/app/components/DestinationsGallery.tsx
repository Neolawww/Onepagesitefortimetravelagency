import { motion } from 'motion/react';
import { DestinationCard } from './DestinationCard';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';

const destinations = [
  {
    id: 1,
    title: "Paris 1889",
    period: "Belle Époque",
    description: "Découvrez Paris durant l'Exposition Universelle et admirez l'inauguration de la Tour Eiffel.",
    imageUrl: "https://images.unsplash.com/photo-1632749696219-4c3ba70af799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlaWZmZWwlMjB0b3dlciUyMHBhcmlzJTIwdmludGFnZSUyMGJlbGxlJTIwZXBvcXVlfGVufDF8fHx8MTc3MTU4NDkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: {
      duration: "6 jours temporels",
      highlights: [
        "Assister à l'Exposition Universelle de 1889",
        "Découvrir la Tour Eiffel fraîchement construite",
        "Vivre l'effervescence de la Belle Époque parisienne",
        "Explorer les cafés et cabarets mythiques de Montmartre",
      ],
    },
  },
  {
    id: 2,
    title: "Crétacé -65M",
    period: "Préhistoire",
    description: "Voyagez 65 millions d'années en arrière et observez les dinosaures dans leur habitat naturel.",
    imageUrl: "https://images.unsplash.com/photo-1761549148556-a2cf3307f8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXJhbm5vc2F1cnVzJTIwcmV4JTIwZGlub3NhdXIlMjBwcmVoaXN0b3JpYyUyMGp1bmdsZXxlbnwxfHx8fDE3NzE1ODQ5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: {
      duration: "8 jours temporels",
      highlights: [
        "Observer des Tyrannosaures et Tricératops en liberté",
        "Explorer une nature préhistorique luxuriante",
        "Découvrir des espèces disparues depuis des millions d'années",
        "Vivre dans un environnement sécurisé avec vue panoramique",
      ],
    },
  },
  {
    id: 3,
    title: "Florence 1504",
    period: "Renaissance",
    description: "Plongez au cœur de la Renaissance italienne et rencontrez les plus grands artistes de l'époque.",
    imageUrl: "https://images.unsplash.com/photo-1718726057677-5aebd7e0754a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yZW5jZSUyMGl0YWx5JTIwcmVuYWlzc2FuY2UlMjBjYXRoZWRyYWwlMjBkdW9tb3xlbnwxfHx8fDE3NzE1ODQ5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: {
      duration: "7 jours temporels",
      highlights: [
        "Visiter l'atelier de Michel-Ange durant la création du David",
        "Découvrir Florence au sommet de sa splendeur artistique",
        "Rencontrer les Médicis et les grands mécènes de l'époque",
        "Explorer les palais et cathédrales de la Renaissance",
      ],
    },
  },
];

export function DestinationsGallery() {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);

  return (
    <section id="destinations" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nos Destinations Temporelles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Choisissez votre époque et préparez-vous à vivre une expérience unique à travers le temps.
          </p>
          <p className="text-sm text-gray-500 italic">
            * Les visuels présentés ont été générés lors d'un premier projet "TimeTravel Agency" pour illustrer
            nos destinations uniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              {...destination}
              index={index}
              onLearnMore={() => setSelectedDestination(destination)}
            />
          ))}
        </div>
      </div>

      {/* Detailed Information Dialog */}
      <Dialog open={!!selectedDestination} onOpenChange={() => setSelectedDestination(null)}>
        <DialogContent className="bg-gray-900 border-purple-500/30 text-white max-w-2xl">
          {selectedDestination && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedDestination.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedDestination.period}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedDestination.imageUrl}
                  alt={selectedDestination.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-gray-300">{selectedDestination.description}</p>
                <div>
                  <h3 className="text-purple-400 font-semibold mb-2">Programme du voyage:</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Durée: {selectedDestination.details.duration}
                  </p>
                  <ul className="space-y-2">
                    {selectedDestination.details.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <span className="text-purple-500 mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <span className="text-purple-400 font-semibold">Note importante:</span> Tous nos voyages
                    respectent les protocoles de sécurité temporelle et ne modifient pas la ligne temporelle
                    principale.
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}