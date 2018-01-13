import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <Link href="/" >
                <button>Home</button>
            </Link>
            <Link href="/aboutUs">
                <button>About Us</button>
            </Link>
        </div>
    )
};

export default Header;