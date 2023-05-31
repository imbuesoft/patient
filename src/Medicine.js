import React, { useState } from 'react'
import SidebarFilter from './MedicineComponent/SidebarFilter'
import './Medicine.css'
import ItemCard from './MedicineComponent/ItemCard'
import CategoryCard from './MedicineComponent/CategoryCard'
import CatData from "./CatData.json";

const Medicine = () => {
    const [category, setCategory] = useState("Eye & Ear Care");
    const categories = CatData.map((c) => c.category);
    let uniqueCats = categories.filter((c, i) => categories.indexOf(c) === i);
    //console.log(uniqueCats);

    const medicine_items = CatData.filter(function (item) {
        return item.category === category;
    });

    console.log(medicine_items);

    return (
        <>
            <div className="container">
                <h2>Category</h2>
                <div className="row">
                    <div className="col-md-2">
                        <SidebarFilter categories={uniqueCats} setCategory={setCategory} category={category} />
                    </div>
                    <div className="col-md-10">
                        <div className="row mb-5">
                            {
                                [1, 2, 3, 4, 5, 6].map((item, index) => {
                                    return (
                                        <CategoryCard key={index} />
                                    )
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                medicine_items.map((item, index) => {
                                    return (
                                        <ItemCard key={index} discount={"10%"} path={item.path} title={item.title} company={"medipract pvt ltd"} price={item.price} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Medicine