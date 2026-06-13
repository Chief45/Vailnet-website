import logoImg from '../assets/logo.png';

/**
 * Logo — Official logo of VailNet.
 * Renders the white circle, triangle, and orbital path icon with rounded corners.
 */
const Logo = ({ size, className = "" }) => (
  <div
    className={`relative flex items-center justify-center overflow-hidden rounded-lg bg-black ${className}`}
    style={size ? { width: size, height: size } : {}}
  >
    <img
      src={logoImg}
      alt="veilNet Logo"
      className="w-full h-full object-cover"
      draggable={false}
    />
  </div>
);

export default Logo;
