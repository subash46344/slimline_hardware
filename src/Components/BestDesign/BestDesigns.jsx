import React, { useState } from "react";
import Bestcard from "./Bestcard";
import "./bestdesign.css";
function BestDesigns() {
  const [selectedCategory, setSelectedCategory] = useState("BASKETS");

  // Function to handle button click
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section className="best_design_main_block">
        {/* cantainer block */}
        <div className="heading_content_best_design_main_block">
          <h1>Best Designs</h1>
          <p>
            The beauty of this unit lies in the multi functional characteristics
            of the product that gives you so many different options to make the
            best use of it, be it your kitchen, living room, dining room, bed
            room or virtually any place at your home.
          </p>
          <hr
            style={{
              width: "47px",
              height: "4px",
              margin: "0px auto 70px",
              backgroundColor: "#bc2e36",
              borderRadius: "4px",
            }}
          />
        </div>
        {/* button block */}
        <div className="button_container_block">
          <button
            className={selectedCategory === "BASKETS" ? "active" : ""}
            onClick={() => handleCategoryChange("BASKETS")}
          >
            Baskets
          </button>
          <button
            className={selectedCategory === "KITCHEN DELIGHTS" ? "active" : ""}
            onClick={() => handleCategoryChange("KITCHEN DELIGHTS")}
          >
            KITCHEN DELIGHTS
          </button>
          <button
            className={selectedCategory === "MULTIUSE BASKETS" ? "active" : ""}
            onClick={() => handleCategoryChange("MULTIUSE BASKETS")}
          >
            MULTIUSE BASKETS
          </button>
          <button
            className={selectedCategory === "CORNER SOLUTIONS" ? "active" : ""}
            onClick={() => handleCategoryChange("CORNER SOLUTIONS")}
          >
            CORNER SOLUTIONS
          </button>
        </div>
        <Bestcard category={selectedCategory} />
      </section>
    </>
  );
}

export default BestDesigns;
