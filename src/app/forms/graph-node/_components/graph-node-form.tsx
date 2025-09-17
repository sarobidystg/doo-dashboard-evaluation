import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { TrashIcon, UpdateIcon } from "@/assets/icons";

export function GraphNodeForm() {
  // Données statiques pour la table des nœuds de graphe
  const graphNodes = [
    { 
      id: 1, 
      name: "Start Node", 
      type: "Entry Point", 
      graph: "Main Flow", 
      status: "Active",
      description: "Initial node for the main process flow"
    },
    { 
      id: 2, 
      name: "Decision Node", 
      type: "Conditional", 
      graph: "Decision Tree", 
      status: "Active",
      description: "Node that handles conditional logic"
    },
    { 
      id: 3, 
      name: "Process Node", 
      type: "Action", 
      graph: "Workflow", 
      status: "Inactive",
      description: "Node that performs specific actions"
    },
    { 
      id: 4, 
      name: "End Node", 
      type: "Exit Point", 
      graph: "Main Flow", 
      status: "Active",
      description: "Final node that terminates the process"
    },
    { 
      id: 5, 
      name: "Validation Node", 
      type: "Check", 
      graph: "Validation Flow", 
      status: "Active",
      description: "Node that validates input data"
    },
  ];

  return (
    <ShowcaseSection title="Add New Graph Node" className="!p-6.5">
      {/* Formulaire */}
      <div className="mb-8">
        <form action="#">
          <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
            <InputGroup
              label="Graph Node Name"
              type="text"
              placeholder="Enter the name of the graph node"
              className="w-full xl:w-1/2"
            />
          </div>

          <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
            <Select
              label="Node Type"
              placeholder="Select the node type"
              className="w-full xl:w-1/2"
              items={[
                { label: "Entry Point", value: "Entry Point" },
                { label: "Exit Point", value: "Exit Point" },
                { label: "Action", value: "Action" },
                { label: "Conditional", value: "Conditional" },
                { label: "Check", value: "Check" },
              ]}
            />

            <Select
              label="Graph"
              placeholder="Select the graph"
              className="w-full xl:w-1/2"
              items={[
                { label: "Main Flow", value: "Main Flow" },
                { label: "Decision Tree", value: "Decision Tree" },
                { label: "Workflow", value: "Workflow" },
                { label: "Validation Flow", value: "Validation Flow" },
              ]}
            />
          </div>

          <TextAreaGroup label="Description" placeholder="Type the description of the graph node" />

          <button className="mt-6 flex w-full justify-center rounded-lg bg-primary-500 p-[13px] font-medium text-white hover:bg-opacity-90">
            Save
          </button>
        </form>
      </div>

      {/* Séparateur */}
      <div className="mb-6 border-t border-stroke dark:border-dark-3"></div>

      {/* Table */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">Existing Graph Nodes</h3>
        <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
          <Table>
            <TableHeader>
              <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
                <TableHead className="min-w-[150px] xl:pl-7.5">Node Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Graph</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="min-w-[200px]">Description</TableHead>
                <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {graphNodes.map((node) => (
                <TableRow key={node.id} className="border-[#eee] dark:border-dark-3">
                  <TableCell className="min-w-[150px] xl:pl-7.5">
                    <h5 className="text-dark dark:text-white font-medium">{node.name}</h5>
                  </TableCell>

                  <TableCell>
                    <span className="text-dark dark:text-white">{node.type}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-dark dark:text-white">{node.graph}</span>
                  </TableCell>

                  <TableCell>
                    <div
                      className={`max-w-fit rounded-full px-3.5 py-1 text-sm font-medium ${
                        node.status === "Active"
                          ? "bg-[#219653]/[0.08] text-[#219653]"
                          : "bg-[#D34053]/[0.08] text-[#D34053]"
                      }`}
                    >
                      {node.status}
                    </div>
                  </TableCell>

                  <TableCell className="min-w-[200px]">
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {node.description}
                    </p>
                  </TableCell>

                  <TableCell className="xl:pr-7.5">
                    <div className="flex items-center justify-end gap-x-3.5">
                      <button className="hover:text-primary">
                        <span className="sr-only">View Node</span>
                        <UpdateIcon />
                      </button>
                      <button className="hover:text-primary">
                        <span className="sr-only">Delete Node</span>
                        <TrashIcon />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </ShowcaseSection>
  );
}