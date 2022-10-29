import { FC, PropsWithChildren } from 'react';
import ChatItem from '../ChatItem/ChatItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

interface IChatSelectorProps extends PropsWithChildren { }

const chats = [
    {
        name: 'Сонечко',
        date: '16:12',
        lastMessage: 'Берегівчани представлятимуть Україну на чемпіонаті Угорщини з велоспорту',
        pinned: true
    },
    {
        name: '123',
        image: '/assets/images/123.jpg',
        date: '4:59',
        lastMessage: 'ROBERT: Photo',
        pinned: true
    },
    {
        name: 'VK Music Bot',
        image: '/assets/images/profile.png',
        date: '13.10.2022',
        lastMessage: 'times - loosing interest',
        pinned: true
    },
    {
        name: 'Pavel Vlasenkov',
        date: '12:28',
        lastMessage: 'Кофе',
        pinned: true
    },
    {
        name: 'Binance Ukranian',
        image: '/assets/images/binance.jpg',
        date: '22:18',
        lastMessage: 'Любіть Україну, як сонце, Любіть Україну, як сонце,'
    },
    {
        name: 'Бали чатик 🏝 | CHATIK',
        date: '22:19',
        image: '/assets/images/bali.jpg',
        lastMessage: 'Друзья, всем добрый вечер😊 Меня зовут Михаил. Я профессиональный фитнес тренер и диетолог, чемпион России. Помогаю людям похудеть, убрать живот и бока, сделать красивую фигуру. Кому нужна помощь - пишите🙏🏻'
    },
    {
        name: 'Сонечко',
        date: '16:12',
        lastMessage: 'Берегівчани представлятимуть Україну на чемпіонаті Угорщини з велоспорту',
        pinned: true
    },
    {
        name: '123',
        image: '/assets/images/123.jpg',
        date: '4:59',
        lastMessage: 'ROBERT: Photo',
        pinned: true
    },
    {
        name: 'VK Music Bot',
        image: '/assets/images/profile.png',
        date: '13.10.2022',
        lastMessage: 'times - loosing interest',
        pinned: true
    },
    {
        name: 'Saved Messages',
        date: '12:28',
        lastMessage: 'Кофе',
        pinned: true
    },
    {
        name: 'Binance Ukranian',
        image: '/assets/images/binance.jpg',
        date: '22:18',
        lastMessage: 'Любіть Україну, як сонце, Любіть Україну, як сонце,'
    },
    {
        name: 'Бали чатик 🏝 | CHATIK',
        date: '22:19',
        image: '/assets/images/bali.jpg',
        lastMessage: 'Друзья, всем добрый вечер😊 Меня зовут Михаил. Я профессиональный фитнес тренер и диетолог, чемпион России. Помогаю людям похудеть, убрать живот и бока, сделать красивую фигуру. Кому нужна помощь - пишите🙏🏻'
    },
    {
        name: 'Сонечко',
        date: '16:12',
        lastMessage: 'Берегівчани представлятимуть Україну на чемпіонаті Угорщини з велоспорту',
        pinned: true
    },
    {
        name: '123',
        image: '/assets/images/123.jpg',
        date: '4:59',
        lastMessage: 'ROBERT: Photo',
        pinned: true
    },
    {
        name: 'VK Music Bot',
        image: '/assets/images/profile.png',
        date: '13.10.2022',
        lastMessage: 'times - loosing interest',
        pinned: true
    },
    {
        name: 'Saved Messages',
        date: '12:28',
        lastMessage: 'Кофе',
        pinned: true
    },
    {
        name: 'Binance Ukranian',
        image: '/assets/images/binance.jpg',
        date: '22:18',
        lastMessage: 'Любіть Україну, як сонце, Любіть Україну, як сонце,'
    },
    {
        name: 'Бали чатик 🏝 | CHATIK',
        date: '22:19',
        image: '/assets/images/bali.jpg',
        lastMessage: 'Друзья, всем добрый вечер😊 Меня зовут Михаил. Я профессиональный фитнес тренер и диетолог, чемпион России. Помогаю людям похудеть, убрать живот и бока, сделать красивую фигуру. Кому нужна помощь - пишите🙏🏻'
    },
    {
        name: 'Сонечко',
        date: '16:12',
        lastMessage: 'Берегівчани представлятимуть Україну на чемпіонаті Угорщини з велоспорту',
        pinned: true
    },
    {
        name: '123',
        image: '/assets/images/123.jpg',
        date: '4:59',
        lastMessage: 'ROBERT: Photo',
        pinned: true
    },
    {
        name: 'VK Music Bot',
        image: '/assets/images/profile.png',
        date: '13.10.2022',
        lastMessage: 'times - loosing interest',
        pinned: true
    },
    {
        name: 'Saved Messages',
        date: '12:28',
        lastMessage: 'Кофе',
        pinned: true
    },
    {
        name: 'Binance Ukranian',
        image: '/assets/images/binance.jpg',
        date: '22:18',
        lastMessage: 'Любіть Україну, як сонце, Любіть Україну, як сонце,'
    },
    {
        name: 'Бали чатик 🏝 | CHATIK',
        date: '22:19',
        image: '/assets/images/bali.jpg',
        lastMessage: 'Друзья, всем добрый вечер😊 Меня зовут Михаил. Я профессиональный фитнес тренер и диетолог, чемпион России. Помогаю людям похудеть, убрать живот и бока, сделать красивую фигуру. Кому нужна помощь - пишите🙏🏻'
    },
    {
        name: 'Сонечко',
        date: '16:12',
        lastMessage: 'Берегівчани представлятимуть Україну на чемпіонаті Угорщини з велоспорту',
        pinned: true
    },
    {
        name: '123',
        image: '/assets/images/123.jpg',
        date: '4:59',
        lastMessage: 'ROBERT: Photo',
        pinned: true
    },
    {
        name: 'VK Music Bot',
        image: '/assets/images/profile.png',
        date: '13.10.2022',
        lastMessage: 'times - loosing interest',
        pinned: true
    },
    {
        name: 'Saved Messages',
        date: '12:28',
        lastMessage: 'Кофе',
        pinned: true
    },
    {
        name: 'Binance Ukranian',
        image: '/assets/images/binance.jpg',
        date: '22:18',
        lastMessage: 'Любіть Україну, як сонце, Любіть Україну, як сонце,'
    },
    {
        name: 'Бали чатик 🏝 | CHATIK',
        date: '22:19',
        image: '/assets/images/bali.jpg',
        lastMessage: 'Друзья, всем добрый вечер😊 Меня зовут Михаил. Я профессиональный фитнес тренер и диетолог, чемпион России. Помогаю людям похудеть, убрать живот и бока, сделать красивую фигуру. Кому нужна помощь - пишите🙏🏻'
    },
]

const Search = styled(TextField)(({ theme }) => ({
    backgroundColor: 'red',
    border: 'none',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const StyledSearchButton = styled(IconButton)((theme) => ({
    borderRadius: '0',
    width: '100%',
    minHeight: '54px'
}))

const ChatSelector: FC<IChatSelectorProps> = ({ children }) => {
    const theme = useTheme();


    return (
        <Box sx={{
            width: '100%',
            backgroundColor: theme.palette.background.default,
            overflowY: 'overlay',
            overflowX: 'hidden',
            maxHeight: '100vh',
            position: 'relative',
            borderRight: '1px solid  rgba(0,0,0, 0.15)',
            '&:hover::-webkit-scrollbar': {
                display: 'block',
            },
            '&::-webkit-scrollbar': {
                display: 'none',
                width: '3px',
                position: 'absolute',
                top: 0,
                right: '30px'
            },
            '::-webkit-scrollbar-thumb': {
                background: 'rgba(0,0,0, 0.3)',
                borderRadius: '10px',
            }
        }}>
            {/* <StyledSearchButton aria-label="search" color="primary">
                <SearchIcon />
            </StyledSearchButton> */}
            {
                chats.map((chat, index) => {
                    return <ChatItem key={`${chat.name}_${index}`} {...chat} />
                })
            }
        </Box >
    )
}

export default ChatSelector;