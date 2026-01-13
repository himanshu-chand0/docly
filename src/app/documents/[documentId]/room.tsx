"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_saOLVRNRZTTYuFovZqsM87KocKx8I_Zwr2WSd2RoYabM3ePCvBOWp2f9OUeFySE9"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
//LiveblocksProvider publicApiKey should be YOUR public key
//Also dat boi say sum abt changing the key so ye