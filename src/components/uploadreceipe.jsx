import { useState } from "react";
import "../css/uploadreceipe.css";
import axios from 'axios';

export function UploadReceipe() {
  const [formData, setFormData] = useState({
    foodname: "",
    ingredient: "",
    description: "",
    id: "",
    history: "",
    category: "",
    type: "",
    preparation: "",
  });

  const [imageData, setImageData] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleImageChange = (e) => {
    setImageData(e.target.files[0])
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("id", formData.id);
    formdata.append("foodname", formData.foodname);
    formdata.append("description", formData.description);
    formdata.append("ingredient", formData.ingredient);
    formdata.append("preparation", formData.preparation);
    formdata.append("history", formData.history);
    formdata.append("category", formData.category);
    formdata.append("type", formData.type);
    formdata.append("image", imageData);
    for (const [keys, value] of formdata) {
      console.log(keys + " " + value);
    }

   

    axios.post("https://receipe-springboot-api.up.railway.app/addReceipe", formdata).then((resolver) => {
        console.log(resolver)
    }).catch((error) => {
        console.log(error)
    })

  };

  return (
    <>
      <label for="id">Id</label>
      <br></br>
      <textarea
        id="id"
        name="id"
        value={formData.id}
        onChange={handleChange}
      ></textarea>
      <br></br>
      <br></br>
      <label for="foodname">FoodName</label>
      <br></br>
      <textarea
        id="foodname"
        name="foodname"
        value={formData.foodname}
        onChange={handleChange}
      ></textarea>
      <br></br>
      <label for="ingredient">Ingredient</label>
      <br></br>
      <textarea id="ingredient" name="ingredient" value={formData.ingredient}
        onChange={handleChange}></textarea>
      <br></br>
      <label for="description">Description</label>
      <br></br>
      <textarea id="description" name="description" value={formData.description}
        onChange={handleChange}></textarea>
      <br></br>
      <label for="history">History</label>
      <br></br>
      <textarea id="history" name="history" value={formData.history}
        onChange={handleChange}></textarea>
      <br></br>
      <label for="preparation">Preparation</label>
      <br></br>
      <textarea id="preparation" name="preparation" value={formData.preparation}
        onChange={handleChange}></textarea>
      <br></br>
      <br></br>
      <label>Type</label>
      <br></br>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="Vegetarian" id="Vegetarian">
          Vegetarian
        </option>
        <option value="Non-vegetarian" id="Non-vegetarian">
          Non-vegetarian
        </option>
      </select>
      <br></br>
      <br></br>
      <label>Category</label>
      <br></br>
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="">Select an option</option>
        <option id="Breakfast" value="Breakfast">
          Breakfast
        </option>
        <option id="Lunch" value="Lunch">
          Lunch
        </option>
        <option id="Dinner" value="Dinner">
          Dinner
        </option>
        <option id="Dessert" value="Dessert">
          Dessert
        </option>
      </select>
      <br></br>
      <br></br>
      <label for="Picture">Picture</label>
      <br></br>
      <br></br>
      <input
        onChange={handleImageChange}
        type="file"
        accept="image/*"
      ></input>
      <br></br>
      <br></br>
      <button onClick={handlesubmit}>Click Now</button>
    </>
  );
}
