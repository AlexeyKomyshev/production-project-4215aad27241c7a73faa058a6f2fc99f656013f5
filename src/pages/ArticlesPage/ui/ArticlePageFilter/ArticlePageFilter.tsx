import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticlePageFilter.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlePageFilterProps {
    className?: string;
}

export const ArticlePageFilter = memo((props: ArticlePageFilterProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
        view,
        order,
        sort,
        search,
        type,
        onChangeView,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    } = useArticleFilters();

    return (
        <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
