import { useContext } from 'react';
import classNames from 'classnames';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

import CoursesIcon from './icons/courses.svg';
import ServisesIcon from './icons/servises.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import styles from './menu.module.css';
import pages from '../../pages';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
    { route: 'servises', name: 'Сервисы', icon: <ServisesIcon/>, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);

    const buildFirstLevel = (): JSX.Element => {
        return (
            <>
                {firstLevelMenu.map((firstLevelMenuItem) => (
                    <div key={firstLevelMenuItem.id}>
                        <a href={`/${firstLevelMenuItem.route}`}>
                            <div className={classNames(styles.firstLevel, {
                                [styles.firstLevelActive]: firstLevelMenuItem.id === firstCategory
                            })}>
                                {firstLevelMenuItem.icon}
                                <span>{firstLevelMenuItem.name}</span>
                            </div>
                        </a>

                        {firstLevelMenuItem.id === firstCategory && buildSecondLevel(firstLevelMenuItem)}
                    </div>
                ))}
            </>
        )
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
        return (
            <div>
                { menu.map(({ _id, isOpened, pages }) => (
                    <div key={_id.secondCategory}>
                        <div className={classNames(styles.secondLevel)}>
                            {_id.secondCategory}
                        </div>

                        <div className={classNames(styles.thirdLevel, {
                            [styles.secondLevelOpened]: isOpened
                        })}>
                            {buildThirdLevel(pages, menuItem.route)}
                        </div>
                    </div>
                )) }
            </div>
        )
    };

    const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
        return (
            <>
                {pages.map(({ alias, category, _id }) => (
                    <a key={_id} href={`/${route}/${alias}`} className={classNames(styles.thirdLevel, {
                        [styles.thirdLevelActive]: true,
                    })}>
                        {category}
                    </a>
                ))}
            </>
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};