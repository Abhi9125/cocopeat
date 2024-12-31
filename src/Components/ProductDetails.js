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

const productDetails = {
  "Coco Peat": {
    title: "Coco Peat",
    image: CocoPeatImage,
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
  "Compressed Blocks": {
    title: "Compressed Blocks",
    image: CompressedBlocksImage,
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

  if (!details) {
    return (
      <div className="p-6 text-center text-[#6B4F4F]">
        Product details not found.
      </div>
    );
  }

  const { title, image, description, uses, link } = details;

  return (
    <section className="bg-white min-h-screen">
      {/* Breadcrumb Section */}
      <div
        className="bg-cover bg-center h-44 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <motion.nav
          className="text-sm text-white font-sans pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <Link to="/product" className="hover:underline">
            Products
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <span className="font-semibold">{title}</span>
        </motion.nav>
      </div>

      {/* Product Details */}
      <div className="p-6 py-12 bg-white max-w-7xl mx-auto">
        {/* Product Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Product Image */}
          {image && (
            <motion.img
              src={image}
              alt={title}
              className="w-full md:w-1/3 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          )}
          {/* Product Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif">
              {title}
            </h2>
            <motion.p
              className="mt-4 text-lg text-[#6B4F4F] font-sans leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        {/* Product Uses */}
        {uses && (
          <div className="mt-8">
            <motion.h3
              className="text-2xl font-bold text-[#2F5233] mb-4 font-serif"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Commonly Used For:
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {uses.map((use, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white p-2 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {use.image && (
                    <img
                      src={use.image}
                      alt={use.name}
                      className="w-full h-60 object-cover rounded-lg mb-1"
                    />
                  )}
                  <span className="text-lg font-medium text-[#2F5233] font-sans">
                    {use.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Additional Info */}
        {link && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link
              to={link}
              className="text-lg font-bold text-[#2F5233] hover:underline font-serif"
            >
              More about {title}
            </Link>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetails;
