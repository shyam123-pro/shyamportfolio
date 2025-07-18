import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building, Briefcase, TrendingUp, Users, Code2 } from "lucide-react"

interface ExperienceItem {
  company: string
  role: string
  duration: string
  location: string
  type: string
  description: string[]
  technologies: string[]
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "Your Company Name",
    role: "Software Development Intern",
    duration: "June 2024 - August 2024",
    location: "City, State/Country",
    type: "Internship",
    description: [
      "Developed and maintained web applications using modern technologies",
      "Collaborated with senior developers on feature implementation and code reviews",
      "Participated in agile development processes and daily standups",
      "Contributed to improving application performance and user experience",
      "Wrote comprehensive unit tests and technical documentation",
    ],
    technologies: ["Python", "Django", "JavaScript", "HTML/CSS", "MySQL", "Git", "AWS"],
    achievements: [
      "Improved application performance by 25%",
      "Successfully delivered 3 major features on time",
      "Received positive feedback from team lead",
      "Contributed to 15+ code reviews",
    ],
  },
  // Add more experiences here as needed
]

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and internship experiences that have shaped my skills and expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer border-l-4 border-l-gradient-to-b from-purple-500 to-pink-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                      {experience.role}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-lg font-semibold text-purple-600 mb-2">
                      <Building className="h-5 w-5" />
                      {experience.company}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {experience.type}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                {/* Job Description */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-800">
                    <Users className="h-5 w-5 text-purple-600" />
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        <span className="text-purple-600 mt-2 text-sm">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-800">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        <span className="text-green-600 mt-2 text-sm">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-gray-800">
                    <Code2 className="h-5 w-5 text-blue-600" />
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="hover:bg-purple-100 hover:text-purple-800 transition-all duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer"
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

          {/* Add more experience prompt */}
          <Card className="border-2 border-dashed border-gray-300 hover:border-purple-400 transition-colors duration-300">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Briefcase className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">More Experience Coming Soon</h3>
              <p className="text-gray-500">
                Currently seeking new opportunities to grow and contribute to innovative projects
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
