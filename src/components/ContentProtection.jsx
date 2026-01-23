import { useEffect } from "react";

const ContentProtection = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (e.key === "F12") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
      }

      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "PrintScreen") {
        navigator.clipboard.writeText("");

        alert("Screenshots are disabled on this page!");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp); 
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return null;
};

export default ContentProtection;