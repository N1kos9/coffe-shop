import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center">Blog</h2>
        <div className="mt-6">
          <div className="my-4">
            <h3 className="text-xl font-semibold">
              The Best Coffee Beans of 2024
            </h3>
            <p className="text-gray-600">
              Discover what makes a coffee bean stand out in the crowded market
              of 2024.
            </p>
          </div>
          <div className="my-4">
            <h3 className="text-xl font-semibold">
              5 Tips for Brewing the Perfect Cup at Home
            </h3>
            <p className="text-gray-600">
              Learn how to make your home-brewed coffee rival the best coffee
              shops.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
