import React from "react";

const DynamicParamsAbout = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <span>{`product param ${id}`}</span>
    </div>
  );
};

export default DynamicParamsAbout;
