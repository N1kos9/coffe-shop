import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-6">Discover Our Story</h2>
          <p className="text-lg text-gray-600 mx-auto leading-relaxed max-w-4xl">
            Born from a passion for the rich traditions of coffee culture,
            Coffee Shop was established in 2024 to bring a unique blend of
            innovation and tradition to the heart of the city. Here, every cup
            of coffee tells a story, inviting you on a journey through the art
            and science of coffee making.
          </p>
        </section>

        <section className="mb-20 bg-gray-100 py-12">
          <h3 className="text-4xl font-semibold text-center mb-10">
            Why We Stand Out
          </h3>
          <div className="grid md:grid-cols-3 gap-10 text-center px-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-4">Craftsmanship</h4>
              <p className="text-gray-600">
                Our dedication to the craft of coffee making ensures that every
                sip offers a remarkable experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-4">Innovation</h4>
              <p className="text-gray-600">
                We constantly explore innovative brewing methods to enhance your
                coffee experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-2xl font-semibold mb-4">Community</h4>
              <p className="text-gray-600">
                At the heart of our mission is a commitment to fostering
                community connections over great coffee.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-4xl font-semibold text-center mb-10">
            Our Journey
          </h3>
          <p className="text-lg text-gray-600 text-center mx-auto leading-relaxed max-w-4xl">
            From our first store to becoming a beloved part of local life, our
            journey is a testament to our passion for coffee and community. We
            invite you to be part of our continuing story as we explore new
            horizons in coffee culture together.
          </p>
        </section>

        <section className="bg-gray-100 py-12">
          <h3 className="text-4xl font-semibold text-center mb-10">
            Meet Our Team
          </h3>
          <div className="flex flex-wrap justify-center gap-8 px-4">
            {/* Example team member */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-6"></div>{" "}
              {/* Placeholder for a team member image */}
              <h4 className="text-2xl font-medium">Alex Johnson</h4>
              <p className="text-gray-500">Master Roaster</p>
            </div>
            {/* Additional team members */}
          </div>
        </section>

        <section className="my-20">
          <h3 className="text-4xl font-semibold text-center mb-10">
            Our Commitment to Sustainability
          </h3>
          <p className="text-lg text-gray-600 text-center mx-auto leading-relaxed max-w-4xl">
            Sustainability is at the core of everything we do. From ethically
            sourced beans to minimizing our environmental footprint, we're
            dedicated to making a positive impact on the planet and our
            community.
          </p>
        </section>
      </div>
    </Layout>
  );
}
