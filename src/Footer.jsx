import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>    
        <footer className="footer items-center p-4 bg-base-100 text-base-content">
      <div className="items-center grid-flow-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-6 h-6 mr-2 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4H8l4-4 4 4h-3v4z"
          ></path>
        </svg>
        <p>
          Weather App &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.15c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.203.085 1.835 1.236 1.835 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.774.419-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.47-2.383 1.236-3.223-.124-.305-.536-1.536.117-3.2 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.656 1.664.244 2.895.12 3.2.77.84 1.235 1.913 1.235 3.223 0 4.608-2.807 5.622-5.478 5.92.431.372.815 1.105.815 2.226v3.293c0 .32.217.694.826.576C20.565 21.796 24 17.298 24 12 24 5.372 18.628 0 12 0z"></path>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M24 4.557a9.82 9.82 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.717 0-4.92 2.2-4.92 4.917 0 .385.043.76.127 1.122C7.728 8.852 4.1 6.886 1.671 3.922a4.906 4.906 0 00-.666 2.472c0 1.706.868 3.212 2.188 4.096a4.903 4.903 0 01-2.228-.615v.061c0 2.385 1.698 4.374 3.95 4.828a4.937 4.937 0 01-2.224.085c.626 1.957 2.444 3.379 4.6 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.422 0-.22-.005-.438-.015-.654A10.243 10.243 0 0024 4.557z"></path>
          </svg>
        </a>
      </div>
    

    </footer>
    </div>
  );
};

export default Footer;
