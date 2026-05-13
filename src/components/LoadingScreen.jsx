import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Lädt...</p>
    </div>
  );
}
