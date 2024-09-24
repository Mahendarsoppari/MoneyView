import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "Introduction to Personal Finance",
    info: "Learn the basics of personal finance management, including budgeting, saving, and investing. Understand the importance of financial literacy in building wealth and securing your financial future.",
  },
  {
    id: 2,
    title: "Understanding Savings and Investments",
    info: "Explore different savings accounts, investment vehicles such as stocks, bonds, and mutual funds. Learn about risk management and how to diversify your portfolio for long-term gains.",
  },
  {
    id: 3,
    title: "Budgeting for Financial Success",
    info: "A comprehensive guide to creating and sticking to a budget that helps manage income, expenses, and savings. Tips on tracking spending habits and adjusting your budget for unexpected expenses.",
  },
  {
    id: 4,
    title: "The Power of Compound Interest",
    info: "Understand how compound interest works and why starting to save and invest early can have a massive impact on your financial future. Learn how interest on investments grows over time.",
  },
  {
    id: 5,
    title: "Credit Cards and Managing Debt",
    info: "An introduction to using credit responsibly, avoiding debt traps, and managing loans. Learn strategies to improve your credit score and reduce high-interest debts efficiently.",
  },
  {
    id: 6,
    title: "Retirement Planning Essentials",
    info: "Prepare for the future by exploring different retirement plans like 401(k)s and IRAs. Understand the importance of saving early and contributing regularly to secure a comfortable retirement.",
  },
  {
    id: 7,
    title: "Building an Emergency Fund",
    info: "Learn why having an emergency fund is critical for financial stability. Explore strategies for saving 3-6 months of living expenses to protect yourself from unexpected financial emergencies.",
  },
  {
    id: 8,
    title: "Tax Planning and Strategies",
    info: "Understand the basics of tax planning, including deductions, credits, and how to minimize your tax liability legally. Learn how smart tax planning can increase your annual savings.",
  },
  {
    id: 9,
    title: "Real Estate Investment Basics",
    info: "An introduction to real estate investing, including rental properties, flipping houses, and REITs. Learn how real estate can be a powerful tool for building long-term wealth.",
  },
];

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border rounded-lg shadow-md p-4 mb-4">
      <header className="flex justify-between items-center">
        <h4
          onClick={() => setExpanded(!expanded)}
          className={`text-lg font-semibold cursor-pointer ${
            expanded ? "text-black" : "text-black"
          }`}
        >
          {title}
        </h4>
        <button className="text-2xl" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <IoIosArrowUp className="text-[#F6AC14]" />
          ) : (
            <IoIosArrowDown className="text-black" />
          )}
        </button>
      </header>
      {expanded && <p className="mt-4 text-black">{info}</p>}
    </article>
  );
};

const FullStackWebDev = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="px-2 md:px-5">
      <h3 className="text-xl text-black font-bold text-center my-3">
        Financial Topics Covered in{" "}
        <span className="bg-gradient-to-r bg-clip-text from-black to-[#f6ac14] text-transparent">
          this course
        </span>
      </h3>
      <section className="space-y-4 text-black">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
};

export default FullStackWebDev;
