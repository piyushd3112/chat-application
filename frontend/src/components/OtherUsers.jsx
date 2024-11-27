import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../Hooks/useGetOtherUsers";
import {useSelector} from "react-redux";

const OtherUsers = () => {
  useGetOtherUsers();
  const {OtherUsers} = useSelector((store) => store.user);
  if (!OtherUsers) return;

  return (
    <div className="h-full max-h-[500px] overflow-auto border border-gray-500 rounded-lg relative">
      {OtherUsers?.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
    </div>
  );
};

export default OtherUsers;
