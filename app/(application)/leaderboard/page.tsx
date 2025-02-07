"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Flame, Trophy, User, Wallet, Star, Zap, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function LeaderboardPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [selectedFilter, setSelectedFilter] = useState("top_performers")

  // Mock data
  const leaderboardData = Array.from({ length: 50 }, (_, i) => ({
    ens: `user${i + 1}.eth`,
    reputation: Math.floor(Math.random() * 1000),
    bonds: Math.floor(Math.random() * 50),
    tvl: (Math.random() * 100).toFixed(2) + " ETH",
    activity: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)]
  }))

  // Sort and rank data
  const sortedData = [...leaderboardData].sort((a, b) => {
    switch(selectedFilter) {
      case 'active_bonds': return b.bonds - a.bonds
      case 'new_users': return a.reputation - b.reputation
      case 'highest_tvl': return parseFloat(b.tvl) - parseFloat(a.tvl)
      case 'highest_reputation': return b.reputation - a.reputation
      default: return (b.reputation * 0.6 + b.bonds * 0.4) - (a.reputation * 0.6 + a.bonds * 0.4)
    }
  })

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
    <div className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff]">
      <main className="container mx-auto p-4 flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#94b9ff]">
              Trust Leaderboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the most trusted participants in the ecosystem
            </p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="w-full md:w-[400px] relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                className="pl-8 py-5 rounded-full bg-background"
              />
            </div>
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
        </div>

        {/* Table Section */}
        <div className="rounded-xl border bg-background/80 backdrop-blur-sm shadow-lg">
          <div className="overflow-x-auto">
            <Table className="min-w-[700px] lg:min-w-full">
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="w-[100px]">Rank</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead className="text-center">Reputation</TableHead>
                  <TableHead className="text-center">Bonds</TableHead>
                  <TableHead className="text-center">TVL</TableHead>
                  <TableHead className="text-center">Activity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((entry) => (
                  <TableRow 
                    key={entry.rank} 
                    className="hover:bg-secondary/10 transition-colors"
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {entry.rank <= 3 ? (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            entry.rank === 1 ? 'bg-yellow-100' :
                            entry.rank === 2 ? 'bg-gray-100' :
                            'bg-orange-100'
                          }`}>
                            <span className={`font-semibold ${
                              entry.rank === 1 ? 'text-yellow-600' :
                              entry.rank === 2 ? 'text-gray-600' :
                              'text-orange-600'
                            }`}>
                              #{entry.rank}
                            </span>
                          </div>
                        ) : (
                          <span className="w-8 h-8 flex items-center justify-center">
                            #{entry.rank}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{entry.ens}</div>
                          <div className="text-sm text-muted-foreground">Joined 2 weeks ago</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-semibold">{entry.reputation}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 rounded-full">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">{entry.bonds}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Wallet className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{entry.tvl}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className={`px-3 py-1 rounded-full inline-flex items-center gap-2 ${
                        entry.activity === 'High' 
                          ? 'bg-green-100 text-green-800' 
                          : entry.activity === 'Medium' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          entry.activity === 'High' ? 'bg-green-600' :
                          entry.activity === 'Medium' ? 'bg-yellow-600' :
                          'bg-red-600'
                        }`} />
                        <span>{entry.activity}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow border">
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