'use client'
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = ({ text }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button onClick={handleGoBack} className="flex items-center gap-1">
      <FaArrowLeft color="#F7F7F7" size={18} />
      <span>{text}</span>
    </button>
  );
};

export default BackButton;
