"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Cloud,
  Menu,
  X,
  ExternalLink,
  Download,
  ChevronDown,
  Star,
  TrendingUp,
  Sparkles,
  Zap,
  Target,
} from "lucide-react"
import Image from "next/image"
import { sendContactMessage } from "./actions/contact"
import { useActionState } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, certifications: 0, cgpa: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [contactState, contactAction, isContactPending] = useActionState(sendContactMessage, null)

  const profileImages = [
    { src: "/images/shyam-casual.jpg", alt: "Shyam Sundar - Casual", title: "Creative Developer" },
    { src: "/images/shyam-formal.jpg", alt: "Shyam Sundar - Formal", title: "Professional Leader" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsVisible(true)

    // Animate counters
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          projects: Math.floor(3 * progress),
          certifications: Math.floor(6 * progress),
          cgpa: Math.floor(8.92 * progress * 100) / 100,
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters({ projects: 3, certifications: 6, cgpa: 8.92 })
        }
      }, stepDuration)
    }

    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Image slider effect
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(imageTimer)
  }, [profileImages.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    languages: ["C", "C++", "Python", "HTML/CSS", "Django", "SQL", "JavaScript"],
    databases: ["Oracle", "MongoDB", "MySQL"],
    tools: ["AWS Cloud", "Figma", "Git", "GitHub", "VS Code", "Postman", "Jira"],
  }

  const projects = [
    {
      title: "Placement Portal",
      period: "January – April 2025",
      tech: ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQL"],
      description:
        "A web-based application built to streamline the campus recruitment process. Features include role-based access, company visit reports, student placement status, and skill-based event scheduling.",
      features: [
        "Student registration and job browsing",
        "Admin job posting and management",
        "Placement statistics tracking",
        "Automated recruitment process",
      ],
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Calories Tracker",
      period: "March – May 2024",
      tech: ["Python", "HTML", "CSS", "JavaScript", "Django"],
      description:
        "A user-friendly web application designed to help users monitor and manage their daily calorie intake and expenditure.",
      features: ["Fitness goal setting", "Meal logging", "Exercise tracking", "Health insights dashboard"],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Doctor's Appointment System",
      period: "October – December 2023",
      tech: ["Python", "MySQL"],
      description:
        "A web-based application to streamline the process of booking, managing, and tracking doctor appointments with real-time updates.",
      features: ["Patient-doctor interaction", "Appointment booking", "Real-time updates", "Easy-to-use interface"],
      icon: <Sparkles className="h-6 w-6" />,
    },
  ]

  const certifications = [
    { name: "Python Essentials 1 & 2", issuer: "Cisco Networking Academy", date: "30 April 2025" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "30 April 2025" },
    { name: "CCNA Introduction to Networks", issuer: "Cisco Networking Academy", date: "13 june 2025" },
    { name: "CCNA Enterprise Networking, Security, and Automation", issuer: "Cisco Networking Academy", date: "13 june 2025" },
    { name: "CCNA Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", date: "16 june 2025" },
    { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy Graduate", date: "03 April 2025" },
    { name: "Data Analytics Job Simulation", issuer: "Deloitte (via Forage)", date: "26 February 2025" },
    { name: "Getting Started with DevOps", issuer: "LinkedIn", date: "21 june 2025" },
    { name: "Introduction to Artificial Intlligence", issuer: "LinkedIn", date: "5 march 2025" },
    { name: "Practical GitHub Project Management and Collaboration", issuer: "LinkedIn", date: "21 December 2024" },
    {
      name: "Problem Solving, Aptitude, and Soft Skills Training",
      issuer: "SDFS, KIET Group of Institutions",
      date: "10 Feb – 1 Mar 2025",
    },
    { name: "UI/UX", issuer: "Innovation Cell KIET", date: "11 October 2024" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.jpg"
                alt="Shyam Sundar Logo"
                width={50}
                height={50}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-gray-900">Shyam Sundar</div>
                <div className="text-xs text-gray-500">Full-Stack Developer</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Education", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
              {["Home", "About", "Education", "Skills", "Projects", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 rounded-lg mx-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-70"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            {/* Image Slider */}
            <div
              className={`mb-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="relative inline-block">
                <div className="relative w-56 h-56 mx-auto">
                  {profileImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentImageIndex ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-3"
                      }`}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={224}
                        height={224}
                        className="rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500 object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                {/* Status Indicators */}
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white animate-pulse flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                {/* Image Dots Indicator */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {profileImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <h1
              className={`text-5xl sm:text-7xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shyam Sundar
              </span>
            </h1>

            <p
              className={`text-xl sm:text-3xl text-gray-600 mb-6 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              {profileImages[currentImageIndex].title}
            </p>

            <p
              className={`text-lg text-gray-500 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Passionate about creating innovative web applications with expertise in Python, Django, and modern web
              technologies. Transforming ideas into digital reality with clean code and creative solutions.
            </p>

            {/* Enhanced Stats Counter */}
            <div
              className={`grid grid-cols-3 gap-8 max-w-lg mx-auto mb-10 transform transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-600 mb-1">{counters.projects}+</div>
                <div className="text-sm text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-purple-600 mb-1">{counters.certifications}+</div>
                <div className="text-sm text-gray-600 font-medium">Certifications</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-pink-600 mb-1">{counters.cgpa}</div>
                <div className="text-sm text-gray-600 font-medium">CGPA</div>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button
                onClick={() => {
                  const resumeContent = `SHYAM SUNDAR
+91 7599406897 | shyam.2426mca1971@kiet.edu
LinkedIn: linkedin.com/in/shyam-sundar-115797300 | GitHub: github.com/shyam123-pro

EDUCATION
Masters of Computer Applications (MCA) | 2024-26
KIET Group of Institutions, Ghaziabad (AKTU, Lucknow) | CGPA: 8.92

Bachelors Of Science (Vocational) | 2021-24
Dr. Bhimrao Ambedkar University, Agra | Percentage: 78.34%

TECHNICAL SKILLS
Languages: C, C++, Python, HTML/CSS, Django, SQL, JavaScript
Databases: Oracle, MongoDB, MySQL
Tools: AWS Cloud, Figma, Git, GitHub, VS Code, Postman, Jira

PROJECTS
Placement Portal (Jan-Apr 2025)
- Web application for campus recruitment process
- Technologies: HTML, CSS, JavaScript, Python, Django, MySQL

Calories Tracker (Mar-May 2024)
- Health monitoring web application
- Technologies: Python, HTML, CSS, JavaScript, Django

Doctor's Appointment System (Oct-Dec 2023)
- Appointment booking and management system
- Technologies: Python, MySQL

CERTIFICATIONS
- Python Essentials 1 & 2 - Cisco Networking Academy
- Introduction to Cybersecurity - Cisco Networking Academy
- AWS Academy Cloud Foundations - AWS Academy
- Data Analytics Job Simulation - Deloitte (via Forage)
- UI/UX - Innovation Cell KIET

ACHIEVEMENTS
- Gold Medal in Volleyball - Inter-School Sports Competition
- Silver Medal in Chess - Inter-School Championship`

                  const blob = new Blob([resumeContent], { type: "text/plain" })
                  const url = window.URL.createObjectURL(blob)
                  const link = document.createElement("a")
                  link.href = url
                  link.download = "Shyam-Sundar-Resume.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                  window.URL.revokeObjectURL(url)
                }}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <a href="/resume.pdf" download></a>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center">
                <ChevronDown className="h-6 w-6 text-gray-400 mb-1" />
                <div className="text-xs text-gray-400 font-medium">Scroll Down</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a dedicated MCA student at KIET Group of Institutions with a strong foundation in computer science and
              a passion for developing innovative web applications. With experience in full-stack development and cloud
              technologies, I'm always eager to learn and take on new challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      🥇
                    </Badge>
                    <span className="font-medium">Gold Medal in Volleyball - Inter-School Sports Competition</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                      🥈
                    </Badge>
                    <span className="font-medium">Silver Medal in Chess - Inter-School Championship</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-2">
                    <strong>Location:</strong>
                    <span className="text-gray-600">Ghaziabad, India</span>
                  </li>
                  <li className="flex justify-between items-center p-2">
                    <strong>Current CGPA:</strong>
                    <span className="text-blue-600 font-semibold">8.92 (Sem I)</span>
                  </li>
                  <li className="flex justify-between items-center p-2">
                    <strong>Languages:</strong>
                    <span className="text-gray-600">English, Hindi</span>
                  </li>
                  <li className="flex justify-between items-center p-2">
                    <strong>Interests:</strong>
                    <span className="text-gray-600">Web Dev, Cloud, UI/UX</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-xl">Masters of Computer Applications (MCA)</CardTitle>
                <CardDescription className="text-base">KIET Group of Institutions, Ghaziabad • 2024-26</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Affiliated to AKTU, Lucknow</p>
                <p className="font-semibold text-green-600 text-lg">CGPA (Sem I): 8.92</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-xl">Bachelors Of Science (Vocational)</CardTitle>
                <CardDescription className="text-base">Dr. Bhimrao Ambedkar University, Agra • 2021-24</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-blue-600 text-lg">Percentage: 78.34%</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle>Intermediate (CBSE)</CardTitle>
                  <CardDescription>New St Stephen's Public School, Agra • 2020-21</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-purple-600">Percentage: 84%</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-pink-500">
                <CardHeader>
                  <CardTitle>High School (CBSE)</CardTitle>
                  <CardDescription>New St Stephen's Public School, Agra • 2018-19</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-pink-600">Percentage: 87%</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-600" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 cursor-pointer transform hover:scale-110 hover:shadow-md"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-green-600" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-800 transition-all duration-200 cursor-pointer transform hover:scale-110 hover:shadow-md"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-6 w-6 text-purple-600" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-purple-100 hover:text-purple-800 transition-all duration-200 cursor-pointer transform hover:scale-110 hover:shadow-md"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer border-l-4 border-l-gradient-to-b from-blue-500 to-purple-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                      {project.icon}
                    </div>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <p className="text-sm text-gray-600">{project.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 hover:text-gray-800 transition-colors duration-200"
                        >
                          <span className="text-blue-600 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 transform hover:scale-105"
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-teal-500"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-teal-600" />
                    {cert.name}
                  </CardTitle>
                  <CardDescription className="font-medium">{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="hover:shadow-2xl transition-all duration-300 border-t-4 border-t-gradient-to-r from-indigo-500 to-purple-500">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Mail className="h-6 w-6 text-indigo-600" />
                    Send Me a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={contactAction} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-none"
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isContactPending}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {isContactPending ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {contactState && (
                      <div
                        className={`p-4 rounded-lg ${contactState.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                      >
                        {contactState.message}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Resume Download */}
              <div className="space-y-8">
                {/* Download Resume Button */}
                <div className="text-center">
                  <Button
                    onClick={() => {
                      // Create a downloadable resume content
                      const resumeContent = `SHYAM SUNDAR
+91 7599406897 | shyam.2426mca1971@kiet.edu
LinkedIn: linkedin.com/in/shyam-sundar-115797300 | GitHub: github.com/shyam123-pro

EDUCATION
Masters of Computer Applications (MCA) | 2024-26
KIET Group of Institutions, Ghaziabad (AKTU, Lucknow) | CGPA: 8.92

Bachelors Of Science (Vocational) | 2021-24
Dr. Bhimrao Ambedkar University, Agra | Percentage: 78.34%

TECHNICAL SKILLS
Languages: C, C++, Python, HTML/CSS, Django, SQL, JavaScript
Databases: Oracle, MongoDB, MySQL
Tools: AWS Cloud, Figma, Git, GitHub, VS Code, Postman, Jira

PROJECTS
Placement Portal (Jan-Apr 2025)
- Web application for campus recruitment process
- Technologies: HTML, CSS, JavaScript, Python, Django, MySQL

Calories Tracker (Mar-May 2024)
- Health monitoring web application
- Technologies: Python, HTML, CSS, JavaScript, Django

Doctor's Appointment System (Oct-Dec 2023)
- Appointment booking and management system
- Technologies: Python, MySQL

CERTIFICATIONS
- Python Essentials 1 & 2 - Cisco Networking Academy
- Introduction to Cybersecurity - Cisco Networking Academy
- CCNA Enterprise Networking, Security, and Automation - Cisco Networking Academy
- CCNA Introduction to Networks - Cisco Networking Academy
- CCNA Switching, Routing, and Wireless Essentials - Cisco Networking Academy
- AWS Academy Cloud Foundations - AWS Academy
- Data Analytics Job Simulation - Deloitte (via Forage)
- UI/UX - Innovation Cell KIET
- Getting Started with DevOps
- Introduction to artificial Intelligence
- Practice Github Project Management and Colla

ACHIEVEMENTS
- Gold Medal in Volleyball - Inter-School Sports Competition
- Silver Medal in Chess - Inter-School Championship`

                      const blob = new Blob([resumeContent], { type: "text/plain" })
                      const url = window.URL.createObjectURL(blob)
                      const link = document.createElement("a")
                      link.href = url
                      link.download = "Shyam-Sundar-Resume.txt"
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                      window.URL.revokeObjectURL(url)
                    }}
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download My Resume
                  </Button>
                </div>

                <Card className="hover:shadow-2xl transition-all duration-300 border-t-4 border-t-gradient-to-r from-indigo-500 to-purple-500">
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                    <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a
                      href="tel:+917599406897"
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm text-gray-600">+91 7599406897</p>
                      </div>
                    </a>

                    <a
                      href="mailto:shyamsundartyagi633@gmail.com"
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:border-green-300 hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Mail className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Personal Email</p>
                        <p className="text-sm text-gray-600">shyamsundartyagi633@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="mailto:shyam.2426mca1971@kiet.edu"
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Academic Email</p>
                        <p className="text-sm text-gray-600">shyam.2426mca1971@kiet.edu</p>
                      </div>
                    </a>

                    <a
                      href="https://linkedin.com/in/shyam-sundar-115797300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Linkedin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-sm text-gray-600">Connect with me</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 ml-auto" />
                    </a>

                    <a
                      href="https://github.com/shyam123-pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Github className="h-5 w-5 text-gray-800" />
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-sm text-gray-600">View my code</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 ml-auto" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300">© 2025 Shyam Sundar Tyagi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
