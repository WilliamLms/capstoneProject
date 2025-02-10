import React from "react";
import { useParams } from "react-router-dom";

const Shoppingcart = () => {
  return (
    <div>
      <h1>Your Cart</h1>
      {/* Add cart code here */function AddtoCart() {
    var len = $("#Items tr").length, $row, $inp1, $inp2, $cells;
  
    $row = $("#Items td:first").clone(true);
    $cells = $row.find("td");
  
    $cells.get(0).html( len );
  
    $inp1 = $cells.get(1).find("input:first");
    $inp1.attr("id", $inp1.attr("id") + len).val("");
  
    $inp2 = $cells.get(2).find("input:first");
    $inp2.attr("id", $inp2.attr("id") + len).val("");
  
    $("#Items").append($row);
      }
      }
    </div>
  );
};

export default Shoppingcart;
