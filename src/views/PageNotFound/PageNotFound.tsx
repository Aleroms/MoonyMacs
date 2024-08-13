import React from "react";
import Banner from "../../components/Banner/Banner";

const PageNotFound: React.FC = () => {
  return (
    <main>
      <Banner page="notFound" title="404!" />
      <section className="not-found-container">
        <h2>The Content you are trying to find is not available.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          dolore illo earum doloremque aliquam rem!
        </p>
      </section>
    </main>
  );
};
export default PageNotFound;
