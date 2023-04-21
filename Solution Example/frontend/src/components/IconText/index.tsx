import React, { FC } from 'react';
import { Space } from 'antd';

interface IconTextProps {
    icon: React.FC
    text: string
}

const IconText: FC<IconTextProps> = ({ icon, text }) => (
    <Space data-testid='iconText'>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default IconText;
