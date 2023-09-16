import { Link } from 'react-router-dom';
// material-ui
import { ButtonBase, Typography } from '@mui/material';
// project imports
import config from 'config';
import { useSelector } from 'react-redux';
import { roles } from 'constants/constants';
import { getDefaultPath } from 'helpers/functions';
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    // const { user } = useSelector((state) => state.user);
    // const defaultPath = getDefaultPath(user?.role) ?? '/';

    const defaultPath = '/';

    return (
        <ButtonBase disableRipple component={Link} to={defaultPath}>
            <Typography variant="h2">Money Cube</Typography>
        </ButtonBase>
    );
};

export default LogoSection;
