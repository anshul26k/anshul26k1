import React from 'react';
import { X } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface WelcomeBannerProps {
  message: string;
  isClosable?: boolean;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ message, isClosable = true }) => {
  const [isVisible, setIsVisible] = useLocalStorage('banner_visible', true);

  if (!isVisible) return null;

  return (
    <div className="bg-indigo-600 px-4 py-3 text-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-center font-medium flex-grow">{message}</p>
        {isClosable && (
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-indigo-500 rounded-full transition-colors"
            aria-label="Dismiss"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};