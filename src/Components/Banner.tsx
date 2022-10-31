import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="/banner.jpg"
        alt="banner"
        fill
        className="object-cover"
      />
      <div className="group absolute w-full bg-transparent text-center top-[60%]">
        <p className="text-sm sm:text-3xl bg-transparent text-white">
          Not sure where to Eat? Perfect.
        </p>
        <button
          className="text-orange-500 group-hover:bg-primary-main group-hover:text-white bg-white px-10 py-4 shadow-md rounded-full
                font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 focus:outline-none"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
