'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
// Navigation Link Component
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => (
  <a href={href} className="text-white hover:text-red-500 transition-colors duration-300 mx-4">
    {children}
  </a>
);

// Feature Card Component
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const FeatureCard = ({ icon, title, text }: FeatureCardProps) => (
    <div className="flex items-start space-x-4 p-4">
        <div className="text-red-500 color-red text-2xl">{icon}</div>
        <div>
            <h3 className="font-bold text-white text-lg">{title}</h3>
            <p className="text-gray-400 text-sm mt-1">{text}</p>
        </div>
    </div>
);
 //CryptoCard Component
type CryptoCardProps = {
  name: string;
  price: string;
  imageSrc: string; 
};

const CryptoCard = ({ name, price, imageSrc }: CryptoCardProps) => (
  <div className="bg-white bg-opacity-50 rounded-lg p-6 text-center border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
    <Image 
      src={imageSrc} 
      alt={name}
      width={500}
      height={500}
      className=" mx-auto mt-5 mb-4 "
    />
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-gray-400 mb-4">Tincidunt id nibh orci nibh justo.</p>
    <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-red">{price}</p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">
            Trade Now
        </button>
    </div>
  </div>
);


// Testimonial Card Component
type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
};

const TestimonialCard = ({ name, role, text }: TestimonialCardProps) => (
    <div className="bg-gray-800 bg-opacity-50 border  text-center border-red-700 rounded-lg p-8 mx-4">
        <p className="text-6xl text-red-500 font-serif">”</p>
        <p className="text-gray-300 italic my-4">{text}</p>
        <div className="mt-6">
            <p className="font-bold text-white">{name}</p>
            <p className="text-red-500 text-sm">{role}</p>
        </div>
    </div>
);


// --- Main Page Component ---
export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2, hours: 12, minutes: 23, seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
            clearInterval(timer);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0c0f2e] min-h-screen font-sans text-red-500 overflow-x-hidden">
      <main className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-8 py-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold px-8 text-red">Faizan Masood</h1>
          <nav className="hidden md:flex items-center">
            <NavLink href="#">How It Works</NavLink>
            <NavLink href="#">Cryptos</NavLink>
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Testimonial</NavLink>
            <NavLink href="#">University</NavLink>
          </nav>
           <button className="border-2 border-red-500 text-white px-5 py-2 rounded-full hover:bg-red-500 transition-colors duration-300 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>Login</span>
            </button>
        </header>

        {/* Hero Section */}
         <section  className="container mx-auto px-18 py-20 text-center relative bg-cover bg-center" 
    style={{ backgroundImage: `url('/pictures/Background (1).png')` }}>
          <h2 className="text-5xl md:text-6xl  text-white font-bold leading-tight">
            Next Generation <br /> Crypto Trading
          </h2>
          <p className="text-gray-400 mt-6">Crypto Market Starts in</p>
          <div className="flex justify-center space-x-4 md:space-x-8 my-8 text-3xl md:text-4xl font-bold">
            <div>
              
              <p>{String(timeLeft.days).padStart(2, '0')}</p>
              <p className="text-sm font-normal text-white">DAYS</p>
            </div>
            <div>
              <p>{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className="text-sm font-normal text-white">HOURS</p>
            </div>
            <div>
              <p>{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-sm font-normal text-white">MINUTES</p>
            </div>
            <div>
              <p>{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-sm font-normal text-white">SECONDS</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">DOWNLOAD APP</button>
            <button className="border-2 border-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-500 transition-colors">TRADE CRYPTO</button>
          </div>
          <div className="mt-12">
              <p className="text-gray-400 mb-4">WE ACCEPT</p>
              <div className="flex justify-center items-center space-x-6 text-gray-300">
                  <span>Bitcoin</span>
                  <span>Litecoin</span>
                  <span>Chainlink</span>
                  <span>Siacoin</span>
              </div>
          </div>
          {/* Floating Crypto Coins */}
      <div className="absolute top-20 left-40 animate-bounce-slow delay-100">
        <img src="/pictures/Bitcoin-1.png" alt="Bitcoin" className="w-17 h-17"/>
      </div>
       <div className="absolute top-10 right-40 animate-bounce-slow delay-100">
        <img src="/pictures/Etherium-2.png" alt="Ethereum" className="w-22 h-22"/>
      </div>
      <div className="absolute bottom-30 left-10 animate-bounce-slow delay-100">
        <img src="/pictures/LiteCoin-2.png" alt="Litecoin" className="w-22 h-22" />
      </div>
      <div className="absolute bottom-40 right-30 animate-bounce-slow delay-100">
        <img src="/pictures/Monero-1 (1).png" alt="Monero" className="w-16 h-16" />
      </div>
        </section>

        {/* How to Trade Section */}
       

     
<section className="container mx-auto px-6 py-24">
  
  {/* Section Header */}
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white">How to Trade With Krypto</h2>
    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Tincidunt id nibh orci nibh just nulla elementum, sed vel.
    </p>
  </div>

  {/* Main Content Grid */}
  <div className="flex flex-col md:flex-row items-center gap-16">
    
    {/* Left Column: Image */}
    <div className="md:w-1/2 px-28">
      <Image 
        width={500} 
        height={500}
        src="/pictures/bg.png" 
        alt="Crypto trading on a mobile phone" 
        className="rounded-xl shadow-2xl shadow-purple-900/20 "
      />
    </div>

    {/* Right Column: Steps */}
    <div className="md:w-1/2">
      <h3 className="text-3xl font-bold text-red-500 mb-8">Steps to trade</h3>
      <div className="space-y-6">
        
        {/* Step 1 */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center font-bold text-white shadow-lg">
            01
          </div>
          <p className="text-lg text-gray-200">Create an account</p>
        </div>

        {/* Step 2 */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center font-bold text-white shadow-lg">
            02
          </div>
          <p className="text-lg text-gray-200">Download platform</p>
        </div>

        {/* Step 3 */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center font-bold text-white shadow-lg">
            03
          </div>
          <p className="text-lg text-gray-200">Select crypto</p>
        </div>

        {/* Step 4 */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center font-bold text-white shadow-lg">
            04
          </div>
          <p className="text-lg text-gray-200">Start trading</p>
        </div>

      </div>
    </div>
  </div>
</section>


        {/* Available Cryptos Section */}
    <section className="container mx-auto px-18 py-20 text-center">
      
    <h2 className="text-4xl font-bold">Available Cryptos</h2>
    <p className="text-gray-400 mt-4 mb-12">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</p>
    <div className="grid md:grid-cols-3 gap-5">
        
        <CryptoCard 
            name="Bitcoin" 
            price="$43.7K" 
            imageSrc="/pictures/Image.png" 
        />
        
        <CryptoCard 
            name="Litecoin" 
            price="$158" 
            imageSrc="/pictures/Image (1).png" 
        />
        
        <CryptoCard 
            name="Ethereum" 
            price="$3K" 
            imageSrc="/pictures/Image (2).png" 
        />

    </div>
</section>

        {/* Attractive Features Section */}
        <section className="container mx-auto px-18 py-20 text-center">
            <h2 className="text-4xl font-bold text-white">Attractive Features</h2>
            <p className="text-gray-400 mt-4 mb-12">Windafull makes playing the UK's best raffles easy and fun.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <FeatureCard icon ="🏆" title="Weekly Trading Contest" text="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus." />
                <FeatureCard icon="📄" title="Less Commission On Trade" text="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus." />
                <FeatureCard icon="🔒" title="Safe And Secure Trading platform" text="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus." />
                <FeatureCard icon="💲" title="Instant Withdraw Process" text="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus." />
                <FeatureCard icon="🎁" title="Monthly Commition" text="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus." />
                <FeatureCard icon="🎧" title="24/7 Support Team" text="Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus." />
            </div>
        </section>
        
        {/* Advanced Platform Section */}
       <section className="container   py-0 text-center">
    <div className="relative rounded-lg h-[450px] p-12 overflow-hidden">
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('/pictures/lpt.png')` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div> 

        {/* Content (Text and Buttons) */}
        <div className="relative z-10"> 
            <h2 className="text-4xl md:text-5xl font-bold text-white py-14 mb-8">
                Most advanced crypto trading <br/> platform ever!
            </h2>
            <div className="flex justify-center space-x-4">
                <a href="#" className="inline-block"> 
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                        alt="Get it on Google Play" 
                        className="h-12 transition-transform duration-200 hover:scale-105" 
                    />
                </a>
                <a href="#" className="inline-block">
                    <img 
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Download_on_the_App_Store_RGB_wht.svg/1200px-Download_on_the_App_Store_RGB_wht.svg.png" 
                        alt="Download on the App Store" 
                        className="h-12 transition-transform duration-200 hover:scale-105" 
                    />
                </a>
            </div>
        </div>
    </div>
</section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-18 py-20">
            <h2 className="text-4xl font-bold text-white text-center">30 Million Users Worldwide</h2>
            <p className="text-gray-400 mt-4 mb-12 text-center">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</p>
            <div className="grid md:grid-cols-3 gap-8">
                <TestimonialCard name="Cameron Williamson" role="FX Trader" text="Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel." />
                <TestimonialCard name="Bessie Cooper" role="Stack Manager" text="Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel." />
                <TestimonialCard name="Albert Flores" role="Crypto Analyst" text="Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel." />
            </div>
        </section>
        
         {/* Crypto Market Analysis Section */}
        <section className="container text-white mx-auto px-20 py-20">
            <h2 className="text-4xl font-bold text-center">Crypto Market Analysis</h2>
            <p className="text-gray-400 mt-4 mb-12 text-center">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</p>
             <div className="grid md:grid-cols-2 gap-8">
                 <div className="flex items-center space-x-4"><img src="/pictures/bg (4).png" alt="Analysis" className="rounded-lg"/><div><h3 className="font-bold text-lg">How to trade Bitcoin</h3><p className="text-gray-400">Eu tellus quam id sed ultrices.</p><a href="#" className="text-red-500 hover:underline">Learn more</a></div></div>
                 <div className="flex items-center space-x-4"><img src="/pictures/bg (5).png" alt="Analysis" className="rounded-lg"/><div><h3 className="font-bold text-lg">Gain the best exchange</h3><p className="text-gray-400">Eu tellus quam id sed ultrices.</p><a href="#" className="text-red-500 hover:underline">Learn more</a></div></div>
                 <div className="flex items-center space-x-4"><img src="/pictures/bg (6).png" alt="Analysis" className="rounded-lg"/><div><h3 className="font-bold text-lg">Reduce your loosing</h3><p className="text-gray-400">Eu tellus quam id sed ultrices.</p><a href="#" className="text-red-500 hover:underline">Learn more</a></div></div>
                 <div className="flex items-center space-x-4"><img src="/pictures/bg (7).png" alt="Analysis" className="rounded-lg"/><div><h3 className="font-bold text-lg">Win 50-50 trading strategy</h3><p className="text-gray-400">Eu tellus quam id sed ultrices.</p><a href="#" className="text-red-500 hover:underline">Learn more</a></div></div>
            </div>
            <div className="text-center mt-12">
                <button className="border-2 border-red-500 text-white px-8 py-3 rounded-full font-bold hover:bg-red-500 transition-colors">ENROLL CRYPTO UNIVERSITY</button>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#080b2A] mt-20 px-18 pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Faizan Masood </h3>
                    <p className="text-gray-400">Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">LINKS</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">How it works</a></li>
                        <li><a href="#" className="hover:text-white">Cryptos</a></li>
                        <li><a href="#" className="hover:text-white">Features</a></li>
                        <li><a href="#" className="hover:text-white">Testimonial</a></li>
                        <li><a href="#" className="hover:text-white">Blogs</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-lg font-bold mb-4">LEGAL</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Terms of use</a></li>
                        <li><a href="#" className="hover:text-white">Terms of conditions</a></li>
                        <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                        <li><a href="#" className="hover:text-white">Cookie policy</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
                    <p className="text-gray-400 mb-4">Over 25000 people have subscribed</p>
                    <div className="flex">
                        <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none w-full"/>
                        <button className="bg-red-600 text-white px-6 py-2 rounded-r-full hover:bg-red-700">SUBSCRIBE</button>
                    </div>
                     <p className="text-xs text-gray-500 mt-2">We don’t sell your email and spam</p>
                </div>
            </div>
            <div className="mt-16 border-t border-gray-800 pt-8 flex justify-between items-center text-gray-500 text-sm">
                <p>&copy; Copyright @ 2022 xpence</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white">Privacy & Terms</a>
                    <a href="#" className="hover:text-white">Contact Us</a>
                </div>
                 <div className="flex space-x-4">
                     {/* Social Icons can go here */}
                </div>
            </div>
          </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-bounce-slow {
            animation: bounce-slow 3s infinite;
        }

        .delay-500 {
            animation-delay: 0.5s;
        }

        .delay-1000 {
            animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
