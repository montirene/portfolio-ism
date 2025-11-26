"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Playfair_Display } from 'next/font/google';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!form.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      newErrors.email = 'A valid email is required.';
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Placeholder for actual API submission logic
      console.log('Form data:', form); 
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-8 md:px-16 lg:px-32 bg-red-800 text-white"
    >
      <h2 
        className={`text-5xl font-bold mb-16 text-center ${displayFont.className} text-amber-50`}
      >
        Get In Touch
      </h2>

      <div className="max-w-xl mx-auto">
        {submitted ? (
          <div className="text-center p-10 bg-red-700 rounded-lg">
            <h3 className="text-3xl font-bold text-amber-50">Thank You!</h3>
            <p className="mt-4">Your message has been received, and I'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`bg-red-700 border-red-600 text-white placeholder:text-red-300 focus:ring-amber-50 focus:ring-1 focus:border-red-600 ${errors.name ? 'border-amber-50' : ''}`}
              />
              {errors.name && <p className="text-amber-50 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={`bg-red-700 border-red-600 text-white placeholder:text-red-300 focus:ring-amber-50 focus:ring-1 focus:border-red-600 ${errors.email ? 'border-amber-50' : ''}`}
              />
              {errors.email && <p className="text-amber-50 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`bg-red-700 border-red-600 text-white placeholder:text-red-300 focus:ring-amber-50 focus:ring-1 focus:border-red-600 ${errors.message ? 'border-amber-50' : ''}`}
              />
              {errors.message && <p className="text-amber-50 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-amber-50 text-red-800 font-bold text-lg hover:bg-amber-100 transition-colors duration-300 shadow-xl"
            >
              Send Message
            </Button>
          </form>
        )}
        
        {/* Direct Email Display */}
        <div className="text-center mt-10 pt-6 border-t border-red-600">
            <p className="text-lg font-medium text-amber-50 mb-2">Prefer direct email?</p>
            <a 
                href="mailto:irene.montalvo-21@cpu.edu.ph" 
                className="text-white hover:text-amber-50 transition-colors duration-200 underline text-xl"
            >
                irene.montalvo-21@cpu.edu.ph
            </a>
        </div>
      </div>
    </section>
  );
}