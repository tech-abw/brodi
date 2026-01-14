"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SuccessCardProps {
  title: string;
  description: string;
  name: string;
  role: string;
  imageUrl: string;
}

const SuccessCard: React.FC<SuccessCardProps> = ({
  title,
  description,
  name,
  role,
  imageUrl,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`p-6 rounded-2xl shadow-md bg-white text-left transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:scale-105 hover:shadow-xl`}
    >
      <h3 className="text-xl font-semibold text-[#189A55] font-sora mb-4 relative group">
        {title}
        {/* Subrayado animado */}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#189A55] transition-all duration-500 group-hover:w-full"></span>
      </h3>

      <p className="text-gray-600 mb-6">{description}</p>

      <div className="flex items-center">
        <div className="ml-4">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
        <div className="ml-auto transition-transform duration-500 hover:rotate-6 hover:scale-110">
          <Image
            src={imageUrl}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;