import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { title: "Create or Join Bonds", description: "Deposit funds into a bond (one-way or mutual)" },
  { title: "Earn Reputation", description: "Active bonds increase your reputation over time" },
  { title: "Break Bonds", description: "Incurs a 10% penalty to the treasury and reputation loss" },
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

