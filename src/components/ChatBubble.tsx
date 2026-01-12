import React from 'react';

interface ChatBubbleProps {
  children: React.ReactNode;
  className?: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute left-0 top-0 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[15px] border-r-green-500 transform -translate-x-full bg-[#99DF63]  z-10"></div>
    </div>
  ;
};

export default ChatBubble;
