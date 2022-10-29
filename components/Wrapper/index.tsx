import { FC, PropsWithChildren } from 'react';
import { useAppSelector } from '../../store';
import lightTheme from '../../styles/theme/lightTheme';
import darkMode from '../../styles/theme/darkTheme';
import ChatSelector from '../ChatSelector/ChatSelector';
import ResizeBox from '../ResizeBox/ResizeBox';
import CustomDrawer from '../CustomDrawer';
import LeftBar from '../LeftBar';
import Chat from '../Chat';
import { ThemeProvider } from '@mui/material/styles';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    const nightmode = useAppSelector(state => state.app.nightmode);
    const chatSelectorWidth = useAppSelector(state => state.app.chatSelectorWidth);

    return (
        <ThemeProvider theme={nightmode ? lightTheme : darkMode}>
            <LeftBar />
            <CustomDrawer />
            <ResizeBox collapsible={true} collapsedWidth={66} maxWidth={700} width={300}>
                <ChatSelector />
            </ResizeBox>
            <Chat />
            {children}
        </ThemeProvider>
    )
}

export default Wrapper;