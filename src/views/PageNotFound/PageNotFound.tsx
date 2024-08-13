import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import "./PageNotFound.css";

const PageNotFound: React.FC = () => {
  const navigation = useNavigate();
  const navigateToPage = (page: string) => {
    navigation(page);
  };
  return (
    <main>
      <Banner page="notFound" title="404!" />
      <section className="not-found-container">
        <img src="logo.png" alt="logo" />
        <h2>Lost in Space?</h2>
        <p>
          Oops! It looks like you’ve wandered off course and landed on a page
          that doesn’t exist. But don’t worry, your journey doesn’t have to end
          here! Navigate back to our homepage or explore our menu to discover
          the delicious macarons that are waiting for you.
        </p>
        <div className="not-found-button-wrapper">
          <Button label="Home" onClick={() => navigateToPage("/")} />
          <Button label="Menu" onClick={() => navigateToPage("/menu")} />
        </div>
      </section>
    </main>
  );
};
export default PageNotFound;
