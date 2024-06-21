// src/services/api.js

// Mock data representing additional survey questions based on survey topics
const additionalQuestionsData = {
    Technology: [
      { label: 'Favorite Programming Language', type: 'text' },
      { label: 'Years of Experience', type: 'number' },
    ],
    Health: [
      { label: 'Exercise Frequency', type: 'text' },
      { label: 'Diet Preference', type: 'text' },
    ],
    Education: [
      { label: 'Highest Qualification', type: 'text' },
      { label: 'Field of Study', type: 'text' },
    ],
  };
  
  // Mock function to fetch additional survey questions based on survey topic
  export const fetchAdditionalQuestions = async (topic) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const questions = additionalQuestionsData[topic] || [];
        resolve(questions);
      }, 1000); // Simulate delay of 1 second
    });
  };
  