import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();

  // Questions sur les destinations
  if (message.includes('paris') || message.includes('1889') || message.includes('belle époque') || message.includes('tour eiffel')) {
    return "Ah, Paris 1889 ! Quelle époque fascinante ! 🗼 Imaginez-vous déambuler dans les allées de l'Exposition Universelle, alors que Gustave Eiffel vient d'achever sa tour qui scandalise tant les Parisiens. Vous vivrez l'effervescence de la Belle Époque : les impressionnistes fréquentent encore Montmartre, les grands boulevards brillent de mille feux électriques - une innovation révolutionnaire pour l'époque !\n\nDurée : 6 jours temporels | Prix : 3 500€/personne\n\nCette destination est parfaite pour les amateurs d'art, d'architecture et de culture française. Un voyage idéal pour une première expérience temporelle ! ✨";
  }

  if (message.includes('crétacé') || message.includes('dinosaure') || message.includes('préhistoire') || message.includes('65') || message.includes('dino')) {
    return "Le Crétacé supérieur, il y a 65 millions d'années... Préparez-vous à une aventure absolument extraordinaire ! 🦕 Vous observerez des Tyrannosaures Rex dans leur habitat naturel, des troupeaux majestueux de Tricératops, et une biodiversité qui n'a jamais été égalée depuis. La Terre était alors luxuriante, tropicale, et grouillante de vie.\n\nDurée : 8 jours temporels | Prix : 8 900€/personne\n\nNotre capsule d'observation premium offre une sécurité absolue tout en vous permettant de vivre l'émotion de côtoyer ces géants disparus. Recommandé pour les aventuriers et les passionnés de paléontologie ! 🌿";
  }

  if (message.includes('florence') || message.includes('1504') || message.includes('renaissance') || message.includes('michel-ange') || message.includes('david')) {
    return "Florence en 1504... Le cœur battant de la Renaissance italienne ! 🎨 Vous arriverez précisément au moment où Michel-Ange, alors âgé de 29 ans, vient d'achever sa sculpture du David - considérée aujourd'hui comme le sommet de l'art de la Renaissance. Les Médicis règnent sur la ville, les ateliers d'artistes fourmillent de génies, et l'humanisme transforme la pensée européenne.\n\nDurée : 7 jours temporels | Prix : 4 200€/personne\n\nUne destination de rêve pour les amateurs d'art, d'architecture et d'histoire culturelle. Vous pourriez même croiser Léonard de Vinci ! Une expérience enrichissante et raffinée. 🏛️";
  }

  // Questions sur les prix
  if (message.includes('prix') || message.includes('tarif') || message.includes('coût') || message.includes('combien')) {
    return "Avec plaisir ! Voici nos tarifs pour nos trois destinations d'exception :\n\n🗼 Paris 1889 : 3 500€/personne (6 jours)\n🎨 Florence 1504 : 4 200€/personne (7 jours)\n🦕 Crétacé -65M : 8 900€/personne (8 jours)\n\nCes tarifs incluent le transport temporel, l'hébergement premium, un guide chrono-certifié, les vêtements d'époque, et notre assurance paradoxe temporel complète.\n\nNous proposons également des réductions intéressantes pour les groupes de 4 personnes ou plus. Souhaitez-vous en savoir plus sur une destination en particulier ? 💎";
  }

  // Conseils pour choisir selon les intérêts
  if (message.includes('art') || message.includes('culture') || message.includes('musée') || message.includes('peinture')) {
    return "Pour un passionné d'art comme vous, je recommande vivement Florence 1504 ! 🎨 Vous vivrez l'apogée de la Renaissance, une période qui a révolutionné l'art occidental. Imaginez rencontrer Michel-Ange en personne, observer les techniques des maîtres dans leurs ateliers, visiter les palais Médicis...\n\nParis 1889 est également magnifique pour l'art : les impressionnistes comme Monet, Renoir et Degas sont encore actifs, et vous découvrirez l'Art Nouveau naissant.\n\nQuelle période artistique vous attire le plus : la Renaissance italienne ou l'impressionnisme français ?";
  }

  if (message.includes('aventure') || message.includes('nature') || message.includes('animal') || message.includes('sensation')) {
    return "Pour les âmes aventureuses, le Crétacé est une destination incomparable ! 🦖 C'est l'expérience la plus immersive que nous proposons. Vous vivrez des moments d'une intensité rare : observer un Tyrannosaure chasser, entendre le bruit sourd d'un troupeau de dinosaures herbivores, découvrir une flore préhistorique luxuriante...\n\nTout cela depuis notre capsule d'observation dernier cri, alliant sécurité absolue et émotions fortes. C'est un voyage qui transforme à jamais notre perception du vivant.\n\nÊtes-vous prêt pour cette aventure extraordinaire ? 🌿";
  }

  if (message.includes('histoire') || message.includes('historique')) {
    return "Ah, un passionné d'histoire ! Vous êtes au bon endroit. 📚 Chacune de nos destinations offre une immersion historique unique :\n\n• Paris 1889 vous plonge dans la France de la IIIe République, l'expansion coloniale, et les prémices de la Belle Époque\n• Florence 1504 vous fait vivre la Renaissance à son apogée, le mécénat des Médicis, et l'humanisme italien\n• Le Crétacé vous ramène aux origines de l'histoire naturelle, bien avant l'humanité\n\nQuelle période historique vous fascine le plus ? Je peux vous conseiller selon vos centres d'intérêt spécifiques !";
  }

  if (message.includes('famille') || message.includes('enfant') || message.includes('jeune')) {
    return "Pour un voyage en famille, excellente idée ! 👨‍👩‍👧‍👦 Je vous recommande particulièrement :\n\n🦕 Le Crétacé pour les enfants fascinés par les dinosaures (à partir de 10 ans recommandé)\n🗼 Paris 1889 pour les adolescents passionnés d'histoire et de culture (dès 8 ans)\n\nNous proposons des tarifs familiaux avantageux et nos guides sont formés pour captiver les jeunes voyageurs temporels. Les enfants repartent avec des souvenirs inoubliables et une nouvelle passion pour l'histoire !\n\nQuel âge ont vos voyageurs en herbe ?";
  }

  if (message.includes('romantique') || message.includes('couple') || message.includes('amour')) {
    return "Pour une escapade romantique inoubliable, laissez-moi vous suggérer Paris 1889 ! 💕 La Belle Époque incarne le romantisme français par excellence : dîners aux chandelles dans les cabarets de Montmartre, promenades le long de la Seine au coucher du soleil, valses dans les salons bourgeois...\n\nFlorence 1504 offre également un cadre magnifique : les ponts sur l'Arno, les palais Renaissance, l'atmosphère artistique et raffinée de la Toscane.\n\nCes deux destinations sont parfaites pour célébrer un anniversaire ou une lune de miel temporelle ! ✨";
  }

  // Conseils pour choisir
  if (message.includes('choisir') || message.includes('recommand') || message.includes('conseil') || message.includes('première fois') || message.includes('premier voyage') || message.includes('hésit')) {
    return "Excellente question ! Le choix dépend vraiment de vos passions. Permettez-moi de vous guider : 🌟\n\n🎨 Vous êtes amateur d'art et de culture ? → Florence 1504\n🦕 Vous rêvez d'aventure et de nature ? → Crétacé -65M\n🗼 Premier voyage temporel ou fan de Paris ? → Paris 1889\n\nPour une première expérience, je recommande souvent Paris 1889 : l'époque est proche, culturellement accessible, et le risque temporel minimal. Parfait pour s'initier aux voyages temporels !\n\nQu'est-ce qui vous fait vibrer ? L'art, l'aventure, l'histoire, la nature ? Je peux affiner ma recommandation ! 😊";
  }

  // Questions sur la sécurité
  if (message.includes('sécurité') || message.includes('sécurisé') || message.includes('danger') || message.includes('risque')) {
    return "La sécurité est notre engagement absolu, et je comprends parfaitement vos préoccupations. 🛡️\n\nTous nos voyages bénéficient de protocoles ultra-stricts :\n• Capsule temporelle blindée avec système de retour d'urgence instantané\n• Guide chrono-certifié avec 500+ heures de formation\n• Assurance paradoxe temporel complète (vous ne pouvez pas modifier la timeline)\n• Champ de protection invisible autour de chaque voyageur\n• Équipe médicale spécialisée en médecine temporelle\n\nNous sommes certifiés par le Conseil Temporel International. En 15 ans d'activité, nous maintenons un taux de satisfaction de 99,8% et zéro incident majeur.\n\nVotre sécurité est notre priorité numéro un ! Des questions spécifiques ?";
  }

  // Questions sur la réservation
  if (message.includes('réserver') || message.includes('réservation') || message.includes('booking')) {
    return "Je serais ravi de vous accompagner dans votre réservation ! 📝\n\nLe processus est simple et sécurisé :\n1. Remplissez notre formulaire sur cette page (en bas)\n2. Notre IA analyse votre profil voyageur (24h)\n3. Vous recevez une proposition personnalisée par email\n4. Validation et paiement sécurisé en ligne\n5. Réception de votre kit de préparation temporelle\n\nNos conseillers sont également disponibles pour un entretien personnalisé si vous le souhaitez. Avez-vous déjà une destination en tête, ou puis-je vous aider à choisir ? ✨";
  }

  // Questions sur les groupes
  if (message.includes('groupe')) {
    return "Les voyages en groupe sont une expérience merveilleuse ! 👥\n\nNos avantages groupes :\n• 4-6 personnes : -10% sur le tarif total\n• 7-10 personnes : -15% sur le tarif total  \n• Plus de 10 : tarif préférentiel sur demande\n• Guide privé dédié à votre groupe\n• Itinéraire personnalisable selon vos intérêts\n\nIdéal pour les voyages entre amis, les familles élargies, ou même les séminaires d'entreprise (oui, imaginez un team-building au Crétacé !).\n\nCombien de voyageurs temporels êtes-vous ?";
  }

  // Questions sur la durée
  if (message.includes('durée') || message.includes('combien de temps') || message.includes('long')) {
    return "Question très pertinente sur la durée ! ⏱️\n\nNos programmes :\n🗼 Paris 1889 : 6 jours temporels\n🎨 Florence 1504 : 7 jours temporels  \n🦕 Crétacé -65M : 8 jours temporels\n\nMais voici la magie du voyage temporel : grâce à notre technologie de synchronisation temporelle, vous vivrez ces jours complets dans l'époque choisie, mais ne serez absent de votre présent que 48 à 72 heures ! Parfait pour les emplois du temps chargés.\n\nC'est l'un des grands avantages du tourisme temporel ! 🌟";
  }

  // Questions sur ce qui est inclus
  if (message.includes('inclus') || message.includes('compris') || message.includes('fourni')) {
    return "Excellente question ! Nos forfaits tout-inclus comprennent : ✨\n\n✓ Transport temporel aller-retour premium\n✓ Hébergement en capsule 5 étoiles (climatisation, confort moderne)\n✓ Guide chrono-certifié expert de l'époque\n✓ Garde-robe d'époque sur mesure (authentique !)\n✓ Traducteur neuronal universel intégré\n✓ Assurance paradoxe temporel complète\n✓ Kit médical adapté temporellement\n✓ Prises de vues autorisées (photos/vidéos)\n✓ Certificat de voyage temporel authentifié\n\nNon inclus : repas gastronomiques d'époque (en option) et souvenirs personnels.\n\nTout est pensé pour votre confort et votre sécurité ! Des questions sur un aspect particulier ?";
  }

  // Salutations
  if (message.includes('bonjour') || message.includes('salut') || message.includes('hello') || message.includes('hi') || message.includes('coucou')) {
    return "Bonjour et bienvenue chez TimeTravel Agency ! Je suis ChronoBot, votre conseiller en voyages temporels. 🌟\n\nPassionné d'histoire et expert en chrono-tourisme, je suis là pour vous aider à choisir la destination parfaite parmi nos trois joyaux :\n\n🗼 Paris 1889 - La Belle Époque\n🦕 Crétacé -65M - L'ère des dinosaures  \n🎨 Florence 1504 - Renaissance italienne\n\nJe peux vous conseiller sur les destinations, les tarifs, la sécurité, ou tout simplement discuter de vos centres d'intérêt pour trouver votre voyage idéal.\n\nQu'est-ce qui vous passionne : l'art, l'histoire, l'aventure, la nature ? 😊";
  }

  // Remerciements
  if (message.includes('merci') || message.includes('thank')) {
    return "Tout le plaisir est pour moi ! 😊 C'est toujours un bonheur de partager ma passion pour l'histoire et les voyages temporels.\n\nN'hésitez surtout pas si d'autres questions vous viennent à l'esprit. Je suis là pour vous accompagner dans cette aventure extraordinaire.\n\nQue votre voyage à travers le temps soit inoubliable ! ✨⏱️";
  }

  // Au revoir
  if (message.includes('au revoir') || message.includes('bye') || message.includes('à bientôt') || message.includes('adieu')) {
    return "Au revoir et à très bientôt, j'espère ! 👋\n\nQue ce soit pour Paris 1889, Florence 1504 ou le Crétacé, je serai ravi de vous accompagner dans votre préparation.\n\nBon voyage à travers le temps ! ⏱️✨";
  }

  // Question sur l'époque préférée du bot
  if (message.includes('préfère') || message.includes('favorite') || message.includes('meilleure')) {
    return "Ah, quelle question délicate ! Chaque époque a son charme unique... 😊\n\nSi je devais choisir, je dirais que Florence 1504 m'émeut particulièrement. La Renaissance représente un moment où l'humanité a osé repenser le monde, où l'art et la science se sont réinventés. Voir Michel-Ange sculpter le David... c'est assister à la naissance d'un chef-d'œuvre éternel.\n\nMais le Crétacé offre une perspective humiliante et fascinante : nous réaliser comme une espèce parmi tant d'autres dans l'histoire de la Terre.\n\nEt Paris 1889 ? C'est la joie de vivre française à son apogée !\n\nChacune mérite d'être vécue. Et vous, vers quelle époque votre cœur penche-t-il ? 💭";
  }

  // Réponse par défaut personnalisée
  return "C'est une excellente question ! Je vais faire de mon mieux pour vous éclairer. 🌟\n\nJe suis spécialisé dans nos trois destinations exceptionnelles et je peux vous renseigner sur :\n\n• Les spécificités de chaque époque (histoire, culture, points d'intérêt)\n• Les tarifs et options de réservation\n• Des conseils personnalisés selon vos passions\n• Les aspects pratiques et sécuritaires\n\nN'hésitez pas à me poser une question plus précise, ou simplement à me parler de vos centres d'intérêt (art, histoire, aventure, nature...). Je pourrai ainsi vous orienter vers la destination qui vous correspondra le mieux !\n\nQue souhaitez-vous découvrir ? 😊";
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Bonjour ! Je suis ChronoBot 🤖 Posez-moi vos questions sur nos voyages temporels !",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
            >
              <MessageCircle className="h-7 w-7 text-white" />
            </Button>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] md:w-[420px]"
          >
            <Card className="bg-gray-900/95 border-purple-500/30 backdrop-blur-lg shadow-2xl shadow-purple-500/20 overflow-hidden">
              {/* Header */}
              <CardHeader className="border-b border-purple-500/20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">ChronoBot</CardTitle>
                      <p className="text-xs text-green-400">En ligne</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-purple-600/20"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="p-4 h-[400px] overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.sender === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'bg-purple-900/30 text-gray-200'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className="text-xs opacity-60 mt-1">
                          {message.timestamp.toLocaleTimeString('fr-FR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-purple-900/30 rounded-lg p-3">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-purple-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Input */}
              <div className="border-t border-purple-500/20 bg-gray-900/50 p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Posez-moi vos questions sur les voyages temporels..."
                    className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500 flex-1"
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Appuyez sur Entrée pour envoyer</p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}