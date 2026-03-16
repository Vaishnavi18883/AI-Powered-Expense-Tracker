import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import incomegif from '../assets/Gif/income.gif'
import expgif from '../assets/Gif/money-bag.gif'
import insights from '../assets/Gif/budgeting.gif'
import addincome from "../assets/Gif/money.gif"
import wallet from '../assets/Gif/wallet.gif'
import chart from '../assets/Gif/evolution.gif'
import ai from '../assets/Gif/artificial-intelligence.gif'

const Home = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
          <Link to="/register" className="hover:text-indigo-600">Dashboard</Link>
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
        </div>

      </nav>


      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center text-center px-6 py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/creative-finance-concept-with-colorful-sketches-symbols-dark-background_1270289-3769.jpg')" }}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl text-white space-y-6">

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500"
          >

            Track Your Income & Expenses Easily
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl opacity-90"
          >
            Manage your daily finances, monitor spending habits, and get helpful insights to improve your savings.
          </motion.p>

          <motion.div
            variants={itemVariants}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Link
              to="/register"
              className="inline-block bg-linear-to-r from-indigo-600 to-pink-500 hover:from-pink-500 hover:to-indigo-600 text-white px-10 py-4 rounded-full font-semibold shadow-xl transition-transform transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
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
              Track income, manage expenses and visualize your spending with an easy-to-use dashboard.
            </p>

            <div className="space-y-3 text-gray-700 font-semibold">
              <span className="flex gap-3 transition-transform transform hover:scale-110 ">
                <img src={addincome} alt="income" className="w-8 h-8 drop-shadow-xl/25 rounded-full" />
                Add and manage income sources
              </span>
              <span className="flex gap-3 transition-transform transform hover:scale-110">
                <img src={wallet} alt="expenses" className="w-8 h-8 drop-shadow-xl/25 rounded-full" />
                Track daily expenses
              </span>
              <span className="flex gap-3 transition-transform transform hover:scale-110">
                <img src={chart} alt="charts" className="w-8 h-8 drop-shadow-xl/25 rounded-full" />
                Visual charts and insights
              </span>
              <span className="flex gap-3 transition-transform transform hover:scale-110">
                <img src={ai} alt="ai" className="w-8 h-8 drop-shadow-xl/25 rounded-full" />
                AI-powered financial suggestions
              </span>
            </div>

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

      {/* Features Section */}
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
          className="bg-gradient-to-br from-indigo-100 to-purple-200 p-8 rounded-xl shadow-md"
        >
          <span className="flex gap-3 text-xl font-semibold mb-3">
            <img src={incomegif} alt="income" className="w-10 h-10 drop-shadow-xl/25 rounded-full" />
            Add Income
          </span>
          <p>Track salary and other income sources easily.</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          className="bg-gradient-to-br from-indigo-100 to-purple-200 p-8 rounded-xl shadow-md"
        >
          <span className="flex gap-3 text-xl font-semibold mb-3">
            <img src={expgif} alt="expense" className="w-10 h-10 drop-shadow-xl/25 rounded-full " />
            Manage Expenses
          </span>
          <p>Record daily spending and stay within your budget.</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -6 }}
          className="bg-gradient-to-br from-indigo-100 to-purple-200 p-8 rounded-xl shadow-md"
        >
          <span className="flex gap-3 text-xl font-semibold mb-3">
            <img src={insights} alt="insights" className="w-10 h-10 drop-shadow-xl/25 rounded-full" />
            Smart Insights
          </span>
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
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.95 }}
        >

          <Link
            to="/register"
            className="bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-pink-500 hover:to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl transition-transform transform hover:scale-105"
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

