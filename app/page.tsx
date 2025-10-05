"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tv,
  Download,
  Globe,
  GraduationCap,
  Code,
  Palette,
  TrendingUp,
  Users,
  Star,
  CheckCircle2,
  Zap,
  Award,
} from "lucide-react"

export default function HomePage() {
  const [email, setEmail] = useState("")

  const thumbnails = [
    { id: 0, image: "/web-development-coding-laptop-screen.jpg" },
    { id: 1, image: "/data-science-python-programming.jpg" },
    { id: 2, image: "/graphic-design-adobe-photoshop.jpg" },
    { id: 3, image: "/business-management-strategy.jpg" },
    { id: 4, image: "/digital-marketing-social-media.png" },
    { id: 5, image: "/machine-learning-ai-neural-network.jpg" },
    { id: 6, image: "/photography-camera-equipment.jpg" },
    { id: 7, image: "/music-production-studio-equipment.jpg" },
    { id: 8, image: "/mobile-app-development.png" },
    { id: 9, image: "/cybersecurity-network-security.jpg" },
    { id: 10, image: "/video-editing-premiere-pro.jpg" },
    { id: 11, image: "/3d-modeling-blender-animation.jpg" },
    { id: 12, image: "/financial-accounting-spreadsheet.jpg" },
    { id: 13, image: "/language-learning-books-dictionary.jpg" },
    { id: 14, image: "/yoga-fitness-wellness-exercise.jpg" },
    { id: 15, image: "/cooking-culinary-arts-kitchen.jpg" },
    { id: 16, image: "/architecture-building-design.jpg" },
    { id: 17, image: "/ui-ux-design-interface-mockup.jpg" },
    { id: 18, image: "/blockchain-cryptocurrency-bitcoin.jpg" },
    { id: 19, image: "/public-speaking-presentation-stage.jpg" },
    { id: 20, image: "/excel-spreadsheet-data-analysis.jpg" },
    { id: 21, image: "/javascript-react-code-editor.jpg" },
    { id: 22, image: "/cloud-computing-aws-azure.jpg" },
    { id: 23, image: "/game-development-unity-unreal.jpg" },
    { id: 24, image: "/seo-search-engine-optimization.jpg" },
    { id: 25, image: "/project-management-agile-scrum.jpg" },
    { id: 26, image: "/illustration-digital-art-drawing.jpg" },
    { id: 27, image: "/content-writing-copywriting.jpg" },
    { id: 28, image: "/sql-database-management.jpg" },
    { id: 29, image: "/animation-motion-graphics.jpg" },
    { id: 30, image: "/ecommerce-shopify-store.jpg" },
    { id: 31, image: "/leadership-management-skills.jpg" },
    { id: 32, image: "/interior-design-home-decor.jpg" },
    { id: 33, image: "/personal-finance-investing.jpg" },
    { id: 34, image: "/fashion-design-clothing.jpg" },
    { id: 35, image: "/podcast-audio-production.jpg" },
    { id: 36, image: "/email-marketing-automation.jpg" },
    { id: 37, image: "/product-design-prototyping.jpg" },
    { id: 38, image: "/devops-docker-kubernetes.jpg" },
    { id: 39, image: "/creative-writing-storytelling.jpg" },
    { id: 40, image: "/real-estate-property-investment.jpg" },
    { id: 41, image: "/nutrition-health-wellness.jpg" },
    { id: 42, image: "/sales-negotiation-techniques.jpg" },
    { id: 43, image: "/artificial-intelligence-deep-learning.jpg" },
    { id: 44, image: "/brand-identity-logo-design.jpg" },
    { id: 45, image: "/social-media-influencer-marketing.jpg" },
    { id: 46, image: "/virtual-reality-vr-development.jpg" },
    { id: 47, image: "/stock-trading-forex-market.jpg" },
    { id: 48, image: "/mindfulness-meditation-practice.jpg" },
    { id: 49, image: "/entrepreneurship-startup-business.jpg" },
  ]

  const trendingCourses = [
    { id: 1, title: "Formation 1", image: "/trending-fullstack-web-development.jpg" },
    { id: 2, title: "Formation 2", image: "/trending-ai-machine-learning-course.jpg" },
    { id: 3, title: "Formation 3", image: "/trending-digital-marketing-mastery.jpg" },
    { id: 4, title: "Formation 4", image: "/trending-graphic-design-complete.jpg" },
    { id: 5, title: "Formation 5", image: "/trending-data-science-bootcamp.jpg" },
    { id: 6, title: "Formation 6", image: "/trending-mobile-app-development.jpg" },
    { id: 7, title: "Formation 7", image: "/trending-cybersecurity-expert.jpg" },
    { id: 8, title: "Formation 8", image: "/trending-business-strategy-mba.jpg" },
    { id: 9, title: "Formation 9", image: "/trending-video-production-editing.jpg" },
    { id: 10, title: "Formation 10", image: "/trending-blockchain-cryptocurrency.jpg" },
  ]

  // Features data
  const features = [
    {
      icon: Tv,
      title: "Suivez vos cours partout",
      description: "TV, mobile, PC",
    },
    {
      icon: Download,
      title: "Téléchargez et révisez",
      description: "Hors ligne",
    },
    {
      icon: Globe,
      title: "Accessible partout",
      description: "Dans le monde",
    },
    {
      icon: GraduationCap,
      title: "Profils personnalisés",
      description: "Pour chaque étudiant",
    },
  ]

  // Categories data
  const categories = [
    { icon: Code, title: "Développement", count: "150+ cours", color: "from-cyan-500 to-blue-500" },
    { icon: Palette, title: "Design", count: "120+ cours", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, title: "Business", count: "90+ cours", color: "from-emerald-500 to-teal-500" },
    { icon: Users, title: "Marketing", count: "80+ cours", color: "from-orange-500 to-red-500" },
    { icon: Zap, title: "Data Science", count: "100+ cours", color: "from-blue-500 to-indigo-500" },
    { icon: Award, title: "Leadership", count: "60+ cours", color: "from-violet-500 to-purple-500" },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Développeuse Full-Stack",
      image: "/testimonial-developer-woman.jpg",
      quote:
        "Cette plateforme a transformé ma carrière. Les cours sont exceptionnels et les instructeurs sont des experts.",
      rating: 5,
    },
    {
      name: "Ahmed Benali",
      role: "Designer UI/UX",
      image: "/testimonial-designer-man.jpg",
      quote: "J'ai appris plus en 3 mois ici qu'en 2 ans d'études traditionnelles. Incroyable!",
      rating: 5,
    },
    {
      name: "Marie Dubois",
      role: "Chef de Projet",
      image: "/testimonial-manager-woman.jpg",
      quote: "La flexibilité d'apprendre à mon rythme tout en travaillant à temps plein est parfaite.",
      rating: 5,
    },
  ]

  // Stats data
  const stats = [
    { number: "10K+", label: "Étudiants actifs" },
    { number: "500+", label: "Cours disponibles" },
    { number: "50+", label: "Instructeurs experts" },
    { number: "95%", label: "Taux de satisfaction" },
  ]

  // Pricing plans data
  const plans = [
    {
      name: "Basique",
      price: "35",
      period: "mois",
      features: ["Accès à 100+ cours", "Certificats de base", "Support par email", "Accès mobile"],
      popular: false,
    },
    {
      name: "Premium",
      price: "75",
      period: "mois",
      features: [
        "Accès illimité",
        "Certificats premium",
        "Support prioritaire",
        "Projets pratiques",
        "Mentorat mensuel",
      ],
      popular: true,
    },
    {
      name: "Entreprise",
      price: "150",
      period: "mois",
      features: [
        "Tout Premium +",
        "Comptes multiples",
        "Tableau de bord admin",
        "Formation sur mesure",
        "Support dédié 24/7",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">
      {/* Fixed Background Grid of Thumbnails */}
      <div className="fixed inset-0 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-1 opacity-30 z-0">
        {thumbnails.map((thumb) => (
          <motion.div
            key={thumb.id}
            className="aspect-[2/3] bg-gray-800 rounded-sm overflow-hidden"
            whileHover={{ scale: 1.1, zIndex: 10 }}
            transition={{ duration: 0.3 }}
          >
            <img src={thumb.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Fixed Dark Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10">
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 blur-3xl opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-full" />
          </div>

          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Formations en ligne illimitées, et bien plus
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">À partir de 35 MAD. Annulable à tout moment.</p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-black/50 border-gray-700 text-white placeholder:text-gray-400 text-lg backdrop-blur-sm"
              />
              <Button
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-[#e50914] to-[#ff4d6d] hover:from-[#c40812] hover:to-[#e63950] text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#e50914]/50"
              >
                Commencer
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e50914] to-[#ff4d6d] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-32 bg-gradient-to-b from-black via-gray-900/50 to-black z-10" />

      {/* Trending Courses Section */}
      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tendances</h2>

          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {trendingCourses.map((course) => (
                <motion.div
                  key={course.id}
                  className="relative flex-shrink-0 w-48 md:w-64 snap-start group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -left-4 -top-4 z-10 text-8xl md:text-9xl font-black text-transparent bg-gradient-to-b from-white to-gray-600 bg-clip-text drop-shadow-2xl">
                    {course.id}
                  </div>

                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-[#e50914]/50 transition-all duration-300">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-32 bg-gradient-to-b from-black via-gray-900/30 to-[#0b0b0b] z-10" />

      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Explorez par catégorie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 hover:border-[#e50914]/50 transition-all duration-300 group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.count}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-32 bg-gradient-to-b from-black via-gray-900/50 to-black z-10" />

      {/* Features Section */}
      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 hover:border-[#e50914]/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e50914]/20 to-[#ff4d6d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                <div className="relative">
                  <feature.icon className="w-12 h-12 mb-4 text-[#e50914] group-hover:text-[#ff4d6d] transition-colors duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-balance">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-32 bg-gradient-to-b from-black via-gray-900/50 to-[#0b0b0b] z-10" />

      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Ce que disent nos étudiants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#e50914]"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-32 bg-gradient-to-b from-black via-gray-900/50 to-[#0b0b0b] z-10" />

      <section className="relative py-16 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Choisissez votre plan</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Commencez gratuitement pendant 7 jours, puis choisissez le plan qui vous convient
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#e50914]/30 to-[#ff4d6d]/30 border-[#e50914] scale-105"
                    : "bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-800 hover:border-[#e50914]/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#e50914] to-[#ff4d6d] rounded-full text-sm font-semibold">
                    Plus populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400"> MAD/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#e50914] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#e50914] to-[#ff4d6d] hover:from-[#c40812] hover:to-[#e63950]"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  Commencer
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative h-32 bg-gradient-to-b from-black via-gray-900/50 to-[#0b0b0b] z-10" />

      <section className="relative py-24 px-4 md:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="absolute inset-0 blur-3xl opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-[#e50914] via-[#ff4d6d] to-[#e50914] rounded-full" />
            </div>
            <h2 className="relative text-4xl md:text-5xl font-bold mb-6">Prêt à transformer votre carrière?</h2>
            <p className="relative text-xl text-gray-300 mb-8">
              Rejoignez des milliers d'étudiants qui ont déjà commencé leur parcours d'apprentissage
            </p>
            <Button
              size="lg"
              className="relative h-16 px-12 bg-gradient-to-r from-[#e50914] to-[#ff4d6d] hover:from-[#c40812] hover:to-[#e63950] text-white font-semibold text-xl transition-all duration-300 shadow-2xl shadow-[#e50914]/50"
            >
              Commencer gratuitement
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 md:px-8 bg-[#0b0b0b] border-t border-gray-900 z-10">
        <div className="max-w-7xl mx-auto">
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {["À propos", "FAQ", "Contact", "Conditions", "Politique de confidentialité"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors duration-300">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
