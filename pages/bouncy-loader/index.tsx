import { PageContentWrapper, BouncyLoader } from "components";
import { NextPage } from "next";
import React from "react";

const BouncyLoaderPage: NextPage = () => {
  return (
    <PageContentWrapper>
      <BouncyLoader />
    </PageContentWrapper>
  );
};

export default BouncyLoaderPage;
