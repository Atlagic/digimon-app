import React from 'react'

export function Digimon({ digimon }) {
    const truncateDescription = (text, maxLength = 400) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="digimon">
            <div className="digimon__name">
                <p>{digimon.name}</p>
            </div>
            <div className="digimon__meta">
                <span>{digimon.level}</span>
                <span>{digimon.types?.join(', ')}</span>
            </div>
            <div className="digimon__image">
                <img src={digimon.img} alt={digimon.name} />
            </div>
            <div className="digimon__description">
                <p>{truncateDescription(digimon.description, 400)}</p>
            </div>

            {digimon.digivolutions && digimon.digivolutions.length > 0 && (
                <div className="digimon__evolutions">
                    <h4>Digivolves to:</h4>
                    <div className="evolution-list">
                        {digimon.digivolutions.map(evo => (
                            <div key={evo.id} className="evolution-item">
                                <img src={evo.img} alt={evo.name} />
                                <span>{evo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
