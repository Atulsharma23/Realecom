import React from "react";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="card border-0 shadow ">
        <h3>Category</h3>
        <div className="catList">
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Milk & Dairies</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg"
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Clothing</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              30
            </span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="	https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg"
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Pet Foods</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              44
            </span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="	https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg
                "
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Baking Material</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              23
            </span>
          </div>
          <div className="catItem d-flex align-items-center">
            <span className="img">
              <img
                src="	https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg
                "
                width={30}
                alt="img"
              />
            </span>
            <h4 className="mb-0 ml-3 mr-3">Fresh Fruit</h4>
            <span className="number d-flex align-items-center justify-content-center rounded-circle ml-auto">
              35
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
