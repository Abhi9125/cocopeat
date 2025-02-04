import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useParams } from "react-router-dom";
import CocoPeatImage from "../Images/Web_Images/Coco-peat and coco-product.jpg";
import CompressedBlocksImage from "../Images/Web_Images/compressed blocks.jpg"; // Example image for Coco Peat
import GrowBagImage from "../Images/Web_Images/GrowBag.jpg";
import EasyGrowBagsImages from "../Images/Web_Images/easy grow bag.jpg";
import BagsImage from "../Images/Web_Images/Bags.jpg";
import CoirFiberImage from "../Images/Web_Images/coco fiber.jpg";
import CoirYarnImage from "../Images/Web_Images/coco yarn.jpg";
import TenderCoconutImage from "../Images/Web_Images/Tender coconut.jpg";
import CoconutImage from "../Images/Web_Images/coconut.jpg";
import TomatoImage from "../Images/Products/Recommended for products/tomato.png"; // Example image for Tomatoes
import CucumberImage from "../Images/Products/Recommended for products/cucumber.png";
import PeppersImage from "../Images/Products/Recommended for products/chilly.png";
import AubergineImage from "../Images/Products/Recommended for products/aubergine.png";
import RaspberriesImage from "../Images/Products/Recommended for products/raspberry.png";
import BlackberriesImage from "../Images/Products/Recommended for products/black-berry.png"; // Example image for Cucumber
import BlueberriesImage from "../Images/Products/Recommended for products/blue-berry.png";
import HerbsImage from "../Images/Products/Recommended for products/herbs.png";
import FlowersImage from "../Images/Products/Recommended for products/herbs.png";
import MicroGreensImage from "../Images/Products/Recommended for products/micro-greens.png";
import bannerImage from "../Images/Web_Images/product_sub_banner.jpg";
import { Helmet } from "react-helmet";
const productDetails = {
  "Compressed Blocks": {
    title: "Compressed Blocks",
    image: CompressedBlocksImage,
    subHeading:
      "Poyscoco compressed coco peat Blocks are designed for all types of crop varieties in horticulture, floriculture, and agriculture farming and Gardening.",
    description: (
      <>
        <p>
          Poyscoco compressed coco peat Blocks are designed for all types of
          crop varieties in horticulture, floriculture, and agriculture farming
          and Gardening. Coco peat, the superior growing medium, is an emerging
          trend in places where there is a shortage of space and suits different
          climatic and geographic locations.
        </p>
        <p>
          The Air Filled Porosity (AFP) and Water Holding Capacity (WHC) of
          Poyscoco coco peat are perfect for all types of growing methods like
          growing in Pots, Plastic Bags, and Mapal Trough Systems and promote
          plant growth to get the maximum yield. The composition of Poyscoco
          coco peat will stabilize the coco peat for a period spanning 2–5
          years.
        </p>
        <p>
          Poyscoco coco peat is widely used in home gardens, high-tech
          glasshouses, and low-tech polytunnels. We supply the best compressed
          coco peat Blocks in various sizes.
        </p>
      </>
    ),
    uses: [
      { name: "Tomatoes", image: TomatoImage },
      { name: "Cucumbers", image: CucumberImage },
      { name: "Peppers", image: PeppersImage },
      { name: "Aubergine", image: AubergineImage },
      { name: "Raspberries", image: RaspberriesImage },
      { name: "Blackberries", image: BlackberriesImage },
      { name: "Blueberries", image: BlueberriesImage },
      { name: "Herbs", image: HerbsImage },
      { name: "Flowers", image: FlowersImage },
      { name: "MicroGreens", image: MicroGreensImage },
    ],
    link: "/resources#coco-peat",
  },
  "Grow Bag": {
    title: "Grow Bag",
    image: GrowBagImage,
    subHeading:
      "Poyscoco Grow Bags are the perfect solution for growing crops. Grow Bags are coco coir compressed slabs, wrapped in polyethylene bags depending on growing conditions.",
    description: (
      <>
        <p>
          Poyscoco Grow Bags are the perfect solution for growing crops. Grow
          Bags are coco coir compressed slabs, wrapped in polyethylene bags
          depending on growing conditions. Grow bags are the most efficient and
          effective and ensures optimum nutrition, weed protection, maintains
          the temperature, and promotes plant growth to get the maximum yield.
        </p>
        <p>
          Planting made easy with Grow bags and helping to sort out the
          difficulties by combing the container and Growing medium in the
          planting system. Our Grow bags will support your farming space
          shortages and at the same time provide a fertile environment.
        </p>
        <p>
          Poyscoco Grow Bags are customizable to fulfill your specific crop and
          climate conditions. From specialized coir blends of air and water,
          with defined drainage and dripper holes. Our Grow bags are packaged in
          durable materials with UV protection, ensuring longevity and
          performance in any climate.
        </p>
      </>
    ),
    uses: [
      { name: "Tomatoes", image: TomatoImage },
      { name: "Cucumbers", image: CucumberImage },
      { name: "Peppers", image: PeppersImage },
      { name: "Aubergine", image: AubergineImage },
      { name: "Raspberries", image: RaspberriesImage },
      { name: "Blackberries", image: BlackberriesImage },
      { name: "Blueberries", image: BlueberriesImage },
      { name: "Herbs", image: HerbsImage },
      { name: "Flowers", image: FlowersImage },
      { name: "MicroGreens", image: MicroGreensImage },
    ],
    link: "/resources#coco-peat",
  },
  "Easy Grow Bags": {
    title: "Easy Grow Bags",
    image: EasyGrowBagsImages,
    subHeading:
      "Poyscoco Easy Grow Bags provide a sustainable and efficient growing solution, combining a container and growing medium for enhanced plant growth and multiple cropping cycles.",
    description: (
      <>
        <p>
          Poyscoco Easy Grow Bags also known as open top planter bags are the
          ultimate solution for whom seeking a versatile, sustainable, and
          highly effective growing medium. Open -top grow bag is the best grow
          bags, that combing the container and Growing medium in the cropping
          system and simplifies the gardening process and growing System.
        </p>
        <p>
          The Poyscoco Easy Grow Bags increase the yield and quality of many
          crops. Easy Grow Bags also provides multiple cropping cycles of few
          crops with the same growing media. Easy Grow Bags, which saves money
          by reducing labor costs and periodic change of Open-top, grow bags.
        </p>
      </>
    ),
    uses: [
      { name: "Tomatoes", image: TomatoImage },
      { name: "Cucumbers", image: CucumberImage },
      { name: "Peppers", image: PeppersImage },
      { name: "Aubergine", image: AubergineImage },
      { name: "Raspberries", image: RaspberriesImage },
      { name: "Blackberries", image: BlackberriesImage },
      { name: "Blueberries", image: BlueberriesImage },
      { name: "Herbs", image: HerbsImage },
      { name: "Flowers", image: FlowersImage },
      { name: "MicroGreens", image: MicroGreensImage },
    ],
    link: "/resources#coco-peat",
  },
  Bags: {
    title: "Bags",
    image: BagsImage,
    subHeading:
      "Poyscoco coco peat bags offer a high-quality growing medium, ensuring optimal aeration, moisture retention, and plant growth across various farming and gardening methods.",
    description: (
      <>
        <p>
          Poyscoco, coco peat is designed for all types of crop varieties in
          horticulture, floriculture, and agriculture farming and Gardening.
          Coco peat the superior growing medium is an emerging trend in places
          where there is a shortage of space and suits in different climatic and
          geographic locations.
        </p>
        <p>
          The Air Filled Porosity (AFP) and Water Holding Capacity (WHC) of
          Poyscoco, coco peat is perfect for all types of growing method like
          growing in Pots, Plastic Bags, and Mapal Trough Systems and promotes
          plant growth to get the maximum yield. The composition of Poyscoco
          coco peat will stabilize the coco peat for period spanning of 2 –
          5yrs.
        </p>
        <p>
          Poyscoco, coco peat are validly used in home gardens, growers of
          high-tech glasshouses and in the low-tech polytunnels. We could supply
          you with the best coco peat Bags for ease use.
        </p>
      </>
    ),
    uses: [
      { name: "Tomatoes", image: TomatoImage },
      { name: "Cucumbers", image: CucumberImage },
      { name: "Peppers", image: PeppersImage },
      { name: "Aubergine", image: AubergineImage },
      { name: "Raspberries", image: RaspberriesImage },
      { name: "Blackberries", image: BlackberriesImage },
      { name: "Blueberries", image: BlueberriesImage },
      { name: "Herbs", image: HerbsImage },
      { name: "Flowers", image: FlowersImage },
      { name: "MicroGreens", image: MicroGreensImage },
    ],
    link: "/resources#coco-peat",
  },
  "Coir Fiber": {
    title: "Coir Fiber",
    image: CoirFiberImage,
    description: (
      <>
        <p>
          Poyscoco, coir fiber is separated from underneath of the skin of
          coconut through an automated process. Based on the coconut husk or
          skin utilized for this extraction process, define the Brown and White
          coir fiber or coconut Fiber or coco fiber.
        </p>
        <p>
          The Poyscoco, coir fiber’s Strength, Water resistance, Durability,
          Thermal and Sound insulation of coir fiber allowed to use for variety
          of applications like yarn, twine, rope, mattress, Matts, Brushes and
          Doormats, fishing nets and etc…
        </p>
      </>
    ),

    link: "/resources#coco-peat",
  },
  "Coir Yarn": {
    title: "Coir Yarn",
    image: CoirYarnImage,
    description: (
      <>
        <p>
          Poyscoco, coir Yarn is a byproduct of coir fiber. The separated fiber
          from the coconut husk was undergone with an automated machining
          process to produce the coir yarn. Based on the coconut fiber color the
          Brown and White coir yarn is produced. Traditionally coconut coir yarn
          is only used for brooms, mats, ropes and tools of other household.
        </p>
        <p>
          In the modern science utilize the biodegradable Coir Yarn for numerous
          applications in soil bio engineering. Coir Yarn is used in
          Horticulture industry, Coir Mat manufacturing, Geo-textile weaving,
          Oyster farming & in Packing Industry.
        </p>
      </>
    ),

    link: "/resources#coco-peat",
  },
  "Tender Coconut": {
    title: "Tender Coconut",
    image: TenderCoconutImage,
    description: (
      <>
        <p>
          Poyscoco compressed coco peat Blocks are designed for all types of
          crop varieties in horticulture, floriculture, and agriculture farming
          and Gardening. Coco peat, the superior growing medium, is an emerging
          trend in places where there is a shortage of space and suits different
          climatic and geographic locations.
        </p>
        <p>
          The Air Filled Porosity (AFP) and Water Holding Capacity (WHC) of
          Poyscoco coco peat are perfect for all types of growing methods like
          growing in Pots, Plastic Bags, and Mapal Trough Systems and promote
          plant growth to get the maximum yield. The composition of Poyscoco
          coco peat will stabilize the coco peat for a period spanning 2–5
          years.
        </p>
        <p>
          Poyscoco coco peat is widely used in home gardens, high-tech
          glasshouses, and low-tech polytunnels. We supply the best compressed
          coco peat Blocks in various sizes.
        </p>
      </>
    ),

    link: "/resources#coco-peat",
  },
  Coconut: {
    title: "Coconut",
    image: CoconutImage,
    description: (
      <>
        <p>
          Poyscoco compressed coco peat Blocks are designed for all types of
          crop varieties in horticulture, floriculture, and agriculture farming
          and Gardening. Coco peat, the superior growing medium, is an emerging
          trend in places where there is a shortage of space and suits different
          climatic and geographic locations.
        </p>
        <p>
          The Air Filled Porosity (AFP) and Water Holding Capacity (WHC) of
          Poyscoco coco peat are perfect for all types of growing methods like
          growing in Pots, Plastic Bags, and Mapal Trough Systems and promote
          plant growth to get the maximum yield. The composition of Poyscoco
          coco peat will stabilize the coco peat for a period spanning 2–5
          years.
        </p>
        <p>
          Poyscoco coco peat is widely used in home gardens, high-tech
          glasshouses, and low-tech polytunnels. We supply the best compressed
          coco peat Blocks in various sizes.
        </p>
      </>
    ),

    link: "/resources#coco-peat",
  },
  // Add other products similarly...
};

const ProductDetails = () => {
  const { category } = useParams(); // Retrieve the category from the URL
  const details = productDetails[category]; // Get the details for the specific category

  console.log("Decoded category:", category);
  if (!details) {
    return (
      <div className="p-6 text-center text-[#6B4F4F]">
        Product details not found.
      </div>
    );
  }

  const { title, image, subHeading, description, uses, link } = details;

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>{`${title} - Poyscoco`}</title>
        <meta name="description" content={`Learn more about ${title}.`} />
        <meta
          name="keywords"
          content={`${title}, Coco Peat, Urban Gardening`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com/product-details/${category}`}
        />
      </Helmet>

      {/* Hero Banner */}
      {/* <div className="relative h-60">
        <img
          src={bannerImage}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.nav
          className="relative z-10 text-white text-lg font-medium flex items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link to="/product" className="hover:underline">
            Products
          </Link>
          <span className="mx-2">›</span>
          <span className="font-semibold">{title}</span>
        </motion.nav>
      </div> */}

      {/* Hero Banner */}
      <motion.div
        className="relative h-60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bannerImage}
          alt="Produact_Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.nav
          className="relative z-10 text-white text-lg font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link to="/product" className="hover:underline">
            Products
          </Link>
          <span className="mx-2">›</span>
          <span className="font-semibold">{title}</span>
        </motion.nav>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        <motion.h4
          className="text-xl md:text-2xl text-center text-green-700 mb-8 italic"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subHeading}
        </motion.h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {image && (
            <motion.img
              src={image}
              alt={`${title} image`}
              className="w-full rounded-3xl shadow-2xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              loading="lazy"
            />
          )}
          <motion.div
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {description}
          </motion.div>
        </div>

        {/* Uses Section */}
        {uses && (
          <div className="mt-12">
            <motion.h3
              className="text-2xl font-bold text-green-800 mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Commonly Used For:
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {uses.map((use, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {use.image && (
                    <img
                      src={use.image}
                      alt={use.name}
                      className="w-full h-72 object-cover rounded-md mb-2"
                      loading="lazy"
                    />
                  )}
                  <span className="text-sm font-medium text-green-800">
                    {use.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Info Link */}
        {link && (
          <div className="mt-12 text-center">
            <Link
              to={link}
              className="inline-block px-8 py-3 bg-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-900 transition duration-300"
            >
              More about {title}
            </Link>
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-900 transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
