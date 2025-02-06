import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { title: "Create Identity", description: "Establish your unique on-chain identity with Trust Protocol." },
  { title: "Build Reputation", description: "Engage in on-chain activities to build your trust score and reputation." },
  { title: "Stake Bonds", description: "Back your reputation with financial commitments to increase trustworthiness." },
  { title: "Utilize Trust", description: "Leverage your established trust across various DApps and platforms." },
]

export default function HowItWorks() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="bg-white bg-opacity-80">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
                  {index + 1}
                </span>
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

