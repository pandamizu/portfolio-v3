import { motion } from 'framer-motion';
import { GraduationCap, Building2 } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      school: "UNIVERSITAS AMIKOM YOGYAKARTA",
      period: "2019 - 2023",
      degree: "Bachelor's Degree in Information Technology",
      description: "Focused on digital design, 3D modeling, and multimedia production with emphasis on industry-standard tools and techniques.",
      logo: "https://blogarch.amikom.ac.id/2022/0419/20220419134746_hero.jpg"
    },
    {
      school: "SMAN 1 KUTOREJO",
      period: "2015 - 2018",
      degree: "High School Diploma",
      description: "Focused on natural sciences including Mathematics, Physics, Chemistry, and Biology.",
      logo: "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-600 tracking-wider uppercase">
            Education
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Academic Background</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                  <div className="absolute bottom-4 left-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 text-white">
                    <p className="text-sm font-medium">{edu.period}</p>
                  </div>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    {index === 0 ? (
                      <GraduationCap className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <Building2 className="h-5 w-5 text-indigo-600" />
                    )}
                    {edu.school}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-3">{edu.degree}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
