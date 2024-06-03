// "use client";
// import React from "react";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { cn } from "@/utils/cn";
// import { Button } from "@/components/ui/button";

// export function EventForm() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Event form submitted");
//   };

//   return (
//     <div className="max-w-lg w-full mx-auto rounded-lg p-8 shadow-lg bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
//       <h2 className="font-bold text-3xl text-center text-gray-900 dark:text-gray-100 mb-6">
//         Create a New Event
//       </h2>
//       <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
//         Fill in the details below to create a new event.
//       </p>

//       <form className="space-y-6" onSubmit={handleSubmit}>
//         <LabelInputContainer>
//           <Label htmlFor="eventName">Event Name</Label>
//           <Input id="eventName" placeholder="Enter event name" type="text" className="transition duration-300 ease-in-out transform focus:scale-105" />
//         </LabelInputContainer>
        
//         <LabelInputContainer>
//           <Label htmlFor="eventDescription">Event Description</Label>
//           <Textarea
//             id="eventDescription"
//             placeholder="Enter event description"
//             rows={4}
//             className="transition duration-300 ease-in-out transform focus:scale-105"
//           />
//         </LabelInputContainer>
        
//         <LabelInputContainer>
//           <Label htmlFor="eventLocation">Event Location</Label>
//           <Input id="eventLocation" placeholder="Enter event location" type="text" className="transition duration-300 ease-in-out transform focus:scale-105" />
//         </LabelInputContainer>

//         <LabelInputContainer>
//           <Label htmlFor="startDate">Start Date</Label>
//           <Input id="startDate" type="date" className="transition duration-300 ease-in-out transform focus:scale-105" />
//         </LabelInputContainer>
        
//         <LabelInputContainer>
//           <Label htmlFor="endDate">End Date</Label>
//           <Input id="endDate" type="date" className="transition duration-300 ease-in-out transform focus:scale-105" />
//         </LabelInputContainer>
        
//         <LabelInputContainer>
//           <Label htmlFor="submissionDeadline">Submission Deadline</Label>
//           <Input id="submissionDeadline" type="date" className="transition duration-300 ease-in-out transform focus:scale-105" />
//         </LabelInputContainer>

//         <Button
//           type="submit"
//           className="w-full h-12 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
//         >
//           Create Event
//         </Button>
//       </form>
//     </div>
//   );
// }

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2", className)}>
//       {children}
//     </div>
//   );
// };

// // Default export to fix the error
// export default function FormPage() {
//   return <EventForm />;
// }
"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

export function EventForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Event form submitted");
  };

  return (
    <div className="max-w-lg w-full mx-auto rounded-lg p-8 shadow-2xl bg-gradient-to-br from-indigo-600 to-purple-700">
      <h2 className="font-bold text-3xl text-center text-white mb-6">
        Create a New Event
      </h2>
      <p className="text-center text-gray-200 mb-8">
        Fill in the details below to create a new event.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="eventName" className="text-white">
            Event Name
          </Label>
          <Input
            id="eventName"
            placeholder="Enter event name"
            type="text"
            className="transition duration-300 ease-in-out transform focus:scale-105 focus:ring-2 focus:ring-white"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="eventDescription" className="text-white">
            Event Description
          </Label>
          <Textarea
            id="eventDescription"
            placeholder="Enter event description"
            rows={4}
            className="transition duration-300 ease-in-out transform focus:scale-105 focus:ring-2 focus:ring-white"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="eventLocation" className="text-white">
            Event Location
          </Label>
          <Input
            id="eventLocation"
            placeholder="Enter event location"
            type="text"
            className="transition duration-300 ease-in-out transform focus:scale-105 focus:ring-2 focus:ring-white"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="startDate" className="text-white">
            Start Date
          </Label>
          <Input
            id="startDate"
            type="date"
            className="transition duration-300 ease-in-out transform focus:scale-105 focus:ring-2 focus:ring-white"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="endDate" className="text-white">
            End Date
          </Label>
          <Input
            id="endDate"
            type="date"
            className="transition duration-300 ease-in-out transform focus:scale-105 focus:ring-2 focus:ring-white"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="submissionDeadline" className="text-white">
            Submission Deadline
          </Label>
          <Input
            id="submissionDeadline"
            type="date"
            className="transition duration-300 ease-in-out transform focus:scale-105 focus:ring-2 focus:ring-white"
          />
        </LabelInputContainer>

        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:from-pink-600 hover:to-red-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Create Event
        </Button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

// Default export to fix the error
export default function FormPage() {
  return <EventForm />;
}