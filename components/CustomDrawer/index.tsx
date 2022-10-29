import { FC, PropsWithChildren, useState } from 'react';

import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Image from 'next/image';

import GroupIcon from '@mui/icons-material/Group';
import CampaignIcon from '@mui/icons-material/Campaign';
import ContactsIcon from '@mui/icons-material/Contacts';
import CallIcon from '@mui/icons-material/Call';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { useDispatch } from 'react-redux';
import { toggleDrawer, toggleNightMode } from '../../store/reducers/appReducer';
import { useAppSelector } from '../../store';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';

interface ICustomDrawerProps { }

const menuItems = [
    {
        title: 'New group',
        image: <GroupIcon sx={{ width: '17px' }} />,
        color: '#56b3f5'
    },
    {
        title: 'New Channel',
        image: <CampaignIcon sx={{ width: '17px' }} />,
        color: '#ed9f20'
    },
    {
        title: 'Contacts',
        image: <ContactsIcon sx={{ width: '17px' }} />,
        color: '#f06964'
    },
    {
        title: 'Calls',
        image: <CallIcon sx={{ width: '17px' }} />,
        color: '#6dc534'
    },
    {
        title: 'Saved Messages',
        image: <BookmarkIcon sx={{ width: '17px' }} />,
        color: '#56b3f5'
    },
    {
        title: 'Settings',
        image: <SettingsIcon sx={{ width: '17px' }} />,
        color: '#b580e2'
    }
];


const StyledSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#4b7db2 !important' : '#8a8a8a !important',
        opacity: 1,
        height: '13px'
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#17212b !important' : '#fff !important',
        border: `2px solid ${theme.palette.mode === 'dark' ? '#4b7db2 !important' : '#8a8a8a !important'}`,
        opacity: 1,
        height: '18px',
        width: '18px'
    }
}));

const MenuContent: FC<PropsWithChildren> = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const nightmode = useAppSelector(state => state.app.nightmode);

    const handleNightMode = () => {
        dispatch(toggleNightMode())
    }

    return (
        <Box
            sx={{ width: 250, height: '100%', overflow: 'hidden', backgroundColor: theme.palette.background.default }}
            role="presentation"
        >
            <List sx={{ minHeight: '120px', maxHeight: '120x' }} disablePadding>
                <Box sx={{ pl: '24px', pt: '20px' }}>
                    <Image src='/assets/images/profile.png' width="44px" height="44px" style={{ backgroundColor: 'black', borderRadius: '50%', }} />
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, padding: '0', margin: '10px 0' }}>Erik Demchak</Typography>
                </Box>
            </List>
            <Divider />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: 'calc(100% - 120px)', justifyContent: 'space-between' }}>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={item.title} disablePadding>
                            <ListItemButton sx={{ pl: '24px' }}>
                                <Box sx={{ color: 'white', backgroundColor: item.color, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1px 4px', borderRadius: '8px' }}>
                                    {
                                        item.image
                                    }
                                </Box>
                                <Typography component={'p'} sx={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    ml: '14px'
                                }}>
                                    {item.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton sx={{ pl: '24px' }}>
                            <Box sx={{ color: 'white', backgroundColor: '#7595ff', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1px 4px', borderRadius: '8px' }}>
                                <BedtimeIcon sx={{ width: '17px' }} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <Typography component={'p'} sx={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    ml: '14px'
                                }}>
                                    Night Mode
                                </Typography>
                                <StyledSwitch
                                    checked={!nightmode}
                                    onChange={handleNightMode}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </Box>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Box sx={{ pl: '24px', mb: '16px' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, padding: '0', margin: '4px 0', color: theme.palette.text.disabled }}>Telegram Desktop Clone</Typography>
                    <Typography sx={{ fontSize: '12px', padding: '0', margin: '0', color: theme.palette.text.disabled }}>Version 0.0.1 x64 - About</Typography>
                </Box>
            </Box>
        </Box>
    );
}

const CustomDrawer: FC<ICustomDrawerProps> = (props) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const drawerState = useAppSelector(state => state.app.drawer);

    const onClick = () => {
        dispatch(toggleDrawer())
    };

    return (
        <Drawer
            open={drawerState}
            onClose={onClick}
        >
            <MenuContent />
        </Drawer>
    );
}

export default CustomDrawer;