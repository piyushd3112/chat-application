import React from "react";

const OtherUser = (props) => {
  const user = props.user;
  return (
    <div>
      <div className="text-white hover:text-zinc-800 flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src={user?.profilePhoto} alt="Profile Picture" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between  gap-2  ">
            <p>{user?.fullName}</p>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </div>
  );
};

export default OtherUser;
