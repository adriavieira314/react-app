import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';

const Products = () => {
  const { user } = useGlobalContext();

  return <p>Produtos ({user?.name})</p>;
};

export default Products;
