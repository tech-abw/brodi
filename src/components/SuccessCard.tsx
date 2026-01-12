import Image from 'next/image';

interface SuccessCardProps {
  title: string;
  description: string;
  name: string;
  role: string;
  imageUrl: string;
}

const SuccessCard: React.FC<SuccessCardProps> = ({ title, description, name, role, imageUrl }) => {
  return (
    <div className=" p-6 rounded-2xl shadow-md bg-white text-left">
      <h3 className="text-xl font-semibold text-[#189A55] font-sora mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center">
        
        <div className="ml-4">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
        <div className="ml-auto">
        <Image src={imageUrl} alt={name} width={40} height={40} className="rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
