import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';

// assets
import { IconBell, IconMenu2 } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.primary.light,
                            color: theme.palette.primary.main,
                            '&:hover': {
                                background: theme.palette.primary.main,
                                color: theme.palette.primary.light
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>
            </Box>
            {/* header search */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            {/* notification */}
            <Box
                sx={{
                    width: 148,
                    display: 'flex',
                    alignItems: 'center',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                {/* <Avatar
                    variant="rounded"
                    sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.mediumAvatar,
                        transition: 'all .2s ease-in-out',
                        background: theme.palette.primary.light,
                        color: theme.palette.primary.main,
                        '&:hover': {
                            background: theme.palette.primary.main,
                            color: theme.palette.secondary.light
                        },
                        mr: 2
                    }}
                    onClick={() => navigate('/notifications')}
                    color="inherit"
                >
                    <IconBell stroke={1.5} size="1.3rem" />
                </Avatar> */}
                {/* </ButtonBase> */}
                {/* notification & profile */}
                <ProfileSection />
            </Box>
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
