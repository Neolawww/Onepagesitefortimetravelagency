import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Bot, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';

export function ChatbotSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Votre Assistant IA Personnel
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Notre agent conversationnel intelligent est là pour vous guider dans votre voyage temporel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Chatbot Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border-purple-500/30 overflow-hidden">
              <CardHeader className="border-b border-purple-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">ChronoBot</CardTitle>
                    <CardDescription className="text-gray-400">
                      Assistant IA TimeTravel Agency
                    </CardDescription>
                  </div>
                  <div className="ml-auto">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {/* Sample chat messages */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-300">
                        Bonjour ! Je suis ChronoBot, votre assistant personnel. Comment puis-je vous aider dans
                        votre voyage temporel aujourd'hui ?
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-blue-900/30 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-300">
                        Quelle destination recommandez-vous pour un premier voyage ?
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-300">
                        Pour un premier voyage, je recommande l'Antiquité Romaine. C'est une période fascinante
                        avec un excellent équilibre entre sécurité et immersion culturelle !
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input placeholder */}
                <div className="flex gap-2 pt-4 border-t border-purple-500/20">
                  <div className="flex-1 bg-gray-800/50 rounded-lg px-4 py-2">
                    <p className="text-sm text-gray-500">Posez votre question...</p>
                  </div>
                  <Button
                    size="icon"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg h-fit">
                  <Sparkles className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Conseils Personnalisés</h3>
                  <p className="text-gray-400">
                    ChronoBot analyse vos préférences et vous recommande les destinations temporelles les mieux
                    adaptées à vos envies et à votre profil de voyageur.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg h-fit">
                  <HelpCircle className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Réponses Automatiques aux FAQ</h3>
                  <p className="text-gray-400">
                    Obtenez des réponses instantanées à toutes vos questions sur les protocoles de voyage
                    temporel, la sécurité, les tarifs et les destinations disponibles.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg h-fit">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Disponible 24/7</h3>
                  <p className="text-gray-400">
                    Notre agent IA est intégré directement sur le site et disponible à tout moment pour vous
                    accompagner dans la planification de votre voyage temporel.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-purple-500/30"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Parler à notre agent IA
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
