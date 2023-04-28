import heroImg from "../assets/images/illustration-working.svg";
import Container from "../layouts/container";
const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0">
        <img src={heroImg} alt="" className="w-full md:w-1/2" />
        <article className="flex items-center md:items-start text-center md:text-left flex-col space-y-3 md:w-1/2 lg:pr-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-veryDarkViolet">
            More than just shorter links
          </h2>
          <p className="text-grayishBlue">
            Build your brand&#39;s recognation and get details insights on how your
            links are performing.
          </p>
          <button className="outline-none bg-cyan py-3 px-6 rounded-full border-none text-white text-base hover:brightness-125">
            Get Started
          </button>
        </article>
      </div>
    </Container>
  );
};

export default HeroSection;
