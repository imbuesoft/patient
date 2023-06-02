import React, { useState } from 'react'
import SidebarFilter from '../MedicineComponent/SidebarFilter'
import './Medicine.css'
import ItemCard from '../MedicineComponent/ItemCard'
import CategoryCard from '../MedicineComponent/CategoryCard'
import CatData from "./CatData.json";
import Sidebar from '../MedicineComponent/Sidebar/Sidebar'
import MedicinesSearch from '../MedicineComponent/SearchBar/MedicinesSearch'
import Offer from '../MedicineComponent/Offer/Offer'

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
            <MedicinesSearch />
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h2>Category</h2>
                        <SidebarFilter categories={uniqueCats} setCategory={setCategory} category={category} />
                        <Sidebar />
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

                    <Offer />
                </div>
            </div>
        </>
    )
}

export default Medicine;