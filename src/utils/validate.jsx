// src/utils/validate.js
const validate = (values) => {
    let errors = {};
  
    // Full Name validation
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    }
  
    // Email validation
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    // Survey Topic validation
    if (!values.surveyTopic) {
      errors.surveyTopic = 'Survey Topic is required';
    }
  
    // Technology Section validation
    if (values.surveyTopic === 'Technology') {
      if (!values.favoriteLanguage) {
        errors.favoriteLanguage = 'Favorite Programming Language is required';
      }
      if (!values.yearsExperience || isNaN(values.yearsExperience) || values.yearsExperience <= 0) {
        errors.yearsExperience = 'Years of Experience must be a positive number';
      }
    }
  
    // Health Section validation
    if (values.surveyTopic === 'Health') {
      if (!values.exerciseFrequency) {
        errors.exerciseFrequency = 'Exercise Frequency is required';
      }
      if (!values.dietPreference) {
        errors.dietPreference = 'Diet Preference is required';
      }
    }
  
    // Education Section validation
    if (values.surveyTopic === 'Education') {
      if (!values.highestQualification) {
        errors.highestQualification = 'Highest Qualification is required';
      }
      if (!values.fieldOfStudy) {
        errors.fieldOfStudy = 'Field of Study is required';
      }
    }
  
    // Feedback validation
    if (!values.feedback || values.feedback.length < 0) {
      errors.feedback = 'Feedback is required and must be at least 50 characters';
    }
  
    return errors;
  };
  
  export default validate;
  