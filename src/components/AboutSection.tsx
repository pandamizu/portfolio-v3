import { motion } from 'framer-motion';
import { Layers, Video, Layout, PenTool } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      name: "3D Modeling",
      icon: <Layers className="h-6 w-6 text-indigo-600" />,
      description: "Creating detailed 3D product models with realistic materials and lighting."
    },
    {
      name: "Video Editing",
      icon: <Video className="h-6 w-6 text-indigo-600" />,
      description: "Crafting engaging video content with smooth transitions and effects."
    },
    {
      name: "UI/UX Design",
      icon: <Layout className="h-6 w-6 text-indigo-600" />,
      description: "Designing intuitive interfaces that enhance user experience."
    },
    {
      name: "Digital Illustration",
      icon: <PenTool className="h-6 w-6 text-indigo-600" />,
      description: "Creating unique digital artwork and illustrations for various projects."
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Existing motion divs for main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-indigo-600 tracking-wider uppercase">
              About Me
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold mb-6">
              Creating digital experiences that stand out
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              I'm a multidisciplinary designer with expertise in 3D product design, video editing, and UI/UX design. 
              My approach combines technical precision with creative vision to deliver compelling visual stories and 
              experiences that resonate with audiences.
            </p>
            <p className="text-gray-600 mb-6">
              I work with industry-standard tools including Blender for 3D modeling and animation, Adobe Premiere Pro 
              for video editing, Adobe Illustrator for vector graphics, and Adobe Photoshop for image editing and compositing.
            </p>
            <p className="text-gray-600">
              My design philosophy centers on creating meaningful connections between brands and their audiences through 
              thoughtful, visually striking, and purposeful design.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 p-2 bg-indigo-50 inline-block rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 pt-16 border-t border-gray-100">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-center mb-8"
          >
            Tools I Use
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { name: "Blender", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/512px-Blender_logo_no_text.svg.png" },
              { name: "Premiere Pro", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png" },
              { name: "Illustrator", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png" },
              { name: "Photoshop", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png" },
              { name: "Canva", src: "https://upload.wikimedia.org/wikipedia/he/5/56/Canva-logo.png" },
              { name: "MS Office", src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg" },
              { name: "CapCut", src: "https://cdn.prod.website-files.com/64ea57571d50b02423c4505d/64fb219ade937671b42e011e_capcut%20logo%20png.png" }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      delay: index * 0.15
                    }
                  }
                }}
                className="flex flex-col items-center"
              >
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  src={tool.src}
                  alt={tool.name}
                  className="h-12 w-12 mb-2 object-contain"
                />
                <span className="text-gray-700">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
