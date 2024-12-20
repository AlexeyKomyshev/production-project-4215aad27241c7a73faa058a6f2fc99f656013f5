import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { view, onChangeView } = useArticleFilters();

        return (
            <div>
                <ArticleViewSelector
                    className={className}
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
        );
    },
);

// 136/20
