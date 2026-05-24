const App = () => {
  return (
    <div className="relative h-screen">
      <div className="h-72 w-full">
        {/* background-img */}
        <img
          className="h-full w-full object-cover object-[center_60%]"
          src="/first.jpg"
          alt="img"
        />
      </div>
      <div className="h-[28rem] w-96 absolute top-32 right-96">
        {/* top-img */}
        <img
          className=" h-full w-full object-cover"
          src="/second.jpg"
          alt="img"
        />
      </div>
      <div className="text-6xl text-red-700 absolute top-[25rem] right-[39rem]">
        <h1>THE</h1>
        <h1>WORLD</h1>
        <h1>OF</h1>
        <h1>SPORTS</h1>
      </div>
      <div className="w-full px-7 font-semibold absolute bottom-5 flex justify-between tracking-tight ">
        <p className="cursor-pointer py-2 px-4 border border-transparent hover:border-neutral-950 rounded-full active:scale-95 transition-transform duration-200">
          Terms of Service
        </p>
        <p className="cursor-pointer py-2 px-4 border border-transparent hover:border-neutral-950 rounded-full active:scale-95 transition-transform duration-200">
          Privacy Policy
        </p>
        <p className="cursor-pointer py-2 px-4 border border-transparent hover:border-neutral-950 rounded-full active:scale-95 transition-transform duration-200">
          Privacy Settings
        </p>
      </div>
      <div className="w-32 right-24 absolute top-32 cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Adidas-group-logo-fr.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
