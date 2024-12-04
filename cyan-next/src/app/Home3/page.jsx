import React from "react";
import Pricing from "../Components/Pricing/page";

import Choose from "../Components/Choose/page";
import Teammember from "../Components/Teammember/page";
import Blog from "../Components/Blog/page";
import Starhero from "../Components/Starhero/page";
import Reviews from "../Components/Reviews/page";
import Computerfile from "../Components/Computerfile/page";
import Starservice2 from "../Components/Starservices/page";
import GlassesCompany from "../Components/glassecompany/page";
import Design from "../Components/Design/page";
import CompanyExpert2 from "../Components/company-expert2/page";

export default function page() {
  return (
    <>
      <Starhero />
      <Computerfile />
      <Starservice2 />

      <GlassesCompany />

      <Design />

<CompanyExpert2/>

      <Pricing />
      <Reviews />
      <Choose />
      <Teammember />
      <Blog />
    </>
  );
}
