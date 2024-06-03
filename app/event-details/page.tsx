"use client";

import React from "react";

const EventDetailsPage = () => {
  const eventDetails = {
    name: "Tech Symposium 2024",
    description: "Join us for a day of insightful talks and networking with industry leaders.",
    location: "Bangalore, KA",
    startDate: "2024-07-15",
    endDate: "2024-07-16",
    deadline: "2024-06-01",
    category: "Symposium",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 py-12">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Event Details</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-indigo-700">{eventDetails.name}</h2>
          <p className="text-gray-700 mt-2">{eventDetails.description}</p>
          <p className="text-gray-600 mt-2">
            <strong className="text-indigo-700">Location:</strong> {eventDetails.location}
          </p>
          <p className="text-gray-600 mt-1">
            <strong className="text-indigo-700">Start Date:</strong> {eventDetails.startDate}
          </p>
          <p className="text-gray-600 mt-1">
            <strong className="text-indigo-700">End Date:</strong> {eventDetails.endDate}
          </p>
          <p className="text-gray-600 mt-1">
            <strong className="text-indigo-700">Submission Deadline:</strong> {eventDetails.deadline}
          </p>
          <p className="text-gray-600 mt-1">
            <strong className="text-indigo-700">Category:</strong> {eventDetails.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;