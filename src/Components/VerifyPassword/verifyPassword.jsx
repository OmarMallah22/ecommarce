import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function VerifyPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, handleBlur } = useFormik({
    initialValues: {
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: '',
    },
    onSubmit: handleVerifyPassword, // Updated function name for clarity
    validationSchema: Yup.object({
      code1: Yup.string().required('Required').matches(/^\d$/, 'Enter a valid number'),
      code2: Yup.string().required('Required').matches(/^\d$/, 'Enter a valid number'),
      code3: Yup.string().required('Required').matches(/^\d$/, 'Enter a valid number'),
      code4: Yup.string().required('Required').matches(/^\d$/, 'Enter a valid number'),
      code5: Yup.string().required('Required').matches(/^\d$/, 'Enter a valid number'),
      code6: Yup.string().required('Required').matches(/^\d$/, 'Enter a valid number'),
    }),
  });

  async function handleVerifyPassword() {
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Concatenate the verification code
    let verificationCode = '';
    for (let key in values) {
      verificationCode += values[key];
    }

    try {
      const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
        resetCode: verificationCode, // Send the combined verification code
      });

      console.log('Password verification successful:', response.data);
      setSuccessMessage(response.data.message);
      navigate('/updatePassword'); // Redirect as needed
    } catch (error) {
      console.log('Error:', error);
      setErrorMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false); // Ensure loading state is turned off
    }
  }

  return (
    <>
      <Helmet>
        <title>Verify Password</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center mt-5">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-center gap-4">
              {['code1', 'code2', 'code3', 'code4', 'code5', 'code6'].map((code, index) => (
                <div key={index} className="flex items-start flex-col justify-start">
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values[code]}
                    type="text"
                    id={code}
                    name={code}
                    maxLength="1"
                    className="w-[2rem] px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-gray-500"
              disabled={isLoading}
            >
              Verify{isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
            </button>
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
