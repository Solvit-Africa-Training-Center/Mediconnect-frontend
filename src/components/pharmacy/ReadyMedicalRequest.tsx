export default function ReadyMedicalRequest() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header with blue background */}
        <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-white text-xl font-bold text-center">Requested Report is Ready!</h1>
        </div>
        
        {/* Main content */}
        <div className="p-6">
          {/* Verification message */}
          <div className="mb-6">
            <p className="text-gray-800 font-medium text-center">
              Verification accessible!
            </p>
            <p className="text-gray-600 text-center mt-1">
              Verified how service your complete model works!
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
              Download PDF Report
            </button>
            
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors">
              View Record Online
            </button>
          </div>
          
          {/* Return link */}
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Return to Disableuser
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}