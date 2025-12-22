import React from "react";

const CatchAllRoutes = async ({ params }) => {
  const { username } = await params;
  return <div>This is data : {username}</div>;
};


export default CatchAllRoutes;
