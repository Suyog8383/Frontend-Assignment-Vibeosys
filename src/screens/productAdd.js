/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../action/action";
import { useNavigate } from "react-router";

const ProductAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [rawMaterials, setRawMaterials] = useState([
    { material: "", quantity: 1, unitPrice: 0 },
  ]);
  const [tax, setTax] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const calculateTotalAndTax = () => {
    let totalCost = 0;
    rawMaterials.forEach((item) => {
      totalCost += item.quantity * item.unitPrice;
    });
    const calculatedTax = totalCost * 0.1;
    setSubTotal(totalCost);
    setTax(calculatedTax);
  };

  const handleMaterialChange = (index, field, value) => {
    const updatedMaterials = [...rawMaterials];
    updatedMaterials[index][field] = value;
    setRawMaterials(updatedMaterials);
    calculateTotalAndTax();
  };

  const addNewMaterial = () => {
    setRawMaterials([
      ...rawMaterials,
      { material: "", quantity: 1, unitPrice: 0 },
    ]);
  };

  useEffect(() => {
    calculateTotalAndTax();
  }, [rawMaterials]);

  const handleSaveProduct = () => {
    const newProduct = {
      name,
      category,
      rawMaterials,
      totalCost: subTotal + tax,
      rawMaterialsRequired: rawMaterials.length,
    };
    console.log("@SN ", newProduct);
    dispatch(addProduct(newProduct));
    navigate("/");
  };

  return (
    <div>
      <h1>{"Add New Product"}</h1>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
      </div>

      <h3>Materials</h3>
      {rawMaterials.map((item, index) => (
        <div key={index}>
          <label>Material {index + 1}:</label>
          <input
            type="text"
            value={item.material}
            onChange={(e) =>
              handleMaterialChange(index, "material", e.target.value)
            }
            placeholder="Enter material name"
          />
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleMaterialChange(index, "quantity", parseInt(e.target.value))
            }
            placeholder="Quantity"
          />
          <input
            type="number"
            value={item.unitPrice}
            onChange={(e) =>
              handleMaterialChange(
                index,
                "unitPrice",
                parseFloat(e.target.value)
              )
            }
            placeholder="Unit Price"
          />
        </div>
      ))}

      <button onClick={addNewMaterial}>Add more material</button>

      <p>calculation</p>
      <p>Sub Total == {subTotal.toFixed(2)}</p>
      <p>Tax=={tax.toFixed(2)}</p>
      <p>Total Cost == {(subTotal + tax).toFixed(2)}</p>

      <button onClick={handleSaveProduct}>Save Product</button>
    </div>
  );
};

export default ProductAdd;
