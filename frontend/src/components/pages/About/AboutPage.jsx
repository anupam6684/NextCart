import AboutMe from "./AboutMe";

export default function AboutPage() {
  return (
    <>
      <div
        className="mb-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/about-us.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "60px", fontWeight: "700" }}>
          About For NextCart
        </h1>
        <p className="spaced-text fw-bold">WE CAN DO MORE FOR YOU</p>
      </div>
      <div className="container about-section">
        <h2 className="mb-2">About NextCart</h2>
        <p>
          <span>NextCart</span> is a modern and user-friendly eCommerce platform
          designed to deliver a smooth, fast, and secure online shopping
          experience. Built using the latest web technologies, NextCart focuses
          on performance, simplicity, and scalability to meet the needs of
          today’s digital shoppers.{" "}
        </p>{" "}
        <p>
          {" "}
          Our goal is to make online shopping effortless by providing an
          intuitive interface, seamless navigation, and reliable features such
          as product browsing, cart management, and secure checkout.{" "}
        </p>{" "}
        <p>
          {" "}
          NextCart is developed with a strong emphasis on clean UI, responsive
          design, and optimized performance, ensuring a consistent experience
          across all devices. Whether you are browsing products or managing your
          cart, NextCart is built to be fast, efficient, and easy to use.
        </p>{" "}
        <p>
          {" "}
          This project also reflects modern development practices and serves as
          a foundation for building scalable eCommerce solutions in real-world
          applications.
        </p>
      </div>
      <AboutMe />
    </>
  );
}
