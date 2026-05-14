"use client";

import { Box, Group, Paper, Stack, Text } from "@mantine/core";

interface MarketTickerCardProps {
  change: string;
  color: string;
  holdings: string;
  label: string;
  price: string;
  sparkline: number[];
}

function buildSparkline(points: number[]) {
  const width = 120;
  const height = 48;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(max - min, 1);

  return points
    .map((point, index) => {
      const x = (index / (points.length - 1 || 1)) * width;
      const y = height - ((point - min) / range) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function MarketTickerCard({
  change,
  color,
  holdings,
  label,
  price,
  sparkline,
}: MarketTickerCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <Paper
      p="lg"
      radius="xl"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        border: "1px solid rgba(255,255,255,0.05)",
        minHeight: 230,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Stack gap="md" h="100%" justify="space-between">
        <Stack gap={4}>
          <Text c="dimmed" fw={600} size="sm">
            {label}
          </Text>
          <Text fw={700} size="1.9rem">
            {price}
          </Text>
          <Text c={isPositive ? "teal.4" : "red.4"} fw={600} size="sm">
            {change}
          </Text>
        </Stack>

        <Box>
          <svg height="48" viewBox="0 0 120 48" width="100%">
            <defs>
              <linearGradient id={`gradient-${label}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.28" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${buildSparkline(sparkline)} L 120 48 L 0 48 Z`}
              fill={`url(#gradient-${label})`}
            />
            <path
              d={buildSparkline(sparkline)}
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
          </svg>
        </Box>

        <Group justify="space-between" wrap="nowrap">
          <Text c="dimmed" size="sm">
            Holdings
          </Text>
          <Text fw={600}>{holdings}</Text>
        </Group>
      </Stack>
    </Paper>
  );
}
