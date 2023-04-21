import React, { FC } from 'react';
import { SyncOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface UpdateButtonProps {
    onClick: () => void
    loading?: boolean
    title?: string
}

const UpdateButton: FC<UpdateButtonProps> = ({ onClick, loading, title }) => {
    return (
        <Button
            type='primary'
            shape='round'
            icon={<SyncOutlined />}
            onClick={onClick}
            size='middle'
            loading={loading}
            data-testid='button'
            >
            {title ?? 'Update'}
        </Button>
    );
};

export default UpdateButton;
