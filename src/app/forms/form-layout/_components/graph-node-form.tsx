import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import React from "react";

export function GraphNodeForm() {
  return (
    <ShowcaseSection title="Graph Node" className="!p-6.5">
      <form action="#">
        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">

          <InputGroup
            label="Graph Node Name"
            type="text"
            placeholder="Enter the name of the graph node"
            className="w-full xl:w-1/2"
          />
        </div>

        <Select
          label="Node Type"
          placeholder="Select the node type"
          className="mb-4.5"
          items={[
            { label: "United States", value: "USA" },
            { label: "United Kingdom", value: "UK" },
            { label: "Canada", value: "Canada" },
          ]}
        />

        <Select
          label="Graph"
          placeholder="Select the graph"
          className="mb-4.5"
          items={[
            { label: "United States", value: "USA" },
            { label: "United Kingdom", value: "UK" },
            { label: "Canada", value: "Canada" },
          ]}
        />

        <TextAreaGroup label="Description" placeholder="Type the description of the graph node" />

        <button className="mt-6 flex w-full justify-center rounded-lg bg-primary-500 p-[13px] font-medium text-white hover:bg-opacity-90">
          Save
        </button>
      </form>
    </ShowcaseSection>
  );
}
