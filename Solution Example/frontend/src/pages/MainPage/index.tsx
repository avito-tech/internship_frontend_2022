import React, { FC, useCallback, useEffect, useState } from 'react';
import { Typography } from 'antd';
import UpdateButton from '../../components/UpdateButton';
import StoriesList from '../../components/StoriesList';
import useTypedSelector from '../../utils/hooks/useTypedSelector';
import { getStories } from '../../store/actions';
import useAppDispatch from '../../utils/hooks/useAppDispatch';
import './index.css';

const { Title } = Typography;

const AUTO_UPDATE_IN_SECONDS = 60 * 1000;

const MainPage: FC = () => {
    const stories = useTypedSelector((state) => state.stories);
    const loading = useTypedSelector((state) => state.loading);

    const [lastUpdateTime, setLastUpdateTime] = useState<string>();
    const dispatch = useAppDispatch();

    const updateStories = useCallback(() => {
        dispatch(getStories());

        const now = new Date().toLocaleString();
        setLastUpdateTime(now);
    }, []);

    useEffect(() => {
        updateStories();

        const now = new Date().toLocaleString();
        setLastUpdateTime(now);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
                updateStories();
                const now = new Date().toLocaleString();
                setLastUpdateTime(now);
            },
            AUTO_UPDATE_IN_SECONDS);

            return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Title>
                Hacker News
            </Title>
            <p>
                Last update: {lastUpdateTime}
            </p>
            <UpdateButton onClick={updateStories} title='Update stories' />
            <StoriesList data={stories} loading={loading} />
        </>
    );
};

export default MainPage;