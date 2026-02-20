import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function BookingForm() {
  const [formData, setFormData] = useState({
    destination: '',
    departureDate: '',
    returnDate: '',
    fullName: '',
    email: '',
    travelers: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.destination || !formData.departureDate || !formData.returnDate || !formData.fullName || !formData.email || !formData.travelers) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    // Simuler l'envoi
    toast.success('Demande envoyée ! Notre système intelligent analyse votre réservation...', {
      description: 'Vous recevrez une confirmation par email sous 24 heures temporelles.',
      duration: 5000,
    });

    // Réinitialiser le formulaire
    setFormData({
      destination: '',
      departureDate: '',
      returnDate: '',
      fullName: '',
      email: '',
      travelers: '',
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Réservez Votre Voyage Temporel
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Complétez le formulaire ci-dessous pour commencer votre aventure à travers le temps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gray-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Calendar className="h-6 w-6 text-purple-400" />
                Formulaire de Réservation
              </CardTitle>
              <CardDescription className="text-gray-400">
                Toutes les informations sont sécurisées et traitées par notre système intelligent.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Destination */}
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-white">
                    Destination Temporelle
                  </Label>
                  <Select value={formData.destination} onValueChange={(value) => setFormData({ ...formData, destination: value })}>
                    <SelectTrigger className="bg-gray-800 border-purple-500/30 text-white">
                      <SelectValue placeholder="Choisissez votre époque" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-purple-500/30 text-white">
                      <SelectItem value="paris1889">Paris 1889 (Belle Époque)</SelectItem>
                      <SelectItem value="cretace">Crétacé -65M (Préhistoire)</SelectItem>
                      <SelectItem value="florence1504">Florence 1504 (Renaissance)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="departureDate" className="text-white">
                      Date de Départ
                    </Label>
                    <Input
                      id="departureDate"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="bg-gray-800 border-purple-500/30 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="returnDate" className="text-white">
                      Date de Retour
                    </Label>
                    <Input
                      id="returnDate"
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                      className="bg-gray-800 border-purple-500/30 text-white"
                    />
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white">
                    Nom Complet
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Votre nom complet"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="travelers" className="text-white">
                    Nombre de Voyageurs
                  </Label>
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="1"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500"
                  />
                </div>

                {/* AI Notice */}
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 flex gap-3">
                  <Sparkles className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    Votre demande sera analysée automatiquement par notre système intelligent avant confirmation.
                    Vous recevrez un email de validation dans les 24 heures temporelles suivant votre demande.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}