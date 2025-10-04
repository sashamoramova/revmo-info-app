'use client';

import { useState } from 'react';
import { type INavigationData } from '@/entities/navigation';
import styles from './BurgerMenu.module.css';

interface BurgerMenuProps {
  navigationData: INavigationData;
  isMobile: boolean;
  isTablet: boolean;
}

export function BurgerMenu({ navigationData, isMobile, isTablet }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const renderBurgerIcon = () => {
    if (isMobile) {
      return (
        <img 
          src="/icons/burger-menu-mobile.svg" 
          alt="Open menu" 
        //   width={24} 
        //   height={18} 
        />
      );
    }
    if (isTablet) {
      return (
        <img 
          src="/icons/burger-menu-tablet.svg" 
          alt="Open menu" 
        //   width={30} 
        //   height={22} 
        />
      );
    }
    return null;
  };

  return (
    <>
      <button 
        className={styles.burgerButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {renderBurgerIcon()}
      </button>
      
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />
          <div className={styles.menu}>
            <nav className={styles.nav}>
              {navigationData.menu.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link}
                  className={styles.menuItem}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}