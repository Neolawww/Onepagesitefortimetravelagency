import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  period: string;
  description: string;
  imageUrl: string;
  details: {
    duration: string;
    highlights: string[];
  };
  index: number;
  onLearnMore: () => void;
}

export function DestinationCard({
  title,
  period,
  description,
  imageUrl,
  details,
  index,
  onLearnMore,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="bg-gray-900/50 border-purple-500/30 hover:border-purple-500/60 transition-all overflow-hidden backdrop-blur-sm group">
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
              {period}
            </span>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-2xl text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              <span className="text-purple-400 font-semibold">Durée:</span> {details.duration}
            </p>
            <div>
              <p className="text-sm text-purple-400 font-semibold mb-2">Points forts:</p>
              <ul className="space-y-1">
                {details.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button
            onClick={onLearnMore}
            className="w-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-600 hover:to-purple-600 text-white"
          >
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
