import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="bg-white sticky inset-x-0 top-0 z-30 w-full transition-all">
      <nav className="w-auto h-auto ml-32 mr-32 bg-transparent grid grid-cols-6 items-center">
        <div className="w-20 grid-span-1 gap-x-1">
          <Image 
            src="/images/icon.png" 
            alt="icon" 
            width={70} 
            height={50} 
          />
        </div>

        <div className="col-span-3 bg-white border rounded-full inline-block flex items-center h-[70%] ml-auto">
          <ul className="space-x-4 p-4 flex">
            <li>
              <a href="#" className="text-slate-500 hover:bg-gray-100 bg-opacity-50 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 flex justify-end gap-4 pl-20">
          <ul className="space-x-4 p-4 flex">
            <li>
              <a href="#" className="text-slate-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                Log in
              </a>
            </li>
            <li>
            <a href="#" className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-gray-800 hover:ring-4 hover:ring-gray-200 hover:shadow-[0_0_25px_5px_rgba(0,0,0,0.2)]">
  Sign up
</a>

            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
