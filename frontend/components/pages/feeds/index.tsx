import { gql, useQuery } from "@apollo/client";
import { Box, Stack, Heading, Text } from "@chakra-ui/core";
import Loader from "components/loader";
import AddNewFeedForm from "components/pages/feeds/add-new-feed-form";
import Feed from "components/pages/feeds/feed";
import React from "react";
import IFeed from "types/feed";

const feedsQuery = gql`
  query fetchFeeds {
    feeds(sort: "created_at:desc") {
      id
      created_at
      body
      author {
        id
        username
      }
    }
  }
`;

const feedPageQuery = gql`
  query fetchFeedPage {
    feedPage {
      id
      title
      description
      image {
        id
        url
      }
      video {
        id
        url
      }
    }
  }
`;

const FeedsPageComponent = () => {
  const {
    loading: fetchFeedsFetching,
    error: fetchFeedsError,
    data: fetchFeedsData,
  } = useQuery(feedsQuery, { pollInterval: 5000 });

  const { loading: dataPageLoading, data: dataPage } = useQuery(feedPageQuery, {
    pollInterval: 5000,
  });

  console.log(dataPage);

  if (fetchFeedsFetching || dataPageLoading) {
    return <Loader />;
  }

  if (fetchFeedsError) {
    return <p>Error: {fetchFeedsError.message}</p>;
  }

  return (
    <Stack spacing={8}>
      {/* <Box>
        <AddNewFeedForm />
      </Box> */}
      <Heading as="h1">{dataPage.feedPage.title}</Heading>
      <Text>
        {dataPage.feedPage.description}{" "}
      </Text>
      {}
      <Box>
        <img src={"http://localhost:1337" + dataPage.feedPage.image.url} />
        <Box pt={8}></Box>
        <video width="400" controls>
          <source
            src={"http://localhost:1337" + dataPage.feedPage.video.url}
            type="video/mp4"
          />
        </video>
      </Box>
      {/* {fetchFeedsData.feeds.map((feed: IFeed) => {
        return (
          <Box key={feed.id}>
            <Feed feed={feed} />
          </Box>
        );
      })} */}
    </Stack>
  );
};

export default FeedsPageComponent;
