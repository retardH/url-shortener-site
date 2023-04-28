import StatisticsBox from "./statistics-box";
import brandSVG from "./../assets/images/icon-brand-recognition.svg";
import detaildSVG from "./../assets/images/icon-detailed-records.svg";
import customizableSVG from "./../assets/images/icon-fully-customizable.svg";
const Statistics = () => {
  return (
    <section className="text-center w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      <h2 className="text-2xl text-veryDarkViolet font-bold">
        Advanced Statistics
      </h2>
      <p className="text-sm text-veryDarkBlue mb-20">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="flex flex-col md:flex-row items-center space-y-20 md:space-y-0 md:space-x-8 w-full relative">
        <StatisticsBox svg={brandSVG} />
        <StatisticsBox svg={detaildSVG} />
        <StatisticsBox svg={customizableSVG} />
        <div className="w-2 md:hidden bg-cyan absolute inset-y-0 left-1/2"></div>
        <div className="h-2 hidden md:block bg-cyan absolute inset-x-0 top-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default Statistics;
