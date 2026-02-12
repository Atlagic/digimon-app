import React from 'react'
import { useQuery } from '@apollo/client/react';
import { Digimon } from '../components/Digimon.jsx'
import { GET_DIGIMONS } from "../graphql/get-digimons.js";

export function DigimonsContainer() {
    const { data: { digimon = [] } = {} } = useQuery(GET_DIGIMONS);

    return (
        <div className="container">
            { digimon && digimon.map( digimon => <Digimon key={digimon.id} digimon={digimon} />)}
        </div>
    )
}
