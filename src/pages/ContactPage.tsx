import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Twitter, Youtube, Link as LinkIcon, MessageSquare, Copy } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen pt-12">
      <div className="relative h-[60vh] flex items-center main-gradient">
        <div className="section-container text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Let's connect and create something amazing together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="section-container py-20 -mt-2 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glassmorphism rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Let's Connect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">Email</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white/70">pandutirta25@gmail.com</p>
                        <button 
                          onClick={() => handleCopy('pandutirta25@gmail.com', 'email')}
                          className="ml-2 p-1 rounded hover:bg-white/20 transition-colors"
                          aria-label="Copy email"
                        >
                          <Copy className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                    {copied === 'email' && (
                      <span className="ml-2 text-xs text-green-400 animate-fade-in-out">
                        Copied!
                      </span>
                    )}
                  </div>

                  <a 
                    href="https://wa.me/6287737783462"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">WhatsApp</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white/70">+62 877-3778-3462</p>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCopy('+6287737783462', 'whatsapp');
                          }}
                          className="ml-2 p-1 rounded hover:bg-white/20 transition-colors"
                          aria-label="Copy phone number"
                        >
                          <Copy className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                    {copied === 'whatsapp' && (
                      <span className="ml-2 text-xs text-green-400 animate-fade-in-out">
                        Copied!
                      </span>
                    )}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-white">Social Media</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a 
                    href="https://www.instagram.com/pandapediahome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Instagram</span>
                  </a>

                  <a 
                    href="https://x.com/mizuevren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Twitter className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Twitter</span>
                  </a>

                  <a 
                    href="https://www.youtube.com/@MizuEvren"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Youtube className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">YouTube</span>
                  </a>

                  <a 
                    href="https://linktr.ee/pandapedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <LinkIcon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white">Linktree</span>
                  </a>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-white/10">
                <p className="text-white/70">
                  I'm always interested in hearing about new projects and opportunities.
                  Feel free to reach out through any of these channels!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
