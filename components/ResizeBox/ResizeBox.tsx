import { FC, useState, useRef, useEffect } from 'react';
import { Resizable } from "re-resizable";
import { useDispatch } from 'react-redux';
import { updateChatSelectorWidth } from '../../store/reducers/appReducer';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface ICollapsibleProps extends BoxProps {
    collapsible: true;
    collapsedWidth: number;
    width: number;
}

interface INotCollapsibleProps extends BoxProps {
    collapsible?: false;
    collapsedWidth?: never;
    width?: never;
}

type SelectedProps<T = boolean> = T extends true
    ? ICollapsibleProps
    : INotCollapsibleProps;


const ResizePart = styled(Box)(({ theme }) => ({
    width: '20px',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    '&:hover': {
        cursor: 'e-resize'
    }
}));


const ResizeBox: FC<SelectedProps> = (props) => {
    const { children, sx, width, collapsedWidth, maxWidth, collapsible, ...restProps } = props;
    const [resizeState, setResizeState] = useState<number>(width || 0);
    const [collapsed, setCollapsed] = useState<number>(collapsedWidth || 0);


    return (
        <Resizable
            size={{ width: resizeState, height: '100%' }}
            style={{
                height: '100% !important'
            }}
            minWidth={`${collapsedWidth}px`}
            maxWidth={`${maxWidth}px`}
            snap={{
                x: [collapsed, collapsed + 200]
            }}
            snapGap={100}
            minHeight="100%"
            maxHeight="100%"
            onResize={(e, direction, ref, d) => {
                setResizeState(resizeState + d.width);
            }}>
            <Box
                sx={{
                    ...sx,
                    width: '100%',
                    minWidth: `${collapsedWidth}px` || '300px',
                    position: 'relative',
                    height: '100%'
                }}
                {...restProps}
            >
                {children}
            </Box >
        </Resizable>
    )
}

export default ResizeBox;