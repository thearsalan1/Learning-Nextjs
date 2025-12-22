import React from "react";

const Page = async ({ params }) => {
  const { username } = await params;
  return <div>Dynamic profile page - {username}</div>;
};

export default Page;
