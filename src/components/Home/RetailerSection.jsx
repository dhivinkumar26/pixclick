// import React, { useState } from "react";
// import RetailerCarousel from "./RetailerCarousel";
// import RetailerGridView from "./RetailerGridView";

// const RetailerSection = () => {
//   const [isGridView, setIsGridView] = useState(false);

//   const handleToggleView = () => {
//     setIsGridView((prev) => !prev);
//     // Smooth scroll to top after 100ms (to allow view change)
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }, 100);
//   };

//   return (
//     <div className="px-4 py-6">
    

//       {isGridView ? <RetailerGridView /> : <RetailerCarousel />}
//     </div>
//   );
// };

// export default RetailerSection;
