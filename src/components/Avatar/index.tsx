"use client";
import Image from "next/image";
import Profile from "../../assets/Screenshot_20220921-102102_Instagram.jpg";

const Avatar = () => {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image src={Profile} alt="avatar" width={50} height={50}  />
      </div>
    </div>
  );
};

export default Avatar;
