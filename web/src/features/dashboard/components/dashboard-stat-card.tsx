"use client";

import { Box, Group, Progress, Stack, Text } from "@mantine/core";

interface DashboardStatCardProps {
  label: string;
  value: string;
  color: string;
  progress?: number;
}

export function DashboardStatCard({ label, value, color, progress }: DashboardStatCardProps) {
  return (
    <Stack gap={8}>
      <Text c="dimmed" fw={500} size="sm">
        {label}
      </Text>
      <Text fw={700} size="1.9rem">
        {value}
      </Text>
      {typeof progress === "number" ? (
        <Box>
          <Progress value={progress} color={color} radius="xl" size="xs" />
        </Box>
      ) : null}
      <Group gap={6} wrap="nowrap">
        <Box h={8} style={{ background: color, borderRadius: 999 }} w={8} />
        <Text c="dimmed" size="xs">
          Live allocation
        </Text>
      </Group>
    </Stack>
  );
}
