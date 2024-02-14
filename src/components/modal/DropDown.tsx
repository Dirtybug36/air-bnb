//dropdown while clicking personal

interface DropDownProps {
  onOpen: () => void;
}
export const DropDown: React.FC<DropDownProps> = ({ onOpen }) => {
  return (
    <div className="relative inline-block text-left curser-pointer">
      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1 " role="none" onClick={onOpen}>
          <p
            className="text-gray-700 block px-4 py-2 text-sm "
            role="menuitem"
            id="menu-item-0"
          >
            Sign Up
          </p>
          <p
            className="text-gray-700 block px-4 py-2 text-sm "
            role="menuitem"
            id="menu-item-0"
          >
            Log in
          </p>
        </div>
        <div className="py-1" role="none">
          <a
            href="/Archive"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-2"
          >
            Gift Cards
          </a>
          <a
            href="/Move"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-3"
          >
            Airbnb your home
          </a>
        </div>
        <div className="py-1" role="none">
          <a
            href="/Share"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-4"
          >
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
};
