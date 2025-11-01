"use client";

import { useState } from "react";
import { DynamicEntryList } from "./dynamic-entry-list";

function DynamicPage() {
  const [emails, setEmails] = useState<string[]>([""]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto w-full max-w-2xl bg-muted/30 rounded border space-y-4 p-6">
        <DynamicEntryList
          label="Invite emails"
          name="emails"
          placeholder="name@example.com"
          value={emails}
          onChange={setEmails}
          addButtonLabel="Add email"
          minRows={0}
          required={true}
        />
      </div>
    </div>
  );
}

export default DynamicPage;
