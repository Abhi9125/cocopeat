import React from "react";
import { Link } from "react-router-dom";

const resourcesData = [
  {
    title: "Coco Peat",
    description:
      "Coco Peat is an eco-friendly and sustainable growing medium designed for optimal crop growth and environmental conservation.",
    sections: [
      {
        subtitle: "Characteristics of Poyscoco Coco Peat",
        details: [
          "Organic, biodegradable and environmentally friendly substrate",
          "Very low EC, especially suitable for 'sensitive' crops",
          "Balanced and stabilized pH levels, with extremely low potassium and sodium contents, suitable for many different crops",
          "Extremely low heavy metals and pesticide residues",
          "High air-filled porosity (AFP) provides good medium structure (not too loose or too dense), good oxygen exchange, proper drainage, good water retention, and nutrient uptake for better plant growth",
          "Good drainage as well as high water holding capacity (WHC) helps to retain moisture and avoid water logging for plants.",
          "High Cation exchange capacity (CEC) helps plants absorb necessary nutrients",
        ],
        image: "/images/coco-peat-characteristics.jpg",
      },
      {
        subtitle: "Advantages of Poyscoco Coco Peat",
        details: [
          "Protects and reduces the amount of waste in the environment",
          "Creates favorable conditions and an ideal environment for plant growth",
          "Improves crop quality and productivity",
          "Reduces the risk of plant diseases compared to traditional soil",
          "Helps growers save costs in efforts of caring and using labor",
          "Versatile growing medium for both horticulture and non-horticulture fields",
        ],
        image: "/images/coco-peat-advantages.jpg",
      },
      {
        subtitle: "Instruction to Use the Poyscoco Coco Peat",
        details: [
          "Step 1: Hydrate the cube or brick/block with fresh water.",
          "Step 2: While waiting for it to expand to fullness, use hands to stir it up for quicker expansion.",
          "Step 3: Take out an adequate amount of coco coir.",
          "Step 4: Put it into seedling/propagation trays if it is for nurseries, or pots/containers if it is for transplanting.",
          "Step 5: For growing plants, transplant the seedlings into the pots/containers.",
          "Step 6: Water and feed the plants with your own or recommended nutrient.",
        ],
        note: "Take control of the feeding routine to avoid deficiencies.",
      },
      {
        subtitle: "Preservation of Poyscoco Coco Peat",
        details: [
          "Store in a dry place: Keep the dehydrated coco coir in a cool, dry, and well-ventilated area.",
          "Keep it away from sunlight: Direct sunlight can damage the coco coir.",
          "Avoid contamination: Keep the coir away from any potential sources of contamination.",
          "Use within the expiry date as recommended by the manufacturer.",
        ],
      },
    ],
  },
  {
    title: "Coconut",
    description:
      "Coconuts offer versatile applications ranging from refreshing drinks to sustainable coir products.",
    sections: [
      {
        subtitle: "Tender Coconut",
        details: [
          "Packed with electrolytes and nutrients.",
          "Meat contains essential minerals like iron, phosphorus, and zinc.",
          "Perfect for refreshing drinks and snacks.",
        ],
        image: "/images/tender-coconut.jpg",
      },
      {
        subtitle: "Coconut",
        details: [
          "Versatile fruit for cooking, oil, and flour.",
          "Supports weight management, heart health, and immune systems.",
        ],
        image: "/images/coconut.jpg",
      },
    ],
  },
];

const Resources = () => {
  return (
    <section className="bg-[#F5F1E0] min-h-screen">
      {/* Breadcrumb Section */}
      <div
        className="bg-cover bg-center h-40 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1200x400?text=Resources')`,
        }}
      >
        <nav className="text-sm text-white font-sans">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <span className="font-semibold">Resources</span>
        </nav>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-10">
        {resourcesData.map((resource, index) => (
          <div key={index} className="mb-16">
            {/* Resource Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif mb-6 text-center">
              {resource.title}
            </h2>
            <p className="text-base sm:text-lg text-[#6B4F4F] font-sans leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              {resource.description}
            </p>

            {/* Resource Sections */}
            {resource.sections.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-8 mb-8"
              >
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.subtitle}
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-[#2F5233] font-serif mb-4">
                    {section.subtitle}
                  </h3>
                  <ul className="list-disc pl-6 text-[#6B4F4F] font-sans space-y-2">
                    {section.details.map((detail, detailIdx) => (
                      <li key={detailIdx}>{detail}</li>
                    ))}
                  </ul>
                  {section.note && (
                    <p className="mt-4 text-sm text-[#A8BDA1] italic">
                      Note: {section.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resources;
