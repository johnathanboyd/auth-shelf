import React, { useState } from 'react';

function ShelfPage() {
  const [ objectToSend, setObjectToSend] = useState({});
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>Add an Item to the Shelf</p>
      <label>Description</label>
      <input type="text"></input>
      <label>Image Url</label>
      <input type="text"></input>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
