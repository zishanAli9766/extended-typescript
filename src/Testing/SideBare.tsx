import React from "react";

export const SideBare = ({items}:{items : {
name : string;
href : string ;
}[]}) =>(
    <div>
{items.map((item)=>(
    <div key={item.href}>
        <a role='navigation' href={item.href}>
            {item.name}
        </a>
    </div>
))}
    </div>
)