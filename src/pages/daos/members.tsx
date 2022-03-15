import React from "react";
import Layout from "components/Layout";
import Members from "modules/DAOS/Members";
import Hero from "components/Hero";

import { HERO_DATA } from "data/daos";

const Index = () => {
  return (
    <Layout heroContent={<Hero {...HERO_DATA} />} rightSidebar={<div/>}>
      <Members />
    </Layout>
  );
};

export default Index;
