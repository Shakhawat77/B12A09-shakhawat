import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const Animation = () => {
  return (
    <div>
      {/* Centered and responsive heading */}
      <div className="pt-10 flex justify-center items-center">
        <h2 className="font-bold text-5xl md:text-6xl lg:text-8xl text-center text-sky-700">
          Pets Are Love
        </h2>
      </div>

      {/* Image grid with AOS animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src="https://i.ibb.co.com/4g7LXSx3/117456620512hyp5qalfr5ccip3k5jyqezs0uteojbzyhxk9jazqfwnpsjinhc0twpuai0yisxisfz9awdr9gvdbogzoubedvjbc.jpg"
            alt="Image 1"
            className="w-full h-full"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src="https://i.ibb.co.com/YFyb0kF9/photo-1573865526739-10659fec78a5.jpg"
            alt="Image 2"
            className="w-full h-full"
          />
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src="https://i.ibb.co.com/zhrcCRbT/alert-manx-cat-sitting-upright-ears-straining-to-catch-eve-free-photo.jpg"
            alt="Image 3"
            className="w-full h-full"
          />
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src="https://i.ibb.co.com/KzS9BbrJ/adorable-animal-animal-photography-1170986.jpg"
            alt="Image 4"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Animation;
