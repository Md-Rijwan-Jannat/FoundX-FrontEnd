import { FC } from "react";
import { Metadata } from "next";

type TAboutPageProps = object;

// Define metadata for the About Page
export const generateMetadata = (): Metadata => {
  return {
    title: "About Us - FoundX",
    description: "Learn more about FoundX, our mission, and our team.",
    keywords: ["about us", "FoundX", "team", "mission"],
  };
};

const AboutPage: FC<TAboutPageProps> = () => {
  return (
    <div>
      <h2>This is an AboutPage component</h2>
      <p>
        Welcome to FoundX! We are dedicated to helping you find lost items and
        connecting people in need. Our mission is to create a safe and reliable
        platform for the community.
      </p>
      {/* Add more content about your organization here */}
    </div>
  );
};

export default AboutPage;
