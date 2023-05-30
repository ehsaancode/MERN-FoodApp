import React from "react";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div className="m-5 ">
      <h1>About us</h1>
      <div className="container ">
        <p className="my-5 d-flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          quod iusto reiciendis, cupiditate rerum natus delectus dignissimos
          corrupti vitae voluptatum animi, id officiis ea? Consectetur
          praesentium fugiat nesciunt vitae id perferendis illum delectus
          facilis. Quo, ipsa! A ad corporis, repellat expedita cumque, natus
          quo, fugit dolores ipsam sequi nemo.
        </p>
        <div>
          <h5>Please fill out your concern</h5>
          <div>
            <form action="">
              <div className="">
                <label htmlFor="">Name</label> <br />
                <input type="text" placeholder="Your name" name="" id="" />{" "}
                <br />
                <label htmlFor="">Contact Number</label> <br />
                <input
                  placeholder="Ex:+1-2345-6677"
                  type="text"
                  name=""
                  id=""
                />{" "}
                <br />
                <label htmlFor="">Comments</label> <br />
                <textarea
                  placeholder="Your comments"
                  name=""
                  id=""
                  cols="21"
                  rows="5"
                ></textarea>{" "}
                <br />
                <button className="rounded btn btn-success ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
