import { Container } from "../Container"
import { Start, Optimization, Universal, Local } from "../Icons"

const features = [
  {
    name: 'S is for Start',
    description:
      'We start with the basics, and then build on that.',
    icon: Start,
  },
  {
    name: 'O is for Optimization',
    description:
      'Make every supply chain as efficient as possible—becoming more productive and cost-effective.',
    icon: Optimization,
  },
  {
    name: 'U is for Universal',
    description:
      'All farmers deserve the same access to technology, tools, and information they need to succeed in their market.',
    icon: Universal,
  },
  {
    name: 'L is for Local',
    description:
      'Local farmers are best suited to the needs and demands of global markets, so we’ve made this for them!',
    icon: Local,
  }
]

export default function OurValues() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl space-y-6 sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-primary">
            Our Values.
          </h2>
          <p className="mt-2 text-lg text-green-primary">
            <span className="text-green-primary font-bold">We Have Soul!</span> We exist to supply the world with food. This makes us the <span className="text-green-primary font-bold">soul</span> of the supply chain that connects all value chain players and stakeholders in a way works for them.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-4"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
            >
              <feature.icon className="h-10 w-10" />
              <h3 className="mt-6 font-bold text-lg text-green-primary">
                {feature.name}
              </h3>
              <p className="mt-2 text-lg font-normal">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
