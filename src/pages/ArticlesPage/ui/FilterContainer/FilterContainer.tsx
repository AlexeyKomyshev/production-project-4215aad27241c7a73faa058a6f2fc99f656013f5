import { memo } from 'react';
import { ArticleFilters } from '@/widgets/ArticleFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FilterContainerProps {
    className?: string;
}

export const FilterContainer = memo((props: FilterContainerProps) => {
    const { className } = props;

    const {
        order,
        sort,
        search,
        type,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    } = useArticleFilters();

    return (
        <ArticleFilters
            className={className}
            order={order}
            sort={sort}
            search={search}
            type={type}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
        />
    );
});
