import React, { useEffect, Fragment } from "react";
const Meeting = ({ payload }) => {
  useEffect(() => {
    async function joinZoomMeeting() {
      try {
        const { ZoomMtg } = await import("@zoomus/websdk");
        ZoomMtg.setZoomJSLib("https://source.zoom.us/2.15.2/lib", "/av");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();

        const signature = await new Promise((resolve, reject) => {
          ZoomMtg.generateSDKSignature({
            meetingNumber: payload.meetingNumber,
            sdkKey: payload.sdkKey,
            role: payload.role,
            sdkSecret: payload.sdkSecret,
            success: resolve,
            error: reject,
          });
        });

        ZoomMtg.init({
          leaveUrl: payload.leaveUrl,
          success: function (data) {
            ZoomMtg.join({
              meetingNumber: payload.meetingNumber,
              signature: signature.result,
              sdkKey: payload.sdkKey,
              userName: payload.userName,
              userEmail: payload.userEmail,
              passWord: payload.passWord,
              tk: "",
              success: function () {
                console.log("-----Joined-----");
              },
              error: function (error) {
                console.log(error);
              },
            });
          },
          error: function (error) {
            console.log(error);
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    joinZoomMeeting();
  }, []);

  return <Fragment></Fragment>;
};

export default Meeting;