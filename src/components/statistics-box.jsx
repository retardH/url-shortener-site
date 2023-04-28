import brandSVG from "./../assets/images/icon-brand-recognition.svg";
import detaildSVG from "./../assets/images/icon-detailed-records.svg";
import customizableSVG from "./../assets/images/icon-fully-customizable.svg";
const StatisticsBox = ({ svg, marginBottom }) => {
  return (
    <div className="bg-slate-50 rounded-md flex flex-col items-center md:items-start space-y-4 p-8 z-20">
      <figure className="bg-darkViolet flex items-center justify-center rounded-full ml-1 md:ml-0 w-20 h-20 -mt-17">
        <img src={svg} alt="" className="" />
      </figure>
      <h2 className="text-2xl font-bold text-veryDarkViolet">
        Brand Recognition
      </h2>
      <p className="text-sm text-veryDarkBlue md:text-start">
        Boost your brand recognition with each click. Generic links don&#39;t mean a
        thing. Branded link help install confidence in your content.
      </p>
    </div>
  );
};

export default StatisticsBox;
