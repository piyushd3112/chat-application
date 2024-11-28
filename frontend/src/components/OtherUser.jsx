import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedUser} from "../redux/userSlice";

const OtherUser = ({user}) => {
  const dispatch = useDispatch();
  const {selectedUser} = useSelector((store) => store.user);
  const selectedUserHandler = () => {
    dispatch(setSelectedUser(user));
  };
  return (
    <>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${
          selectedUser?.id === user?._id ? "bg-zinc-200" : ""
        } text-white hover:text-zinc-800 flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer`}
      >
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
    </>
  );
};

export default OtherUser;
