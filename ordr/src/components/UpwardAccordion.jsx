// UpwardAccordion.jsx
import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  styled
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Custom styled components
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  '& .MuiCollapse-root': {
    position: 'absolute',
    bottom: '100%',
    width: '100%',
    marginBottom: '1px',
  },
  position: 'relative',
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(0deg)',
  },
}));

const AccordionContainer = styled(Box)(({ expandHeight = 200 }) => ({
  position: 'relative',
  marginTop: `${expandHeight}px`,
  width: '100%',
  maxWidth: '600px',
}));

const UpwardAccordion = ({ 
  title = "Click to expand",
  content = "",
  expandHeight = 200,
  children,
  className = ""
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <AccordionContainer expandHeight={expandHeight} className={className}>
      <StyledAccordion expanded={expanded} onChange={handleChange}>
        <CustomAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>{title}</Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          {children || (
            <Typography>
              {content}
            </Typography>
          )}
        </AccordionDetails>
      </StyledAccordion>
    </AccordionContainer>
  );
};

export default UpwardAccordion;