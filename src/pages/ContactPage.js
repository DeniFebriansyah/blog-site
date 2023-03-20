import Header from "../components/header";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">Contact me</h1>

          <img src="./img/header_author.jpg" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">
              Deni really likes the world of programmers, especially in the
              field of web programming. The tools used for editing syntax are as
              varied as sublime text and visual studio code. along with the
              development of web programming, many frameworks are used for this
              programming model such as react, vue js, node js and many more.
              The JavaScript framework has also experienced a lot of development
              from the previous JavaScript.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
