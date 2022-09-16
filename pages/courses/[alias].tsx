import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { withLayout } from '../../layout/layout.component';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
  page: TopPageModel,
  products: ProductModel[],
}

const FIRST_CATEGORY = 0;

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory: FIRST_CATEGORY,
    });


    return {
        paths: menu.flatMap(({ pages }) => pages.map(({ alias }) => '/courses/' + alias)),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound: true,
        };
    }

    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory: FIRST_CATEGORY,
    });

    const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/', {
        category: page.category,
        limit: 10,
    });

    return {
        props: {
            menu,
            page,
            products,
            firstCategory: FIRST_CATEGORY,
        }
    };
};

function Course({ menu, products }: CourseProps): JSX.Element {
    const [rating, setRating] = useState(0);

    return (
        <>
            {products.length}
        </>
    );
}

export default withLayout(Course);
