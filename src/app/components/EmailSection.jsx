/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import XTwitterIcon from "../../../public/x-twitter-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { headers } from "../../../next.config";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/jtsenpai">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/jesutoni-odufeso-25b1b9223/">
            <Image src={LinkedinIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div className="mb-6">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johndoe@email.com "
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about......"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
