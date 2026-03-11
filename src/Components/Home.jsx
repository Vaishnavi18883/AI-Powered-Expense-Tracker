import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        staggerChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600">
          Finance Tracker
        </h1>

        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/userdashboard" className="hover:text-indigo-600">Dashboard</Link>
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
        </div>
      </nav>


      {/* Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center px-6 py-28 bg-[url(https://www.shutterstock.com/image-vector/fintech-app-managing-finances-people-260nw-2198301189.jpg)] bg-no-repeat bg-cover bg-center text-white"
      >

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold mb-6 leading-tight"
        >
          Track Your Income & Expenses Easily
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-lg opacity-90 mb-10"
        >
          Manage your daily finances, monitor spending habits,
          and get helpful insights to improve your savings.
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/register"
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            Get Started
          </Link>
        </motion.div>

      </motion.section>


      {/* Dashboard Preview */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gray-100"
      >

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <motion.div variants={itemVariants}>

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

          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-4 rounded-xl shadow-lg"
          >

            <img
              src="/dashboard-preview.png"
              alt="Dashboard preview"
              className="rounded-lg"
            />

          </motion.div>

        </div>

      </motion.section>


      {/* Features */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 px-10 py-20 max-w-6xl mx-auto"
      >

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-3">Add Income</h3>
          <p>Track salary and other income sources easily.</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-3">Manage Expenses</h3>
          <p>Record daily spending and stay within your budget.</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-3">Smart Insights</h3>
          <p>Understand your financial habits and improve savings.</p>
        </motion.div>

      </motion.section>


      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-16 bg-white"
      >

        <h2 className="text-3xl font-bold mb-12 ">
          Start Managing Your Finances Today
        </h2>

        <motion.div
          whileHover={{ scale: 1.0}}
          whileTap={{ scale: 0.95 }}
        >

          <Link
            to="/register"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Create Free Account
          </Link>

        </motion.div>

      </motion.section>


      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-white">
        <p>© 2026 Finance Tracker</p>
      </footer>

    </div>
  );
};

export default Home;
