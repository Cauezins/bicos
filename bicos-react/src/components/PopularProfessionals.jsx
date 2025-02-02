import { FiStar, FiPhone, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg
                 hover:bg-gray-50 transition-all duration-200 -translate-x-4"
    >
      <FiChevronRight className="w-5 h-5 text-gray-600" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg
                 hover:bg-gray-50 transition-all duration-200 translate-x-4"
    >
      <FiChevronLeft className="w-5 h-5 text-gray-600" />
    </button>
  );
}

function PopularProfessionals() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Profissionais mais procurados em <span className="text-brand-primary">Quissamã</span>
        </h2>

        <div className="relative px-6">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="px-4"> {/* Added padding */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden
                            hover:shadow-lg transition-shadow duration-200 h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={`/professional-${index}.jpg`}
                        alt="Professional"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">João Silva</h3>
                        <p className="text-sm text-gray-500">Eletricista</p>
                        <div className="flex items-center gap-1 mt-1">
                          <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">4.8</span>
                          <span className="text-sm text-gray-400">(124 avaliações)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                                     bg-[#424794] text-white rounded-full text-sm font-medium
                                     hover:bg-[#2a2f86] transition-colors duration-200">
                        <FiPhone className="w-4 h-4" />
                        Contatar
                      </button>
                      <button className="px-4 py-2 border border-gray-200 rounded-full
                                     text-gray-600 hover:border-[#424794] hover:text-[#424794]
                                     transition-colors duration-200">
                        <FiUser className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default PopularProfessionals;
