"use client";

import { Button } from "@mantine/core";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectWalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    const label = `${address.slice(0, 6)}...${address.slice(-4)}`;

    return (
      <Button color="orange" onClick={() => disconnect()} radius="xl" size="sm" variant="light">
        {label}
      </Button>
    );
  }

  const preferredConnector =
    connectors.find((connector) => connector.type === "injected") ?? connectors[0];

  return (
    <Button
      color="orange"
      disabled={!preferredConnector || isPending}
      onClick={() => {
        if (preferredConnector) {
          connect({ connector: preferredConnector });
        }
      }}
      radius="xl"
      size="sm"
      variant="light"
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
}
