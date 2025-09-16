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

export function UserRoleForm() {
  // Données statiques pour la table
  const userRoles = [
    { id: 1, email: "admin@example.com", role: "Admin", status: "Active" },
    { id: 2, email: "user1@example.com", role: "User", status: "Active" },
    { id: 3, email: "editor@example.com", role: "Editor", status: "Inactive" },
    { id: 4, email: "user2@example.com", role: "User", status: "Active" },
    { id: 5, email: "moderator@example.com", role: "Editor", status: "Active" },
  ];

  return (
    <ShowcaseSection title="Add New User Role" className="!p-6.5">
      {/* Formulaire */}
      <div className="mb-8">
        {/* <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">Add New User Role</h3> */}
        <form action="#">
          <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
            <Select
              label="Role"
              placeholder="Select the role"
              className="w-full xl:w-1/2"
              items={[
                { label: "Admin", value: "Admin" },
                { label: "User", value: "User" },
                { label: "Editor", value: "Editor" },
              ]}
            />

            <InputGroup
              label="User email"
              type="email"
              placeholder="Enter the user email"
              className="w-full xl:w-1/2"
            />
          </div>

          <button className="mt-6 flex w-full justify-center rounded-lg bg-primary-500 p-[13px] font-medium text-white hover:bg-opacity-90">
            Save
          </button>
        </form>
      </div>

      {/* Séparateur */}
      <div className="mb-6 border-t border-stroke dark:border-dark-3"></div>

      {/* Table */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">Existing User Roles</h3>
        <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
          <Table>
            <TableHeader>
              <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
                <TableHead className="min-w-[200px] xl:pl-7.5">Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {userRoles.map((user) => (
                <TableRow key={user.id} className="border-[#eee] dark:border-dark-3">
                  <TableCell className="min-w-[200px] xl:pl-7.5">
                    <p className="text-dark dark:text-white">{user.email}</p>
                  </TableCell>

                  <TableCell>
                    <span className="text-dark dark:text-white">{user.role}</span>
                  </TableCell>

                  <TableCell>
                    <div
                      className={`max-w-fit rounded-full px-3.5 py-1 text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-[#219653]/[0.08] text-[#219653]"
                          : "bg-[#D34053]/[0.08] text-[#D34053]"
                      }`}
                    >
                      {user.status}
                    </div>
                  </TableCell>

                  <TableCell className="xl:pr-7.5">
                    <div className="flex items-center justify-end gap-x-3.5">
                      <button className="hover:text-primary text-sm text-gray-600 hover:text-primary-500">
                        Edit
                      </button>
                      <button className="hover:text-primary text-sm text-red-600 hover:text-red-500">
                        Delete
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