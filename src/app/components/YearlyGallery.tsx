"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ImageProps {
  src: string;
  status: "active" | "inactive";
  x: number;
  y: number;
  zIndex: number;
}

const imagesData2020 = [
  "/gallery/2020/0.webp",
  "/gallery/2020/1.webp",
  "/gallery/2020/2.webp",
  "/gallery/2020/3.webp",
  "/gallery/2020/4.webp",
  "/gallery/2020/5.webp",
  "/gallery/2020/6.webp",
  "/gallery/2020/7.webp",
  "/gallery/2020/8.webp",
  "/gallery/2020/9.webp",
  "/gallery/2020/10.webp",
  "/gallery/2020/11.webp",
  "/gallery/2020/12.webp",
  "/gallery/2020/13.webp",
  "/gallery/2020/14.webp",
  "/gallery/2020/15.webp",
  "/gallery/2020/16.webp",
  "/gallery/2020/17.webp",
  "/gallery/2020/18.webp",
];
const imagesData2021 = [
  "/gallery/2021/0.webp",
  "/gallery/2021/1.webp",
  "/gallery/2021/2.webp",
  "/gallery/2021/3.webp",
  "/gallery/2021/4.webp",
  "/gallery/2021/5.webp",
  "/gallery/2021/6.webp",
  "/gallery/2021/7.webp",
  "/gallery/2021/8.webp",
  "/gallery/2021/9.webp",
  "/gallery/2021/10.webp",
  "/gallery/2021/11.webp",
  "/gallery/2021/12.webp",
  "/gallery/2021/13.webp",
  "/gallery/2021/14.webp",
  "/gallery/2021/15.webp",
  "/gallery/2021/16.webp",
  "/gallery/2021/17.webp",
  "/gallery/2021/18.webp",
  "/gallery/2021/19.webp",
  "/gallery/2021/20.webp",
  "/gallery/2021/21.webp",
  "/gallery/2021/22.webp",
  "/gallery/2021/23.webp",
  "/gallery/2021/24.webp",
  "/gallery/2021/25.webp",
  "/gallery/2021/26.webp",
];
const imagesData2022 = [
  "/gallery/2022/0.webp",
  "/gallery/2022/1.webp",
  "/gallery/2022/2.webp",
  "/gallery/2022/3.webp",
  "/gallery/2022/4.webp",
  "/gallery/2022/5.webp",
  "/gallery/2022/6.webp",
  "/gallery/2022/7.webp",
  "/gallery/2022/8.webp",
  "/gallery/2022/9.webp",
  "/gallery/2022/10.webp",
  "/gallery/2022/11.webp",
  "/gallery/2022/12.webp",
  "/gallery/2022/14.webp",
  "/gallery/2022/15.webp",
  "/gallery/2022/16.webp",
  "/gallery/2022/17.webp",
  "/gallery/2022/18.webp",
  "/gallery/2022/19.webp",
  "/gallery/2022/20.webp",
  "/gallery/2022/21.webp",
  "/gallery/2022/22.webp",
  "/gallery/2022/23.webp",
  "/gallery/2022/24.webp",
  "/gallery/2022/25.webp",
  "/gallery/2022/26.webp",
  "/gallery/2022/27.webp",
];
const imagesData2023 = [
  "/gallery/2023/O.webp",
  "/gallery/2023/1.webp",
  "/gallery/2023/2.webp",
  "/gallery/2023/3.webp",
  "/gallery/2023/4.webp",
  "/gallery/2023/5.webp",
  "/gallery/2023/6.webp",
  "/gallery/2023/7.webp",
  "/gallery/2023/8.webp",
  "/gallery/2023/9.webp",
  "/gallery/2023/10.webp",
  "/gallery/2023/11.webp",
  "/gallery/2023/12.webp",
  "/gallery/2023/13.webp",
  "/gallery/2023/14.webp",
  "/gallery/2023/15.webp",
  "/gallery/2023/16.webp",
  "/gallery/2023/17.webp",
  "/gallery/2023/18.webp",
  "/gallery/2023/19.webp",
  "/gallery/2023/20.webp",
];
const imagesData2024 = [
  "/gallery/2024/O.webp",
  "/gallery/2024/1.webp",
  "/gallery/2024/2.webp",
  "/gallery/2024/3.webp",
  "/gallery/2024/4.webp",
  "/gallery/2024/5.webp",
  "/gallery/2024/7.webp",
  "/gallery/2024/8.webp",
  "/gallery/2024/9.webp",
  "/gallery/2024/10.webp",
  "/gallery/2024/11.webp",
  "/gallery/2024/12.webp",
  "/gallery/2024/13.webp",
  "/gallery/2024/14.webp",
  "/gallery/2024/15.webp",
  "/gallery/2024/16.webp",
  "/gallery/2024/17.webp",
  "/gallery/2024/18.webp",
  "/gallery/2024/19.webp",
];

export default function YearlyGallery() {
  const years = [
    { year: 2020, imagesData: imagesData2020 },
    { year: 2021, imagesData: imagesData2021 },
    { year: 2022, imagesData: imagesData2022 },
    { year: 2023, imagesData: imagesData2023 },
    { year: 2024, imagesData: imagesData2024 },
  ];

  const galleryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setGalleryRef = useCallback(
    (node: HTMLDivElement | null, index: number) => {
      galleryRefs.current[index] = node;
    },
    [],
  );

  const [imagesState, setImagesState] = useState(
    years.map(({ imagesData }) =>
      imagesData.map((src) => ({
        src,
        status: "inactive",
        x: 0,
        y: 0,
        zIndex: 0,
      })),
    ),
  );

  const [globalIndex, setGlobalIndex] = useState(0);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  const activate = (
    yearIndex: number,
    imageIndex: number,
    x: number,
    y: number,
  ) => {
    setImagesState((prevImagesState) =>
      prevImagesState.map((images, i) =>
        i === yearIndex
          ? images.map((image, j) =>
              j === imageIndex
                ? { ...image, status: "active", x, y, zIndex: globalIndex }
                : image,
            )
          : images,
      ),
    );
    setLastPosition({ x, y });
    setGlobalIndex((prevIndex) => prevIndex + 1);
  };

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - lastPosition.x, y - lastPosition.y);
  };

  const handleOnMove = (
    clientX: number,
    clientY: number,
    yearIndex: number,
  ) => {
    if (distanceFromLast(clientX, clientY) > window.innerWidth / 20) {
      const leadIndex = globalIndex % imagesState[yearIndex].length;
      activate(yearIndex, leadIndex, clientX, clientY);
      const tailIndex = (globalIndex - 5) % imagesState[yearIndex].length;
      if (imagesState[yearIndex][tailIndex]) {
        setImagesState((prevImagesState) =>
          prevImagesState.map((images, i) =>
            i === yearIndex
              ? images.map((image, j) =>
                  j === tailIndex ? { ...image, status: "inactive" } : image,
                )
              : images,
          ),
        );
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      galleryRefs.current.forEach((ref, yearIndex) => {
        if (ref && ref.contains(e.target as Node)) {
          handleOnMove(e.clientX, e.clientY, yearIndex);
        }
      });
    };
    const handleTouchMove = (e: TouchEvent) => {
      galleryRefs.current.forEach((ref, yearIndex) => {
        if (ref && ref.contains(e.target as Node)) {
          handleOnMove(e.touches[0].clientX, e.touches[0].clientY, yearIndex);
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [lastPosition, globalIndex, imagesState]);

  return (
    <div className="relative flex flex-col gap-20 overflow-hidden bg-slate-900 p-40">
      <h2 className="w-full text-center text-6xl font-semibold text-slate-300">
        Throughout the years
      </h2>
      {years.map((year, yearIndex) => (
        <div
          key={year.year}
          ref={(el) => setGalleryRef(el, yearIndex)}
          className="relative flex h-[80svh] items-center justify-center overflow-hidden rounded-3xl border border-slate-700 shadow-2xl"
        >
          <p className="font-script bg-gradient-to-b from-indigo-500 to-indigo-900 bg-clip-text text-9xl text-transparent">
            {year.year}
          </p>
          {imagesState[yearIndex].map((image, imageIndex) => (
            <img
              key={imageIndex}
              src={image.src}
              className={`absolute w-[40vmin] -translate-x-1/2 -translate-y-1/2 transform ${
                image.status === "inactive" ? "hidden" : "block"
              }`}
              style={{
                left: `${image.x - 160}px`,
                top: `${image.y}px`,
                zIndex: image.zIndex,
              }}
              alt=""
            />
          ))}
        </div>
      ))}
    </div>
  );
}
