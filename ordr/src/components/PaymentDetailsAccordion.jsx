import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PaymentDetailsAccordion = ({ selectedOrder }) => {
  return (
    <Accordion 
      sx={{
        '& .MuiCollapse-root': {
          position: 'absolute',
          bottom: '100%',
          width: '100%',
          marginBottom: '1px',
        },
        position: 'relative',
        marginTop: '200px' // Space for upward expansion
      }}
    >
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />} 
        sx={{ 
          backgroundColor: "#f5f5f5",
          '& .MuiAccordionSummary-expandIconWrapper': {
            transform: 'rotate(180deg)',
          },
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(0deg)',
          },
        }}
      >
        <Typography fontWeight="bold">Payment Details</Typography>
      </AccordionSummary>
      
      <AccordionDetails sx={{ padding: "15px" }}>
        {/* Order Status & Time */}
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", marginBottom: "10px" }}>
          <span>Status: {selectedOrder.status}</span>
          <span>{selectedOrder.time}</span>
        </div>

        <hr style={{ border: "0.5px solid #ddd" }} />

        {/* Payment Breakdown */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
          <span>Subtotal</span>
          <span>₹{selectedOrder.totalAmount}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
          <span>Delivery Charge</span>
          <span>₹30</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", padding: "5px 0" }}>
          <span>Total</span>
          <span>₹{selectedOrder.totalAmount + 30}</span>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default PaymentDetailsAccordion;