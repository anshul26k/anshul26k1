import React, { useEffect, useState } from 'react';
import { WelcomeBanner } from '../components/WelcomeBanner';
import { fetchBannerSettings, BannerSettings } from '../api/bannerApi';

export const Home: React.FC = () => {
  const [config, setConfig] = useState<BannerSettings | null>(null);

  useEffect(() => {
    fetchBannerSettings().then(setConfig).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {config && (
        <WelcomeBanner 
          message={config.message} 
          isClosable={config.isClosable} 
        />
      )}
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">Select a project to begin your SSE performance tests.</p>
      </main>
    </div>
  );
};