import React, { FC, useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Comment, Spin, Tree, TreeNodeProps } from 'antd';
import useTypedSelector from '../../utils/hooks/useTypedSelector';
import { CommentDisplayed } from '../../types';
import { getComment, updateComments } from '../../store/actions';
import useAppDispatch from '../../utils/hooks/useAppDispatch';
import UpdateButton from '../UpdateButton';
import { formatDate } from '../../utils/formatDate';

export const CommentsTree: FC = () => {
    const loading = useTypedSelector((state) => state.commentsLoading);
    const comments = useTypedSelector((state) => state.rootComments);
    const dispatch = useAppDispatch();

    const getChildren = (kids: number[], children: CommentDisplayed[]) => {
        if (children.length !== 0) {
            return formatComments(children);
        }

        if (kids.length !== 0) {
            return [{ title: <Spin />, key: 'key', isLeaf: true }];
        }

        return [];
    };

    const formatComments = useCallback(
        (comments: CommentDisplayed[]): TreeNodeProps[] =>
            comments.map((item) => {
                const child = getChildren(item?.kids ?? [], item?.children ?? []);

                return {
                    title: (
                        <Comment
                        content={item.text}
                        author={item.by}
                        avatar={<Avatar src='https://joeschmoe.io/api/v1/random' alt='avatar' />}
                        datetime={formatDate(item.time)}
                        />
                    ),
                    key: item.id,
                    ...{ ...(child.length != 0 ? { children: child } : {}) },
                };
            }),
        [],
    );
    const [selectedKeys, setSelectedKeys] = useState([]);

    const treeData = useMemo(() => {
        return formatComments(comments ?? []);
    }, [comments]);

    const onExpand = useCallback((expandedKeys) => {
        setSelectedKeys(expandedKeys);
        dispatch(getComment(expandedKeys[expandedKeys.length - 1]?.toString()));
    }, []);

    const { id } = useParams<{ id: string }>();

    const onUpdateClick = useCallback(() => {
        dispatch(updateComments(id));
        setSelectedKeys([]);
    }, []);

    return (
        <>
            <div>
                <UpdateButton onClick={onUpdateClick} loading={loading} title='Update comments' />
            </div>
            <br />
            <Tree treeData={treeData} onExpand={onExpand} showLine expandedKeys={selectedKeys} />
        </>
    );
};
