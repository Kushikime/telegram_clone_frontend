//70px
import { FC, useState } from 'react';
import MenuButton from './MenuButton';
import MenuIcon from '@mui/icons-material/Menu';
import FolderIcon from '@mui/icons-material/Folder';
import TuneIcon from '@mui/icons-material/Tune';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../../store/reducers/appReducer';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface ILeftBarProps { }

const LeftBar: FC<ILeftBarProps> = (props) => {
    const theme = useTheme();

    const [links, setLinks] = useState([
        {
            title: 'All chats',
            image: <QuestionAnswerIcon />,
            active: true,
            counter: 123
        },
        {
            title: 'Особисті',
            image: <FolderIcon />,
            active: false,
            counter: 21
        },
        {
            title: 'Audiobooks',
            image: <FolderIcon />,
            active: false
        },
    ]);

    const dispatch = useDispatch();

    const onClick = (index: number) => {
        const mapped = links.map((link, i) => {
            link.active = index === i ? true : false
            return link
        });
        setLinks(prev => [...mapped]);
    }
    const onMenuToggle = () => dispatch(toggleDrawer());


    return (
        <Box
            sx={{
                width: '70px',
                height: '100%',
                backgroundColor: theme.palette.background.paper
                // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#2f4358'
            }}
        >
            <MenuButton onClick={onMenuToggle} sx={{ height: '54px !important' }}>
                <MenuIcon />
            </MenuButton>
            {
                links.map((link: any, index) => {
                    return (
                        <MenuButton counter={link.counter} key={`${index}_menubutton`} onClick={() => onClick(index)} active={link.active} title={link.title}>
                            {link.image}
                        </MenuButton>
                    );
                })
            }
            <MenuButton title={'Edit'}>
                <TuneIcon />
            </MenuButton>
        </Box>
    );
}

export default LeftBar;