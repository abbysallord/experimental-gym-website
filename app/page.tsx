"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { 
  Menu, 
  X, 
  Search, 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  Users, 
  Award, 
  TrendingUp,
  Dumbbell,
  Heart,
  Zap,
  Target,
  CheckCircle2,
  ChevronRight,
  Play,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowRight,
  Check,
  ChevronDown,
  User,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle,
  Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"

// Types
interface ClassItem {
  id: string
  name: string
  image: string
  time: string
  duration: string
  instructor: string
  rating: number
  spots: number
  category: string
}

interface Trainer {
  id: string
  name: string
  image: string
  specialty: string
  experience: string
  rating: number
  certifications: string[]
}

interface MembershipPlan {
  name: string
  price: number
  period: string
  features: string[]
  popular?: boolean
}

interface Testimonial {
  id: string
  name: string
  image: string
  text: string
  rating: number
  achievement: string
}

// Navbar Component
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton
} from "@/components/ui/resizable-navbar"

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { name: "Classes", link: "#classes" },
    { name: "Trainers", link: "#trainers" },
    { name: "Membership", link: "#membership" },
    { name: "Locations", link: "#locations" },
  ]

  return (
    <ResizableNavbar className="top-4">
      <NavBody>
        <div className="flex items-center gap-2 w-full max-w-[200px]">
          <Dumbbell className="h-6 w-6 text-[#FF6200]" />
          <span className="text-xl font-bold text-black dark:text-white">GymBro</span>
        </div>
        
        <NavItems items={navItems} />

        <div className="flex items-center justify-end gap-2 w-full max-w-[200px]">
          <button className="p-2 text-neutral-600 hover:text-[#FF6200] transition-colors dark:text-neutral-300">
            <Search className="h-5 w-5" />
          </button>
          <NavbarButton href="#book" variant="primary" className="bg-[#FF6200] text-white hover:bg-[#e55800] border-none shadow-md">
            Book Now
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-[#FF6200]" />
            <span className="text-xl font-bold text-black dark:text-white">GymBro</span>
          </div>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block w-full py-2 text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-[#FF6200] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton href="#book" variant="primary" className="w-full mt-4 bg-[#FF6200] text-white hover:bg-[#e55800] border-none shadow-md">
            Book Now
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://videos.pexels.com/video-files/3044127/3044127-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Join <span className="text-[#FF6200]">GymBro</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform Your Body, Transform Your Life
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative w-full sm:w-96">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF6200]"
              />
            </div>
            <button className="px-8 py-4 bg-[#FF6200] text-white rounded-full font-semibold hover:bg-[#e55800] transition-all hover:scale-105 flex items-center gap-2">
              Book Now
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#FF6200]" />
              <span className="text-lg">50+ Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#FF6200]" />
              <span className="text-lg">100k+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[#FF6200]" />
              <span className="text-lg">Expert Trainers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Features Section
const Features = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "World-Class Equipment",
      description: "State-of-the-art machines and free weights for all fitness levels"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals dedicated to your fitness journey"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Classes available 24/7 to fit your busy lifestyle"
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Holistic approach to health including nutrition and recovery"
    },
    {
      icon: Zap,
      title: "High-Energy Classes",
      description: "HIIT, Yoga, Spin, and more to keep you motivated"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Advanced analytics to monitor your progress"
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#FF6200]">GymBro</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
            >
              <feature.icon className="h-12 w-12 text-[#FF6200] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Classes Section
const Classes = () => {
  const classes: ClassItem[] = [
    {
      id: "1",
      name: "HIIT Blast",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      time: "6:00 AM",
      duration: "45 min",
      instructor: "Sarah Johnson",
      rating: 4.9,
      spots: 8,
      category: "HIIT"
    },
    {
      id: "2",
      name: "Power Yoga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      time: "7:30 AM",
      duration: "60 min",
      instructor: "Mike Chen",
      rating: 4.8,
      spots: 12,
      category: "Yoga"
    },
    {
      id: "3",
      name: "Strength Training",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      time: "9:00 AM",
      duration: "50 min",
      instructor: "David Martinez",
      rating: 5.0,
      spots: 5,
      category: "Strength"
    },
    {
      id: "4",
      name: "Spin Cycle",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
      time: "5:30 PM",
      duration: "45 min",
      instructor: "Emma Wilson",
      rating: 4.7,
      spots: 10,
      category: "Cardio"
    }
  ]

  return (
    <section id="classes" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#FF6200]">Classes</span>
          </h2>
          <p className="text-xl text-white/70">Find your perfect workout</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={classItem.image}
                  alt={classItem.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#FF6200] text-white text-sm font-semibold rounded-full">
                  {classItem.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{classItem.name}</h3>
                <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                  <Clock className="h-4 w-4" />
                  <span>{classItem.time} • {classItem.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                  <User className="h-4 w-4" />
                  <span>{classItem.instructor}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-[#FF6200] fill-[#FF6200]" />
                    <span className="text-white font-semibold">{classItem.rating}</span>
                  </div>
                  <span className="text-white/70 text-sm">{classItem.spots} spots left</span>
                </div>
                <button className="w-full py-3 bg-[#FF6200] text-white rounded-full font-semibold hover:bg-[#e55800] transition-colors">
                  Book Class
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Trainers Section
const Trainers = () => {
  const trainers: Trainer[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400",
      specialty: "HIIT & Cardio",
      experience: "8 years",
      rating: 4.9,
      certifications: ["NASM-CPT", "CrossFit L2"]
    },
    {
      id: "2",
      name: "Mike Chen",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400",
      specialty: "Yoga & Flexibility",
      experience: "10 years",
      rating: 4.8,
      certifications: ["RYT-500", "Pilates"]
    },
    {
      id: "3",
      name: "David Martinez",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
      specialty: "Strength Training",
      experience: "12 years",
      rating: 5.0,
      certifications: ["CSCS", "USAW"]
    },
    {
      id: "4",
      name: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400",
      specialty: "Spin & Cycling",
      experience: "6 years",
      rating: 4.7,
      certifications: ["Spinning", "ACE-CPT"]
    }
  ]

  return (
    <section id="trainers" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-[#FF6200]">Trainers</span>
          </h2>
          <p className="text-xl text-white/70">Expert guidance for your fitness journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                <p className="text-[#FF6200] font-semibold mb-3">{trainer.specialty}</p>
                <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                  <Award className="h-4 w-4" />
                  <span>{trainer.experience} experience</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 text-[#FF6200] fill-[#FF6200]" />
                  <span className="text-white font-semibold">{trainer.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Membership Section
const Membership = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const plans: MembershipPlan[] = [
    {
      name: "Basic",
      price: billingPeriod === "monthly" ? 999 : 9999,
      period: billingPeriod === "monthly" ? "month" : "year",
      features: [
        "Access to gym equipment",
        "Locker facilities",
        "2 group classes per week",
        "Basic fitness assessment",
        "Mobile app access"
      ]
    },
    {
      name: "Pro",
      price: billingPeriod === "monthly" ? 1999 : 19999,
      period: billingPeriod === "monthly" ? "month" : "year",
      popular: true,
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal training (2 sessions/month)",
        "Nutrition consultation",
        "Priority booking",
        "Guest passes (2/month)"
      ]
    },
    {
      name: "Elite",
      price: billingPeriod === "monthly" ? 3999 : 39999,
      period: billingPeriod === "monthly" ? "month" : "year",
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "Customized meal plans",
        "Recovery & spa access",
        "All locations access",
        "Unlimited guest passes",
        "Priority support"
      ]
    }
  ]

  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-[#FF6200]">Plan</span>
          </h2>
          <p className="text-xl text-white/70 mb-8">Flexible membership options for everyone</p>

          <div className="inline-flex items-center gap-4 p-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "px-6 py-2 rounded-full font-semibold transition-all",
                billingPeriod === "monthly"
                  ? "bg-[#FF6200] text-white"
                  : "text-white/70 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={cn(
                "px-6 py-2 rounded-full font-semibold transition-all",
                billingPeriod === "yearly"
                  ? "bg-[#FF6200] text-white"
                  : "text-white/70 hover:text-white"
              )}
            >
              Yearly
              <span className="ml-2 text-xs text-[#00C4B4]">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-2xl border transition-all hover:scale-105",
                plan.popular
                  ? "bg-gradient-to-b from-[#FF6200]/20 to-black border-[#FF6200]"
                  : "bg-white/5 backdrop-blur-lg border-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF6200] text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                <span className="text-white/70">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-[#00C4B4] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  "w-full py-3 rounded-full font-semibold transition-colors",
                  plan.popular
                    ? "bg-[#FF6200] text-white hover:bg-[#e55800]"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      text: "GymBro transformed my life! Lost 15kg in 6 months with their amazing trainers and supportive community.",
      rating: 5,
      achievement: "Lost 15kg"
    },
    {
      id: "2",
      name: "Rahul Verma",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      text: "Best gym experience ever! The facilities are top-notch and the classes are incredibly motivating.",
      rating: 5,
      achievement: "Gained 8kg muscle"
    },
    {
      id: "3",
      name: "Anita Desai",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      text: "The yoga classes here are phenomenal. My flexibility and mental health have improved dramatically.",
      rating: 5,
      achievement: "Improved flexibility"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success <span className="text-[#FF6200]">Stories</span>
          </h2>
          <p className="text-xl text-white/70">Real transformations from real people</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FF6200] fill-[#FF6200]" />
                    ))}
                  </div>
                  <p className="text-xl text-white/90 mb-4 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div>
                      <p className="text-white font-bold">{testimonials[currentIndex].name}</p>
                      <p className="text-[#00C4B4] text-sm">{testimonials[currentIndex].achievement}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentIndex ? "bg-[#FF6200] w-8" : "bg-white/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  return (
    <section id="locations" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visit Our <span className="text-[#FF6200]">Locations</span>
          </h2>
          <p className="text-xl text-white/70">Find a GymBro near you</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FF6200]/20 rounded-full">
                  <Phone className="h-6 w-6 text-[#FF6200]" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FF6200]/20 rounded-full">
                  <Mail className="h-6 w-6 text-[#FF6200]" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <p className="text-white font-semibold">hello@gymbro.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#FF6200]/20 rounded-full">
                  <MapPin className="h-6 w-6 text-[#FF6200]" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Main Branch</p>
                  <p className="text-white font-semibold">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-white font-semibold mb-4">Operating Hours</h4>
              <div className="space-y-2 text-white/70">
                <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                <p>Saturday - Sunday: 6:00 AM - 10:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082177513865436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What are the membership options?",
      answer: "We offer three membership tiers: Basic, Pro, and Elite. Each plan includes different benefits and access levels. You can choose between monthly and yearly billing, with yearly plans offering a 20% discount."
    },
    {
      question: "Do I need to book classes in advance?",
      answer: "Yes, we recommend booking classes in advance through our mobile app or website to secure your spot. Popular classes fill up quickly, especially during peak hours."
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, all memberships can be frozen for up to 3 months per year. Simply contact our support team or manage it through your account settings."
    },
    {
      question: "Are personal trainers included?",
      answer: "Personal training sessions are included in Pro (2 sessions/month) and Elite (unlimited) memberships. Basic members can purchase sessions separately."
    },
    {
      question: "What should I bring to my first class?",
      answer: "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers and shower facilities at all locations."
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#FF6200]">Questions</span>
          </h2>
          <p className="text-xl text-white/70">Everything you need to know</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-[#FF6200] transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/70">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" }
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" }
    ],
    quick: [
      { label: "Classes", href: "#classes" },
      { label: "Trainers", href: "#trainers" },
      { label: "Membership", href: "#membership" },
      { label: "Locations", href: "#locations" }
    ]
  }

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-[#FF6200]" />
              <span className="text-2xl font-bold text-white">GymBro</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Transform your body and mind with India's best gym chain. Join 100,000+ members on their fitness journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#FF6200] transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#FF6200] transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#FF6200] transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#FF6200] transition-colors">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-white/70 hover:text-[#FF6200] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-white/70 hover:text-[#FF6200] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-white/70 hover:text-[#FF6200] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2025 GymBro. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white/70 hover:text-[#FF6200] transition-colors text-sm flex items-center gap-2"
          >
            Back to top
            <ChevronRight className="h-4 w-4 rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </footer>
  )
}

// Main Component
export default function GymBroWebsite() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Trainers />
      <Membership />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}
