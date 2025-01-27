import React from "react";
import Head from "next/head";
import Page from "components/pages/feeds";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AccessDeniedIndicator from "components/access-denied-indicator";
import { getSession } from "next-auth/react";
import WithGraphQL from "lib/with-graphql";

const FeedsPage = () => {

  return (
    <WithGraphQL session={'' as any}>
      <Head>
        <title>Feeds Page</title>
      </Head>
      <Page />
    </WithGraphQL>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });

//   return {
//     props: {
//       session,
//     },
//   };
// };

export default FeedsPage;
