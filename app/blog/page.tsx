import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center">Blog</h2>
        <div className="mt-8 space-y-10">
          {/* Blog Post 1 */}
          <article className="max-w-4xl mx-auto px-8 py-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">
              The Best Coffee Beans of 2024
            </h3>
            <p className="text-gray-600 mb-4">
              Discover what makes a coffee bean stand out in the crowded market
              of 2024.
            </p>
            <div className="text-right">
              <a href="#" className="text-blue-600 hover:underline">
                Read more...
              </a>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="max-w-4xl mx-auto px-8 py-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">
              5 Tips for Brewing the Perfect Cup at Home
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how to make your home-brewed coffee rival the best coffee
              shops.
            </p>
            <div className="text-right">
              <a href="#" className="text-blue-600 hover:underline">
                Read more...
              </a>
            </div>
          </article>

          {/* Additional content can follow the same pattern */}
        </div>
      </div>
    </Layout>
  );
}
