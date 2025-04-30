import { useState } from "react";
import profile from "../assets/image/profile.jpg";
import virgo from "../assets/image/virgo.svg";
import earth from "../assets/image/earth.svg";
import cart from "../assets/image/cart.svg";
import menu2 from "../assets/image/menu2.svg";
import menu3 from "../assets/image/menu3.svg";
import menu4 from "../assets/image/menu4.svg";
import menu5 from "../assets/image/menu5.svg";

import { create } from "domain";
import dayjs from "dayjs";

var buddhistEra = require("dayjs/plugin/buddhistEra");

dayjs.extend(buddhistEra);

const Exam2 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const data = [
    {
      id: 1,
      title: "หัวข้อ",
      createdAt: "2025-02-01",
      icon: earth,
      fill: "#18BD14"
    },
    {
      id: 2,
      title: "หัวข้อ",
      createdAt: "2025-01-01",
      icon: earth,
      fill: "#A3A3A3"

    },
    {
      id: 3,
      title: "หัวข้อ",
      createdAt: "2024-12-10",
      icon: cart,
      fill: "#05A7E0"
    },
    {
      id: 4,
      title: "หัวข้อ",
      createdAt: "2024-12-10",
      icon: cart,
      fill: "#05A7E0"
    },
    {
      id: 5,
      title: "หัวข้อ",
      createdAt: "2024-12-10",
      icon: cart,
      fill: "#05A7E0"
    },
  ]
  return (
    <div className="overflow-hidden relative w-[360px] bg-[#f5f5ff]">
      <div className="flex justify-between items-center relative w-[360px] h-[55px] bg-[#403d9a] px-4">
        <h4 className="text-2xl leading-[15px] tracking-[-0.019em] text-white">
          <span className="text-white text-2xl tracking-[-0.019em] font-normal">
            LOGO
          </span>
        </h4>
        <div className="flex gap-4 justify-end items-center">
          <div
            className="rounded-tr-2xl rounded-br-2xl relative w-20 h-5 bg-[#b9bffb]/[39%]">
            <div className="absolute left-[-12px] top-[-3px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0"
              >
                <g filter="url(#filter0_i_8_325)">
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#FFEA00" />
                </g>
                <defs>
                  <filter
                    id="filter0_i_8_325"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.764706 0 0 0 0 0.427451 0 0 0 0 0.0941176 0 0 0 1 0" />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_8_325" />
                  </filter>
                </defs>
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 m-[5px]"
              >
                <path
                  d="M12.2987 3.56813C11.5675 2.3125 10.5738 1.625 9.5 1.625H6.5C5.42625 1.625 4.4325 2.3125 3.70125 3.56813C3.0075 4.75813 2.625 6.33187 2.625 8C2.625 9.66813 3.0075 11.2419 3.70125 12.4319C4.4325 13.6875 5.42625 14.375 6.5 14.375H9.5C10.5738 14.375 11.5675 13.6875 12.2987 12.4319C12.9925 11.2444 13.375 9.66813 13.375 8C13.375 6.33187 12.9925 4.75813 12.2987 3.56813ZM12.6175 7.625H10.3675C10.3269 6.4475 10.0944 5.32938 9.69625 4.375H11.875C12.3162 5.29625 12.5725 6.42313 12.6175 7.625ZM9.5 2.375C10.2069 2.375 10.8888 2.81625 11.4462 3.625H9.33L9.29875 3.56813C9.04599 3.12192 8.72336 2.71911 8.34313 2.375H9.5ZM4.34875 12.0538C3.72125 10.9769 3.375 9.5375 3.375 8C3.375 6.4625 3.72125 5.02312 4.34875 3.94625C4.9375 2.93313 5.70375 2.375 6.5 2.375C7.29625 2.375 8.0625 2.93313 8.65125 3.94625C9.27875 5.02312 9.625 6.4625 9.625 8C9.625 9.5375 9.27875 10.9769 8.65125 12.0538C8.0625 13.0669 7.29625 13.625 6.5 13.625C5.70375 13.625 4.9375 13.0669 4.34875 12.0538ZM9.5 13.625H8.34313C8.72336 13.2809 9.04599 12.8781 9.29875 12.4319L9.33 12.375H11.4462C10.8888 13.1838 10.2069 13.625 9.5 13.625ZM11.875 11.625H9.69625C10.0944 10.6706 10.3269 9.5525 10.3675 8.375H12.6175C12.5725 9.57687 12.3162 10.7037 11.875 11.625Z"
                  fill="#BC8403" />
              </svg>
            </div>
            <p
              className="-ml-1.5 p-0.5 text-[11px] leading-[15px] tracking-[-0.019em] text-center text-white">
              <span className="text-white text-[11px] tracking-[-0.019em] font-bold"
              >500,000</span>
            </p>
            <div className="absolute right-0.5 top-0.5">
              <svg
                className="absolute top-0 left-0 m-1"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z"
                  fill="white" />
              </svg>
              <div className="rounded-full w-4 h-4 bg-[#59b436] border border-white/[20%]"></div>
            </div>
          </div>
          <div
            className="rounded-tr-2xl rounded-br-2xl relative w-20 h-5 bg-[#b9bffb]/[39%]">
            <div className="absolute left-[-12px] top-[-3px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0"
              >
                <g filter="url(#filter0_i_8_579)">
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#CA59E3" />
                </g>
                <defs>
                  <filter
                    id="filter0_i_8_579"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.1" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.501961 0 0 0 0 0.160784 0 0 0 0 0.521569 0 0 0 1 0" />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_8_579" />
                  </filter>
                </defs>
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 m-[5px]"
              >
                <path
                  d="M9.17113 6.73633C9.50566 6.44413 9.7429 6.05666 9.85104 5.62584C9.95918 5.19502 9.93306 4.74144 9.77618 4.32589C9.6193 3.91033 9.33915 3.55265 8.97329 3.30078C8.60742 3.04891 8.17331 2.91489 7.72913 2.91667H6.99996V2.04167C6.99996 1.96431 6.96923 1.89013 6.91453 1.83543C6.85983 1.78073 6.78565 1.75 6.70829 1.75C6.63094 1.75 6.55675 1.78073 6.50205 1.83543C6.44736 1.89013 6.41663 1.96431 6.41663 2.04167V2.91667H4.66663V2.04167C4.66663 1.96431 4.6359 1.89013 4.5812 1.83543C4.5265 1.78073 4.45231 1.75 4.37496 1.75C4.2976 1.75 4.22342 1.78073 4.16872 1.83543C4.11402 1.89013 4.08329 1.96431 4.08329 2.04167V2.91667H3.20829C3.13094 2.91667 3.05675 2.9474 3.00205 3.00209C2.94736 3.05679 2.91663 3.13098 2.91663 3.20833C2.91663 3.28569 2.94736 3.35987 3.00205 3.41457C3.05675 3.46927 3.13094 3.5 3.20829 3.5H4.08329V10.5H3.20829C3.13094 10.5 3.05675 10.5307 3.00205 10.5854C2.94736 10.6401 2.91663 10.7143 2.91663 10.7917C2.91663 10.869 2.94736 10.9432 3.00205 10.9979C3.05675 11.0526 3.13094 11.0833 3.20829 11.0833H4.08329V11.9583C4.08329 12.0357 4.11402 12.1099 4.16872 12.1646C4.22342 12.2193 4.2976 12.25 4.37496 12.25C4.45231 12.25 4.5265 12.2193 4.5812 12.1646C4.6359 12.1099 4.66663 12.0357 4.66663 11.9583V11.0833H6.41663V11.9583C6.41663 12.0357 6.44736 12.1099 6.50205 12.1646C6.55675 12.2193 6.63094 12.25 6.70829 12.25C6.78565 12.25 6.85983 12.2193 6.91453 12.1646C6.96923 12.1099 6.99996 12.0357 6.99996 11.9583V11.0833H8.89579C9.45209 11.0856 9.98825 10.8753 10.3946 10.4955C10.801 10.1156 11.047 9.59478 11.0821 9.03959C11.1173 8.48441 10.939 7.93676 10.5838 7.50863C10.2286 7.0805 9.72327 6.80424 9.17113 6.73633ZM4.66663 3.5H7.72913C8.15458 3.5 8.5626 3.66901 8.86344 3.96985C9.16428 4.27069 9.33329 4.67872 9.33329 5.10417C9.33329 5.52962 9.16428 5.93764 8.86344 6.23848C8.5626 6.53932 8.15458 6.70833 7.72913 6.70833H4.66663V3.5ZM8.89579 10.5H4.66663V7.29167H8.89579C9.32124 7.29167 9.72927 7.46068 10.0301 7.76152C10.3309 8.06236 10.5 8.47038 10.5 8.89583C10.5 9.32128 10.3309 9.72931 10.0301 10.0302C9.72927 10.331 9.32124 10.5 8.89579 10.5Z"
                  fill="white" />
              </svg>
            </div>
            <p
              className="-ml-1.5 p-0.5 text-[11px] leading-[15px] tracking-[-0.019em] text-center text-white">
              <span className="text-white text-[11px] tracking-[-0.019em] font-bold"
              >1,500,000</span>
            </p>
            <div className="absolute right-0.5 top-0.5">
              <svg
                className="absolute top-0 left-0"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.99996 6.66667C7.82315 6.66667 7.65358 6.7369 7.52856 6.86193C7.40353 6.98695 7.33329 7.15652 7.33329 7.33333V11.3333C7.33329 11.5101 7.40353 11.6797 7.52856 11.8047C7.65358 11.9298 7.82315 12 7.99996 12C8.17677 12 8.34634 11.9298 8.47136 11.8047C8.59639 11.6797 8.66663 11.5101 8.66663 11.3333V7.33333C8.66663 7.15652 8.59639 6.98695 8.47136 6.86193C8.34634 6.7369 8.17677 6.66667 7.99996 6.66667ZM7.99996 4C7.83514 4 7.67403 4.04887 7.53698 4.14044C7.39994 4.23201 7.29313 4.36216 7.23006 4.51443C7.16699 4.6667 7.15048 4.83426 7.18264 4.99591C7.21479 5.15756 7.29416 5.30605 7.4107 5.42259C7.52725 5.53913 7.67573 5.6185 7.83738 5.65065C7.99904 5.68281 8.16659 5.66631 8.31886 5.60323C8.47113 5.54016 8.60128 5.43335 8.69285 5.29631C8.78442 5.15927 8.83329 4.99815 8.83329 4.83333C8.83329 4.61232 8.7455 4.40036 8.58922 4.24408C8.43293 4.0878 8.22097 4 7.99996 4Z"
                  fill="white" />
              </svg>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  fill="#6DCEEE" />
                <circle
                  cx="8"
                  cy="8"
                  r="7.5"
                  stroke="white"
                  stroke-opacity="0.2" />
              </svg>
            </div>
          </div>
          <div
            className="rounded-[17px] border border-[#ececec] px-2 flex gap-[11px] justify-center items-end relative w-7 h-7 bg-white bg-[url('assets/image/profile.jpg')] bg-cover"></div>
        </div>
      </div>
      <div className="h-[73px]" />
      <div className="px-4">
        <div
          className="flex flex-col justify-center items-center relative shadow-[0px_4px_4px_0px_rgba(0.2666666805744171,0.15294118225574493,0.41960784792900085,0.04)] rounded-3xl bg-[url('assets/image/bg.svg')] bg-center bg-cover"
        >
          <img className="absolute size-[103px] top-[-57px] left-1/2 transform -translate-x-1/2 border-[5px] border-white rounded-full" src={profile} alt="profile" />
          <p className="pt-[46px] pb-4 text-lg leading-6 tracking-[-0.019em] text-white text-center">
            <span
              className="text-white text-lg tracking-[-0.019em] font-bold"
            >
              นายเอ นามสมมุติ
            </span>
          </p>
          <div className="flex pb-5 gap-2.5 justify-center items-center relative w-[280px]">
            <div className="flex gap-2 items-center relative">
              <img className="w-[41px]" src={virgo} alt="virgo" />
              <small className="w-[214px] text-sm leading-5 tracking-[-0.019em] text-white">
                <span className="text-white text-sm tracking-[-0.019em] font-normal"
                >แรม 13 ค่ำ เดือน 8 ปีมะแม จ.ศ. 1353 สถิตราศีกันย์ ประกอบ
                  ด้วยภูมิปาโลฤกษ์
                </span>
              </small>
            </div>
          </div>
          <p className="pb-4 text-base leading-6 tracking-[-0.019em] text-white">
            <span
              className="text-white text-base tracking-[-0.019em] font-normal"
            >
              สถานที่เกิดที่เกิด : กรุงเทพ
            </span>
          </p>
          <div className="flex gap-2 justify-between items-center relative w-[248px]">
            <div className="flex flex-col gap-0 items-start relative">
              <small className="text-sm leading-5 tracking-[-0.019em] text-white">
                <span
                  className="text-white text-sm tracking-[-0.019em] font-normal"
                >
                  วันเดือนปีเกิด
                </span>
              </small>

              <p className="text-base leading-6 tracking-[-0.019em] text-white">
                <span
                  className="text-white text-base tracking-[-0.019em] font-normal"
                >
                  06/12/2541
                </span>
              </p>
            </div>
            <div className="h-[44px] border-r-[0.5px]">
            </div>
            <div className="flex flex-col gap-0 items-start relative">
              <small className="text-sm leading-5 tracking-[-0.019em] text-white">
                <span
                  className="text-white text-sm tracking-[-0.019em] font-normal"
                >
                  เวลาเกิด
                </span>
              </small>

              <p className="text-base leading-6 tracking-[-0.019em] text-white">
                <span
                  className="text-white text-base tracking-[-0.019em] font-normal"
                >
                  12:11 น.
                </span>
              </p>
            </div>
            <div className="h-[44px] border-r-[0.5px]">
            </div>
            <div className="flex flex-col gap-0 items-start relative">
              <small className="text-sm leading-5 tracking-[-0.019em] text-white">
                <span
                  className="text-white text-sm tracking-[-0.019em] font-normal"
                >
                  อายุ
                </span>
              </small>

              <p className="text-base leading-6 tracking-[-0.019em] text-white">
                <span
                  className="text-white text-base tracking-[-0.019em] font-normal"
                >
                  25 ปี
                </span>
              </p>
            </div>
          </div>

          <div className="overflow-hidden relative w-[248px] my-5 border-b-[0.5px]"></div>
          <p className="self-start text-lg leading-6 tracking-[-0.019em] text-white w-[248px] mx-auto mb-2.5">
            <span
              className="text-white text-lg tracking-[-0.019em] font-bold"
            >
              แนะนำเพื่อน
            </span>
          </p>
          <div className="relative w-[248px] mb-2.5">
            <div
              className="flex items-center relative  rounded-tl-2xl rounded-bl-2xl w-[239px] h-11 bg-[#feffff]/[20%]"
            >
              <div
                className="flex gap-[9px] items-center w-[204px] h-[22px] bg-transparent"
              >

                <small className="text-sm leading-5 tracking-[-0.019em] text-white px-2.5">
                  <span
                    className="text-white text-sm tracking-[-0.019em] font-normal"
                  >
                    MU1234567889999
                  </span>
                </small>

              </div>
              <div className="absolute right-[-29px] top-0 z-50">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 mx-2.5 my-3"
                >

                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1254 0.988281H11.9233C10.4722 0.988281 9.32273 0.988281 8.42352 1.10941C7.49825 1.23449 6.74904 1.49732 6.15773 2.08949C5.5672 2.68245 5.3051 3.43374 5.18036 4.36157C5.05957 5.26407 5.05957 6.41595 5.05957 7.87103V12.6654C5.05959 13.3727 5.31136 14.0567 5.76957 14.5944C6.22779 15.1321 6.86234 15.4882 7.55904 15.5985C7.6672 16.2033 7.87641 16.7195 8.29483 17.1399C8.7701 17.6164 9.36852 17.8207 10.079 17.9173C10.7635 18.0091 11.6343 18.0091 12.7135 18.0091H15.1688C16.248 18.0091 17.1188 18.0091 17.8033 17.9173C18.5138 17.8207 19.1122 17.6164 19.5875 17.1399C20.0627 16.6633 20.2664 16.0632 20.3627 15.3507C20.4543 14.6643 20.4543 13.7911 20.4543 12.7089V8.66349C20.4543 7.58128 20.4543 6.70807 20.3627 6.0217C20.2664 5.3092 20.0627 4.70911 19.5875 4.23253C19.1683 3.81295 18.6535 3.60316 18.0504 3.4947C17.9404 2.79606 17.5853 2.15974 17.0491 1.70026C16.5129 1.24077 15.8307 0.9883 15.1254 0.988281ZM16.8069 3.37991C16.6869 3.02841 16.4602 2.72335 16.1587 2.50743C15.8572 2.29152 15.4959 2.17555 15.1254 2.17578H11.9675C10.4619 2.17578 9.39299 2.17736 8.58062 2.28661C7.7872 2.39349 7.32931 2.59457 6.99536 2.92945C6.66141 3.26432 6.46089 3.72349 6.35431 4.51991C6.24536 5.33374 6.24378 6.40566 6.24378 7.91536V12.6654C6.24356 13.0369 6.35919 13.3992 6.57451 13.7016C6.78983 14.004 7.09404 14.2312 7.44457 14.3516C7.42799 13.8687 7.42799 13.3224 7.42799 12.7089V8.66349C7.42799 7.58128 7.42799 6.70807 7.52036 6.0217C7.6151 5.3092 7.82036 4.70911 8.29483 4.23253C8.7701 3.75595 9.36852 3.5517 10.079 3.45591C10.7635 3.36328 11.6343 3.36328 12.7135 3.36328H15.1688C15.7806 3.36328 16.3254 3.36328 16.8069 3.37991ZM9.13168 5.07328C9.35036 4.85399 9.65668 4.71149 10.2369 4.63311C10.8322 4.55316 11.6233 4.55157 12.7561 4.55157H15.1246C16.2575 4.55157 17.0477 4.55316 17.6446 4.63311C18.224 4.71149 18.5304 4.85478 18.749 5.07328C18.9677 5.29257 19.1098 5.59974 19.188 6.18161C19.2677 6.77853 19.2693 7.57178 19.2693 8.70782V12.6662C19.2693 13.8022 19.2677 14.5947 19.188 15.1932C19.1098 15.7742 18.9669 16.0814 18.749 16.3007C18.5304 16.52 18.224 16.6625 17.6438 16.7409C17.0477 16.8208 16.2575 16.8224 15.1246 16.8224H12.7561C11.6233 16.8224 10.8322 16.8208 10.2361 16.7409C9.65668 16.6625 9.35036 16.5192 9.13168 16.3007C8.91299 16.0814 8.77089 15.7742 8.69273 15.1924C8.61299 14.5947 8.61141 13.8022 8.61141 12.6662V8.70782C8.61141 7.57178 8.61299 6.77853 8.69273 6.18082C8.77089 5.59974 8.91378 5.29257 9.13168 5.07328Z"
                    fill="white" />
                </svg>
                <div className="rounded-2xl w-11 h-11 bg-[#3e3c99]"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-1.5 items-center relative mb-5">
            <button
              className="rounded-2xl border-2 border-[#05a7e0] p-2.5 flex gap-1 justify-center items-center relative w-[83px] h-11 bg-white">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.50001 15.0003L15.5 9.00031M11.5 6.00031L11.963 5.46431C12.9008 4.52663 14.1727 3.99991 15.4989 4C16.825 4.00009 18.0968 4.527 19.0345 5.46481C19.9722 6.40261 20.4989 7.6745 20.4988 9.00066C20.4987 10.3268 19.9718 11.5986 19.034 12.5363L18.5 13.0003M13.5 18.0003L13.103 18.5343C12.154 19.472 10.8736 19.9979 9.53951 19.9979C8.20538 19.9979 6.92502 19.472 5.97601 18.5343C5.50813 18.072 5.13665 17.5215 4.88311 16.9146C4.62958 16.3077 4.49902 15.6565 4.49902 14.9988C4.49902 14.3411 4.62958 13.6899 4.88311 13.083C5.13665 12.4761 5.50813 11.9256 5.97601 11.4633L6.50001 11.0003"
                  stroke="#05A7E0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>

              <p className="text-base leading-6 tracking-[-0.019em] text-[#05a7e0]">
                <span
                  className="text-[#05a7e0] text-base tracking-[-0.019em] font-normal"
                >
                  URL
                </span>
              </p></button
            ><button
              className="rounded-2xl border-2 border-[#18bd14] p-2.5 flex gap-[5px] justify-center items-center relative w-[90px] h-11 bg-white">
              <p className="text-base leading-6 tracking-[-0.019em] text-[#18bd14]">
                <span
                  className="text-[#18bd14] text-base tracking-[-0.019em] font-normal"
                >
                  LINE
                </span>
              </p></button
            ><button
              className="rounded-2xl border-2 border-[#f04e98] p-2.5 flex gap-1 justify-center items-center relative w-[83px] h-11 bg-white">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 3H4.5C3.94772 3 3.5 3.44772 3.5 4V7C3.5 7.55228 3.94772 8 4.5 8H7.5C8.05228 8 8.5 7.55228 8.5 7V4C8.5 3.44772 8.05228 3 7.5 3Z"
                  stroke="#F04E98"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M6.30781 5H5.70781C5.59736 5 5.50781 5.08954 5.50781 5.2V5.8C5.50781 5.91046 5.59736 6 5.70781 6H6.30781C6.41827 6 6.50781 5.91046 6.50781 5.8V5.2C6.50781 5.08954 6.41827 5 6.30781 5Z"
                  stroke="#F04E98"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M20.5 3H17.5C16.9477 3 16.5 3.44772 16.5 4V7C16.5 7.55228 16.9477 8 17.5 8H20.5C21.0523 8 21.5 7.55228 21.5 7V4C21.5 3.44772 21.0523 3 20.5 3Z"
                  stroke="#F04E98"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M7.5 16H4.5C3.94772 16 3.5 16.4477 3.5 17V20C3.5 20.5523 3.94772 21 4.5 21H7.5C8.05228 21 8.5 20.5523 8.5 20V17C8.5 16.4477 8.05228 16 7.5 16Z"
                  stroke="#F04E98"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M12.5 7V10C12.5 10.5304 12.2893 11.0391 11.9142 11.4142C11.5391 11.7893 11.0304 12 10.5 12H7.5M3.5 12H3.51M12.5 3H12.51M12.5 16V16.01M16.5 12H17.5M21.5 12V12.01M12.5 21V20M3.5 10H4.5M8.5 10V10.01M7.5 14.4914H8.5M3.5 14.4814V14.4914M16.5 10H21.5M5.5 12V14.4914M14.6941 9V10.01M14.6941 12.01V12.02M10.5 16V17.01M10.5 19.01V19.02M10.5 14.4914H14.6941M14.6941 7.5V3M10.5 6.99V5.99M10.5 8.99V9M10.49 3H10.5M16.5 14.4914H21.5M14.5 17H21.5M16.5 19.01V19.02M21.5 19.5V18.5V21M18.5 18.99V19M16.5 21H17.5"
                  stroke="#F04E98"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>

              <p className="text-base leading-6 tracking-[-0.019em] text-[#f04e98]">
                <span
                  className="text-[#f04e98] text-base tracking-[-0.019em] font-normal"
                >
                  QR
                </span>
              </p>
            </button>
          </div>

        </div>
        <div className="flex gap-[5px] items-start self-stretch relative w-[328px] mt-8 mb-4">
          <button
            className="opacity-80 rounded-2xl border border-[#403d9a] px-[5px] py-2.5 flex gap-2.5 justify-center items-center relative w-[107px] h-11 bg-white">
            <p className="text-base leading-6 tracking-[-0.019em] text-[#807dd6]">
              <span className="text-[#807dd6] text-base tracking-[-0.019em] font-normal"
              >ตัวอย่าง 1</span>
            </p></button
          ><button
            className="rounded-2xl border border-[#673ab7] px-[5px] py-2.5 flex gap-2.5 justify-center items-center relative w-[105px] h-11 bg-[#403d9a]">
            <p className="text-base leading-6 tracking-[-0.019em] text-white">
              <span className="text-white text-base tracking-[-0.019em] font-normal"
              >ตัวอย่าง 2</span>
            </p></button
          ><button
            className="opacity-80 rounded-2xl border border-[#403d9a] px-[5px] py-2.5 flex gap-2.5 justify-center items-center relative w-[107px] h-11 bg-white">
            <p className="text-base leading-6 tracking-[-0.019em] text-[#807dd6]">
              <span className="text-[#807dd6] text-base tracking-[-0.019em] font-normal"
              >ตัวอย่าง 3</span>
            </p>
          </button>
        </div>
        <div
          className="flex gap-2.5 items-center relative w-[328px] mb-2">
          <button
            className="border-x-0 border-t-0 border-b-2 border-[#5a4dad] py-2.5 flex gap-2.5 items-center relative h-10 bg-transparent">
            <p className="text-base leading-6 text-center text-[#5a4dad]">
              <span className="text-[#5a4dad] text-base font-bold">PHOTO</span>
            </p></button
          ><button
            className="border-x-0 border-t-0 border-b-2 border-[#673ab7] py-2.5 flex gap-2.5 justify-center items-center relative w-[68px] h-10 bg-transparent">
            <p className="text-base leading-6 tracking-[-0.019em] text-[#5a4dad]">
              <span className="text-[#5a4dad] text-base tracking-[-0.019em] font-normal"
              >QR</span>
            </p>
          </button>
        </div>
        <div className="flex flex-col gap-2 items-start relative w-[328px]">
          {/* Repeat this block for each item */}
          {data.map(el =>
            <div className="flex flex-row gap-2 items-center rounded-2xl px-2 py-1 relative w-full h-[68px] bg-white">
              <div
                className="w-3 h-3"
                style={{
                  WebkitMask: `url(${el.icon}) no-repeat center`,
                  mask: `url(${el.icon}) no-repeat center`,
                  backgroundColor: el.fill ? el.fill : undefined
                }}
              />
              <img
                alt=""
                className=" rounded-2xl w-11 h-11"
                src={`assets/image/img${el.id}.jpg`}
              />
              <div className="flex flex-col gap-2 justify-center items-start relative">
                <p className="text-base leading-6 text-[#240d60]">
                  <span className="text-[#240d60] text-base font-bold">{el.title}</span>
                </p>

                <small className="text-sm leading-5 tracking-[-0.019em] text-neutral-400">
                  <span
                    className="text-neutral-400 text-sm tracking-[-0.019em] font-normal"
                  >
                    วันที่สร้าง {dayjs(el.createdAt).format("DD/MM/BBBB")}
                  </span>
                </small>
              </div>
            </div>
          )}
          {/* End Repeat this block for each item */}
        </div>
      </div>

      <div className="flex flex-row justify-center bg-white relative w-[360px] h-[85px] shadow-[0px_0px_5px_0px_#44276B4D] bg-transparent">
        <div className="py-2.5 flex flex-col gap-1 items-center relative w-[60px] h-[66px]">
          <img src={menu2} alt="" />
          <small
            className="text-[10px] leading-[15px] tracking-[-0.019em] text-center text-[#8a8a8a]">
            <span
              className="text-[#8a8a8a] text-[10px] tracking-[-0.019em] font-normal"
            >
              เมนู 2
            </span>
          </small>
        </div>
        <div className="py-2.5 flex flex-col gap-1 items-center relative w-[60px] h-[66px]">
          <img src={menu4} alt="" />
          <small
            className="text-[10px] leading-[15px] tracking-[-0.019em] text-center text-[#673ab7]">
            <span
              className="text-[#673ab7] text-[10px] tracking-[-0.019em] font-bold"
            >
              เมนู 4
            </span>
          </small>
        </div>
        <div className="py-2.5 flex flex-col gap-1 justify-end  items-center relative w-[70px] h-[70px]">
          <div className="w-[70px] h-[70px] bg-white shadow-[0px_0px_5px_0px_#44276B4D] absolute top-[-20px] left-0 transform -translate-1/2 rounded-full">
          </div>
          <div className="w-[100px] h-[55px] bg-white absolute top-0 left-50 transform -translate-1/2">
          </div>
          <div className="absolute rounded-[45px] top-[-10px] left-50 transform -translate-1/2 w-12 h-12 bg-[#D9D9D9]"></div>

          <small
            className="text-[10px] leading-[15px] tracking-[-0.019em] text-center text-[#8a8a8a] z-50">
            <span
              className="text-[#8a8a8a] text-[10px] tracking-[-0.019em] font-normal"
            >
              เมนู 1
            </span>
          </small>

        </div>
        <div className="py-2.5 flex flex-col gap-1 items-center relative w-[60px] h-[66px]">
          <img src={menu3} alt="" />
          <small
            className="text-[10px] leading-[15px] tracking-[-0.019em] text-center text-[#8a8a8a]">
            <span
              className="text-[#8a8a8a] text-[10px] tracking-[-0.019em] font-normal"
            >
              เมนู 3
            </span>
          </small>
        </div>
        <div className="py-2.5 flex flex-col gap-1 items-center relative w-[60px] h-[66px]">
          <img src={menu5} alt="" />
          <small
            className="text-[10px] leading-[15px] tracking-[-0.019em] text-center text-[#8a8a8a]">
            <span
              className="text-[#8a8a8a] text-[10px] tracking-[-0.019em] font-normal"
            >
              เมนู 5
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}
export default Exam2;