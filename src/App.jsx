const App = () => {
  return (
    <div className="relative h-screen">
      <div className="h-72 w-full bg-amber-200">
        {/* background-img */}
        <img
          className="h-full w-full object-cover object-[center_60%]"
          src="https://images.pexels.com/photos/6160093/pexels-photo-6160093.jpeg"
          alt=""
        />
      </div>
      <div className="h-[28rem] w-96 bg-amber-200 absolute top-32 right-96 ">
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
      <div className="font-semibold absolute bottom-4 bg-amber-400 flex justify-between">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Privacy Settings</p>
      </div>
    </div>
  );
};

export default App;
