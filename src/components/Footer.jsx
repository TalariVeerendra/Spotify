import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="w-full ">
        <div className="flex mt-20">
          <div className="mt-5 gap-0.5 flex flex-col">
            <h1 className="font-bold ">Company</h1>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              About
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Jobs
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              For the record
            </p>
          </div>
          <div className="mt-5 ml-[10%] gap-0.5  flex flex-col">
            <h1 className="font-bold ">Communities</h1>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              For Artists
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Developers
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Advertising
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Investors
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Vendors
            </p>
          </div>
          <div className="mt-5 ml-[10%] gap-0.5  flex flex-col">
            <h1 className="font-bold ">Usefull Links</h1>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Support
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Free Mobile App
            </p>
          </div>
          <div className="mt-5 ml-[10%] gap-0.5  flex flex-col">
            <h1 className="font-bold ">Spotify Plans</h1>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Premium Indivual
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Premium Duo
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Premium Family
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Premium Student
            </p>
            <b />
            <p className="mt-2 cursor-pointer text-slate-400 hover:text-white hover:underline">
              Spotify Free
            </p>
          </div>
        </div>
        <div className="ml-[88%] mt-[-15%] flex gap-5">
          <img
            className="w-7 h-7 bg-slate-600 rounded-2xl cursor-pointer"
            src={assets.insta}
            alt=""
          />
          <img
            className="w-7 h-7 bg-slate-600 rounded-2xl cursor-pointer"
            src={assets.face}
            alt=""
          />
          <img
            className="w-7 h-7 bg-slate-600 rounded-2xl cursor-pointer"
            src={assets.twitter}
            alt=""
          />
        </div>
      </div>
      <div className="w-full bg-slate-700 h-0.5 mt-[200px] rounded"></div>
      <div className="flex gap-5 mt-7 mb-10 text-slate-400">
        <p className="hover:text-white cursor-pointer">Legal</p>
        <p className="hover:text-white cursor-pointer">
          Safety & Privacy Center
        </p>
        <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        <p className="hover:text-white cursor-pointer">Cookies</p>
        <p className="hover:text-white cursor-pointer">About Ads</p>
        <p className="hover:text-white cursor-pointer"> Accessibility</p>
        <p className="ml-[45%] text-slate-500 font-bold">@Veeru-2025</p>
      </div>
    </>
  );
};

export default Footer;
