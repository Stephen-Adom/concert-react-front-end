import React from "react";
import { GiDrumKit } from "react-icons/gi";
import { CgUserList } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "flowbite-react";

const SwiperSlide = ({ concert }) => {
  const navigate = useNavigate();
  return (
    <div
      className="swiper-slide hover:cursor-pointer p-[10px]"
      onClick={() => navigate(`/home/concerts/${concert.id}`)}
    >
      <figure className="overflow-hidden rounded-full">
        <img src={concert.image} width="100%" alt="" />
      </figure>

      <h3 className="mt-8 text-lg font-bold md:text-sm">{concert.name}</h3>

      <hr className="my-5 w-[50%] mx-auto h-0.5 border-t-0 bg-neutral-100 opacity-200 dark:opacity-50 border-dashed" />

      <p className="text-xs text-primaryGrey">
        {concert.description}
      </p>

      <div className="flex items-center justify-center mt-4 additional-info gap-x-3">
        <Tooltip content="Band Name" style="light" placement="top">
          <span className="flex items-center justify-center w-8 h-8 border rounded-full border-primaryGrey">
            <GiDrumKit className="text-primaryGrey"></GiDrumKit>
          </span>
        </Tooltip>

        <Tooltip content="Artist Name" style="light" placement="top">
          <span className="flex items-center justify-center w-8 h-8 border rounded-full border-primaryGrey">
            <CgUserList className="text-primaryGrey"></CgUserList>
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default SwiperSlide;
