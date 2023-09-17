import Sidebar from "~/app/_components/sidebar";

export default function BankingBasics() {
  return (
    <div>
      <Sidebar moduleContent={content} />
    </div>
  );
}

const content = {
  heading: "Banking Basics",
  subcontent: [
    {
      subheading: "Understanding Core Banking Services",
      paragraph:
        "Welcome to Module 2: Banking Basics. In this section, we will explore the foundational aspects of banking and core banking services. Understanding these concepts is essential for managing your finances effectively. Let's dive into the details:\n\n1. **Opening a Bank Account**: Start by choosing the right type of bank account that suits your needs. Common types include savings accounts, checking accounts, and certificates of deposit (CDs).\n\n2. **Managing Transactions**: Learn how to perform basic transactions such as deposits, withdrawals, and transfers. Familiarize yourself with online banking and mobile banking apps.\n\n3. **Understanding Interest**: Discover how interest rates work on savings and loan accounts. Understand the impact of compounding interest on your savings.\n\n4. **Credit and Loans**: Explore the basics of credit and loans, including credit scores, personal loans, and credit cards. Learn how to use credit responsibly and manage debt effectively.\n\n5. **Banking Fees**: Understand common banking fees such as monthly maintenance fees, ATM fees, and overdraft fees. Learn how to minimize these fees by choosing the right account and using in-network ATMs.\n\nBy the end of this module, you'll have a solid understanding of core banking services and be better equipped to manage your finances through banking institutions.",
    },
    {
      subheading: "Savings and Investments",
      paragraph:
        "Savings and investments play a crucial role in achieving your financial goals. In this part of the module, we'll delve deeper into these topics:\n\n1. **Savings Strategies**: Explore different savings strategies, including setting up an emergency fund, saving for short-term goals, and automating your savings contributions.\n\n2. **Investment Basics**: Understand the basics of investing, including stocks, bonds, and mutual funds. Learn how to create a diversified investment portfolio.\n\n3. **Risk Tolerance**: Assess your risk tolerance and understand how it influences your investment choices. Discover the concept of risk-reward trade-offs.\n\n4. **Retirement Planning**: Learn about retirement accounts such as 401(k)s and IRAs. Explore strategies for long-term retirement planning and saving.\n\n5. **Tax-Efficient Saving**: Discover tax-efficient strategies for saving and investing. Understand how tax-advantaged accounts can benefit your financial future.\n\nBy the end of this section, you'll have the knowledge to make informed decisions about saving and investing, helping you work toward your financial objectives.",
    },
    {
      subheading: "Managing Banking Relationships",
      paragraph:
        "Effective management of your banking relationships can lead to a more seamless financial journey. Consider the following:\n\n1. **Choosing the Right Bank**: Evaluate banks based on factors such as fees, account types, and customer service. Select a bank that aligns with your financial needs and preferences.\n\n2. **Online and Mobile Banking**: Make the most of online and mobile banking features. Monitor your accounts regularly, set up alerts, and use digital tools for convenience.\n\n3. **Customer Service**: Understand how to reach out to your bank's customer service for assistance. Familiarize yourself with common banking procedures, such as reporting lost cards or disputing transactions.\n\n4. **Security**: Prioritize the security of your banking information. Implement strong passwords, enable two-factor authentication, and be cautious about sharing personal information online.\n\n5. **Financial Literacy**: Continue to improve your financial literacy by staying informed about banking trends, services, and regulations. Attend financial education workshops and seminars when available.\n\nBy the end of this module, you'll be well-versed in banking basics and be better equipped to navigate the financial services landscape effectively.",
    },
  ],
  video: "https://www.youtube.com/embed/E-HOz8T6tAo?si=mObERQfgm8BajV1x",
};
