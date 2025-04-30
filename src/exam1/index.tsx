import star from "../assets/image/star.svg"
import star_color from "../assets/image/star_color.svg"
import aries from "../assets/image/aries.svg"
import calendar from "../assets/image/calendar.svg"
import ImageMarker, { Marker, MarkerComponentProps } from 'react-image-marker';
import { useState } from "react";

const Exam1 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [markers, setMarkers] = useState<Marker[]>([
    { top: 12.987012987012985, left: 44.48051948051948 },
    { top: 12.987012987012985, left: 49.35064935064935 },
    { top: 30.519480519480517, left: 24.675324675324674 },
    { top: 27.27272727272727, left: 18.181818181818183 },
    { top: 33.76623376623377, left: 18.181818181818183 },
    { top: 46.75324675324675, left: 12.337662337662337 },
    { top: 46.75324675324675, left: 17.532467532467532 },
    { top: 18.506493506493506, left: 63.31168831168831 },
    { top: 33.116883116883116, left: 73.05194805194806 },
    { top: 33.116883116883116, left: 79.54545454545455 },
    { top: 46.42857142857143, left: 82.79220779220779 },
    { top: 62.33766233766234, left: 78.57142857142857 },
    { top: 62.33766233766234, left: 72.07792207792207 },
  ]);

  const CustomMarker = (props: MarkerComponentProps) => {
    return (<>
      <img
        alt="star"
        src={`./assets/image/Star_TH-${props.itemNumber}.svg`}
        className={`object-contain relative z-10 size-[20px]`}
      />
    </>
    );
  };

  return (
    <div className="relative w-[360px] bg-[#f5f5ff]">
      <div className="fixed w-[360px] z-50 bg-white">
        <div
          className="flex gap-1 items-center cursor-pointer h-[59px]"
          onClick={() => window.history.back()}
        >
          <svg
            width="15"
            height="24"
            viewBox="0 0 15 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4"
          >
            <g clip-path="url(#clip0_1_11061)">
              <path
                d="M10 17L5 12L10 7"
                stroke="#313091"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_11061">
                <rect
                  width="24"
                  height="15"
                  fill="white"
                  transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 15 24)"
                />
              </clipPath>
            </defs>
          </svg>

          <p className="text-base leading-6 tracking-[-0.019em] text-[#403d9a]">
            <span className="text-[#403d9a] text-base tracking-[-0.019em] font-normal"
            >
              กลับ
            </span>
          </p>
        </div>
      </div>
      <div className="rounded-2xl relative bg-transparent">
        <div
          className="overflow-hidden rounded-t-none rounded-b-[1000px] relative"
        >
          <div className="rounded-t-none rounded-b-[180px] bg-[url('assets/image/background.svg')] bg-bottom">
            <div className="flex justify-center items-center relative">
              <h3
                className="w-full text-[28px] leading-7 tracking-[-0.019em] text-center text-white font-bold text-white"
              >
                <span className="flex gap-2 mt-[99px] tracking-[-0.019em] items-center justify-center">
                  <img alt="star" src={star} />
                  ปฏิทินโหราศาสตร์ทั้งชีวิต
                  <img alt="star" src={star} />
                </span >
              </h3>
            </div>
            <div className="flex p-4 justify-center items-center relative">
              <ImageMarker
                src={calendar}
                markers={markers}
                // onAddMarker={(marker: Marker) => setMarkers([...markers, { ...marker, isSelected: false }])}
                markerComponent={CustomMarker}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl px-4 py-6 relative w-[360px] bg-transparent">
        <div className="flex flex-col gap-2 items-center self-stretch relative">
          <h4
            className="text-2xl leading-8 tracking-[-0.019em] text-center bg-gradient-to-b from-[#363595] to-[#d39bfe] bg-clip-text text-transparent"
          >
            <span
              className="text-bg-clip-text text-transparent text-2xl tracking-[-0.019em] font-bold"
            >
              สรุปคำทำนายทั้งชีวิต
            </span>
          </h4>
          <p
            className="text-base leading-6 tracking-[-0.019em] text-center text-[#181818]"
          >
            <span className="text-[#181818] text-base tracking-[-0.019em] font-normal"
            >Figma ipsum component variant main layer. Flows image italic create
              prototype horizontal star bullet project connection. Figma ipsum
              component variant main layer. Flows image italic create prototype
              horizontal star bullet project connection.</span>
          </p>
        </div>
      </div>
      <ul className="mx-4 p-2 flex justify-center items-center gap-2 rounded-[24px] text-white bg-[#403D9A] rounded-lg">
        <li className={`
          w-50 flex-1 text-center px-4 py-3 rounded-[16px] cursor-pointer
          ${tabIndex === 0 && " font-bold bg-white text-[#3F3D99]"}
          hover:font-bold hover:bg-white hover:text-[#3F3D99]
          `}
          onClick={() => setTabIndex(0)}
        >
          ดาวที่อยู่ในภพ
        </li>
        <li className={`
          w-50 flex-1 text-center px-4 py-3 rounded-[16px] cursor-pointer
          ${tabIndex === 1 && " font-bold bg-white text-[#3F3D99]"}
          hover:font-bold hover:bg-white hover:text-[#3F3D99]
          `}
          onClick={() => setTabIndex(1)}
        >
          ดาวเจ้าเรือน
        </li>
      </ul>
      {tabIndex === 0 &&
        <div>
          <h5
            className="mt-6 mb-4 text-xl leading-6 tracking-[-0.019em] text-center text-[#250e62]"
          >
            <span className="flex text-[#250e62] text-xl tracking-[-0.019em] font-bold items-center justify-center">
              <img className="p-1" alt="star_color" src={star_color} />
              คำทำนายดาวที่อยู่ในภพ
              <img className="p-1" alt="star_color" src={star_color} />
            </span>
          </h5>
          <div
            className="flex gap-[5px] justify-center items-center relative w-[18px]"
          ></div>
          <div
            className="rounded-2xl p-4 flex flex-col gap-4 items-start self-stretch relative w-full bg-gradient-to-b from-[#353494] to-[#d9c3f1] bg-[linear-gradient(90deg, #353494 0.00%, #d9c3f1 100.00%)]"
          >
            <div className="flex gap-2.5 items-center relative">
              <div className="relative w-11 h-11 bg-transparent">
                <img alt="star" className="object-contain relative z-10 size-[44px]" src="./assets/image/Star_TH-0.svg" />

              </div>
              <h5 className="text-xl leading-6 tracking-[-0.019em] text-white">
                <span className="text-white text-xl tracking-[-0.019em] font-bold">
                  ดวงอาทิตย์
                </span>
              </h5>
            </div>
            <div
              className="flex flex-col gap-2 items-start self-stretch relative w-full"
            >
              <div
                className="flex justify-between items-center self-stretch relative w-full"
              >
                <div
                  className="rounded-2xl px-4 py-2 flex gap-2 items-center relative h-[68px] bg-white"
                >
                  <div
                    className="flex flex-col gap-2 justify-center items-start"
                  >
                    <small
                      className="text-sm leading-5 tracking-[-0.019em] text-[#8a8a8a]"
                    >
                      <span
                        className="text-[#8a8a8a] text-sm tracking-[-0.019em] font-normal"
                      >
                        ดวงอาทิตย์อยู่ใน
                      </span>
                    </small>

                    <p className="text-base leading-6 text-[#240d60]">
                      <span
                        className="text-[#240d60] text-base font-bold"
                      >
                        ภพกัมมะ
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-2xl px-4 py-2 flex gap-2 items-center relative w-[170px] bg-white"
                >
                  <div
                    className="overflow-hidden rounded-2xl absolute right-1 bottom-[3px] w-15 h-[61px] bg-[#3f3d9a]"
                  >
                    <img src={aries} alt="aries" className="size-[60px]" />
                  </div>
                  <div
                    className="flex flex-col gap-2 justify-center items-start relative"
                  >
                    <small
                      className="text-sm leading-5 tracking-[-0.019em] text-[#8a8a8a]"
                    >
                      <span
                        className="text-[#8a8a8a] text-sm tracking-[-0.019em] font-normal"
                      >
                        ราศีของดาว
                      </span>
                    </small>
                    <p className="text-base leading-6 text-[#240d60]">
                      <span className="text-[#240d60] text-base font-bold">
                        ราศีเมษ
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-2xl p-4 flex flex-col gap-2 items-start self-stretch relative w-full bg-white"
              >
                <p className="text-base leading-6 text-[#4e1fb8]">
                  <span className="text-[#4e1fb8] text-base font-bold">ทำนายว่า </span>
                </p>

                <p className="text-base leading-6 tracking-[-0.019em] text-[#240d60]">
                  <span
                    className="text-[#240d60] text-base tracking-[-0.019em] font-normal"
                  >
                    Figma ipsum component variant main layer. Layout boolean
                    overflow font ellipse main variant duplicate.
                  </span>
                </p>

                <p className="text-base leading-6 text-[#4e1fb8]">
                  <span className="text-[#4e1fb8] text-base font-bold">คำแนะนำ </span>
                </p>

                <p className="text-base leading-6 tracking-[-0.019em] text-[#250e62]">
                  <span
                    className="text-[#250e62] text-base tracking-[-0.019em] font-normal"
                  >
                    Figma ipsum component variant main layer. Clip undo horizontal
                    figjam duplicate pen selection device bold layer.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      {tabIndex === 1 &&
        <div>
          <h5
            className="mt-6 mb-4 text-xl leading-6 tracking-[-0.019em] text-center text-[#250e62]"
          >
            <span className="flex text-[#250e62] text-xl tracking-[-0.019em] font-bold items-center justify-center">
              <img className="p-1" alt="star_color" src={star_color} />
              คำทำนายดาวเจ้าเรือน
              <img className="p-1" alt="star_color" src={star_color} />
            </span>
          </h5>
          <div
            className="flex gap-[5px] justify-center items-center relative w-[18px]"
          ></div>
          <div
            className="rounded-2xl p-4 flex flex-col gap-4 items-start self-stretch relative w-full bg-gradient-to-b from-[#353494] to-[#d9c3f1] bg-[linear-gradient(90deg, #353494 0.00%, #d9c3f1 100.00%)]"
          >
            <div className="flex gap-2.5 items-center relative">
              <div className="relative w-11 h-11 bg-transparent">
                <img alt="star" className="object-contain relative z-10 size-[44px]" src="./assets/image/Star_TH-10.svg" />

              </div>
              <h5 className="text-xl leading-6 tracking-[-0.019em] text-white">
                <span className="text-white text-xl tracking-[-0.019em] font-bold">
                  ดวงจันทร์
                </span>
              </h5>
            </div>
            <div
              className="flex flex-col gap-2 items-start self-stretch relative w-full"
            >
              <div
                className="flex justify-between items-center self-stretch relative w-full"
              >
                <div
                  className="rounded-2xl px-4 py-2 flex gap-2 items-center relative h-[68px] bg-white"
                >
                  <div
                    className="flex flex-col gap-2 justify-center items-start"
                  >
                    <small
                      className="text-sm leading-5 tracking-[-0.019em] text-[#8a8a8a]"
                    >
                      <span
                        className="text-[#8a8a8a] text-sm tracking-[-0.019em] font-normal"
                      >
                        ดวงอาทิตย์อยู่ใน
                      </span>
                    </small>

                    <p className="text-base leading-6 text-[#240d60]">
                      <span
                        className="text-[#240d60] text-base font-bold"
                      >
                        ภพกัมมะ
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-2xl px-4 py-2 flex gap-2 items-center relative w-[170px] bg-white"
                >
                  <div
                    className="overflow-hidden rounded-2xl absolute right-1 bottom-[3px] w-15 h-[61px] bg-[#3f3d9a]"
                  >
                    <img src={aries} alt="aries" className="size-[60px]" />
                  </div>
                  <div
                    className="flex flex-col gap-2 justify-center items-start relative"
                  >
                    <small
                      className="text-sm leading-5 tracking-[-0.019em] text-[#8a8a8a]"
                    >
                      <span
                        className="text-[#8a8a8a] text-sm tracking-[-0.019em] font-normal"
                      >
                        ราศีของดาว
                      </span>
                    </small>
                    <p className="text-base leading-6 text-[#240d60]">
                      <span className="text-[#240d60] text-base font-bold">
                        ราศีเมษ
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded-2xl p-4 flex flex-col gap-2 items-start self-stretch relative w-full bg-white"
              >
                <p className="text-base leading-6 text-[#4e1fb8]">
                  <span className="text-[#4e1fb8] text-base font-bold">ทำนายว่า </span>
                </p>

                <p className="text-base leading-6 tracking-[-0.019em] text-[#240d60]">
                  <span
                    className="text-[#240d60] text-base tracking-[-0.019em] font-normal"
                  >
                    Figma ipsum component variant main layer. Layout boolean
                    overflow font ellipse main variant duplicate.
                  </span>
                </p>

                <p className="text-base leading-6 text-[#4e1fb8]">
                  <span className="text-[#4e1fb8] text-base font-bold">คำแนะนำ </span>
                </p>

                <p className="text-base leading-6 tracking-[-0.019em] text-[#250e62]">
                  <span
                    className="text-[#250e62] text-base tracking-[-0.019em] font-normal"
                  >
                    Figma ipsum component variant main layer. Clip undo horizontal
                    figjam duplicate pen selection device bold layer.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
export default Exam1;