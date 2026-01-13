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
    <LiveblocksProvider publicApiKey={"pk_dev_y49bIZhUV1S1E0zyyEgMbFOxJ-ObK3VCyERlDdp6P5aY58Vnj6yrxy4BcjsbWai2"}>
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