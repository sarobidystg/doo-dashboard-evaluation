import Breadcrumb from "@/app/components/dashboard-components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { GraphNodeForm } from "./_components/graph-node-form";

export const metadata: Metadata = {
  title: "Form Layout",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Graph Node" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 lg:grid-cols-1 ">
        <div className="flex flex-col gap-9">
          {/* <ContactForm /> */}
          <GraphNodeForm />
        </div>
      </div>
    </>
  );
}
