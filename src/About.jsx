import React from 'react';
import Header from './Header';

function About() {
  return (<>
    <Header/>
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            viverra ipsum ac velit ultrices, vitae venenatis sem ultrices.
            Proin semper porttitor mi, non hendrerit eros malesuada nec.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
