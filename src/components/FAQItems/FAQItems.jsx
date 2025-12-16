import { useState } from "react";

import { Plus } from "@phosphor-icons/react";

export default function FAQItems({ question, response }) {
  const [expandedResponse, setExpandedResponse] = useState(false);

  const toggleExpand = () => {
    setExpandedResponse(!expandedResponse);
  };

  return (
    <div className="flex items-center justify-center flex-col bg-white rounded-lg p-2.5 md:p-4 border border-gray-200 shadow-sm">
      <div className="flex w-full justify-between items-center cursor-pointer" onClick={toggleExpand}>
        <h2 className="text-[#213360] font-semibold md:text-xl">{question}</h2>
        <button
          className="focus:outline-none p-1"
          aria-expanded={expandedResponse}
        >
          <Plus
            size={24}
            weight="bold"
            className={`
              text-[#EE6C20] transition-transform duration-300 ease-in-out
              ${expandedResponse ? "rotate-45" : "rotate-0"} 
            `}
          />
        </button>
      </div>
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out text-gray-700 flex items-start w-full md:text-lg font-medium
          ${
            expandedResponse ? "max-h-96 pt-3 opacity-100" : "max-h-0 opacity-0"
          }
        `}
      >
        <p dangerouslySetInnerHTML={{ __html: response }} />
      </div>
    </div>
  );
}