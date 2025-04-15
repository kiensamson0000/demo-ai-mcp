import React from "react";
import { FiPlus } from "react-icons/fi";

// Import images
import profilePic1 from "../assets/images/people/profilePic1.png";
import profilePic2 from "../assets/images/people/profilePic2.png";
import profilePic3 from "../assets/images/people/profilePic3.png";
import event1 from "../assets/images/event/event1.png";
import event2 from "../assets/images/event/event2.png";
import event3 from "../assets/images/event/event3.png";

// Import SVGs
// import nextArrow from "../assets/figma/calendar/next-arrow.svg";
// import prevArrow from "../assets/figma/calendar/prev-arrow.svg";

const Calendar: React.FC = () => {
  // Calendar data
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dates = [];

  // Previous month (last week)
  for (let i = 25; i <= 30; i++) {
    dates.push({ day: i, currentMonth: false });
  }

  // Current month
  for (let i = 1; i <= 31; i++) {
    dates.push({ day: i, currentMonth: true, isToday: i === 16 });
  }

  // Next month (first week)
  for (let i = 1; i <= 5; i++) {
    dates.push({ day: i, currentMonth: false });
  }

  // Events data
  const events = [
    {
      id: 1,
      title: "Design Conference",
      date: "Today 07:19 AM",
      location: "56 Davion Mission Suite 157",
      city: "Meaghanberg",
      image: event1,
      attendees: [profilePic1, profilePic2, profilePic3],
      moreAttendees: 15,
    },
    {
      id: 2,
      title: "Weekend Festival",
      date: "16 October 2023 at 5.00 PM",
      location: "853 Moore Flats Suite 158",
      city: "Sweden",
      image: event3,
      attendees: [profilePic3, profilePic1, profilePic2],
      moreAttendees: 20,
    },
    {
      id: 3,
      title: "Glastonbury Festival",
      date: "20-22 October 2023 at 8.00 PM",
      location: "646 Walter Road Apt. 571",
      city: "Turks and Caicos Islands",
      image: event2,
      attendees: [profilePic2, profilePic3, profilePic1],
      moreAttendees: 14,
    },
    {
      id: 4,
      title: "Ultra Europe 2023",
      date: "25 October 2023 at 10.00 PM",
      location: "506 Satterfield Tunnel Apt. 963",
      city: "San Marino",
      image: event1,
      attendees: [profilePic1, profilePic2, profilePic3],
      moreAttendees: 42,
    },
  ];

  // Featured events in the calendar display
  const featuredEvents = [
    {
      id: 1,
      title: "Design Conference",
      color: "#7551E9",
      day: 16,
    },
    {
      id: 2,
      title: "Weekend Festival",
      color: "#E951BF",
      day: 18,
    },
    {
      id: 3,
      title: "Glastonbury Festival",
      color: "#E99151",
      day: 20,
    },
    {
      id: 4,
      title: "Glastonbury Festival",
      color: "#516FE9",
      day: 22,
    },
  ];

  return (
    <main className="px-8 py-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#202224] mb-6">Calendar</h1>

      <div className="flex gap-6">
        {/* Left Side - Events List */}
        <div className="w-1/3">
          <div className="bg-white rounded-[14px] shadow-md p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">You are going to</h2>

            {/* Add New Event Button */}
            <button className="w-full bg-[#4880FF] hover:bg-[#4071e6] text-white font-bold py-3 px-4 rounded-lg mb-6 flex items-center justify-center transition-colors duration-200">
              <FiPlus className="mr-2" /> Add New Event
            </button>

            {/* Events List */}
            <div className="space-y-6">
              {events.map((event, index) => (
                <React.Fragment key={event.id}>
                  <div className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                    {/* Event Image */}
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-[#202224] mb-1">
                        {event.title}
                      </h3>
                      <p className="text-xs text-[#202224]/60">{event.date}</p>
                      <p className="text-xs text-[#202224]/60">
                        {event.location}
                      </p>
                      <p className="text-xs text-[#202224]/60">{event.city}</p>

                      {/* Attendees */}
                      <div className="flex mt-2">
                        {event.attendees.map((pic, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -ml-2 first:ml-0 shadow-sm"
                          >
                            <img
                              src={pic}
                              alt="Attendee"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-[rgba(223,233,255,0.37)] border-2 border-[#4880FF] -ml-2 flex items-center justify-center shadow-sm">
                          <span className="text-[10px] font-bold text-[#4880FF]">
                            {event.moreAttendees}+
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider except for last item */}
                  {index < events.length - 1 && (
                    <div className="border-t border-gray-200 opacity-50"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* See More Button */}
            <button className="w-full mt-6 bg-[#E2EAF8]/70 hover:bg-[#E2EAF8] text-[#202224] font-bold py-3 px-4 rounded-lg transition-colors duration-200">
              See More
            </button>
          </div>
        </div>

        {/* Right Side - Calendar */}
        <div className="w-2/3">
          <div className="bg-white rounded-[14px] shadow-md p-6">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold mr-6">October 2023</h2>
                <div className="flex gap-4">
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    {/* Previous arrow button */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="#202224"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    {/* Next arrow button */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="#202224"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="py-2 px-4 text-sm font-semibold text-[#4880FF] bg-[#E2EAF8]/70 hover:bg-[#E2EAF8] rounded-lg transition-colors">
                  Day
                </button>
                <button className="py-2 px-4 text-sm font-semibold text-white bg-[#4880FF] rounded-lg">
                  Month
                </button>
                <button className="py-2 px-4 text-sm font-semibold text-[#4880FF] bg-[#E2EAF8]/70 hover:bg-[#E2EAF8] rounded-lg transition-colors">
                  Year
                </button>
              </div>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 mb-3">
              {days.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-[#202224]/70 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {dates.map((date, i) => (
                <div
                  key={i}
                  className={`aspect-square p-1 rounded-lg relative ${
                    !date.currentMonth
                      ? "text-[#202224]/40"
                      : date.isToday
                      ? "bg-[#4880FF] text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="text-sm font-semibold p-1">{date.day}</div>

                  {/* Event indicators */}
                  {featuredEvents.map(
                    (event) =>
                      event.day === date.day &&
                      date.currentMonth && (
                        <div
                          key={event.id}
                          className="px-2 py-1 text-[10px] rounded mt-1 truncate"
                          style={{
                            backgroundColor: `${event.color}20`,
                            color: event.color,
                          }}
                        >
                          {event.title}
                        </div>
                      )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
