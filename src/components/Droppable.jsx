
import React from "react";

import {useDroppable} from "@dnd-kit/core";

import { Elementone } from "../components/Elements/Elementone";
import { Elementtwo } from "../components/Elements/Elementtwo";
import { Elementthree } from "../components/Elements/Elementthree";
import { Elementfour } from "../components/Elements/Elementfour";
import { Elementfive } from "../components/Elements/Elementfive";
import { Elementsix } from "../components/Elements/Elementsix";
import { Elementseven } from "../components/Elements/Elementseven";

export const Droppable = (props) => {

    const {setNodeRef} = 
    useDroppable({id: 'droppable'});

    return (
        <div ref={setNodeRef}>
            <Elementone />
        </div>
    );
};

export default Droppable;


