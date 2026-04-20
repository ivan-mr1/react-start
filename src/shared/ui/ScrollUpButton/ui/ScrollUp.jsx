import { useScrollProgress } from '../lib/useScrollProgress';
import './ScrollUp.scss';

const PATH_LENGTH = 150.8;

export const ScrollUp = ({ offset = 300, maxWidth = 2000 }) => {
  const { isActive, dashOffset } = useScrollProgress(offset, maxWidth, PATH_LENGTH);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-up ${isActive ? 'scroll-up--active' : ''}`}
      aria-label="scroll to top"
      title="scroll to top"
      onClick={scrollToTop}
    >
      <svg className="scroll-up__svg" viewBox="-2 -2 52 52">
        <path
          className="scroll-up__path"
          d="M 24,0 a24,24 0 0,1 0,48 a24,24 0 0,1 0,-48"
          style={{
            strokeDasharray: `${PATH_LENGTH} ${PATH_LENGTH}`,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
    </button>
  );
};
