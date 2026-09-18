export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  liked: string;
  improvements: string;
  feedback: string;
  submittedBy: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Janhavi Adagale",
    role: "Student",
    rating: 5,
    liked: "Deploying the static content to pages and its workflow",
    improvements: "Be more repetitive about the tasks",
    feedback:
      "I really liked learning how to deploy static content to pages and understanding the workflow behind it. The instructor taught everything from scratch at a good pace while practicing alongside us and making sure everyone understood.",
    submittedBy: "Janhavi Adagale",
  },
  {
    id: 2,
    name: "Zenil Amitkumar Rana",
    role: "Student",
    rating: 4,
    liked: "",
    improvements: "",
    feedback:
      "The Git and GitHub workshop was a useful learning experience and helped me understand the fundamentals of working with Git and GitHub.",
    submittedBy: "Zenil Amitkumar Rana",
  },
  {
    id: 3,
    name: "Satish Patil",
    role: "Student",
    rating: 4,
    liked: "Explanation",
    improvements: "Nothing",
    feedback:
      "I liked the clear explanations throughout the Git and GitHub workshop. The concepts were explained in an easy-to-understand way.",
    submittedBy: "Satish Patil",
  },
  {
    id: 4,
    name: "Shivani Hude",
    role: "Student",
    rating: 5,
    liked: "Focused on practical",
    improvements: "Provide steps in chat as you did at the end",
    feedback:
      "I really liked the practical approach of the workshop. Working through Git and GitHub concepts hands-on helped me understand them clearly.",
    submittedBy: "Shivani Hude",
  },
  {
    id: 5,
    name: "Shivangi Gupta",
    role: "Student",
    rating: 5,
    liked: "PPT was good",
    improvements: "Explanation",
    feedback:
      "The presentation was well prepared and the PPT was helpful in understanding the topics. The session was interesting and helped clear my Git and GitHub concepts.",
    submittedBy: "Shivangi Gupta",
  },
  {
    id: 6,
    name: "Sunil Ramoshi",
    role: "Student",
    rating: 5,
    liked: "Clear explanation by the tutor",
    improvements: "A sort of revision could have made it better",
    feedback:
      "The tutor explained the Git and GitHub concepts clearly and made the session easy to follow. The workshop was informative and practical.",
    submittedBy: "Sunil Ramoshi",
  },
  {
    id: 7,
    name: "Himanshu Kumar",
    role: "Student",
    rating: 5,
    liked: "The way sir has delivered their content is unbelievable",
    improvements: "Nothing",
    feedback:
      "The way the instructor delivered the content was excellent. The concepts were explained clearly and made easy to understand through practical learning. I found the workshop to be a great learning experience and would highly recommend this teaching approach.",
    submittedBy: "Himanshu Kumar",
  },
  {
    id: 8,
    name: "Aditikumari Jaiswal",
    role: "Student",
    rating: 5,
    liked: "Practical implementation of topics",
    improvements:
      "Adding more quick practical activities in between would also keep everyone engaged and make learning more interesting.",
    feedback:
      "The Git and GitHub workshop was a great learning experience, especially because of the practical implementation of the topics. The concepts were explained clearly and were easy to understand, even for beginners.",
    submittedBy: "Aditikumari Jaiswal",
  },
  {
    id: 9,
    name: "Sushant Surykant Yaramwar",
    role: "Student",
    rating: 5,
    liked: "Complete session",
    improvements: "Nothing",
    feedback:
      "The complete session was a great learning experience. I found the workshop helpful and would like to attend more sessions on topics such as AI, DSA, and web development.",
    submittedBy: "Sushant Surykant Yaramwar",
  },
  {
    id: 10,
    name: "Kabir Bhosale",
    role: "Student",
    rating: 4,
    liked: "Teaching Style",
    improvements:
      "Hands-on part and how the viewers will be able to interact with the session",
    feedback:
      "I liked the instructor's teaching style and the way the concepts were explained.",
    submittedBy: "Kabir Bhosale",
  },
];