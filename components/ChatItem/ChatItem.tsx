import { FC, useState, useRef } from 'react';

import { Resizable } from "re-resizable";
import Image from 'next/image';
import { capitalizeName, stringAvatar } from '../../utility';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

interface IChatItemProps extends BoxProps {
    name: string;
    image?: string;
    count?: number;
    date: string;
    lastMessage: string;
    // lastMessage or messages[last]
}

const Wrap = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: '62px',
    minWidth: '62px',
    maxHeight: '62px',
    minHeight: '62px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.palette.mode === 'dark' ? '#2c3d4eb8' : '#edecec'
    }
}))

const ProfileImg = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '66px',
    minWidth: '66px'
}))

const ChatContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    height: '100%',
    boxSizing: 'border-box',
    padding: '10px 0 0',
    overflow: 'hidden'
}))

const ProfileName = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100%)',
    color: theme.palette.text.primary
}))

const MessageDate = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
    color: theme.palette.text.disabled,
}))

const LastMessage = styled(Typography)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.disabled,
    fontSize: '13px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100%)',
    padding: '0 10px 0 0',
    margin: '6px 0 0'
}))

//date
//if today show time like 16:09
//if yesterday+ show date like 12.08.2020

const ChatItem: FC<IChatItemProps> = (props) => {
    const { children, image, name, date, lastMessage, ...restProps } = props;

    return (
        <Wrap>
            <ProfileImg>
                <Avatar alt={`${name}_profile_Image`} src={image} {...stringAvatar(name)} />
            </ProfileImg>
            <ChatContent>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 10px 0 0',
                }}>
                    <ProfileName>{capitalizeName(name)}</ProfileName>
                    <MessageDate>{date}</MessageDate>
                </Box>
                <LastMessage>{lastMessage}</LastMessage>
            </ChatContent>
        </Wrap>
    )
}

export default ChatItem;