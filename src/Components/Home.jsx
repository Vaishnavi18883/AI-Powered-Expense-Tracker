import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">
          Finance Tracker
        </h1>

        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-28 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">

        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Track Your Income & Expenses Easily
        </h1>

        <p className="max-w-xl text-lg opacity-90 mb-10">
          Manage your daily finances, monitor spending habits,
          and get helpful insights to improve your savings.
        </p>

        <Link
          to="/register"
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Get Started
        </Link>

      </section>


      {/* Dashboard Preview */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}

          <div>

            <h2 className="text-3xl font-bold mb-4">
              See Your Finances Clearly
            </h2>

            <p className="text-gray-600 mb-6">
              Track income, manage expenses and visualize
              your spending with an easy-to-use dashboard.
            </p>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Add and manage income sources</li>
              <li>✔ Track daily expenses</li>
              <li>✔ Visual charts and insights</li>
              <li>✔ AI-powered financial suggestions</li>

            </ul>

          </div>


          {/* Image */}

          <div className="bg-white p-4 rounded-xl shadow-lg">

            <img
              src="/dashboard-preview.png"
              alt="Dashboard preview"
              className="rounded-lg"
            />

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-20 max-w-6xl mx-auto">

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">Add Income</h3>
          <p>Track salary and other income sources easily.</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">Manage Expenses</h3>
          <p>Record daily spending and stay within your budget.</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">Smart Insights</h3>
          <p>Understand your financial habits and improve savings.</p>
        </div>

      </section>


      {/* CTA Section */}
      <section className="text-center py-16 bg-white">

        <h2 className="text-3xl font-bold mb-4">
          Start Managing Your Finances Today
        </h2>

        <Link
          to="/register"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Create Free Account
        </Link>

      </section>


      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-white">
        <p>© 2026 Finance Tracker</p>
      </footer>

    </div>
  );
};

export default Home;