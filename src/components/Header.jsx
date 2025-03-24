import React from 'react';
import image from "../assets/images/novatalk.png";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [inputData, setInputData] = React.useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (inputData.trim()) {
      navigate(`/room/${inputData}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f0f1ff] pt-8 px-6">
      {/* Top Section: Logo on Right */}
      <div className="flex justify-start mb-10">
        <img 
          src={image} 
          alt="NovaTalk Logo" 
          width={180} 
          height={180} 
          className="hover:brightness-110 transition-all duration-300" 
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2b2b2b] mb-4">
          NovaTalk - Video Made Simple
        </h1>
        <p className="text-[#2b2b2b] text-lg font-medium opacity-80 leading-relaxed mb-6">
          Jump into crystal-clear video calls with just a Room ID. 
          Connect with anyone, anywhere—fast, free, and fuss-free.
        </p>

        {/* Input/Button Section (Centered) */}
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Room ID" 
            className="border border-[#2b2b2b] bg-[#f0f1ff] text-[#2b2b2b] 
            w-[220px] h-[40px] px-4 rounded-full text-sm font-medium 
            focus:outline-none focus:border-[#2b2b2b] focus:bg-white 
            transition-all duration-300 placeholder-[#2b2b2b] placeholder-opacity-60"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button 
            className="bg-[#2b2b2b] text-[#f0f1ff] h-[40px] w-[100px] rounded-full  cursor-pointer
            text-sm font-semibold hover:bg-[#3a3a3a] active:bg-[#1f1f1f] 
            transition-all duration-300"
            
            onClick={handleJoin}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}