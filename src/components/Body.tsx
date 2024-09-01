// import './styles.css';
// import profile from "../images/profile.png";
// import blog1 from '../public/images/blog1.jpg';
// import blog2 from '../public/images/blog2.png';
// import blog3 from '../public/images/blog3.png';
// import blog4 from '../public/images/blog4.jpg';
// import blog5 from '../public/images/blog5.png';
// import blog6 from '../public/images/blog6.png';
// import blog7 from '../public/images/blog7.png';
// import blog8 from '../public/images/blog8.png';
// import steventey from '../public/images/steventey.jpg';
// import kirankrishan from '../public/images/tokirankrishnan.jpg';
// import timwilson from '../public/images/actualTimWilson.jpg';

import Image from 'next/image';


export default function Body() {
    return (
      <>
        <div className='w-auto-2/3 md:auto bg-custom-image border-b'>
            <div className="md:ml-36 md:mr-36 pb-16">
                <div>
                <div className='md:pt-16'>
                    <h1 className='text-slate-700 md:text-4xl text-2xl font-bold'>Blog</h1>
                </div>

                <div className='m-2'>
                    <h1 className='text-slate-500 md:text-xl text-lg'>Latest news and updates from Dub&rsquo;co</h1>
                </div>
                <div className="bg-white border rounded-full mt-4 p-2 inline-block md:block hidden flex items-center items-center w-[70%] max-w-5xl -ml-auto">
                    <ul className="flex flex-wrap md:space-x-2 md:p-1 justify-between items-center">
                    <li><a href="#" className="bg-gray-700 text-white px-4 py-2 md:px-2 rounded-full text-sm">Overview</a></li>
                    <li><a href="#" className="text-slate-600 hover:bg-gray-100 bg-opacity-50 px-4 py-2 rounded-full text-sm">Company News</a></li>
                    <li><a href="#" className="text-slate-600 hover:bg-gray-100 bg-opacity-50 px-4 py-2 rounded-full text-sm">Engineering</a></li>
                    <li><a href="#" className="text-slate-600 hover:bg-gray-100 bg-opacity-50 px-4 py-2 rounded-full text-sm">Customer Stories</a></li>
                    <li><a href="#" className="text-slate-600 hover:bg-gray-100 bg-opacity-50 px-4 py-2 rounded-full text-sm">Changelog</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        
        

    <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid grid-cols-1 gap-4 py-10 md:grid-cols-3'>
         
        {/* Blog1 */}
        <a 
        href="#"
        className="flex flex-col rounded-lg border border-gray-200 transition-all hover:shadow-lg"
        >
        <Image
            src='/images/blog1.jpg'
            alt="Introducing Dub Integrations"
            width={2400}
            height={1260}
            decoding="async"
            fetchPriority="high"
            className="aspect-[1200/630] rounded-t-xl object-cover blur-0"
            style={{ color: "transparent" }}
        />
        <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
            <div>
            <h2 className="font-display text-xl font-bold text-gray-700 line-clamp-2">
                Introducing Dub Integrations
            </h2>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                Today&#39; we&apos;re excited to unveil a new way to extend Dub&apos;s functionality
                with integrations&rsquo; Get started with our flagship integrations&#39; or build
                your own&rsquo;
            </p>
            </div>
            <div className="mt-4 flex items-center space-x-2">
            <div className="flex items-center -space-x-2">
                <Image
                src='/images/steventey.jpg'
                alt="Steven Tey"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="rounded-full transition-all blur-0 group-hover:brightness-90"
                style={{ color: "transparent" }}
                />
                <Image
                src='/images/tokirankrishnan.jpg'
                alt="Kiran Krishnan"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="rounded-full transition-all blur-0 group-hover:brightness-90"
                style={{ color: "transparent" }}
                />
            </div>
            <time 
                dateTime="2024-08-26" 
                className="text-sm text-gray-500"
            >
                August 26&#39; 2024
            </time>
            </div>
        </div>
        </a>

        {/* Blog2 */}
        <a 
        href="#"
        className="flex flex-col rounded-lg border border-gray-300 bg-white transition-transform hover:scale-100 hover:shadow-xl"
        >
        <Image
            src='/images/blog2.png'
            alt="Why you should always use a custom domain for your short links"
            width={1905}
            height={1001}
            decoding="async"
            fetchPriority="high"
            className="aspect-[16/9] object-cover rounded-t-lg"
            style={{ color: "transparent" }}
        />
        <div className="p-6">
        <h2 className="line-clamp-2 font-display text-xl font-bold text-gray-700">
                Why you should always use a custom domain for your short links
            </h2>
            <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                Still using generic short domains like bit&rsquo;ly? Learn why custom domains
                are better for click-through rates&#39; and how to choose one that best
                reflects your brand&rsquo;
            </p>
            <div className="mt-4 flex items-center space-x-2">
            <div className="flex items-center">
                <Image
                src='/images/steventey.jpg'
                alt="Steven Tey"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="rounded-full border-2 border-white shadow-lg"
                style={{ color: "transparent" }}
                />
                
            </div>
            <time 
                dateTime="2024-08-13" 
                className="text-sm text-gray-500"
            >
                August 13&#39; 2024
            </time>
            </div>
        </div>
        </a>

        {/* Blog3 */}
        <a 
        href="#"
        className="flex flex-col rounded-lg border border-gray-300 bg-white transition-transform hover:scale-100 hover:shadow-xl"
        >
        <Image
            src='/images/blog3.png'
            alt="Introducing Real-time Events Stream"
            width={1905}
            height={1001}
            decoding="async"
            fetchPriority="high"
            className="aspect-[16/9] object-cover rounded-t-lg"
            style={{ color: "transparent" }}
        />
        <div className="p-6">
            <h2 className="line-clamp-2 font-display text-xl font-bold text-gray-700">
                Introducing Real-time Events Stream
            </h2>
            <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                Gain deeper insights into your clicks with a detailed&#39; real-time stream
                of events across your entire Dub workspace&rsquo;
            </p>
            <div className="mt-4 flex items-center space-x-2">
            <div className="flex items-center -space-x-2">
                <Image
                src='/images/steventey.jpg'
                alt="Steven Tey"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="rounded-full transition-all blur-0 group-hover:brightness-90"
                style={{ color: "transparent" }}
                />

                <Image
                src='/images/actualTimWilson.jpg'
                alt="Tim Wilson"
                loading="lazy"
                width={36}
                height={36}
                decoding="async"
                className="rounded-full transition-all blur-0 group-hover:brightness-90"
                style={{ color: "transparent" }}
                
                />

                <Image
                src='/images/tokirankrishnan.jpg'
                alt="Kiran Krishnan"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="rounded-full transition-all blur-0 group-hover:brightness-90"
                style={{ color: "transparent" }}
                />
            </div>
            <time 
                dateTime="2024-08-13" 
                className="text-sm text-gray-500"
            >
                August 1&#39; 2024
            </time>
            </div>
        </div>
        </a>

        {/* blog4 */}
        <a 
        href="#"
        className="flex flex-col rounded-lg border border-gray-200 transition-all hover:shadow-lg"
        >
        <Image 
            src='/images/blog4.jpg'
            alt="Introducing the new Dub links dashboard"
            width={2400}
            height={1260}
            decoding="async"
            fetchPriority="high"
            className="aspect-[1200/630] rounded-t-xl object-cover blur-0"
            style={{ color: "transparent" }}
        />
        <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
            <div>
            <h2 className="font-display text-xl font-bold text-gray-700 line-clamp-2">
                Introducing the new Dub links dashboard
            </h2>
            <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                Today&#39; we&apos;re launching our new links dashboard redesigned from the ground up to help you better manage your links&rsquo;
            </p>
            </div>
            <div className="mt-4 flex items-center space-x-2">
            <div className="flex items-center -space-x-2">
                <Image
                src='/images/steventey.jpg'
                alt="Steven Tey"
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                className="rounded-full transition-all blur-0 group-hover:brightness-90"
                style={{ color: "transparent" }}
                />
                <Image
                src='/images/actualTimWilson.jpg'
                alt="Tim Wilson"
                loading="lazy"
                width={36}
                height={36}
                decoding="async"
                className="rounded-full transition-all blur-0 group-hover:brightness-90"
                style={{ color: "transparent" }}
                />
            </div>
            <time 
                dateTime="2024-07-25" 
                className="text-sm text-gray-500"
            >
                July 25&#39; 2024
            </time>
            </div>
        </div>
        </a>

        

    </div>


      
        
      </>
    )
  }
  