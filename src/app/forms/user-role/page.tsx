import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { UserRoleForm } from "./_components/user-role-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form Layout",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="User Role" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 lg:grid-cols-1 ">
        <div className="flex flex-col gap-9">
          <UserRoleForm />
        </div>
      </div>
    </>
  );
}
