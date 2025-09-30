const Footer =()=>{

    return (
         <footer className="bg-background-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <div className="space-y-2 text-sm">
                  <div className="hover:text-gray-300 cursor-pointer">&gt; Home</div>
                  <div className="hover:text-gray-300 cursor-pointer">&gt; Some of our features</div>
                  <div className="hover:text-gray-300 cursor-pointer">&gt; Get started</div>
                  <div className="hover:text-gray-300 cursor-pointer">&gt; What we do</div>
                  <div className="hover:text-gray-300 cursor-pointer">&gt; How it works</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-4 text-green-200">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <div className="hover:text-gray-300 cursor-pointer">&gt; Patient Portal</div>
                  <div className="hover:text-gray-300 cursor-pointer">&gt; Doctor Dashboard</div>
                  <div className="hover:text-gray-300 cursor-pointer">&gt; Pharmacy Tools</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-4 text-green-200">Contact Us</h3>
                <div className="space-y-2 text-sm">
                  <div>Phone: +250 786444064</div>
                  <div>Email: info@mediconnect.rw</div>
                  <div>Address: Kigali, Rwanda</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-4 text-green-200">Follow Us</h3>
                <div className="flex gap-4 text-sm">
                  <div className="hover:text-gray-300 cursor-pointer">Facebook</div>
                  <div className="hover:text-gray-300 cursor-pointer">Twitter</div>
                  <div className="hover:text-gray-300 cursor-pointer">Instagram</div>
                </div>
              </div>
            </div>
          </div>  
        </footer>
    )
}

export default Footer
