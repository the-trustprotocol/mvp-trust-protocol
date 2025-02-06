import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Link, Fingerprint, Scale, Cog, Layers } from "lucide-react"

const features = [
  { title: "Sybil Resistant", description: "Protect against identity fraud and manipulation.", icon: Shield },
  { title: "Bond Backed Reputation", description: "Establish trust through financial commitments.", icon: Link },
  { title: "Low Collateral", description: "Accessible trust-building with minimal upfront investment.", icon: Scale },
  {
    title: "Portable Identity",
    description: "Carry your reputation across different platforms and chains.",
    icon: Fingerprint,
  },
  {
    title: "Precise & Extendable",
    description: "Integrate with ENS, Uniswap, and more for enhanced functionality.",
    icon: Cog,
  },
  {
    title: "Agnostic & Interoperable",
    description: "Works seamlessly across various blockchain ecosystems.",
    icon: Layers,
  },
]

export default function Features() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white bg-opacity-80">
            <CardHeader>
              <CardTitle className="flex items-center">
                <feature.icon className="w-6 h-6 mr-2" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

