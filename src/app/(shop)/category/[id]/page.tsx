import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default function({ params }: Props) {

  const { id } = params;
  const products = seedProducts.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    'prestamos': '¡Impulsa tu negocio con el crédito que necesitas!',
    'ahorros': '¡Ahorra para alcanzar tus metas personales y familiares!',
    'educafinan': '¡Toma decisiones financieras informadas y responsables!',
    'digital': '¡Descubre las ventajas de simplificar tus finanzas!'
  }

  //if ( id === 'educafinan' ) {
    //notFound();
  //}


  return (
    <>
    <Title
      title={`${(labels)[id]}`}
      subtitle="Soluciones financieras"
      className="mb-2"
    />

    <ProductGrid 
      products={ products }
    />
    
  </>
  );
}