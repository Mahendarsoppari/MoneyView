function Footer() {
    return (
      <footer className="bg-gray-500 text-white p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h5 className="font-bold mb-4 text-lg">THE COMPANY</h5>
            <ul className="">
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Founding Member: DLAI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-lg">PRODUCTS</h5>
            <ul>
              {[
                "Personal Loan",
                "Credit Tracker",
                "Business Loan",
                "Smart Pay",
                "Credit Card",
                "Home Loan",
                "Loan Against Property",
                "FD Select",
                "Motor Insurance",
              ].map((product) => (
                <li key={product}>
                  <a href="#" className="hover:text-primary transition duration-300">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-lg">PARTNERS</h5>
            <ul>
              {[
                "Lending Partners",
                "Banking Partners",
                "Business Partners",
                "Digital Lead Partners",
                "Collection Agencies",
              ].map((partner) => (
                <li key={partner}>
                  <a href="#" className="hover:text-primary transition duration-300">
                    {partner}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-lg">CONTACT US</h5>
            <ul>
              <li>
                <a href="mailto:care@moneyview.in" className="hover:text-primary transition duration-300">
                  care@moneyview.in
                </a>
              </li>
              <li>
                <a href="tel:08069390476" className="hover:text-primary transition duration-300">
                  080 6939 0476
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 text-lg">GRIEVANCE REDRESSAL</h5>
            <ul>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Loan Grievance Redressal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition duration-300">
                  Banking Grievance Redressal
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} MoneyView. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-primary transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition duration-300">Sitemap</a>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
  