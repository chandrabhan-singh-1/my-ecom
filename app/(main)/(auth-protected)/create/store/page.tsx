import { CreateStoreForm } from "@/components/forms/create-store";
import React from "react";

export default function CreateStorePage() {
  return (
    <div className="h-full w-full px-14">
      <h1 className="text-3xl text-center mt-4 mb-8 font-bold underline underline-offset-2">
        Create Store
      </h1>
      <CreateStoreForm />
    </div>
  );
}
