import Link from 'next/link'
import React from 'react'
import FAQSection from '../components/FAQ'

const ContactUsPage = () => {
  return (
    <>
    <section id="contact" className="max-w-4xl mx-auto flex flex-col items-center bg-white py-16 px-4 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
        <ul className="w-full text-lg text-gray-700 space-y-4 p-8 rounded-2xl bg-[#f8fa8c]">
          <li><strong>Email:</strong> <Link href="mailto:inspireiqlab@gmail.com">inspireiqlab@gmail.com</Link></li>
          <li><strong>Phone/WhatsApp:</strong> <Link href="https://wa.me/919051155395">+91-9051155395</Link></li>
          <li><strong>Location:</strong> Konnagar, Hooghly, West Bengal - 712235</li>
          <li><strong>Launching:</strong> August 2025</li>
          <li><strong>Register for a FREE Trial Session:</strong> <a href="https://forms.gle/apgu9Az9R23LTRnf7" target='_blank' className="text-blue-600 underline">Fill the Form</a></li>
        </ul>

    </section>
    <FAQSection/>
    </>
  )
}

export default ContactUsPage