'use client';
import Link from "next/link";
import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is InspireIQ Lab?",
      answer:
        "InspireIQ Lab is a playful learning ecosystem where children explore STEM, Robotics, AI, and IoT through fun, hands-on activities. We believe in learning by doing—not just watching or memorizing.",
    },
    {
      question: "Who is this program for?",
      answer:
        "Our learning system is designed for children aged 6 to 18, curious minds who love building, exploring, and discovering how things work!",
    },
    {
      question: "What subjects will my child learn?",
      answer:
        "Your child will explore Science, Technology, Engineering, and Math (STEM), Robotics & Automation, Artificial Intelligence & Machine Learning, and Internet of Things (IoT), all taught through games, experiments, and project-based learning.",
    },
    {
      question: "Do you offer online or offline classes?",
      answer:
        "We currently focus on offline, hands-on learning experiences, hosted in our local learning spaces. This ensures kids get real, tactile exposure to tools, kits, and team-based collaboration.",
    },
    {
      question: "Is it like a traditional classroom or school?",
      answer:
        "Not at all! InspireIQ Lab is a playground for ideas, not a school. Kids learn through doing, tinkering, and creating—guided by passionate mentors, not formal lectures.",
    },
    {
      question: "Is there a trial session or demo?",
      answer:
        "Yes! You can pre-enroll and request a trial session using our Google Form. We’d love to meet your child and spark their imagination!",
    },
    {
      question: "Do I need to buy any materials or kits?",
      answer:
        "Nope! We provide all materials, robotics kits, and tools needed for your child to explore and experiment safely and creatively.",
    },
    {
      question: "Is there any homework?",
      answer:
        "No traditional homework. But don’t be surprised if your child starts inventing gadgets or asking to build something cool at home!",
    },
    {
      question: "How can I enroll or learn more?",
      answer:
        "Just fill out our pre-enrollment form, and we’ll get in touch with details about our upcoming launch and workshops. No fees or commitments—just curiosity!",
    },
    {
      question: "When is InspireIQ Lab launching?",
      answer:
        "We’re launching in August, and pre-enrollment is now open. Join our early learning community and watch your child fall in love with science and tech!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index:number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-800">
            Want to ask us something else? 📩 Reach out anytime at
            <span className="font-medium"> <Link href="mailto:inspireiqlab@gmail.com" target="_blank">inspireiqlab@gmail.com</Link> </span>
          </p>
        </div>
      </div>
    </section>
  );
}
