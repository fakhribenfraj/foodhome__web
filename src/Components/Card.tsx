import Image from "next/image";

type CardProps = {
  img: string;
  title?: string;
  location?: string;
  distance?: string;
  description?: string;
  buttonText?: string;
};
function SmallCard({ img, location, distance }: CardProps) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer 
        hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
    >
      <div className=" relative h-16 w-16">
        <Image alt="" src={img} fill className="rounded-lg" />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

function MediumCard({ img, title }: CardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} fill alt="" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

function LargeCard({ img, title, description, buttonText }: CardProps) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} fill alt="" className="rounded-2xl object-cover" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export { SmallCard, MediumCard, LargeCard };
