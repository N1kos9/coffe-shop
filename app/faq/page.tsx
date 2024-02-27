import Layout from "../components/Layout";

export default function FAQ() {
  return (
    <Layout>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center">FAQ</h2>
        <div className="mt-6 flex flex-col items-center">
          <p className="my-2">What are your opening hours?</p>
          <p className="my-2">Do you offer any vegan options?</p>
          <p className="my-2">Can I book the space for private events?</p>
        </div>
      </div>
    </Layout>
  );
}
