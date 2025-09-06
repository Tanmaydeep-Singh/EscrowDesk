import Accordia from "./Accordian";

const AccordianData = [
  {
    id: 1,
    question: "What is EscrowDesk?",
    answer:
      "EscrowDesk is a Web3-powered project management and escrow platform for freelancers, agencies, and project managers. It ensures secure contracts, milestone tracking, and transparent payments.",
  },
  {
    id: 2,
    question: "How does EscrowDesk ensure secure payments?",
    answer:
      "All payments are protected with blockchain-based escrow. Funds are only released once project milestones are met, preventing fraud and ensuring trust between clients and freelancers.",
  },
  {
    id: 3,
    question: "Can AI really help with contracts?",
    answer:
      "Yes. EscrowDesk uses AI to simplify contract drafting, detect inconsistencies, and assist with priority listings. This saves time and reduces errors in project agreements.",
  },
  {
    id: 4,
    question: "Do I need crypto to use EscrowDesk?",
    answer:
      "Not necessarily. While EscrowDesk is Web3-native, it supports both crypto and fiat payments, making it flexible for clients and freelancers worldwide.",
  },
  {
    id: 5,
    question: "How does EscrowDesk handle disputes?",
    answer:
      "In case of disputes, EscrowDesk provides transparent contract history and supports third-party arbitration to ensure fair resolution between both parties.",
  },
  {
    id: 6,
    question: "Is my data and project information safe?",
    answer:
      "Absolutely. EscrowDesk uses encrypted and decentralized storage for project files and contracts, ensuring data remains secure and tamper-proof.",
  },
];

interface accordian {
  id: number;
  question: string;
  answer: string;
}

const FAQs = () => {
  return (
    <div className="mt-16 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {AccordianData.map((data) => (
          <Accordia key={data.id} question={data.question} answer={data.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
