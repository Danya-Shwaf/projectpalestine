import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-app-light flex flex-col items-center justify-start h-screen w-screen gap-4">
      <Header />
      <Hero />
    </main>
  );
}

const Header = () => {
  return (
    <header className="bg-app-light flex justify-between items-center w-full fixed p-2">
      <div className="text-2">Palestine</div>
      <div className="flex items-center gap-2">
        <Link className="app-btn" href="/">
          Download
        </Link>
        <Link className="app-btn" href="/">
          About
        </Link>
        <Link className="app-btn" href="/">
          Contact
        </Link>
        <Link className="app-btn" href="/">
          Donate
        </Link>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="bg-app-primary grid grid-cols-12 items-center justify-center w-full h-full gap-4 mt-32">
      <div className="col-span-12 md:col-span-6 flex flex-col items-center">
        <div className="w-full text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula,
          ante eu cursus tincidunt, justo libero consequat tortor, at
          pellentesque erat velit nec libero. Vivamus vel nulla eu justo auctor
          laoreet.
        </div>
        <div className="w-full text-3">Search a product or company</div>
        <div className="w-full text-3">
          <input className="w-full" type="text" />
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 flex items-center justify-center"></div>
    </div>
  );
};
