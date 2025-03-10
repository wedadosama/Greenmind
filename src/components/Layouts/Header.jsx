import { Link } from "react-router-dom";


function Header() {

  return (
    <>
      <header className="border-b bg-white shadow-md ">
        <div className="container m-auto p-4 items-center flex justify-between">
          <div className="logo text-2xl font-bold">GREENMIND</div>
          <nav className="hidden md:flex space-x-8 text-lg font-medium ">
            <ul>
              <li>
                <Link className="text-black hover:text-green-600" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="text-gray-500 hover:text-green-600" to="/Products">
                  Products
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link className="text-gray-500 hover:text-green-600" to="/Contasts">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>

          <div className="icons flex items-center space-x-6">
            <img className="w-6 h-6" src="src/icons/Cart (1).png" alt="cart" />
            <img className="w-6 h-6" src="src/icons/Vector (5).png" alt="vector" />
            <img src="src/icons/Line 1 (1).png" alt="line" />
            <button>
              <img className="w-6 h-6" src="src/icons/Vector (6).png" alt="Menu" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
