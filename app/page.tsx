import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center p-20">
        <h1 className="text-5xl font-bold">Welcome to Our Coffee Shop</h1>
        <p className="mt-4 text-gray-800">
          Discover your favorite coffee with us
        </p>
      </div>
    </Layout>
  );
}
