import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }
        return (
            <VStack
                gap="8"
                className={classNames('', {}, [className])}
                data-testid="ArticleRecommendationsList"
            >
                <Text size={TextSize.L} title={t('Рекоммендуем')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
