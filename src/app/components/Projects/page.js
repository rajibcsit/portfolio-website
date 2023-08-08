"use client";
import React, { useState } from "react";
import Image from "next/image";
import projectImage from "/public/project1.png";
// import Card from "@/app/components/Card/page";

const Page = () => {
  return (
    <>
      <div className="projectsSection" id="projects">
        <div className="topWrapper">
          <p>Check out some of</p>
          <h3 className="title">My Recent Projects</h3>
          <div className="desc">
            I developed number of projects last 1 years. Some project has been given below.
          </div>
        </div>
        <div className="projectsGallery">
          <div className="projects">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              {/*------------------ project content------------*/}
              <div className="flex">
                <div className="flex flex-col md:flex-row  p-3">
                  <Image src={projectImage} alt="project-image" className="w-48 h-48 md:w-96" />

                  <div className="flex flex-col justify-start p-2">
                    <div className="about_content mx-4 ">
                      <div className="section_title pb-2">
                        <h4 className="text-xl lg:text-2xl md:text-xl sm:text-[16px] font-bold ">
                          Inventory Management
                        </h4>
                      </div>
                      <p className="text-sm sm:text-sm mb-3">
                        The point of sale (POS) or point of purchase (POP) is the time and place at
                        which a retail transaction is completed. At the point of sale, the merchant
                        calculates the amount owed by the customer, indicates that amount, may
                        prepare an invoice for the customer
                      </p>
                      <p>
                        <span className="font-bold">Utilized:</span> PHP, Laravel, Vuejs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*------------------ project content------------*/}
              <div className="flex">
                <div className="flex flex-col md:flex-row  p-3">
                  <Image src={projectImage} alt="project-image" className="w-48 h-48 md:w-96" />

                  <div className="flex flex-col justify-start p-2">
                    <div className="about_content mx-4 ">
                      <div className="section_title pb-2">
                        <h4 className="text-xl lg:text-2xl md:text-xl sm:text-[16px] font-bold ">
                          AI Based Article Writer
                        </h4>
                      </div>
                      <p className="text-sm sm:text-sm mb-3">
                        The point of sale (POS) or point of purchase (POP) is the time and place at
                        which a retail transaction is completed. At the point of sale, the merchant
                        calculates the amount owed by the customer, indicates that amount, may
                        prepare an invoice for the customer
                      </p>
                      <p>
                        <span className="font-bold">Utilized:</span> PHP, Laravel, Vuejs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*------------------ project content------------*/}
              <div className="flex">
                <div className="flex flex-col md:flex-row  p-3">
                  <Image src={projectImage} alt="project-image" className="w-48 h-48 md:w-96" />

                  <div className="flex flex-col justify-start p-2">
                    <div className="about_content mx-4 ">
                      <div className="section_title pb-2">
                        <h4 className="text-xl lg:text-2xl md:text-xl sm:text-[16px] font-bold ">
                          Elearning platform
                        </h4>
                      </div>
                      <p className="text-sm sm:text-sm mb-3">
                        The point of sale (POS) or point of purchase (POP) is the time and place at
                        which a retail transaction is completed. At the point of sale, the merchant
                        calculates the amount owed by the customer, indicates that amount, may
                        prepare an invoice for the customer
                      </p>
                      <p>
                        <span className="font-bold">Utilized:</span> PHP, Laravel, Vuejs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*------------------ project content------------*/}
              <div className="flex">
                <div className="flex flex-col md:flex-row  p-3">
                  <Image src={projectImage} alt="project-image" className="w-48 h-48 md:w-96" />

                  <div className="flex flex-col justify-start p-2">
                    <div className="about_content mx-4 ">
                      <div className="section_title pb-2">
                        <h4 className="text-xl lg:text-2xl md:text-xl sm:text-[16px] font-bold ">
                          POS - point of sale
                        </h4>
                      </div>
                      <p className="text-sm sm:text-sm mb-3">
                        The point of sale (POS) or point of purchase (POP) is the time and place at
                        which a retail transaction is completed. At the point of sale, the merchant
                        calculates the amount owed by the customer, indicates that amount, may
                        prepare an invoice for the customer
                      </p>
                      <p>
                        <span className="font-bold">Utilized:</span> PHP, Laravel, Vuejs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
