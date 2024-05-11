import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-63 bg-zinc-600 pt-9">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-lexend font-semibold text-2xl text-yellow">
            {" "}
            Mrityunjay
          </p>
          <p className="font-lexend text-md text-yellow">
            Copyright 2024 MJAY.All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;