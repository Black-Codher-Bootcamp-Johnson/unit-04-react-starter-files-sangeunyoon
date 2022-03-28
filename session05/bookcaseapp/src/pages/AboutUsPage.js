import { Link } from "react-router-dom";

const AboutUsPage = (props) => {
  return (
    <>
      <div className="page">
        <h2>Welcome to the Bookcase Application</h2>
        <p>
          This React application allows a user to add a set of books to a
          collection of books. It connects to the Google Books API and it allows to check 
          and see what you have read and wish to read.
        </p>
      </div>
    </>
  );
};

export default AboutUsPage;
