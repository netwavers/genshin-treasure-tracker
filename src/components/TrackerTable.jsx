import React from 'react';

const TrackerTable = ({ regions, updateCount }) => {
    const renderCell = (region, type, max, current) => {
        if (max === null) return <td className="disabled">-</td>;

        const remaining = max - current;
        const progress = Math.min(100, (current / max) * 100);
        const isComplete = remaining <= 0;

        return (
            <td>
                <div className="cell-content">
                    <div className="input-group">
                        <input
                            type="number"
                            value={current}
                            onChange={(e) => updateCount(region.id, `current${type}`, e.target.value)}
                            className={isComplete ? 'complete' : ''}
                        />
                        <span className="separator">/</span>
                        <span className="max">{max}</span>
                    </div>
                    <div className="stats">
                        <span className={`remaining ${remaining <= 0 ? 'done' : ''}`}>
                            残: {remaining > 0 ? remaining : 0}
                        </span>
                        <span className="percentage">{progress.toFixed(1)}%</span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%`, backgroundColor: isComplete ? '#4ade80' : '#60a5fa' }}
                        />
                    </div>
                </div>
            </td>
        );
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>エリア名</th>
                        <th>宝箱</th>
                        <th>仙霊</th>
                        <th>雷霊</th>
                        <th>時間制限挑戦</th>
                    </tr>
                </thead>
                <tbody>
                    {regions.map(region => (
                        <tr key={region.id}>
                            <td className="region-name">{region.name}</td>
                            {renderCell(region, 'Chest', region.chest, region.currentChest)}
                            {renderCell(region, 'Seelie', region.seelie, region.currentSeelie)}
                            {renderCell(region, 'Electro', region.electro, region.currentElectro)}
                            {renderCell(region, 'Time', region.time, region.currentTime)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrackerTable;
