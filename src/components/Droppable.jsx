
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

    const {setNodeRef} = useDroppable({id: 'unique-id'});

    return (

        <>

        <div ref={setNodeRef}>
            <Elementone > </Elementone>
        </div>

        <div ref={setNodeRef}>
            <Elementtwo > </Elementtwo>
        </div>

        <div ref={setNodeRef}>
            <Elementthree > </Elementthree>
        </div>

        <div ref={setNodeRef}>
        <Elementfour > </Elementfour>
        </div>

        <div ref={setNodeRef}>
            <Elementfive> </Elementfive>
        </div>

        <div ref={setNodeRef}>
            <Elementsix > </Elementsix>
        </div>

        <div ref={setNodeRef}>
            <Elementseven > </Elementseven>
        </div>
    </>
    );
};

export default Droppable;


