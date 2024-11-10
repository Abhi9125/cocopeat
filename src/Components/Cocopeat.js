// import React from "react";

// const Cocopeat = () => {
//   return (
//     <section>
//       <h2>Poycoco Cocopeat</h2>

//       <div className="flex">
//         <div>
//           <h2>COCO PEAT FOR GROWING CROPS</h2>
//           <p>
//             Coco Peat is proven as the superior growing medium among other
//             alternative growing mediums in soilless cultivation. Coco Peat is
//             also known as Coir Fiber or Coir Substrate. The powder material
//             within the coconut husk is known as Coco Peat. While extracting
//             fiber from coconut husk the Coco Peat is formed as a byproduct. Coco
//             peat is a popular growing medium for indoor and outdoor plants.
//           </p>
//         </div>

//         <div>
//           <h2>Benefits of Growing in Coco peat</h2>

//           <p>
//             Coco Peat is a proven Eco-friendly growing medium to Grow Healthy
//             Crops for Bountiful Yields. Coco peat increase farm productivity and
//             quality. Coco Peat reduces pests and disease. Coco Peat provides
//             long term water-holding capacity, high porosity ensuring optimal
//             growth of crops in all stages. Poyscoco’s coco peat has been
//             especially articulated to grow variety of crops including;
//             hydroponic cucumbers, tomatoes, blueberries, strawberries, ginger
//             and more.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cocopeat;

import React from "react";

const Cocopeat = () => {
  return (
    <section className="bg-[#F5F1E0] py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-[#2F5233] mb-10">
        Poycoco Cocopeat
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#6B4F4F] mb-4">
            COCO PEAT FOR GROWING CROPS
          </h3>
          <p className="text-neutralBrown leading-relaxed">
            Coco Peat is a superior growing medium in soilless cultivation. Coco
            Peat, also known as Coir Fiber or Coir Substrate, is a natural and
            sustainable product created as a byproduct during fiber extraction
            from coconut husks. It provides an ideal growing environment for
            indoor and outdoor plants, retaining moisture and nutrients to help
            plants flourish.
          </p>
        </div>
        <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#6B4F4F] mb-4">
            Benefits of Growing in Coco Peat
          </h3>
          <p className="text-neutralBrown leading-relaxed">
            Coco Peat is an eco-friendly, versatile growing medium that enhances
            productivity, reduces pest infestations, and maintains optimal
            moisture levels. Its high porosity and long-term water retention
            support healthy crop growth, making it suitable for a variety of
            plants, including hydroponic cucumbers, tomatoes, strawberries, and
            more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cocopeat;
