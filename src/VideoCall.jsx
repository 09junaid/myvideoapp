import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import logo from "./assets/images/novatalk.png"; // Apna logo replace karein

export default function VideoCall() {
  const { roomid } = useParams();
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async () => {
      try {
        const appID = import.meta.env.VITE_ZEGO_APP_ID;
        const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;

        if (!appID || !serverSecret) {
          console.error("App ID or Server Secret is missing or invalid in .env");
          return;
        }

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          Number(appID),
          serverSecret,
          roomid,
          Date.now().toString(),
          "junaid"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: meetingContainerRef.current,
          sharedLinks: [
            {
              name: "Personal link",
              url: `${window.location.protocol}//${window.location.host}/room/${roomid}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
        });
      } catch (error) {
        console.error("Error initializing video call:", error);
      }
    };

    if (meetingContainerRef.current) {
      myMeeting();
    }
  }, [roomid]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#f0f1ff]">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-40 mb-4" />

      {/* Video Call Container */}
      <div className="w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center">
        <div
          ref={meetingContainerRef}
          className="w-full h-full rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
}
