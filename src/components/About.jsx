import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to NEXT BITE, your ultimate destination for effortless dining experiences. We understand that great meals create unforgettable moments, and our mission is to help you find your next bite with ease.

At NEXT BITE, we connect food enthusiasts with the finest restaurants in town, offering a seamless platform to explore, reserve, and enjoy. Whether you’re planning a romantic dinner, a family gathering, or a casual meal with friends, we ensure you have the perfect table waiting for you.

Our user-friendly platform allows you to:

Browse curated restaurant listings tailored to your taste.
Discover menus, reviews, and exclusive offers.
Make instant reservations at your favorite spots.
With NEXT BITE, dining out is as simple as a few clicks. Our team is passionate about food, hospitality, and creating memorable dining experiences for everyone. Join us and let your culinary journey begin!

Discover. Reserve. Savor.
Your next bite is just a click away.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
