import React from "react";
import Banner from "../../components/Banner/Banner";
import MenuList from "../../components/MenuList/MenuList";
import macarons from "../../data/macarons.json";

const Menu: React.FC = () => {
  return (
    <main>
      <Banner page="menu" title="Menu" />
      <MenuList macrons={macarons} />
    </main>
  );
};

export default Menu;
