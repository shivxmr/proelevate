"use client";

import React, { useState } from "react";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const events = [
    {
      id: 1,
      name: "Tech Symposium 2024",
      description:
        "Join us for a day of insightful talks and networking with industry leaders.",
      location: "Bangalore, KA",
      startDate: "2024-07-15",
      endDate: "2024-07-16",
      deadline: "2024-06-01",
      category: "Symposium",
    },
    {
      id: 2,
      name: "CodeJam 2024",
      description: "Compete in coding challenges and connect with fellow developers.",
      location: "Delhi",
      startDate: "2024-08-20",
      endDate: "2024-08-20",
      deadline: "2024-07-15",
      category: "Coding Competition",
    },
    {
      id: 3,
      name: "Tech Innovators Conference",
      description:
        "Explore the latest innovations in technology and digital transformation.",
      location: "Mumbai, MH",
      startDate: "2024-09-10",
      endDate: "2024-09-12",
      deadline: "2024-08-05",
      category: "Conference",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === "" || event.category === filterType) &&
    (filterLocation === "" || event.location.toLowerCase().includes(filterLocation.toLowerCase()))
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 py-12">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
          Events List
        </h1>
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            className="w-full mr-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Symposium">Symposium</option>
            <option value="Coding Competition">Coding Competition</option>
            <option value="Conference">Conference</option>
          </select>
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-300"
            placeholder="Filter by location..."
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          />
        </div>
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="p-6 bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-indigo-700">
                {event.name}
              </h2>
              <p className="mt-2 text-gray-700">{event.description}</p>
              <p className="mt-1 text-gray-600">
                <strong className="text-indigo-700">Location:</strong>{" "}
                {event.location}
              </p>
              <p className="mt-1 text-gray-600">
                <strong className="text-indigo-700">Start Date:</strong>{" "}
                {event.startDate}
              </p>
              <p className="mt-1 text-gray-600">
                <strong className="text-indigo-700">End Date:</strong>{" "}
                {event.endDate}
              </p>
              <p className="mt-1 text-gray-600">
                <strong className="text-indigo-700">Submission Deadline:</strong>{" "}
                {event.deadline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;