import React from 'react';
import html2canvas from 'html2canvas';
import { useTracker } from './hooks/useTracker';
import TrackerTable from './components/TrackerTable';

function App() {
  const { regions, updateCount, resetData } = useTracker();

  // Calculate total progress
  const totalChest = regions.reduce((acc, r) => acc + (r.chest || 0), 0);
  const currentTotalChest = regions.reduce((acc, r) => acc + (r.currentChest || 0), 0);
  const totalProgress = totalChest > 0 ? (currentTotalChest / totalChest) * 100 : 0;

  const handleSaveImage = async () => {
    const element = document.getElementById('capture-target');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: '#1a1a2e', // Match body background
        ignoreElements: (node) => {
          return node.classList.contains('no-capture');
        }
      });

      const link = document.createElement('a');
      link.download = `genshin-treasure-tracker-${new Date().toISOString().split('T')[0]}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Image save failed:', error);
      alert('画像の保存に失敗しました。');
    }
  };

  return (
    <div className="app-container" id="capture-target">
      <header>
        <h1>原神 宝箱チェッカー</h1>
        <div className="header-stats">
          <span>総宝箱取得率: {totalProgress.toFixed(2)}%</span>
          <div className="button-group no-capture">
            <button onClick={handleSaveImage} className="save-btn">画像保存</button>
            <button onClick={resetData} className="reset-btn">リセット</button>
          </div>
        </div>
      </header>
      <main>
        <TrackerTable regions={regions} updateCount={updateCount} />
      </main>
      <footer>
        <p>Created by Antigravity</p>
      </footer>
    </div>
  );
}

export default App;
