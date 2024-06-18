import "../../assets/styles/products.css";
export const Products = () => {
  return (
    <div className="container products">
      <div className="row">
        <div className="col-12 d-flex me-2">
          <div className="work-management me-2">
            <button className="btn btn-transparent prod">Products</button>
          </div>
          <div className="crm me-2">
            <button className="btn btn-transparent team">Teams</button>
          </div>
          <div className="dev me-2">
            <button className="btn btn-transparent plat">Platform</button>
          </div>
          <div className="service me-5">
            <button className="btn btn-transparent resour">Resources</button>
          </div>
        </div>
      </div>
    </div>
  );
};
