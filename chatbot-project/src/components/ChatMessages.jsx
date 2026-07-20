import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  if (chatMessages.length) {
    return (
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
              timeSent={chatMessage.timeSent}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="chat-messages-container">
        <div className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </div>
      </div>
    );
  }
}

export default ChatMessages;