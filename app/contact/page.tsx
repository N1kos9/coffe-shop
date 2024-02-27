import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <p className="text-center mt-4">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <div className="flex flex-col items-center mt-6">
          <p>Email: contact@coffeeshop.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </Layout>
  );
}
