import { createSlice } from "@reduxjs/toolkit";
import bag1 from "../../assests/arno-senoner-oCXVxwTFwqE-unsplash.jpg";
import shirt2 from "../../assests/benjamin-r-KF-q_SGqswg-unsplash.jpg";
import shoe1 from "../../assests/camila-damasio-mWYhrOiAgmA-unsplash.jpg";
import shoe2 from "../../assests/domino-164_6wVEHfI-unsplash.jpg";
import shirt1 from "../../assests/haryo-setyadi-acn5ERAeSb4-unsplash.jpg";
import shoe3 from "../../assests/martin-katler-Y4fKN-RlMV4-unsplash.jpg";
import shirt3 from "../../assests/md-salman-tWOz2_EK5EQ-unsplash.jpg";
import shoe4 from "../../assests/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg";
const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      title: "sneaker shoe",
      description: "Wear this for a casual wear",
      price: "60$",
      imageSrc: shoe1,
      imageAlt: "shoes",
    },
    {
      id: 2,
      title: "sports shoe",
      description: "Wear and do the sport in charm",
      price: "100$",
      imageSrc: shoe2,
      imageAlt: "sports shoe",
    },
    {
      id: 3,
      title: "super sneak",
      description: "just feel like smooth",
      price: "40$",
      imageSrc: shoe3,
      imageAlt: "shoe",
    },
    {
      id: 4,
      title: "stylish warm boot",
      description: "Richer look than it appears",
      price: "80$",
      imageSrc: shoe4,
      imageAlt: "shoe",
    },
    {
      id: 5,
      title: "Whity sweatshirt",
      description: "Super cool",
      price: "20$",
      imageSrc: shirt1,
      imageAlt: "t-shirt",
    },
    {
      id: 6,
      title: "light blue formal cheques shirt",
      description: "office wear",
      price: "200$",
      imageSrc: shirt2,
      imageAlt: "formal-shirt",
    },
    {
      id: 7,
      title: "combo t-shirts",
      description: "buy bulk with  more quality",
      price: "150$",
      imageSrc: shirt3,
      imageAlt: "bulk-t-shirts",
    },
    {
      id: 8,
      title: "Orange purse",
      description: "Carry with comfort",
      price: "250$",
      imageSrc: bag1,
      imageAlt: "HandBag",
    },
  ],
  reducers: {},
});

export default productsSlice.reducer;
