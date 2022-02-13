import { getByTitle } from "@testing-library/react";
import React from "react";
import './preview-collection.styless.scss';

import CollectionItem from "../collection-item/collection-item";

const PreviewCollection = ({title, items})=>(
    <div className="collection-preview" >
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">

            {
                items.filter((item, idx) => idx < 4).map( ({id, ...otherItemProps}) => (
                    // <div  key={item.id}>{item.name}</div>
                    <CollectionItem  key={id}{...otherItemProps}/>
                ))
            }
            
        </div>
    </div>
);

export default PreviewCollection;