import React from 'react'

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-20">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
      <ul className="text-lg text-gray-700 space-y-4">
        <li><strong>Email:</strong> inspireiqlab@gmail.com</li>
        <li><strong>Phone/WhatsApp:</strong> +91-9051155395</li>
        <li><strong>Location:</strong>Kolkata, West Bengal</li>
        <li><strong>Launching:</strong> August 2025</li>
        <li><strong>Feedback / Pre-enrollment:</strong> <a href="https://forms.gle/apgu9Az9R23LTRnf7" target='_blank' className="text-blue-600 underline">Fill the Form</a></li>
      </ul>
    </div>
  )
}

export default ContactUsPage