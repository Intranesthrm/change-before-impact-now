
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-300">Tathaagat Foundation</h3>
            <p className="text-green-100">
              Leading the change before climate change becomes irreversible.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Contact</h4>
            <div className="space-y-2 text-green-100">
              <p>📩 info@tathaagatfoundation.com</p>
              <p>🌐 www.tathaagatfoundation.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Take Action</h4>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors">
                  Volunteer
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">
                  Partner
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded transition-colors">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>&copy; 2024 Tathaagat Foundation. Together for a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
