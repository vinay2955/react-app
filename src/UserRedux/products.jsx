import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import displayProducts from "./displayProductsAC";
function Prodcuts() {
  const state = useSelector((state) => {
    return state.productReducer;
  });
  const [productname, setProductName] = useState("");
  const [productid, setProductId] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ border: "solid 2px", padding: "5px" }}>
      <b>Prodcuts Lists</b>
      {state &&
        state.products &&
        state.products.map((product) => {
          return (
            <div style={{ border: "solid 1px", padding: "5px", margin: "5px" }}>
              <p>Name:{product.productname}</p>
              <p>ID:{product.productid}</p>
            </div>
          );
        })}
      <div style={{ border: "solid 2px", padding: "5px", margin: "15px" }}>
        <b>ADD Prducts</b>
        <table>
          <tr>
            <td>
              <input
                type="text"
                value={productname}
                placeholder="enter Productname"
                onChange={(e) => setProductName(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={productid}
                placeholder="enter id"
                onChange={(e) => setProductId(e.target.value)}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() =>
                  dispatch(
                    displayProducts({
                      productname,
                      productid,
                    })
                  )
                }
              >
                <b>Add Prodcuts</b>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Prodcuts;
