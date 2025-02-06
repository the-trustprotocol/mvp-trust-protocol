import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShieldCheck, Handshake, Building } from "lucide-react"

const useCases = [
  { title: "Decentralized Social Networks", description: "Enhance user authenticity and reduce spam.", icon: Users },
  {
    title: "DeFi Protocols",
    description: "Improve risk assessment and enable under-collateralized lending.",
    icon: ShieldCheck,
  },
  { title: "DAO Governance", description: "Strengthen voting mechanisms and prevent Sybil attacks.", icon: Handshake },
  {
    title: "Web3 Marketplaces",
    description: "Build trust between buyers and sellers in decentralized commerce.",
    icon: Building,
  },
]

export default function UseCases() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {useCases.map((useCase, index) => (
          <Card key={index} className="bg-white bg-opacity-80">
            <CardHeader>
              <CardTitle className="flex items-center">
                <useCase.icon className="w-6 h-6 mr-2" />
                {useCase.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{useCase.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

