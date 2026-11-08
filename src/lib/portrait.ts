import { useState, useEffect } from "react";

const STORAGE_KEY = "harsh_custom_portrait_v1";
const DEFAULT_PORTRAIT = "/portrait.svg";
const PORTRAIT_EVENT = "harsh-portrait-updated";

export function usePortraitImage() {
  const [portraitSrc, setPortraitSrc] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_PORTRAIT;
    } catch {
      return DEFAULT_PORTRAIT;
    }
  });

  useEffect(() => {
    const handleUpdate = () => {
      try {
        setPortraitSrc(localStorage.getItem(STORAGE_KEY) || DEFAULT_PORTRAIT);
      } catch {
        setPortraitSrc(DEFAULT_PORTRAIT);
      }
    };
    window.addEventListener(PORTRAIT_EVENT, handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener(PORTRAIT_EVENT, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const updatePortraitFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxDim = 900;
        let width = img.width;
        let height = img.height;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.88);
          try {
            localStorage.setItem(STORAGE_KEY, dataUrl);
            setPortraitSrc(dataUrl);
            window.dispatchEvent(new CustomEvent(PORTRAIT_EVENT));
          } catch {
            setPortraitSrc(dataUrl);
          }
        }
      };
      if (typeof ev.target?.result === "string") {
        img.src = ev.target.result;
      }
    };
    reader.readAsDataURL(file);
  };

  return { portraitSrc, updatePortraitFile };
}
