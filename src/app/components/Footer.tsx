import { motion } from 'motion/react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              TimeTravel Agency
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              La première agence de voyage temporel au monde. Explorez le passé, le présent et le futur en toute
              sécurité.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span>contact@timetravel.agency</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span>+33 (0)1 00 00 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>Paris, France (Dimension Alpha)</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Horaires</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-400" />
                <span>Disponible 24/7 dans toutes les lignes temporelles</span>
              </div>
              <p className="mt-4 text-xs">
                * Les horaires peuvent varier selon votre position temporelle actuelle.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2026 TimeTravel Agency. Tous droits réservés à travers toutes les époques.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Agence fictive créée à des fins de démonstration uniquement.
          </p>
        </div>
      </div>
    </footer>
  );
}
