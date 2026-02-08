const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] py-16 text-gray-700 font-sans">
      
      {/* Même padding que le header */}
      <div className="px-[60px]">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}
          <div>
            <h2 className="text-[28px] font-bold text-black mb-4">
              Flone.
            </h2>
            <p className="text-sm leading-6">
              © 2019 Flone.
              <br />
              All Rights Reserved
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-5 text-sm font-semibold tracking-widest text-black">
              ABOUT US
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer hover:text-black">About us</li>
              <li className="cursor-pointer hover:text-black">Store location</li>
              <li className="cursor-pointer hover:text-black">Contact</li>
              <li className="cursor-pointer hover:text-black">Orders tracking</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold tracking-widest text-black">
              USEFUL LINKS
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer hover:text-black">Returns</li>
              <li className="cursor-pointer hover:text-black">Support Policy</li>
              <li className="cursor-pointer hover:text-black">Size guide</li>
              <li className="cursor-pointer hover:text-black">FAQs</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="mb-5 text-sm font-semibold tracking-widest text-black">
              FOLLOW US
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="cursor-pointer hover:text-black">Facebook</li>
              <li className="cursor-pointer hover:text-black">Twitter</li>
              <li className="cursor-pointer hover:text-black">Instagram</li>
              <li className="cursor-pointer hover:text-black">Youtube</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="mb-5 text-sm font-semibold tracking-widest text-black">
              SUBSCRIBE
            </h4>
            <p className="mb-4 text-sm leading-6">
              Get E-mail updates about our latest shop
              <br />
              and special offers.
            </p>

            {/* FIX OVERFLOW */}
            <div className="flex overflow-hidden border border-gray-300">
              <input
                type="email"
                placeholder="Enter your email here..."
                className="flex-1 min-w-0 px-3 py-2 text-sm bg-transparent outline-none"
              />
              <button className="px-4 text-xs text-white transition bg-black shrink-0 hover:bg-gray-800">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
