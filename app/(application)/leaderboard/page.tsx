"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Flame, Trophy, User, Wallet } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LeaderboardPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [selectedFilter, setSelectedFilter] = useState("top_performers")

  // Modified mock data (without rank)
  const leaderboardData = Array.from({ length: 50 }, (_, i) => ({
    ens: `user${i + 1}.eth`,
    reputation: Math.floor(Math.random() * 1000),
    bonds: Math.floor(Math.random() * 50),
    tvl: (Math.random() * 100).toFixed(2) + " ETH",
    activity: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)]
  }))

  // Sort and rank data based on selected filter
  const sortedData = [...leaderboardData].sort((a, b) => {
    switch(selectedFilter) {
      case 'active_bonds': return b.bonds - a.bonds
      case 'new_users': return a.reputation - b.reputation // Example new user sorting
      case 'highest_tvl': return parseFloat(b.tvl) - parseFloat(a.tvl)
      case 'highest_reputation': return b.reputation - a.reputation
      default: return (b.reputation * 0.6 + b.bonds * 0.4) - (a.reputation * 0.6 + a.bonds * 0.4)
    }
  })

  // Add dynamic ranking
  const rankedData = sortedData.map((item, index) => ({
    ...item,
    rank: index + 1
  }))

  const currentItems = rankedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalItems = rankedData.length


  return (
    <div className="min-h-screen bg-background bg-gradient-to-r from-[#cdffd8] to-[#94b9ff]">
      <main className="container mx-auto p-4 flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#94b9ff] mb-8">
          Trust Leaderboard
        </h1>
          
          <div className="w-full md:w-[240px]">
            <Select 
              value={selectedFilter} 
              onValueChange={(value) => {
                setSelectedFilter(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  <SelectValue placeholder="Select filter" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top_performers">Top Performers</SelectItem>
                <SelectItem value="active_bonds">Active Bonds</SelectItem>
                <SelectItem value="new_users">New Users</SelectItem>
                <SelectItem value="highest_tvl">Highest Bond TVL</SelectItem>
                <SelectItem value="highest_reputation">Highest Reputation Points</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table Section */}
        <div className="rounded-lg border shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="min-w-[700px] lg:min-w-full">
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="w-[80px]">Rank</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead className="text-center">Reputation Score</TableHead>
                  <TableHead className="text-center">Bonds</TableHead>
                  <TableHead className="text-center">TVL</TableHead>
                  <TableHead className="text-center">Activity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((entry) => (
                  <TableRow key={entry.rank} className="hover:bg-secondary/30">
                    <TableCell className="font-medium">#{entry.rank}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="bg-primary/10 p-1 rounded-full">
                          <User className="w-4 h-4 text-primary" />
                        </span>
                        {entry.ens}
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-semibold">
                      {entry.reputation}
                    </TableCell>
                    <TableCell className="text-center">
                      {entry.bonds}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-2">
                        <Wallet className="w-4 h-4 text-muted-foreground" />
                        {entry.tvl}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        entry.activity === 'High' 
                          ? 'bg-green-100 text-green-800' 
                          : entry.activity === 'Medium' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        <Flame className="inline-block w-4 h-4 mr-1" />
                        {entry.activity}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
            </span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => {
                setItemsPerPage(Number(value))
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Items per page" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 per page</SelectItem>
                <SelectItem value="20">20 per page</SelectItem>
                <SelectItem value="50">50 per page</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(p => Math.min(Math.ceil(totalItems / itemsPerPage), p + 1))}
              disabled={currentPage * itemsPerPage >= totalItems}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}