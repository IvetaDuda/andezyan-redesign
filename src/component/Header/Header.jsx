'use client';

import styles from './Header.module.scss';
import { navigationData } from '../../data/navigation.data';
import CallButton from '../Buttons/CallButton/CallButton';
import Image from 'next/image';
import Link from 'next/link';
import { handleScroll } from '@/helpers/handleScroll';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const clickLink = () => {
    handleScroll;
  };
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.logo}>
        <Image src="/logo_bg_black_small.svg" alt="logo" fill={true} />
      </div>
      <ul className={styles.headerNav}>
        {navigationData.map(({ id, title, path }) => {
          return (
            <li key={id}>
              <Link
                href={path}
                onClick={clickLink}
                className={
                  pathname === path ? `navLinkHover  active` : `navLinkHover`
                }
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <CallButton title="Замовити дзвінок" />
    </header>
  );
};

export default Header;
