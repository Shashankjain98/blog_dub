import Image from 'next/image';

export default function Footer() {
  return (
    <>
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative z-10 overflow-hidden border border-b-0 border-gray-200 bg-white/50 pb-60 pt-16 backdrop-blur-lg md:rounded-t-2xl">

        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-6">
              <a href="/" className="block max-w-fit">
                <span className="sr-only">Dub.co Logo</span>
                <div className="max-w-fit">
                  <Image
                    src="/images/icon.png" 
                    alt="Dub.co Logo"
                    width={32} 
                    height={32} 
                    className="w-auto dark:text-white h-8 text-gray-800"
                  />
                </div>
              </a>
              <p className="max-w-xs text-sm text-gray-500">
                Giving modern marketing teams superpowers with short links that stand out.
              </p>
              <p className="text-sm leading-5 text-gray-400">
                © 2024 Dub Technologies, Inc.
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://twitter.com/dubdotco"
                  target="_blank"
                  className="group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100"
                >
                  <span hidden>Twitter</span>
                  <svg
                    width="300"
                    height="300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="p-px h-4 w-4 text-gray-600 transition-colors group-hover:text-black"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/dubinc/dub"
                  target="_blank"
                  className="group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100"
                >
                  <span hidden>Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                    className="h-4 w-4 text-gray-600 transition-colors group-hover:text-black"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/dubinc"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100"
                >
                  <span hidden>LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-gray-600 transition-colors group-hover:text-[#0077b5]"
                  >
                    <path
                      fill="currentColor"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@dubdotco"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100"
                >
                  <span hidden>YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    className="h-4 w-4 text-gray-600 transition-colors group-hover:text-[#ff0000]"
                  >
                    <g
                      style={{
                        stroke: "none",
                        strokeWidth: 0,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "#ff0000",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="translate(1.407 1.407) scale(2.81 2.81)"
                    >
                      <path
                        d="M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z M 36 58.5 v -27 L 59.382 45 L 36 58.5 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "currentColor",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform="matrix(1 0 0 1 0 0)"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <a
                target="_blank"
                href="#"
                className="group flex max-w-fit items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-colors hover:bg-gray-100"
              >
                <div className="relative h-3 w-3">
                  <div className="absolute inset-0 m-auto h-3 w-3 animate-ping items-center justify-center rounded-full group-hover:animate-none bg-green-500" />
                  <div className="absolute inset-0 z-10 m-auto h-3 w-3 rounded-full bg-green-500" />
                </div>
                <p className="text-sm font-medium text-gray-800">All systems operational</p>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Features</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Advanced Analytics
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Branded Links
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        QR Codes
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Personalization
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Collaboration
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        API
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-800">Product</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Brand
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Changelog
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Customers
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Help Center
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2">
                <div className="flex flex-col space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Compare</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      <li>
                        <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                          Bitly
                        </a>
                      </li>
                      <li>
                        <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                          Rebrandly
                        </a>
                      </li>
                      <li>
                        <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                          Short.io
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">Legal</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      <li>
                        <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                          Terms
                        </a>
                      </li>
                      <li>
                        <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                          Subprocessors
                        </a>
                      </li>
                      <li>
                        <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                          DPA
                        </a>
                      </li>
                      <li>
                        <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                          Report Abuse
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-800">Tools</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Spotify Link Shortener
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        ChatGPT Link Shortener
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        GitHub Link Shortener
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Google Link Shortener
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Amazon Link Shortener
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Figma Link Shortener
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Metatags API
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        Link Inspector
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        QR Code API
                      </a>
                    </li>
                    <li>
                      <a className="text-sm text-gray-500 hover:text-gray-800" href="#">
                        UTM Builder
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>


              

        <div className="relative w-full h-80 mx-auto border-b-0 bg-white/50 backdrop-blur-lg">
  <Image
    src="/images/footer_1.jpg"
    alt="Background"
    layout="fill"
    objectFit="cover"
    quality={75}
    className="absolute inset-0"
  /> 
</div>

        </div>
      
    </>
  );
}
