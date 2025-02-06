
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background bg-gradient-to-r from-[#cdffd8] to-[#94b9ff]">
      {/* Header */}
    

      <main className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Metrics */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2 ">
              <CardTitle className="text-sm font-medium text-muted-foreground">TVL</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">No. of Bonds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reputation Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.0</div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="min-w-[200px] text-white">
            Add Funds
          </Button>
          <Button size="lg" variant="outline" className="min-w-[200px]">
            Withdraw Funds
          </Button>
        </div>

        {/* Contact List / Bond Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact List</h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Bond Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">user1.eth</TableCell>
                    <TableCell>1.5 ETH</TableCell>
                    <TableCell>2024-02-06</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">user2.eth</TableCell>
                    <TableCell>2.0 ETH</TableCell>
                    <TableCell>2024-02-06</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">user3.eth</TableCell>
                    <TableCell>0.5 ETH</TableCell>
                    <TableCell>2024-02-06</TableCell>
                    <TableCell>Pending</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

