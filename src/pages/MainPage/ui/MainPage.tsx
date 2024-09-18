import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'enteties/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            {t('Главная страница')}
            <Input
                placeholder="Введите текст"
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default MainPage;
