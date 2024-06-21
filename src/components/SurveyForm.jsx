// src/components/SurveyForm.js
import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/validate';

const SurveyForm = () => {
  const { handleChange, handleSubmit, values, errors, submittedData } = useForm(
    {
      fullName: '',
      email: '',
      surveyTopic: '',
      favoriteLanguage: '',
      yearsExperience: '',
      exerciseFrequency: '',
      dietPreference: '',
      highestQualification: '',
      fieldOfStudy: '',
      feedback: '',
    },
    validate,
    submitForm
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitForm(formData) {
    // Simulate API call or any async operation here
    setIsSubmitting(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        resolve(formData);
      }, 1000); // Simulate 1 second delay
    });
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Survey Form</h1>
      {!submittedData ? (
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.fullName ? 'border-red-500' : ''
              }`}
            />
            {errors.fullName && <p className="text-red-500 mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Survey Topic */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Survey Topic</label>
            <select
              name="surveyTopic"
              value={values.surveyTopic}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.surveyTopic ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select a topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && <p className="text-red-500 mt-1">{errors.surveyTopic}</p>}
          </div>

          {/* Conditional Fields based on Survey Topic */}
          {values.surveyTopic === 'Technology' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Favorite Programming Language</label>
                <select
                  name="favoriteLanguage"
                  value={values.favoriteLanguage}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Years of Experience</label>
                <input
                  type="number"
                  name="yearsExperience"
                  value={values.yearsExperience}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {values.surveyTopic === 'Health' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Exercise Frequency</label>
                <select
                  name="exerciseFrequency"
                  value={values.exerciseFrequency}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Diet Preference</label>
                <select
                  name="dietPreference"
                  value={values.dietPreference}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select preference</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
              </div>
            </>
          )}

          {values.surveyTopic === 'Education' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Highest Qualification</label>
                <select
                  name="highestQualification"
                  value={values.highestQualification}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={values.fieldOfStudy}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Feedback */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Feedback</label>
            <textarea
              name="feedback"
              value={values.feedback}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.feedback ? 'border-red-500' : ''
              }`}
            />
            {errors.feedback && <p className="text-red-500 mt-1">{errors.feedback}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 ${
              isSubmitting || Object.keys(errors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            {isSubmitting ? 'Submitting...' : submittedData ? 'Update' : 'Submit'}
          </button>
        </form>
      ) : (
        // Display Submitted Data
        <div className="bg-white p-6 mt-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Submitted Data</h2>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Survey Topic:</strong> {submittedData.surveyTopic}</p>
          {submittedData.surveyTopic === 'Technology' && (
            <>
              <p><strong>Favorite Programming Language:</strong> {submittedData.favoriteLanguage}</p>
              <p><strong>Years of Experience:</strong> {submittedData.yearsExperience}</p>
            </>
          )}
          {submittedData.surveyTopic === 'Health' && (
            <>
              <p><strong>Exercise Frequency:</strong> {submittedData.exerciseFrequency}</p>
              <p><strong>Diet Preference:</strong> {submittedData.dietPreference}</p>
              <p><strong>Exercise Frequency:</strong> {submittedData.exerciseFrequency}</p>
              <p><strong>Diet Preference:</strong> {submittedData.dietPreference}</p>
            </>
          )}
          {submittedData.surveyTopic === 'Education' && (
            <>
              <p><strong>Highest Qualification:</strong> {submittedData.highestQualification}</p>
              <p><strong>Field of Study:</strong> {submittedData.fieldOfStudy}</p>
            </>
          )}
          <p><strong>Feedback:</strong> {submittedData.feedback}</p>
          <button
            className="mt-6 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
            onClick={() => window.location.reload()}
          >
            Fill another survey
          </button>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;

