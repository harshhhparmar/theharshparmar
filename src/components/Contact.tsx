import { Reveal, Section } from "./Section";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, Check, MapPin, Clock, Loader2, Send } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(form.current!);
      const name = formData.get("user_name") as string;
      const email = formData.get("user_email") as string;
      const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;

      const { error: supabaseError } = await supabase
        .from("inquiries")
        .insert([{ name, email, subject, message }]);

      if (supabaseError) {
        console.error("Supabase Error:", supabaseError);
        throw new Error("Failed to save to database");
      }

      const env = (import.meta as any).env;
      const serviceId = env.VITE_EMAILJS_SERVICE_ID;
      const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS keys are missing. Data saved to Supabase only.");
        setIsSuccess(true);
        toast.success("Message sent successfully!");
        form.current?.reset();
      } else {
        await emailjs.sendForm(serviceId, templateId, form.current!, publicKey);
        setIsSuccess(true);
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.current?.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "harshhhparmar007@gmail.com",
      link: "mailto:harshhhparmar007@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: null,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/harshparmar007",
      link: "https://www.linkedin.com/in/harshparmar007",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/harshhhparmar",
      link: "https://github.com/harshhhparmar",
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Open for Internships & Freelance",
      link: null,
    },
  ];

  return (
    <Section id="contact" className="bg-[#050505] relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch relative z-10">
        {/* Left Column: Heading, Intro & Direct Contact Directory (5 Cols) */}
        <div className="lg:col-span-5 flex">
          <Reveal className="w-full">
            <div className="h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="font-mono text-brand text-xs tracking-wider uppercase mb-1">
                  05. Contact
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 leading-[1.15]">
                  Let's Build Something Amazing Together.
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  I'm always open to internships, freelance opportunities, collaborations, and exciting product ideas. Whether you have a project or simply want to connect, I'd love to hear from you.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-white/[0.06] border-t border-white/[0.08] pt-2">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  const Content = (
                    <div className="py-3 flex items-center justify-between gap-4 group/item">
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon
                          size={15}
                          className="text-brand shrink-0"
                        />
                        <span className="text-xs font-mono text-gray-500 shrink-0">
                          {info.title}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-200 group-hover/item:text-brand transition-colors truncate text-right">
                        {info.value}
                      </span>
                    </div>
                  );

                  return info.link ? (
                    <a
                      key={idx}
                      href={info.link}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={idx}>{Content}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Compact Inquiry Form (7 Cols) */}
        <div className="lg:col-span-7 flex">
          <Reveal delay={0.08} className="w-full">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="h-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-white/[0.08]">
                  <h3 className="font-display text-lg font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <span className="text-xs font-mono text-gray-500">
                    Response time: Usually within 24 hours
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-gray-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      placeholder="Your name"
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand/60 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      placeholder="you@example.com"
                      className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand/60 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-4">
                  <label htmlFor="subject" className="text-xs font-mono text-gray-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Collaboration"
                    className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand/60 transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5 mb-5">
                  <label htmlFor="message" className="text-xs font-mono text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand/60 transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/[0.06]">
                <span className="text-xs font-mono text-gray-500 hidden sm:inline">
                  Direct inbox delivery
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full sm:w-auto bg-brand hover:bg-brand-light text-black font-semibold text-xs sm:text-sm rounded-xl px-6 py-3 flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Loader2 size={16} className="animate-spin" />
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Check size={16} /> Sent Successfully
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send Message <Send size={14} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
