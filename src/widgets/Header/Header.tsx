'use client';

import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@/shared/constants';
import { NavigationApi, type INavigationData } from '@/entities/navigation';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import styles from './Header.module.css';

export function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [navigationData, setNavigationData] = useState<INavigationData | null>(null);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < BREAKPOINTS.TABLET);
      setIsTablet(width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.LAPTOP);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const data = await NavigationApi.getNavigation();
        setNavigationData(data);
      } catch (error) {
        console.error('Failed to fetch navigation:', error);
      }
    };
    
    fetchNavigation();
  }, []);

  if (!navigationData) {
    return <div>Loading...</div>;
  }

  return (
    <header className={styles.header}>
      {(isMobile || isTablet) ? (
        <BurgerMenu 
          navigationData={navigationData}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      ) : (
        <DesktopNavigation navigationData={navigationData} />
      )}
    </header>
  );
}