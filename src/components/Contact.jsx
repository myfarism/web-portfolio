import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Send, Github, Linkedin, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate sending
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'farishafizh19@gmail.com',
      link: 'mailto:farishafizh19@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 851-5646-8466',
      link: 'tel:+6285156468466'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia',
      link: null
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '~24 hours',
      link: null
    },
  ];

  const socials = [
    {
      icon: Github,
      name: 'GitHub',
      username: '@myfarism',
      url: 'https://github.com/myfarism'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: 'Muhammad Faris Hafizh',
      url: 'https://www.linkedin.com/in/muhammad-faris-hafizh/'
    },
  ];

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
          <p className="text-terminal-text/70 text-lg">
            Open to opportunities, collaborations, and interesting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-terminal-bg/40 border border-terminal-accent/20 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-terminal-accent/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-terminal-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-terminal-text/60 text-xs mb-1">{info.label}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-terminal-text text-sm hover:text-terminal-accent transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-terminal-text text-sm">{info.value}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <div className="bg-terminal-bg/40 border border-terminal-accent/20 p-4">
              <h3 className="text-terminal-text font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socials.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-terminal-bg border border-terminal-accent/20 hover:border-terminal-accent/40 transition-all group"
                    >
                      <Icon className="w-5 h-5 text-terminal-accent" />
                      <div className="flex-1">
                        <div className="text-terminal-text text-sm font-medium">{social.name}</div>
                        <div className="text-terminal-text/60 text-xs">{social.username}</div>
                      </div>
                      <span className="text-terminal-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-terminal-success/10 border border-terminal-success/30 p-4">
              <div className="flex items-center gap-2 text-terminal-success font-semibold mb-2">
                <div className="w-2 h-2 bg-terminal-success rounded-full animate-pulse"></div>
                Available for Work
              </div>
              <p className="text-terminal-text/70 text-sm">
                Currently open to backend and Android development opportunities.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-terminal-bg/40 border border-terminal-accent/20 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Send className="w-5 h-5 text-terminal-accent" />
                <h3 className="text-xl font-bold text-terminal-text">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-terminal-text/80 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-terminal-bg border border-terminal-accent/20 text-terminal-text placeholder-terminal-text/40 focus:outline-none focus:border-terminal-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-terminal-text/80 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-terminal-bg border border-terminal-accent/20 text-terminal-text placeholder-terminal-text/40 focus:outline-none focus:border-terminal-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-terminal-text/80 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-terminal-bg border border-terminal-accent/20 text-terminal-text placeholder-terminal-text/40 focus:outline-none focus:border-terminal-accent transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
                  className={`w-full py-4 font-semibold flex items-center justify-center gap-2 transition-all ${
                    formStatus === 'success'
                      ? 'bg-terminal-success text-terminal-bg'
                      : formStatus === 'sending'
                      ? 'bg-terminal-accent/70 text-terminal-bg cursor-wait'
                      : 'bg-terminal-accent text-terminal-bg hover:bg-terminal-accent/90'
                  }`}
                >
                  {formStatus === 'sending' && (
                    <>
                      <div className="w-5 h-5 border-2 border-terminal-bg border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </>
                  )}
                  {formStatus === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-terminal-success/10 border border-terminal-success/30"
                  >
                    <p className="text-terminal-success text-sm text-center">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-terminal-accent/20 text-center"
        >
          <p className="text-terminal-text/60 text-sm mb-2">
            © 2026 Muhammad Faris Hafizh • Built with React & Terminal Aesthetic
          </p>
          <p className="text-terminal-text/40 text-xs">
            No AI templates. Just pure code and creativity ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
