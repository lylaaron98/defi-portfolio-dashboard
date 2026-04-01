"use client";

import { Box, Group, Skeleton, SimpleGrid, Stack } from "@mantine/core";

export default function DashboardLoading() {
  return (
    <Box className="page-enter">
      {/* Page title */}
      <Group mb="xl" gap="sm">
        <Skeleton height={32} width={160} radius="md" />
        <Skeleton height={22} width={80} radius="xl" />
      </Group>

      {/* Stat band */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} mb="lg" spacing="md">
        {[1, 2, 3].map((i) => (
          <Box key={i}>
            <Skeleton height={110} radius="xl" />
          </Box>
        ))}
      </SimpleGrid>

      {/* Token chips */}
      <SimpleGrid cols={{ base: 2, sm: 4 }} mb="lg" spacing="md">
        {[1, 2, 3, 4].map((i) => (
          <Box key={i}>
            <Skeleton height={72} radius="xl" />
          </Box>
        ))}
      </SimpleGrid>

      {/* Exchange panel + market tiles */}
      <SimpleGrid cols={{ base: 1, md: 2 }} mb="lg" spacing="md">
        <Box>
          <Skeleton height={280} radius="xl" />
        </Box>
        <Box>
          <Stack gap="md">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} height={80} radius="xl" />
            ))}
          </Stack>
        </Box>
      </SimpleGrid>

      {/* Cards strip */}
      <Skeleton height={24} width={200} radius="md" mb="md" />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
        {[1, 2, 3, 4].map((i) => (
          <Box key={i}>
            <Skeleton height={140} radius="xl" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
