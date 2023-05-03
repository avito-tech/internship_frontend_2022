import React, { FC, useCallback } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { Routes } from '../../utils/routes';

export const BackButton: FC = () => {
    const history = useHistory();

    const onClick = useCallback(() => {
        history.push(Routes.MAIN);
    }, []);

    return (
        <Button onClick={onClick} type='primary' size='large' icon={<ArrowLeftOutlined />}>
            Back to news
        </Button>
    );
};
