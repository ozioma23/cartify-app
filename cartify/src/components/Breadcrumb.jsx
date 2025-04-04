import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(part => part);

  const getPathName = (path) => {
    switch(path) {
      case 'buy':
        return 'Buy';
      case 'cart':
        return 'Cart';
      case 'checkout':
        return 'Checkout';
      case 'deliveryPage':
        return 'Delivery';
      default:
        return 'Home';
    }
  };

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathParts.map((part, index) => {
        const path = '/' + pathParts.slice(0, index + 1).join('/');
        return (
          <span key={index}>
            {' → '}
            {index === pathParts.length - 1 ? (
              getPathName(part) // Display the last item without a link
            ) : (
              <Link to={path}>{getPathName(part)}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;