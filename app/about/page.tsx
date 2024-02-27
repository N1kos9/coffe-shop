import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center text-gray-700">
          Founded in 2024, Coffee Shop has been serving the community with some
          of the best coffee in town. Our mission is to provide a cozy place for
          people to relax, work, and meet friends.
        </p>
      </div>
    </Layout>
  );
}
