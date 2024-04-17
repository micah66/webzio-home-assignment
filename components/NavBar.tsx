import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 mb-3">
      <nav className="p-4 bg-black flex items-center justify-between">
        <ul className="flex items-center gap-4 font-bold">
          {links.map(({ href, label }) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </ul>
        {/* failed to implement allowing the user to use their own API key */}
        {/* <div className="flex items-center gap-2">
          Want to use your own API key?
          <APIForm />
        </div> */}
      </nav>
    </header>
  );
}
