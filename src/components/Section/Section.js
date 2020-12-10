import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Section({ title, children }) {
    return (
        <div>
            {title && (
                <Typography variant="h2" gutterBottom>
                    {title}
                </Typography>
            )}
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};
