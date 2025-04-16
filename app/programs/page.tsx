import React from 'react'

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-20">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Our Programs</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold text-green-600">🔧 Tinker Time</h2>
          <p>Explore machines, circuits, and mechanics through guided experiments.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-600">🤖 Mini Makers: Robotics Lab</h2>
          <p>Design and program your own robots using fun and interactive kits.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-600">🧠 AI for Young Minds</h2>
          <p>Introduce children to AI through visual tools, games, and storytelling.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-600">🌍 Smart World – IoT Explorers</h2>
          <p>Learn how devices communicate and create smart mini-projects.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-600">💡 Idea-to-Invention Challenges</h2>
          <p>Children solve real-world problems with creative teamwork and invention.</p>
        </div>
      </div>
    </div>
  )
}

export default ProgramsPage