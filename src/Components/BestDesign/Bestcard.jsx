import React, { useState, useEffect } from "react";
import { Link as LinkIcon } from "@mui/icons-material";
import data from "./data";
import ImageFullPopup from "./ImageFullPopup";

const Bestcard = ({ category }) => {
  const items = data[category] || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [popupImage, setPopupImage] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Default to desktop view

  // Function to update items per page based on window width
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width <= 600) {
      setItemsPerPage(2); // Mobile view
    } else if (width <= 900) {
      setItemsPerPage(4); // Tablet view
    } else {
      setItemsPerPage(8); // Desktop view
    }
  };

  useEffect(() => {
    updateItemsPerPage(); // Set the initial value

    // Add event listener for window resize
    window.addEventListener("resize", updateItemsPerPage);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to open the popup
  const openPopup = (index) => {
    setPopupImage(index);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
      <div className="best_card_main_block">
        {currentItems.map((item, index) => (
          <div key={index} className="card_block_best">
            <img src={item.image} alt={item.title} />
            <div className="hover_main_block_best">
              <div className="hover_sub_block_best">
                <div className="icon_block_hover">
                    <LinkIcon 
                    onClick={() => openPopup(index)} 
                    style={{ cursor: "pointer", fontSize: "1rem" }} 
                  />
                </div>
                <div className="content_block">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render pagination controls only if there are more than one page */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* Popup Component Call */}
      {popupImage && (
        <ImageFullPopup
          imageUrl={popupImage}
          onClose={closePopup}
          category={category}
        />
      )}
    </>
  );
};

export default Bestcard;
