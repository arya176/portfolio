import React from "react";

export default function Footer() {
  return (
    <div className="mt-28 bg-[#14A369] w-[100%] pt-36 pb-8 ">
      <footer id="footer" className="font-normal">
        <section className="text-center">
          <a href="https://www.facebook.com/arya.messenger" target="_self">
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
          <a href="https://linkedin.com/arya-rr-5a3a7595" target="_self">
            <i className="fab fa-linkedin"></i> linkedin
          </a>
          <a href="https://twitter.com" target="_self">
            <i className="fab fa-twitter-square"></i> Twitter
          </a>
          <a href="https://www.instagram.com" target="_self">
            <i className="fab fa-instagram-square icon"></i> Instagram
          </a>
          <a href="http://github.com/arya176" target="_self">
            <i className="fab fa-github-square"></i> Github
          </a>
        </section>

        <section className="text-center">
          <h5>resources:</h5>
          <div className="source">
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/dinosoftlabs"
              title="DinosoftLabs"
              target="_self"
            >
              DinosoftLabs
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon" target="_self">
              www.flaticon.com
            </a>
          </div>
        </section>
        <p className="text-center pt-10 text-sm">
          © Copyright 2024. Designed by Arya .All rights reserved.
        </p>
      </footer>
    </div>
  );
}
