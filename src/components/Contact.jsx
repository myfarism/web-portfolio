import { motion } from 'motion/react';
import { useState } from 'react';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const email = 'your.email@example.com'; // Ganti dengan email kamu
  const socials = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '⌘', handle: '@yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼', handle: '/in/yourprofile' },
    { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: '🐦', handle: '@yourhandle' },
    { name: 'Email', url: `mailto:${email}`, icon: '📧', handle: email, copyable: true }
  ];

  const quickMessages = [
    "Let's build something cool together",
    "I have a project idea",
    "Looking for collaboration",
    "Want to discuss opportunities",
    "Just saying hi 👋"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate sending (replace with actual form submission)
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px flex-1 bg-terminal-accent/20"></div>
              <span className="text-terminal-accent text-sm">~/contact</span>
              <div className="h-px flex-1 bg-terminal-accent/20"></div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-terminal-text mb-4">
              ping <span className="text-terminal-accent">--message</span>
            </h2>
            <p className="text-terminal-text/70 text-lg max-w-2xl mx-auto">
              Got a project in mind? Want to collaborate? Or just want to say hi?
              I'm always open to interesting conversations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Social Links & Quick Info */}
            <div className="space-y-6">
              {/* Quick Message Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-terminal-text mb-4">
                  Quick Start
                </h3>
                <p className="text-terminal-text/60 text-sm mb-4">
                  Pick a template to get started faster:
                </p>
                <div className="space-y-2">
                  {quickMessages.map((message, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="w-full text-left px-4 py-2 bg-terminal-bg/60 border border-terminal-accent/10 rounded text-terminal-text/70 hover:text-terminal-accent hover:border-terminal-accent/30 transition-all text-sm"
                      onClick={() => {
                        const textarea = document.getElementById('message');
                        if (textarea) textarea.value = message;
                      }}
                    >
                      <span className="text-terminal-accent mr-2">▹</span>
                      {message}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-terminal-text mb-4">
                  Find Me Online
                </h3>
                <div className="space-y-3">
                  {socials.map((social, idx) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between group"
                    >
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 flex-1 text-terminal-text/70 hover:text-terminal-accent transition-colors"
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-sm text-terminal-text/50">
                            {social.handle}
                          </div>
                        </div>
                      </a>
                      {social.copyable && (
                        <button
                          onClick={handleCopyEmail}
                          className="px-3 py-1 text-xs bg-terminal-accent/10 text-terminal-accent border border-terminal-accent/30 rounded hover:bg-terminal-accent/20 transition-colors"
                        >
                          {copiedEmail ? 'Copied!' : 'Copy'}
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fun Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-terminal-text mb-4">
                  Response Time
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-terminal-text/60">Email</span>
                    <span className="text-terminal-success">~24h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-terminal-text/60">LinkedIn</span>
                    <span className="text-terminal-accent">~48h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-terminal-text/60">GitHub Issues</span>
                    <span className="text-terminal-secondary">When I see it 👀</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-terminal-text mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-terminal-text/70 text-sm mb-2">
                    $ whoami
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-terminal-bg/60 border border-terminal-accent/20 rounded px-4 py-3 text-terminal-text focus:outline-none focus:border-terminal-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-terminal-text/70 text-sm mb-2">
                    $ echo $EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-terminal-bg/60 border border-terminal-accent/20 rounded px-4 py-3 text-terminal-text focus:outline-none focus:border-terminal-accent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-terminal-text/70 text-sm mb-2">
                    $ cat subject.txt
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full bg-terminal-bg/60 border border-terminal-accent/20 rounded px-4 py-3 text-terminal-text focus:outline-none focus:border-terminal-accent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-terminal-text/70 text-sm mb-2">
                    $ vim message.md
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full bg-terminal-bg/60 border border-terminal-accent/20 rounded px-4 py-3 text-terminal-text focus:outline-none focus:border-terminal-accent transition-colors resize-none"
                    placeholder="Tell me about your project, idea, or just say hi..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
                  className={`w-full py-3 rounded font-medium transition-all ${
                    formStatus === 'success'
                      ? 'bg-terminal-success/20 text-terminal-success border border-terminal-success/30'
                      : formStatus === 'sending'
                      ? 'bg-terminal-accent/20 text-terminal-accent border border-terminal-accent/30 cursor-wait'
                      : 'bg-terminal-accent text-terminal-bg border border-terminal-accent hover:bg-terminal-accent/90'
                  }`}
                >
                  {formStatus === 'sending' && '⟳ Sending...'}
                  {formStatus === 'success' && '✓ Message sent!'}
                  {formStatus === 'idle' && 'git push origin message'}
                </motion.button>
              </form>

              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-terminal-success text-sm text-center"
                >
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-terminal-bg/40 border border-terminal-accent/20 rounded-lg px-6 py-4">
              <p className="text-terminal-text/60 text-sm">
                Built with React, Vite, and too much coffee ☕
              </p>
              <p className="text-terminal-text/40 text-xs mt-1">
                © 2026 • No AI templates were used in the making of this portfolio
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
