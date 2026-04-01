"use client";

import { ConnectWalletButton } from "@/features/wallet/components/ConnectWalletButton";
import { useWallet } from "@/features/wallet/hooks/useWallet";
import { ROUTES } from "@/lib/constants/routes";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Badge,
  Box,
  Burger,
  Divider,
  Group,
  NavLink,
  Paper,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBell,
  IconBrandDatabricks,
  IconBuildingBank,
  IconChartArcs,
  IconChartBar,
  IconChevronRight,
  IconCreditCard,
  IconDroplets,
  IconFileDescription,
  IconHelp,
  IconLayoutGrid,
  IconListSearch,
  IconMail,
  IconReceipt2,
  IconSearch,
  IconSettings,
  IconShoppingCart,
  IconWallet,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";

const primaryNav = [
  { label: "Markets", href: ROUTES.MARKETS, icon: IconChartArcs, count: 5 },
  { label: "Trading", href: ROUTES.TRADING, icon: IconShoppingCart, count: 3 },
  { label: "Wallet", href: ROUTES.WALLET, icon: IconWallet, count: 1 },
  { label: "Loans", href: ROUTES.LOANS, icon: IconBuildingBank, count: 2 },
  { label: "Vaults", href: ROUTES.VAULTS, icon: IconLayoutGrid, count: 4 },
  { label: "Portfolio", href: ROUTES.PORTFOLIO, icon: IconChartBar, count: 7 },
  { label: "Liquidity Pools", href: ROUTES.LIQUIDITY_POOLS, icon: IconDroplets, count: 2 },
  { label: "Swap", href: ROUTES.SWAP, icon: IconReceipt2, count: 1 },
];

const utilityNav = [
  { label: "Tables", href: ROUTES.DASHBOARD, icon: IconListSearch },
  { label: "Charts", href: ROUTES.DASHBOARD, icon: IconChartBar },
  { label: "Forms", href: ROUTES.DASHBOARD, icon: IconFileDescription },
  { label: "Settings", href: ROUTES.SETTINGS, icon: IconSettings },
  { label: "Support", href: ROUTES.DASHBOARD, icon: IconHelp },
];

function WalletIdentity() {
  const wallet = useWallet();
  const identity = wallet.address
    ? `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`
    : "Guest session";

  return (
    <Group gap="sm" wrap="nowrap">
      <Avatar color="orange" radius="xl" variant="filled">
        {wallet.address ? wallet.address.slice(2, 4).toUpperCase() : "PF"}
      </Avatar>
      <Stack gap={0}>
        <Text fw={700} size="sm">
          {wallet.address ? "Connected Wallet" : "Portfolio Operator"}
        </Text>
        <Text c="dimmed" size="xs">
          {identity}
        </Text>
      </Stack>
      <Box
        px={10}
        py={5}
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 999,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <Text fw={700} size="xs">
          EN
        </Text>
      </Box>
    </Group>
  );
}

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);

  // Pre-warm all primary routes so navigation is instant
  useEffect(() => {
    primaryNav.forEach((item) => router.prefetch(item.href));
  }, [router]);

  return (
    <AppShell
      header={{ height: 88 }}
      navbar={{
        width: 278,
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="lg"
      styles={{
        main: {
          background: "transparent",
        },
      }}
    >
      <AppShell.Navbar
        p="md"
        style={{
          background: "rgba(15,16,20,0.92)",
          borderInlineEnd: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Stack gap="lg" h="100%">
          <Group justify="space-between" wrap="nowrap">
            <Group gap="sm" wrap="nowrap">
              <ThemeIcon color="orange" radius="md" size={42} variant="gradient">
                <IconBrandDatabricks size={24} />
              </ThemeIcon>
              <Stack gap={0}>
                <Text fw={800} size="xl">
                  PulseFi
                </Text>
                <Text c="dimmed" size="xs">
                  Trading cockpit
                </Text>
              </Stack>
            </Group>
            <ActionIcon color="gray" radius="xl" variant="subtle">
              <IconChevronRight size={16} />
            </ActionIcon>
          </Group>

          <ScrollArea offsetScrollbars scrollbarSize={4} type="never">
            <Stack gap="sm">
              {primaryNav.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <NavLink
                    active={active}
                    className="side-nav-link"
                    component={Link}
                    fw={600}
                    href={item.href}
                    prefetch={true}
                    key={`${item.label}-${item.href}`}
                    label={item.label}
                    leftSection={<Icon size={20} stroke={1.5} />}
                    rightSection={
                      <Group gap={6} wrap="nowrap">
                        <Badge
                          circle
                          color={active ? "orange" : "gray"}
                          size="sm"
                          style={{
                            background: active ? "rgba(255,140,0,0.25)" : "rgba(255,255,255,0.08)",
                            color: active ? "#ffb340" : "#8a9099",
                            border: "none",
                            fontWeight: 700,
                            minWidth: 22,
                            height: 22,
                          }}
                          variant="filled"
                        >
                          {item.count}
                        </Badge>
                        <IconChevronRight size={16} stroke={1.5} />
                      </Group>
                    }
                    style={{
                      borderRadius: 12,
                      padding: "12px 16px",
                      transition:
                        "transform 180ms ease, box-shadow 220ms ease, background-color 180ms ease, color 180ms ease",
                      backgroundColor: active
                        ? "rgba(255, 153, 20, 0.2)"
                        : "rgba(255, 255, 255, 0.01)",
                      color: active ? "#ff8c00" : "#d6dae0",
                      border: active
                        ? "1px solid rgba(255, 173, 51, 0.35)"
                        : "1px solid transparent",
                      boxShadow: active
                        ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 24px rgba(0,0,0,0.28)"
                        : "none",
                    }}
                    variant={active ? "filled" : "subtle"}
                  />
                );
              })}
            </Stack>
          </ScrollArea>

          <Paper
            mt="auto"
            p="md"
            radius="xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,153,20,0.18), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.05)",
              display: "none",
            }}
          >
            <Stack gap={6}>
              <Text fw={700}>Documentation & Support</Text>
              <Text c="dimmed" size="sm">
                Review operations, wallet flows, and trading controls in one place.
              </Text>
              <Divider color="rgba(255,255,255,0.08)" my={4} />
              <UnstyledButton>
                <Group justify="space-between">
                  <Text size="sm">Documentation</Text>
                  <IconChevronRight size={14} />
                </Group>
              </UnstyledButton>
              <UnstyledButton>
                <Group justify="space-between">
                  <Text size="sm">Support</Text>
                  <IconChevronRight size={14} />
                </Group>
              </UnstyledButton>
            </Stack>
          </Paper>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Header
        px="lg"
        className="glass-shell-header"
        style={{
          background: "linear-gradient(180deg, rgba(11,12,16,0.82), rgba(11,12,16,0.58))",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(24px) saturate(118%)",
        }}
      >
        <Group h="100%" justify="space-between" wrap="nowrap">
          <Group gap="md" wrap="nowrap">
            <Burger hiddenFrom="md" onClick={toggle} opened={opened} size="sm" />
            <TextInput
              className="gloss-input"
              leftSection={<IconSearch size={16} />}
              placeholder="Search"
              radius="xl"
              size="md"
              styles={{
                input: {
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.06)",
                  color: "#f3f4f6",
                  minWidth: 240,
                },
              }}
            />
          </Group>

          <Group gap="sm" wrap="nowrap">
            <ActionIcon color="gray" radius="xl" size="lg" variant="subtle">
              <IconBell size={18} />
            </ActionIcon>
            <ActionIcon color="gray" radius="xl" size="lg" variant="subtle">
              <IconMail size={18} />
            </ActionIcon>
            <ConnectWalletButton />
            <WalletIdentity />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Box className="dashboard-stage">
          <Box className="dashboard-orb dashboard-orb-left" />
          <Box className="dashboard-orb dashboard-orb-right" />
          <Box className="dashboard-frame">{children}</Box>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
