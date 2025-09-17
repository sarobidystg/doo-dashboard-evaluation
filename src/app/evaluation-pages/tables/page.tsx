import Breadcrumb from "@/app/components/dashboard-components/Breadcrumbs/Breadcrumb";
import { InvoiceTable } from "@/app/components/dashboard-components/Tables/invoice-table";
import { TopChannels } from "@/app/components/dashboard-components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/app/components/dashboard-components/Tables/top-channels/skeleton";
import { TopProducts } from "@/app/components/dashboard-components/Tables/top-products";
import { TopProductsSkeleton } from "@/app/components/dashboard-components/Tables/top-products/skeleton";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tables",
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="space-y-10">
        <Suspense fallback={<TopChannelsSkeleton />}>
          <TopChannels />
        </Suspense>
        
        <Suspense fallback={<TopProductsSkeleton />}>
          <TopProducts />
        </Suspense>

        <InvoiceTable />
      </div>
    </>
  );
};

export default TablesPage;
