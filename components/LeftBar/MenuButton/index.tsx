import Badge from '@mui/material/Badge';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { FC } from 'react';

interface IMenuButtonProps extends IconButtonProps {
    active?: boolean;
    counter?: number;
};

const IconButtonStyled = styled(IconButton)(({ theme, }) => ({
    width: '100%',
    height: '62px',
    borderRadius: '0',
    display: 'flex',
    flexDirection: 'column'
}));


const TypographyStyled = styled(Typography)(({ theme }) => ({
    fontSize: '10px',
    marginTop: '4px',
    textTransform: 'initial'
}));

const MenuButton: FC<IMenuButtonProps> = ({ children, active, title, counter, sx, ...props }) => {
    const theme = useTheme();

    return (
        <IconButtonStyled
            sx={{
                backgroundColor: active ? '#1b2834' : 'transparent',
                color: active ? '#5eb5f7' : theme.palette.text.disabled,
            }}
            {...props}
        >

            <Badge sx={{
                '& .MuiBadge-badge': {
                    color: '#fff',
                    backgroundColor: '#5eb5f7',
                    border: `2px solid ${active ? '#1b2834' : '#2f4358'}`,
                    top: '4px',
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0px 4px'
                },
            }} badgeContent={counter} color="primary">{children}</Badge>

            <TypographyStyled>
                {title}
            </TypographyStyled>
        </IconButtonStyled>
    );
}

export default MenuButton;