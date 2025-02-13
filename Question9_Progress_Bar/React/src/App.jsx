import ProgressBar from './ProgressBar'
export default function App() {
  return (
    <div>
      <ProgressBar percent={20} />
      <ProgressBar percent={100} />
      <ProgressBar percent={-10} />
      <ProgressBar percent={30} />
      <ProgressBar percent={300} />
    </div>
  );
}
