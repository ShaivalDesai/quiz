export type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
};


export const questions: Question[] = [
  {
    id: 1,
    text: "Using what we have to make project?",
    options: ["React", "Javascript", "Typescript", "React&Typescript"],
    correctAnswer: "React&Typescript",
  },
  {
    id: 2,
    text: "What is the full form of OOPs?",
    options: [
      "Object Organisation Programmming",
      "Object Oriented Programming",
      "Oriented Programming",
      "None of these",
    ],
    correctAnswer: "Object Oriented Programming",
  },
  {
    id: 3,
    text: "Which is not the concept of OOPs?",
    options: ["Encapsulation", "Polymorphism", "Exception", "Abstraction"],
    correctAnswer: "Exception",
  },

  {
    id: 4,
    text: "A single program of OOPs can contain how many classes??",
    options: ["Only 1", "Only 99", "Zero", "Any number"],
    correctAnswer: "Any number",
  },

  {
    id: 5,
    text: "A single program of OOPs can contain how many classes??",
    options: ["Only 1", "Only 99", "Zero", "Any number"],
    correctAnswer: "Any number",
  },
];
