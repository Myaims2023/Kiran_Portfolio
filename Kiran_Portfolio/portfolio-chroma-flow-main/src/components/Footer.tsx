import React from "react";

const Footer: React.FC = () => {
  // Replace these with your real profile URLs and email
  const github = "https://github.com/Myaims2023";
  const linkedin = "https://www.linkedin.com/in/kiran-raj-r-72793228a/";
  const outlook = "mailto:kiranrajendran@outlook.in";
  

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-fuchsia-700 to-emerald-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold">Thank You for Visiting</h3>
<p className="mt-3 text-sm text-gray-100/90 max-w-lg">
  I appreciate your time exploring my portfolio.  
  Here I showcase my journey across Cloud, Networking, and real-world projects —  
  continuously learning, building, and improving every day.
</p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <a href={github} target="_blank" rel="noreferrer" className="hover:underline text-gray-100/90">
                GitHub
              </a>
              <span className="text-gray-200/70">•</span>
              <a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline text-gray-100/90">
                LinkedIn
              </a>  
              <span className="text-gray-200/70">•</span>
              <a href={outlook} className="hover:underline text-gray-100/90">
                Outlook
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col md:flex-row md:justify-end gap-8">
            <div>
              <h4 className="font-medium">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-100/90">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/cloud" className="hover:underline">
                    Cloud
                  </a>
                </li>
                <li>
                  <a href="/networking" className="hover:underline">
                    Networking
                  </a>
                </li>
                
              </ul>
            </div>

            <div>
              <h4 className="font-medium">Connect</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-100/90">
                <li>
                  <a href={github} target="_blank" rel="noreferrer" className="hover:underline">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                
                <li>
                  <a href={outlook} className="hover:underline">
                    Outlook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-sm text-gray-200 flex flex-col md:flex-row md:justify-between md:items-center">
          <div>© {new Date().getFullYear()} Made by Kiran Raj. R</div>
          <div className="mt-3 md:mt-0 text-gray-200/80">Built with care and curiosity</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
