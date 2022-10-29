import { FC, memo, useState } from 'react';
import { Props as EmojiProps } from 'emoji-picker-react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import dynamic from 'next/dynamic';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const EmojiPicker = dynamic(
    () => {
        return import('emoji-picker-react');
    },
    { ssr: false }
);

interface IEmojiProps extends EmojiProps {

}

const Wrap = styled(Box)(({ theme }) => ({
    position: 'relative',
}));
const EmojiWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: -350,
    top: -450
}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({}));

const EmojiSelector: FC<IEmojiProps> = (props) => {
    const [pickerState, setPickerState] = useState(false);

    const onClick = () => {
        setPickerState(prev => !prev)
    }

    return (
        <Wrap>
            <EmojiWrapper sx={{
                display: pickerState ? 'flex' : 'none'
            }}>
                <EmojiPicker {...props} />
            </EmojiWrapper>
            <StyledIconButton onClick={onClick}>
                <SentimentSatisfiedAltIcon />
            </StyledIconButton>
        </Wrap>
    )

}


export default memo(EmojiSelector);