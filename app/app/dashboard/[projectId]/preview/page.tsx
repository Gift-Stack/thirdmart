import React from "react";
import Pallete from "../components/pallete";
import { Suspense } from "react";

const PreviewProject = ({ params }: { params: { projectId: string } }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Pallete projectId={params.projectId} preview />
      </Suspense>
    </>
  );
};

export default PreviewProject;
