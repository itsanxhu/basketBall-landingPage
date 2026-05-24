const App = () => {
  return (
    <div className="relative h-screen">
      <div className="h-72 w-full">
        {/* background-img */}
        <img
          className="h-full w-full object-cover object-[center_60%]"
          src="https://images.pexels.com/photos/6160093/pexels-photo-6160093.jpeg"
          alt=""
        />
      </div>
      <div className="h-[28rem] w-96 absolute top-32 right-96 ">
        {/* top-img */}
        <img
          className=" h-full w-full object-cover"
          src="https://images.pexels.com/photos/4347191/pexels-photo-4347191.jpeg"
          alt=""
        />
      </div>
      <div className="text-6xl text-red-700 absolute top-[25rem] right-[39rem]">
        <h1>THE</h1>
        <h1>WORLD</h1>
        <h1>OF</h1>
        <h1>SPORTS</h1>
      </div>
      <div className="w-full px-7 font-semibold absolute bottom-5 flex justify-between tracking-tight">
        <p className="cursor-pointer">Terms of Service</p>
        <p className="cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Privacy Settings</p>
      </div>
      <div className="w-32 right-24 absolute top-32 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Adidas-group-logo-fr.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default App;
