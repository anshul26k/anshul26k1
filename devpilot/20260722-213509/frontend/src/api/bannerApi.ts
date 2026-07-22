export interface BannerSettings {
  message: str;
  isClosable: boolean;
}

export const fetchBannerSettings = async (): Promise<BannerSettings> => {
  const response = await fetch('http://localhost:8000/api/banner');
  if (!response.ok) {
    throw new Error('Failed to fetch banner settings');
  }
  return response.json();
};