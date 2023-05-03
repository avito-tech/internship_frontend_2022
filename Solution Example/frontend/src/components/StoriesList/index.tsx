import React, { FC } from 'react';
import { List } from 'antd';
import { CalendarOutlined, CommentOutlined, RiseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Story } from '../../types';
import IconText from '../IconText';
import { formatDate } from '../../utils/formatDate';

interface StoriesListProps {
    data: Story[]
    loading: boolean
};

const StoriesList: FC<StoriesListProps> = ({ data, loading }) => {
    return (
        <List
            itemLayout='vertical'
            dataSource={data}
            size='small'
            loading={loading}
            renderItem={(item) => (
            <List.Item
                key={item.id}
                actions={[
                <IconText
                    icon={RiseOutlined}
                    text={item?.score?.toString() || ''}
                    key='list-rating'
                />,
                <IconText icon={CalendarOutlined} text={formatDate(item.time)} key='list-date' />,
                <IconText
                    icon={CommentOutlined}
                    text={item?.descendants?.toString() || ''}
                    key='list-comments'
                />,
                ]}
            >
                <List.Item.Meta
                title={<Link to={`/story/${item.id}`}>{item.title}</Link>}
                description={item.by}
                />
            </List.Item>
            )}
        />
    );
};

export default StoriesList;
