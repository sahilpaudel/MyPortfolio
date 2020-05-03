import { withStyles } from "@material-ui/core";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

export const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: '1px',
        marginBottom: 20,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {},
    },
    expanded: {},
})(MuiExpansionPanel);

export const ExpansionPanelSummary = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

export const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(1),
    },
}))(MuiExpansionPanelDetails);
