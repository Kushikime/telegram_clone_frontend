import { ChangeEvent, FC, memo, useRef, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiSelector from '../EmojiSelector';
import SendIcon from '@mui/icons-material/Send';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import GetAppIcon from '@mui/icons-material/GetApp';
import BrushIcon from '@mui/icons-material/Brush';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


interface IChatItemProps extends BoxProps {
}

const Wrap = styled(Box)(({ theme }) => ({
    backgroundImage: `url('/assets/images/chatbg.png')`,
    backgroundColor: theme.palette.background.paper,
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const TopWrap = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '54px',
    maxHeight: '54px',
    minHeight: '54px',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'space-between'
}));

const MessagesWrap = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexGrow: 1,
}));

const BottomWrap = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 'auto',
    minHeight: '44px',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 2px',
}));


const TopLeftWrap = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    padding: '0 0 0 14px'
}));

const TopRightWrap = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '190px',
    maxWidth: '190px',
    padding: 0
}));

const ProfileName = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100%)',
    color: theme.palette.text.primary,
    fontWeight: 600
}))

const LastSeen = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: 'calc(100%)',
    color: theme.palette.text.disabled,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({}));
const AttachIconButton = styled(IconButton)(({ theme }) => ({
    transform: 'rotate(220deg)',
    zIndex: 5
}));

const MessageInput = memo(styled(TextareaAutosize)(({ theme }) => ({
    resize: 'none',
    display: 'flex',
    flexGrow: 1,
    height: 'auto',
    border: 'none',
    outline: 'none',
    fontSize: '13px',
    overflow: 'scroll',
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    "::placeholder": {
        color: theme.palette.text.disabled
    },
})));


const Chat: FC<IChatItemProps> = (props) => {
    const { children, ...restProps } = props;
    const fileUploadRef = useRef<HTMLInputElement | any>();

    const [message, setMessage] = useState('');

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const onAttachFileClick = () => {
        fileUploadRef?.current?.click();
    }

    const onEmojiClick = (emoji: any) => {
        console.log(emoji)
        setMessage(prev => prev + emoji.emoji)
    }

    const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    return (
        <Wrap>
            <TopWrap>
                <TopLeftWrap>
                    <ProfileName>P</ProfileName>
                    <LastSeen>last seen recently</LastSeen>
                </TopLeftWrap>

                <TopRightWrap>
                    <StyledIconButton>
                        <SearchIcon />
                    </StyledIconButton>
                    <StyledIconButton>
                        <CallIcon />
                    </StyledIconButton>
                    <StyledIconButton>
                        <PersonIcon />
                    </StyledIconButton>
                    <StyledIconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </StyledIconButton>
                    <Paper sx={{ maxWidth: '100%' }}>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: 200,
                                    width: 'auto'
                                },
                            }}>
                            <MenuItem>
                                <ListItemIcon>
                                    <BrushIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Change colors</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <GetAppIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Export chat history</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem sx={{ color: 'red' }}>
                                <ListItemIcon>
                                    <DeleteOutlineIcon sx={{ color: 'red' }} fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Delete chat</ListItemText>
                            </MenuItem>
                        </Menu>
                    </Paper>
                </TopRightWrap>
            </TopWrap>

            <MessagesWrap />

            <BottomWrap>
                <Box style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'flex-end',
                }}>
                    <input type='file' ref={fileUploadRef} style={{ display: 'none' }} />
                    <AttachIconButton onClick={onAttachFileClick}>
                        <AttachFileIcon />
                    </AttachIconButton>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexGrow: 1,
                    maxHeight: '200px',
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    '*': {
                        lineHeight: '20px'
                    }
                }}>
                    <MessageInput
                        value={message}
                        onChange={onInputChange}
                        aria-label="Message input"
                        placeholder="Write a message..."
                    />
                </Box>

                <Box style={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'flex-end',
                }}>
                    <EmojiSelector onEmojiClick={onEmojiClick} />
                    {
                        message ?
                            <StyledIconButton>
                                <SendIcon />
                            </StyledIconButton>
                            :
                            <StyledIconButton>
                                <MicNoneOutlinedIcon />
                            </StyledIconButton>
                    }
                </Box>
            </BottomWrap>
        </Wrap >
    )
}

export default memo(Chat);