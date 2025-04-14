import React, { useState } from "react";
import {
  FiSearch,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiMoreVertical,
  FiTrash2,
  FiMail,
  FiAlertCircle,
  FiEdit,
  FiSend,
} from "react-icons/fi";
import "../assets/styles/inbox.css"; // Import the inbox styles

interface EmailMessage {
  id: number;
  sender: string;
  subject: string;
  time: string;
  label: "primary" | "work" | "social" | "friends" | null;
  isStarred: boolean;
  isChecked: boolean;
}

const InboxPage: React.FC = () => {
  const [messages, setMessages] = useState<EmailMessage[]>([
    {
      id: 1,
      sender: "Jullu Jalal",
      subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      label: "primary",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 2,
      sender: "Minerva Barnett",
      subject: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      label: "work",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 3,
      sender: "Willie Blake",
      subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
      time: "8:38 AM",
      label: "primary",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 4,
      sender: "Minerva Barnett",
      subject: "Get Best Advertiser In Your Side Pocket",
      time: "8:13 AM",
      label: "work",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 5,
      sender: "Peter Lewis",
      subject: "Vacation Home Rental Success",
      time: "7:52 PM",
      label: "friends",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 6,
      sender: "Lora Houston",
      subject: "Vacation Home Rental Success",
      time: "7:52 PM",
      label: "friends",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 7,
      sender: "Clifford Morgan",
      subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      label: "social",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 8,
      sender: "Olga Hogan",
      subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
      time: "4:13 PM",
      label: "social",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 9,
      sender: "Cecilia Webster",
      subject: "Always Look On The Bright Side Of Life",
      time: "3:52 PM",
      label: "friends",
      isStarred: false,
      isChecked: false,
    },
    {
      id: 10,
      sender: "Anthony Briggs",
      subject: "Free Classifieds Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      label: null,
      isStarred: true,
      isChecked: false,
    },
    {
      id: 11,
      sender: "Fanny Weaver",
      subject: "Free Classifieds Using Them To Promote Your Stuff Online",
      time: "7:52 PM",
      label: null,
      isStarred: true,
      isChecked: false,
    },
    {
      id: 12,
      sender: "Harvey Manning",
      subject: "Curling Irons Are As Individual As The Women Who Use Them",
      time: "2:30 PM",
      label: null,
      isStarred: true,
      isChecked: false,
    },
  ]);

  const toggleStar = (id: number) => {
    setMessages(
      messages.map((message) =>
        message.id === id
          ? { ...message, isStarred: !message.isStarred }
          : message
      )
    );
  };

  const toggleCheck = (id: number) => {
    setMessages(
      messages.map((message) =>
        message.id === id
          ? { ...message, isChecked: !message.isChecked }
          : message
      )
    );
  };

  // Get label name and color based on label type
  const getLabelInfo = (label: string | null) => {
    switch (label) {
      case "primary":
        return { name: "Primary", className: "label label-primary" };
      case "work":
        return { name: "Work", className: "label label-work" };
      case "social":
        return { name: "Social", className: "label label-social" };
      case "friends":
        return { name: "Friends", className: "label label-friends" };
      default:
        return { name: "", className: "" };
    }
  };

  return (
    <div className="p-6 bg-[#F5F6FA] min-h-screen">
      <h1 className="text-3xl font-bold text-[#202224] mb-6">Inbox</h1>

      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className="w-[260px] bg-white rounded-[14px] border border-[#B9B9B9]/30 p-4">
          {/* Compose Button */}
          <button className="w-full bg-[#4880FF] text-white font-bold py-3 px-4 rounded-lg mb-6 compose-btn">
            + Compose
          </button>

          {/* My Email Section */}
          <div className="mb-6">
            <h2 className="text-[16px] font-bold mb-4">My Email</h2>

            <div className="space-y-4">
              {/* Inbox */}
              <div className="category-item active">
                <FiMail className="icon text-[#4880FF]" />
                <span className="font-bold text-[#4880FF]">Inbox</span>
                <span className="count text-[#4880FF] opacity-80">1253</span>
              </div>

              {/* Starred */}
              <div className="category-item">
                <FiStar className="icon text-gray-700" />
                <span className="font-semibold">Starred</span>
                <span className="count text-gray-600 opacity-60">245</span>
              </div>

              {/* Sent */}
              <div className="category-item">
                <FiSend className="icon text-gray-700" />
                <span className="font-semibold">Sent</span>
                <span className="count text-gray-600 opacity-60">24,532</span>
              </div>

              {/* Draft */}
              <div className="category-item">
                <FiEdit className="icon text-gray-700" />
                <span className="font-semibold">Draft</span>
                <span className="count text-gray-600 opacity-60">09</span>
              </div>

              {/* Spam */}
              <div className="category-item">
                <FiAlertCircle className="icon text-gray-700" />
                <span className="font-semibold">Spam</span>
                <span className="count text-gray-600 opacity-60">14</span>
              </div>

              {/* Bin */}
              <div className="category-item">
                <FiTrash2 className="icon text-gray-700" />
                <span className="font-semibold">Bin</span>
                <span className="count text-gray-600 opacity-60">9</span>
              </div>
            </div>
          </div>

          {/* Labels Section */}
          <div className="mb-6">
            <h2 className="text-[16px] font-bold mb-4">Label</h2>

            <div className="space-y-4">
              {/* Primary Label */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-emerald-500 rounded"></div>
                <span className="font-semibold">Primary</span>
              </div>

              {/* Work Label */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-orange-500 rounded"></div>
                <span className="font-semibold">Work</span>
              </div>

              {/* Social Label */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
                <span className="font-semibold">Social</span>
              </div>

              {/* Friends Label */}
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-purple-500 rounded"></div>
                <span className="font-semibold">Friends</span>
              </div>
            </div>
          </div>

          {/* Create New Label */}
          <div className="flex items-center justify-between text-gray-500 mt-6 create-label">
            <span className="font-semibold">Create New Label</span>
            <span className="text-xl plus-icon">+</span>
          </div>
        </div>

        {/* Right Side - Email List */}
        <div className="flex-1 bg-white rounded-[14px] border border-[#B9B9B9]/30 overflow-hidden">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search mail"
                className="w-full h-10 pl-10 pr-4 bg-[#F5F6FA] border border-[#D5D5D5] rounded-full text-sm outline-none search-mail"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Email List */}
          <div className="divide-y divide-gray-200">
            {messages.map((message) => (
              <div key={message.id} className="message-row transition-colors">
                <div className="flex items-center p-4">
                  {/* Checkbox */}
                  <div className="mr-3">
                    <div
                      className={`inbox-checkbox ${
                        message.isChecked ? "checked" : ""
                      }`}
                      onClick={() => toggleCheck(message.id)}
                    />
                  </div>

                  {/* Star */}
                  <button
                    onClick={() => toggleStar(message.id)}
                    className="mr-3"
                  >
                    <FiStar
                      className={`star-icon ${
                        message.isStarred ? "active" : "text-gray-400"
                      }`}
                    />
                  </button>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-sm truncate">
                        {message.sender}
                      </h3>
                      <div className="flex items-center gap-2">
                        {message.label && (
                          <span
                            className={getLabelInfo(message.label).className}
                          >
                            {getLabelInfo(message.label).name}
                          </span>
                        )}
                        <span className="text-xs text-gray-500">
                          {message.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-800 opacity-90 truncate">
                      {message.subject}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination/Actions Bar */}
          <div className="flex justify-between items-center p-4 border-t border-gray-200">
            <div className="text-sm text-gray-500">Showing 1-12 of 1,253</div>
            <div className="flex items-center gap-2">
              {/* Quick Actions */}
              <div className="flex items-center bg-[#FAFBFD] border border-[#D5D5D5] rounded-xl px-2 py-1 mr-4">
                <button className="p-2 text-gray-600">
                  <FiTrash2 />
                </button>
                <div className="h-5 w-px bg-gray-300 mx-1"></div>
                <button className="p-2 text-gray-600">
                  <FiMoreVertical />
                </button>
              </div>

              {/* Pagination */}
              <div className="pagination-controls">
                <button>
                  <FiChevronLeft />
                </button>
                <div className="divider"></div>
                <button>
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxPage;
