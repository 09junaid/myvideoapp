// import React, { useEffect, useRef } from "react";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// const ZegoCall = ({ roomID }) => {
//   const appID = Number(import.meta.env.VITE_ZEGO_APP_ID);  // Convert to number
//   const serverSecret = import.meta.env.VITE_ZEGO_SERVER_SECRET;
//   const meetingRef = useRef(null);

//   useEffect(() => {
//     if (!appID || !serverSecret) {
//       console.error("⚠️ ZegoCloud: appID or serverSecret is missing! Check your .env file.");
//       return;
//     }

//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomID,
//       Date.now().toString(),
//       "User_" + Math.floor(Math.random() * 1000)
//     );

//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     if (meetingRef.current) {
//       zp.joinRoom({
//         container: meetingRef.current,
//         sharedLinks: [],
//         scenario: {
//           mode: ZegoUIKitPrebuilt.OneONoneCall, // One-on-One Call
//         },
//       });
//     }
//   }, [appID, serverSecret, roomID]);

//   return <div ref={meetingRef} style={{ width: "100%", height: "100vh" }}></div>;
// };

// export default ZegoCall;
