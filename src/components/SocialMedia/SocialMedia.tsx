import React from "react";

interface SocialMediaProps {
  type: "simple" | "decorative";
  size: "sm" | "md";
}
const SocialMedia: React.FC<SocialMediaProps> = ({ type, size }) => {
  let imgSize: number = 0;

  if (size === "sm") {
    imgSize = type === "simple" ? 48 : 50;
  } else if (size === "md") {
    imgSize = type === "simple" ? 96 : 100;
  }

  const instagramUrl =
    type === "simple"
      ? `https://img.icons8.com/fluency/${imgSize}/instagram-new.png`
      : `https://img.icons8.com/bubbles/${imgSize}/instagram-new--v2.png`;
  const facebookUrl =
    type === "simple"
      ? `https://img.icons8.com/fluency/${imgSize}/facebook-new.png`
      : `https://img.icons8.com/bubbles/${imgSize}/facebook-new.png`;
  return (
    <div>
      <a href="https://www.instagram.com/moony_macs/">
        <img
          width={imgSize}
          height={imgSize}
          src={instagramUrl}
          alt="instagram"
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61565034651026"
        target="_blank"
      >
        <img
          width={imgSize}
          height={imgSize}
          src={facebookUrl}
          alt="facebook"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
