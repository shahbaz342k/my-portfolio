import React, { useState } from "react";

function ErrorMessage() {
   const [showError] = useState(true);
  const [visible] = useState(true);

//   useEffect(() => {
//     const fadeIn = setTimeout(() => setVisible(true), 50);

//     const timer = setTimeout(() => {
//       setVisible(false);
//       setTimeout(() => setShowError(false), 300);
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(fadeIn);
//     };
//   }, []);

  if (!showError) return null;

  return (
    <>
      <style>{`
        .overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          z-index: 999;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .overlay.visible {
          opacity: 1;
        }

        .card {
          background: #ffffff;
          padding: 24px;
          border-radius: 16px;
          width: 320px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transform: translateY(20px) scale(0.95);
          transition: all 0.3s ease;
        }

        .card.visible {
          transform: translateY(0) scale(1);
        }

        .icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
                    color: #555;

        }

        .text {
          font-size: 14px;
          color: #555;
        }
      `}</style>

      <div className={`overlay ${visible ? "visible" : ""}`}>
        <div className={`card ${visible ? "visible" : ""}`}>
          <div className="icon">⚠️</div>
          <div className="title">Oops! Something went wrong</div>
          {/* <div className="text">
            This is a demo error message for my portfolio. It will disappear shortly.
          </div> */}
        </div>
      </div>
    </>
  );
}
export default ErrorMessage;