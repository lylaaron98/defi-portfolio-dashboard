// src/app/(dashboard)/page.tsx
// Example dashboard home page with design system components.
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { Skeleton } from "@/components/ui/Skeleton";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Portfolio Overview</h2>
          <Badge variant="success">Connected</Badge>
        </div>
        <div className="mb-4">
          <Button variant="primary">Add Asset</Button>
        </div>
        <Table>
          <thead>
            <tr>
              <th className="text-left">Asset</th>
              <th className="text-left">Balance</th>
              <th className="text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ETH</td>
              <td>1.23</td>
              <td>$4,000</td>
            </tr>
            <tr>
              <td>BTC</td>
              <td>0.5</td>
              <td>$15,000</td>
            </tr>
            <tr>
              <td colSpan={3}><Skeleton className="h-4 w-full" /></td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
