import React, { FC } from 'react';
import { Typography } from 'antd';
import { BackButton } from '../../components/BackButton';
import './index.css';

const { Title } = Typography;

const StoryPage: FC = () => {
    return (
        <>
            <Title>
                Hacker News
            </Title>
            <div className='content'>
                Такой страницы не существует
            </div>
            <BackButton />
        </>
    );
};

export default StoryPage;
