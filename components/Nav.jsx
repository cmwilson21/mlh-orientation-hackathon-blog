import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <Link href="/" passHref>
        <h2 className="pointer">Welcome to Bloggie</h2>
      </Link>
      <Link href="/about" passHref>
        <p className="ms-5 pointer lead my-auto">About</p>
      </Link>
      <img
        className="logo"
        src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBoaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
    </nav>
  );
};
export default Nav;
