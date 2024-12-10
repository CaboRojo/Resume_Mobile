import React, { useEffect } from 'react';
import RootLayout from '../app/layout';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <RootLayout>
      <div className="min-h-screen" style={{ background: 'radial-gradient(circle at center, #000000, #434343)' }}>
        <section className="flex justify-center items-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full" style={{ height: '500px' }}>
            <h1 className="text-3xl font-bold mb-6 text-center">
              <span className="text-black">Schedule</span> 
              <span className="bg-gradient-to-r from-blue-400 via-violet-500 to-blue-600 text-transparent bg-clip-text"> Call</span>
            </h1>
            <div className="calendly-inline-widget" data-url="https://calendly.com/sample-schedule" style={{ minWidth: '100%', height: '400px' }}></div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
};

export default Contact;
