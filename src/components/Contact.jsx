import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Phone, MapPin, Clock, MessageSquare, Copy, Check, Instagram } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'farishafizh19@gmail.com',
      link: 'mailto:farishafizh19@gmail.com',
      copyValue: 'farishafizh19@gmail.com',
      color: 'accent',
      description: 'Best way to reach me for professional inquiries'
    },
    // {
    //   icon: Phone,
    //   label: 'Phone',
    //   value: '+62 851-5646-8466',
    //   link: 'tel:+6285156468466',
    //   copyValue: '+6285156468466',
    //   color: 'success',
    //   description: 'Call me during business hours (GMT+7)'
    // },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@farishafizh',
      link: 'https://www.instagram.com/farishafizh/',
      copyValue: 'https://www.instagram.com/farishafizh/',
      color: 'success',
      description: 'Follow me for personal updates and projects'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/myfarism',
      link: 'https://github.com/myfarism',
      copyValue: 'https://github.com/myfarism',
      color: 'secondary',
      description: 'Check out my code and contributions'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Muhammad Faris Hafizh',
      link: 'https://www.linkedin.com/in/muhammad-faris-hafizh/',
      copyValue: 'https://www.linkedin.com/in/muhammad-faris-hafizh/',
      color: 'accent',
      description: 'Let\'s connect professionally'
    },
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia 🇮🇩',
      description: 'Available for on-site (Jakarta) or remote work'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '~24 hours',
      description: 'I typically respond within one business day'
    },
    {
      icon: MessageSquare,
      label: 'Preferred Contact',
      value: 'Email',
      description: 'For fastest response, please use email'
    },
  ];

  const getColorClass = (color) => {
    const colors = {
      accent: 'border-terminal-accent/30 hover:border-terminal-accent',
      success: 'border-terminal-success/30 hover:border-terminal-success',
      secondary: 'border-terminal-secondary/30 hover:border-terminal-secondary'
    };
    return colors[color] || colors.accent;
  };

  const getIconColorClass = (color) => {
    const colors = {
      accent: 'text-terminal-accent',
      success: 'text-terminal-success',
      secondary: 'text-terminal-secondary'
    };
    return colors[color] || colors.accent;
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="font-mono text-terminal-accent mb-2">$ cat contact.txt</div>
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-terminal-accent mb-6"></div>
          <p className="text-terminal-text/70 text-lg max-w-2xl">
            Open to opportunities, collaborations, and interesting projects. 
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Main Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((contact, idx) => {
            const Icon = contact.icon;
            const isCopied = copiedItem === contact.label;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-terminal-bg/40 border-2 ${getColorClass(contact.color)} p-6 transition-all group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 border-2 ${getColorClass(contact.color)} flex items-center justify-center flex-shrink-0 ${getIconColorClass(contact.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-terminal-text font-bold mb-1">{contact.label}</h3>
                    <p className="text-terminal-text/60 text-xs mb-2">{contact.description}</p>
                  </div>
                </div>

                <div className="bg-terminal-bg/60 border border-terminal-accent/20 p-4 mb-3">
                  <code className="text-terminal-text/90 text-sm break-all">
                    {contact.value}
                  </code>
                </div>

                <div className="flex gap-2">
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex-1 px-4 py-2 border ${getColorClass(contact.color)} ${getIconColorClass(contact.color)} text-center text-sm font-medium transition-all hover:bg-terminal-accent/10`}
                  >
                    {contact.label === 'Email' ? 'Send Email' : 
                     contact.label === 'Phone' ? 'Call Now' : 
                     'Visit Profile'}
                  </a>
                  <button
                    onClick={() => handleCopy(contact.copyValue, contact.label)}
                    className="px-4 py-2 border border-terminal-accent/20 text-terminal-text/80 hover:border-terminal-accent hover:text-terminal-accent transition-all"
                    title="Copy to clipboard"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {isCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-terminal-success text-xs text-center"
                  >
                    ✓ Copied to clipboard!
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {additionalInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-terminal-bg/40 border border-terminal-accent/20 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 border border-terminal-accent/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-terminal-accent" />
                  </div>
                  <h4 className="text-terminal-text font-semibold">{info.label}</h4>
                </div>
                <p className="text-terminal-text/90 font-mono text-sm mb-2">{info.value}</p>
                <p className="text-terminal-text/60 text-xs">{info.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Availability Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-terminal-success/10 border-2 border-terminal-success/30 p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-4 bg-terminal-success rounded-full animate-pulse"></div>
            <h3 className="text-2xl font-bold text-terminal-success">Available for Work</h3>
          </div>
          <p className="text-terminal-text/80 mb-4 max-w-2xl mx-auto">
            I'm currently open to backend and Android development opportunities, 
            freelance projects, and collaborations. Let's build something great together!
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-sm">
            <span className="px-3 py-1 bg-terminal-success/20 border border-terminal-success/30 text-terminal-success">
              Backend Development
            </span>
            <span className="px-3 py-1 bg-terminal-success/20 border border-terminal-success/30 text-terminal-success">
              Android Development
            </span>
            <span className="px-3 py-1 bg-terminal-success/20 border border-terminal-success/30 text-terminal-success">
              API Development
            </span>
            <span className="px-3 py-1 bg-terminal-success/20 border border-terminal-success/30 text-terminal-success">
              Full-Stack Projects
            </span>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 pt-8 border-t border-terminal-accent/20 text-center"
        >
          <div className="flex justify-center gap-4 text-terminal-text/60 text-sm">
            <a href="#about" className="hover:text-terminal-accent transition-colors">
              About
            </a>
            <span>•</span>
            <a href="#projects" className="hover:text-terminal-accent transition-colors">
              Projects
            </a>
            <span>•</span>
            <a href="#skills" className="hover:text-terminal-accent transition-colors">
              Skills
            </a>
            <span>•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-terminal-accent transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
