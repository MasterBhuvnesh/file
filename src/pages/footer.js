// import React from "react";
// import footerbg from "../images/footerbg.png";
// import icon from "../images/icon.png";
// const Footer = () => {
//   return (
//     <footer className="bg-gray-300 p-8 mt-8 ">
//       <div className="flex flex-col md:flex-row justify-between items-center  pb-6">
//         <div className="flex items-center mb-4 md:mb-0">
//           <img
//             src={icon}
//             alt="Google Developer Groups logo"
//             className="mr-4"
//           />
//           <div>
//             <h1 className="text-gray-800 text-xl font-medium">
//               Google Developer Groups
//             </h1>
//             <p className="text-blue-500">On Campus </p>
//             <p>· Ramdeobaba University</p>
//           </div>
//         </div>
//         <div className="border-l pl-8 md:border-l-0 md:pl-0">
//           <p className="text-gray-800 text-center md:text-left">
//             Shri Ramdeobaba College of Engineering and Management,
//             <br />
//             Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
//           </p>
//           <p className="text-gray-800 mt-2 text-center md:text-left">
//             <i className="fas fa-envelope mr-2"></i>dsc.rknec@gmail.com
//           </p>
//           <div className="mt-4 text-center md:text-left">
//             <p className="text-gray-800">Follow Us:</p>
//             <div className="flex justify-center md:justify-start space-x-4 mt-2">
//               <a
//                 href="#"
//                 className="text-gray-800 hover:text-blue-500 transition duration-300"
//               >
//                 <i className="fab fa-instagram"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-800 hover:text-blue-500 transition duration-300"
//               >
//                 <i className="fab fa-linkedin"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-800 hover:text-blue-500 transition duration-300"
//               >
//                 <i className="fab fa-twitter"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-6 flex justify-center">
//         <img
//           src={footerbg}
//           alt="Colorful geometric shapes"
//           className="w-full "
//         />
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import footerbg from "../images/footerbg.png";
import icon from "../images/icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-300 p-8 mt-8 relative">
      <div className="flex flex-col md:flex-row justify-between items-center pb-6 z-10 mb-40">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={icon}
            alt="Google Developer Groups logo"
            className="mr-4"
          />
          <div>
            <h1 className="text-gray-800 text-xl font-medium">
              Google Developer Groups
            </h1>
            <p className="text-blue-500">On Campus </p>
            <p>· Ramdeobaba University</p>
          </div>
        </div>
        <div className="border-l pl-8 md:border-l-0 md:pl-0">
          <p className="text-gray-800 text-center md:text-left">
            Shri Ramdeobaba College of Engineering and Management,
            <br />
            Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
          </p>
          <p className="text-gray-800 mt-2 text-center md:text-left">
            <i className="fas fa-envelope mr-2"></i>dsc.rknec@gmail.com
          </p>
          <div className="mt-4 text-center md:text-left">
            <p className="text-gray-800">Follow Us:</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 left-0 right-0 h-1/2">
        <img
          src={footerbg}
          alt="Colorful geometric shapes"
          className="w-full h-full object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
