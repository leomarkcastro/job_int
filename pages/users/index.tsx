import { UserList } from "@/components/rest/user/list";
import globalMeta from "@/components/seo/SEOglobal";
import SEOHead from "@/components/seo/SEOhead";
import { loadUsers, LoadUsersResponse } from "@/lib/rest/users/list";
import { GetStaticProps } from "next";
import { FC, useState } from "react";

interface PageProps {
  userdata: LoadUsersResponse;
}

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch data from regres API
  const users = await loadUsers({ page: 1 });

  return {
    props: {
      userdata: users,
    },
  };
};

const structuredLd = JSON.stringify({
  "@context": globalMeta.canonicalUrl + "/users",
  description:
    "Users view page of Evelan Gmbh NextJS + Typescript REST API website.",
});

const Page: FC<PageProps> = (props) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [userList, setUserList] = useState(props.userdata.data);
  const [loadMore, setLoadMore] = useState(
    props.userdata.page < props.userdata.total_pages
  );

  const loadAdditionalUsers = async () => {
    const additionalUsers = await loadUsers({
      page: Math.floor(userList.length / 6) + 1,
    });

    setFirstLoad(false);
    setUserList([...userList, ...additionalUsers.data]);
    setLoadMore(additionalUsers.page < additionalUsers.total_pages);
  };

  return (
    <div>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="NextJs Head | SEO"
        description="NextJs Head, a reliable guide for how to use it and what it's really for."
        ogType="website"
      />
      <div className="w-full max-w-screen-lg mx-auto my-20">
        <h1 className="text-4xl font-bold text-center">Users</h1>
        <br></br>
        <UserList
          userList={firstLoad ? props.userdata.data : userList}
        ></UserList>
        <br></br>
        <div className="w-full text-center">
          <button
            className="d-btn d-btn-primary d-btn-sm"
            onClick={loadAdditionalUsers}
            disabled={!loadMore}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
