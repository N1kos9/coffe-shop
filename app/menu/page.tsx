import Layout from "../components/Layout";

export default function Menu() {
  return (
    <Layout>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center">Our Menu</h2>
        <div className="mt-6 flex flex-col items-center">
          <p className="my-2">Espresso - $3</p>
          <p className="my-2">Americano - $4</p>
          <p className="my-2">Cappuccino - $4.5</p>
          <p className="my-2">Latte - $4.5</p>
          <p className="my-2">Mocha - $5</p>
        </div>
      </div>
    </Layout>
  );
}
