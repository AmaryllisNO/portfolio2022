import Link from 'next/link';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/dev'>Web Dev</Link>
        </li>
        <li>
          <Link href='/design'>Design</Link>
        </li>
        <li>
          <Link href='/art'>Art</Link>
        </li>
        <li>
          <Link href='/music'>Music</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
