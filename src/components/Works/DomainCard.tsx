import React from "react";
import { FaLock } from "react-icons/fa";
import ChatBoxLeft from "./ChatBoxLeft";
import ChatBoxRight from "./ChatBoxRight";

const DomainCard = ({ company, chat }: { company: any; chat: any }) => {
  return (
    <div className="window-card w-96">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
        </div>
        <div className="bg-[var(--ds-gray-100-value)] px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-[hsl(var(--muted-foreground))]">
          <FaLock size={10} />
          <h2 className="text-[10px] md:text-sm font-[family-name:var(--font-geist-mono)]">
            {company}
          </h2>
        </div>
        <div></div>
      </div>
      <div className="bg-[var(--ds-background-100)] my-4">
        {chat.map((message: any, index: number) =>
          message.type === "right" ? (
            <ChatBoxRight key={index} text={message.text} />
          ) : (
            <ChatBoxLeft key={index} text={message.text} />
          )
        )}
      </div>
    </div>
  );
};

export default DomainCard;
