"use client";

import { ConnectWalletButton } from "@/features/wallet/components/ConnectWalletButton";
import { DashboardStatCard } from "@/features/dashboard/components/dashboard-stat-card";
import { MarketTickerCard } from "@/features/dashboard/components/market-ticker-card";
import { usePortfolio } from "@/features/portfolio/hooks/use-portfolio";
import { useWallet } from "@/features/wallet/hooks/useWallet";
import type { PortfolioSummary } from "@/features/portfolio/types";
import {
  Alert,
  Badge,
  Box,
  Button,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconAlertCircle, IconArrowsExchange, IconPlus, IconTrendingUp } from "@tabler/icons-react";

const DEMO_SUMMARY: PortfolioSummary = {
  address: "0x1234...abcd",
  totalValueUsd: "76676.72",
  balances: [
    { token: "BTC", amount: "1.63", address: "0x1234...abcd" },
    { token: "ETH", amount: "20.6", address: "0x1234...abcd" },
    { token: "BNB", amount: "43.9", address: "0x1234...abcd" },
    { token: "XRP", amount: "30000", address: "0x1234...abcd" },
  ],
  updatedAt: Date.now(),
};

const tokenMeta: Record<string, { color: string; price: number; sparkline: number[] }> = {
  BTC: { color: "#f59f00", price: 30742.7, sparkline: [32, 28, 30, 26, 29, 34, 31, 35] },
  ETH: { color: "#5c7cfa", price: 1889.01, sparkline: [24, 18, 17, 16, 14, 15, 23, 20] },
  BNB: { color: "#ffd43b", price: 595.41, sparkline: [15, 12, 14, 19, 24, 20, 21, 22] },
  XRP: { color: "#00b4ff", price: 0.47, sparkline: [19, 15, 14, 13, 10, 18, 15, 14] },
  USDC: { color: "#51cf66", price: 1, sparkline: [10, 10, 10, 10, 10, 10, 10, 10] },
};

const paymentCards = [
  {
    label: "Visa",
    holder: "Primary treasury",
    digits: "4541",
    gradient: "linear-gradient(135deg, #5c677d, #edf2f4)",
  },
  {
    label: "Visa",
    holder: "Operations reserve",
    digits: "1572",
    gradient: "linear-gradient(135deg, #ffa94d, #e9fac8)",
  },
  {
    label: "American Express",
    holder: "Marketing spend",
    digits: "1147",
    gradient: "linear-gradient(135deg, #ff8787, #f3d9fa)",
  },
  {
    label: "Discover",
    holder: "Discovery fund",
    digits: "5651",
    gradient: "linear-gradient(135deg, #20c997, #c3fae8)",
  },
];

function currency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);
}

function LoadingState() {
  return (
    <Stack gap="xl">
      <Skeleton height={32} radius="xl" width={220} />
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
        <Skeleton height={120} radius="xl" />
        <Skeleton height={120} radius="xl" />
        <Skeleton height={120} radius="xl" />
      </SimpleGrid>
      <Grid gap="lg">
        <Grid.Col span={{ base: 12, xl: 4 }}>
          <Skeleton height={320} radius="xl" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xl: 8 }}>
          <SimpleGrid cols={{ base: 1, md: 2, xl: 4 }} spacing="lg">
            <Skeleton height={220} radius="xl" />
            <Skeleton height={220} radius="xl" />
            <Skeleton height={220} radius="xl" />
            <Skeleton height={220} radius="xl" />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export function DashboardOverview() {
  const wallet = useWallet();
  const queryAddress = wallet.address || DEMO_SUMMARY.address;
  const { data, isError, isLoading } = usePortfolio(queryAddress);

  const summary = data ?? DEMO_SUMMARY;
  const cryptoBalance = Number(summary.totalValueUsd);
  const fiatBalance = 100000.72;
  const totalBalance = cryptoBalance + fiatBalance;
  const assets = summary.balances.map((balance) => {
    const meta = tokenMeta[balance.token] ?? tokenMeta.USDC;
    const amount = Number(balance.amount);
    const total = amount * meta.price;

    return {
      color: meta.color,
      holdings: `${balance.amount} ${balance.token}`,
      label: balance.token,
      price: currency(meta.price),
      share: totalBalance > 0 ? (total / totalBalance) * 100 : 0,
      sparkline: meta.sparkline,
      total: currency(total),
    };
  });

  const heroAssets = assets.slice(0, 4);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <Stack gap="xl">
      <Group justify="space-between" wrap="wrap">
        <Stack gap={4}>
          <Group gap="sm">
            <Title order={1}>Wallet</Title>
            <Badge color="orange" radius="xl" size="lg" variant="light">
              Live desk
            </Badge>
          </Group>
          <Text c="dimmed" maw={620} size="sm">
            A trading-focused home view with balances, quick conversion controls, market snapshots,
            and payment rails.
          </Text>
        </Stack>

        {!wallet.address ? <ConnectWalletButton /> : null}
      </Group>

      {isError ? (
        <Alert color="orange" icon={<IconAlertCircle size={18} />} radius="xl" variant="light">
          Live portfolio data is unavailable for this wallet. The dashboard is showing demo balances
          so the workspace remains usable.
        </Alert>
      ) : null}

      <Paper
        className="glass-panel"
        p="xl"
        radius="28px"
        style={{
          background: "linear-gradient(180deg, rgba(17,18,20,0.96), rgba(17,18,20,0.84))",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 24px 70px rgba(0,0,0,0.28)",
        }}
      >
        <Stack gap="xl">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <DashboardStatCard
              color="#ff9914"
              label="Total Balance"
              progress={100}
              value={currency(totalBalance)}
            />
            <DashboardStatCard
              color="#5c7cfa"
              label="Crypto"
              progress={(cryptoBalance / totalBalance) * 100}
              value={currency(cryptoBalance)}
            />
            <DashboardStatCard
              color="#ffd43b"
              label="Fiat"
              progress={(fiatBalance / totalBalance) * 100}
              value={currency(fiatBalance)}
            />
          </SimpleGrid>

          <SimpleGrid cols={{ base: 1, md: 2, xl: 4 }} spacing="lg">
            {heroAssets.map((asset) => (
              <Paper
                className="gloss-card card-hover-lift"
                key={asset.label}
                p="md"
                radius="xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Stack gap={6}>
                  <Box
                    h={4}
                    style={{
                      background: asset.color,
                      borderRadius: 999,
                      width: `${Math.max(asset.share, 18)}%`,
                    }}
                  />
                  <Text c="dimmed" size="sm">
                    {asset.label}
                  </Text>
                  <Text fw={700} size="xl">
                    {asset.total}
                  </Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>

          <Grid gap="lg">
            <Grid.Col span={{ base: 12, xl: 4 }}>
              <Paper
                className="glass-panel card-hover-lift"
                h="100%"
                p="lg"
                radius="xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,153,20,0.08), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Stack gap="lg" h="100%">
                  <Group justify="space-between">
                    <Text fw={700} size="lg">
                      Exchange
                    </Text>
                    <Select
                      allowDeselect={false}
                      data={["Buy", "Sell"]}
                      defaultValue="Buy"
                      radius="xl"
                      size="xs"
                      styles={{ input: { width: 92 } }}
                    />
                  </Group>

                  <Stack gap="md">
                    <NumberInput
                      defaultValue={100}
                      hideControls
                      label="Amount"
                      radius="xl"
                      size="lg"
                      thousandSeparator=","
                    />
                    <Group grow>
                      <Select
                        allowDeselect={false}
                        data={["USD", "EUR", "USDC"]}
                        defaultValue="USD"
                        label="From"
                        radius="xl"
                      />
                      <Select
                        allowDeselect={false}
                        data={["ETH", "BTC", "SOL"]}
                        defaultValue="ETH"
                        label="To"
                        radius="xl"
                      />
                    </Group>
                  </Stack>

                  <Paper
                    p="md"
                    radius="xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <Group justify="space-between" mb={6}>
                      <Text c="dimmed" size="sm">
                        1 ETH
                      </Text>
                      <Text fw={600} size="sm">
                        1,889.01 USD
                      </Text>
                    </Group>
                    <Group justify="space-between">
                      <Text c="dimmed" size="sm">
                        Total fees
                      </Text>
                      <Text c="orange.4" fw={700} size="sm">
                        $2.99
                      </Text>
                    </Group>
                  </Paper>

                  <Button
                    color="orange"
                    leftSection={<IconArrowsExchange size={16} />}
                    radius="xl"
                    size="md"
                    variant="filled"
                  >
                    Buy
                  </Button>
                </Stack>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, xl: 8 }}>
              <SimpleGrid cols={{ base: 1, md: 2, xl: 4 }} spacing="lg">
                {assets.slice(0, 4).map((asset, index) => (
                  <MarketTickerCard
                    change={
                      index === 3 ? "-14.24%" : (["+9.01%", "+5.80%", "+3.99%"][index] ?? "+2.15%")
                    }
                    color={asset.color}
                    holdings={asset.holdings}
                    key={asset.label}
                    label={asset.label}
                    price={asset.price}
                    sparkline={asset.sparkline}
                  />
                ))}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>

      <Paper
        className="glass-panel"
        p="xl"
        radius="28px"
        style={{
          background: "linear-gradient(180deg, rgba(17,18,20,0.98), rgba(17,18,20,0.84))",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Stack gap="lg">
          <Group justify="space-between">
            <div>
              <Text fw={700} size="lg">
                Accounts and Cards
              </Text>
              <Text c="dimmed" size="sm">
                Operational spending split across treasury, marketing, and reserve lines.
              </Text>
            </div>

            <Badge
              color="teal"
              leftSection={<IconTrendingUp size={14} />}
              radius="xl"
              size="lg"
              variant="light"
            >
              Healthy cashflow
            </Badge>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }} spacing="lg">
            {paymentCards.map((card) => (
              <Paper
                className="gloss-card card-hover-lift"
                key={card.digits}
                p="lg"
                radius="xl"
                style={{
                  background: card.gradient,
                  color: "#101114",
                  minHeight: 152,
                }}
              >
                <Stack h="100%" justify="space-between">
                  <Group justify="space-between">
                    <Text fw={800}>{card.label}</Text>
                    <Text fw={700} size="sm">
                      ●●●
                    </Text>
                  </Group>
                  <Stack gap={4}>
                    <Text fw={600} size="sm">
                      {card.holder}
                    </Text>
                    <Text fw={800}>Debit •••• {card.digits}</Text>
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>

          <Button leftSection={<IconPlus size={16} />} radius="xl" size="md" variant="outline">
            Add Payment Method
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
